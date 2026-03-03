import { NextResponse } from "next/server";
import type { Week, GitHubResponse } from "@/types/github";
import { hash } from '@libs/hash/hash'

// ________________________________________________________________________________________________

// .env setup
const GITHUB_API = process.env.GITHUB_API!;
const DEFAULT_API_KEY = process.env.GITHUB_API_KEY!;

// Stores Week[] and timestamp. Initial timestamp is 0.
const CACHE_TTL = 86400000;
const CACHE: Record<string, { data?: Week[]; timestamp: number }> = {};

// Rate limit pr customApiKey
const RATE_LIMIT_TIME = 60_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT: Record<string, { count: number; timestamp: number }> = {};

// ________________________________________________________________________________________________

function extractWeeks(json: GitHubResponse): Week[] {
    return json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
}

// ________________________________________________________________________________________________

export async function GET(request: Request) {

    // URL Param setup or DEFAULT
    const { searchParams } = new URL(request.url);
    const username = (searchParams.get("username") || "Guacamoleboy").toLowerCase();
    const customApiKey = searchParams.get("api_key");

    // Hash Setup
    const finalApiKey = customApiKey || DEFAULT_API_KEY;
    const hashedKey = await hash(customApiKey || "default", "SHA-256");

    // Cache key generation
    const cacheKey = `${username}_${hashedKey}`;

    // Rate limit
    const limitTracker = RATE_LIMIT[hashedKey];

    // Timestamp setup
    const now = Date.now();

    // Rate limit 429 or addition
    if (!limitTracker || now - limitTracker.timestamp > RATE_LIMIT_TIME) {
        RATE_LIMIT[hashedKey] = { count: 1, timestamp: now };
    } else {
        RATE_LIMIT[hashedKey] = { 
            count: limitTracker.count + 1, 
            timestamp: limitTracker.timestamp 
        };
        if (limitTracker.count + 1 > RATE_LIMIT_MAX) {
            return new Response("Rate limit exceeded", { status: 429 });
        }
    }

    console.log(`[RateLimit] Key ${hashedKey} has ${RATE_LIMIT[hashedKey].count}/${RATE_LIMIT_MAX} requests in this window.`);

    // Cache use if timestamp is below 24 hours old (prevent loading each page render)
    const cached = CACHE[cacheKey];
    if (cached) {
        if (now - cached.timestamp < CACHE_TTL) {
            console.log("Cache in use");
            return NextResponse.json(cached.data);
        } else {
            delete CACHE[cacheKey];
            console.log("Cache expired and removed!");
        }
    }

    // GraphQL query
    const query = `
        query GetUserContributions($username: String!) {
            user(login: $username) {
                contributionsCollection {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
            }
        }
    `;

    const result = await fetch(GITHUB_API, {
    method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${finalApiKey}`,
        },
    body: JSON.stringify({ query, variables: { username } }),
    });
    
    // In case something failed
    if(!result.ok){
        console.log("Error in api/github/route.ts - !result.ok HIT")
        return new Response(
            [
            "Invalid or wrong API key.",
            "Check your Developer API Key or URL param.",
            "",
            "Correct pathing should be:",
            "",
            "guacamoleboy.dk/api/github?username=Username&api_key=key",
            "",
            "- Guacamoleboy"
            ].join("\n"),
        {
        status: 401,
        headers: { "Content-Type": "text/plain" }
        });
    }

    // Define response in order to prevent runtime errors in case of mismatch
    const json = (await result.json()) as GitHubResponse;
    const weeks = extractWeeks(json);

    // Cache update. Time starts at now - (0)
    CACHE[cacheKey] = {
        data: weeks,
        timestamp: now,
    };
    console.log("Cache refreshed!")

    // Outputs our weeks to JSON serialized data
    return NextResponse.json(weeks);

}