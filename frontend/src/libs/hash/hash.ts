// Pathing
// _______
// libs/hash/hash.ts

import crypto from "crypto";
import bcrypt from "bcrypt";

// _________________________________________________________________________________
// Only used in this class, so kept here.

export type HashMethod = "SHA-256" | "SHA-512" | "HMAC" | "BCRYPT10" | "BCRYPT12" | "BCRYPT14";

export interface HashOptions {
    salt?: string;
    rounds?: number;
    key?: string;
}

const SALT = process.env.HASH_SALT;
const HMAC_KEY = process.env.HMAC_KEY;

// _________________________________________________________________________________
// SHA-256
//      - Used for idk
//      - 256 stands for 256 bits (64 bytes)

export function hashSHA256(input: string, validatedSalt: string): string {
    const HASH = crypto.createHash("sha256");
    HASH.update(validatedSalt);
    HASH.update(input);
    return HASH.digest("hex");
}

// _________________________________________________________________________________
// SHA-512
//      - Used for extra security as hash is longer compared to SHA-256
//      - 512 stands for 256 bits (128 bytes)

export function hashSHA512(input: string, validatedSalt: string): string {
    const HASH = crypto.createHash("sha512");
    HASH.update(validatedSalt);
    HASH.update(input);
    return HASH.digest("hex");
}

// _________________________________________________________________________________
// HMAC
//      - Used for 
//      - Combines SHA-256 with a secret key that's needed for decryption.
//      - If someone finds the hashed key, they would still need to find the secret key.

export function hashHMAC(input: string, validatedKey: string, validatedSalt: string): string {
    const HMAC = crypto.createHmac("sha256", validatedKey);
    HMAC.update(validatedSalt);
    HMAC.update(input);
    return HMAC.digest("hex");
}

// _________________________________________________________________________________
// BCrypt + Salt
//      - Used for passwords, emails and other sensitive personal information.
//      - 10 = 1024 (~ 100ms)
//      - 12 = 4096 (~ 400ms)
//      - 14 = 16384 (~ 1600ms)

export async function hashBcryptSimple(input: string): Promise<string> {
    return await bcrypt.hash(input, 10);
}

export async function hashBcryptMid(input: string): Promise<string> {
    return await bcrypt.hash(input, 12);
}

export async function hashBcryptHard(input: string): Promise<string> {
    return await bcrypt.hash(input, 14);
}

// _________________________________________________________________________________
// BCrypt Validation
//      - Used to compare input with hash to see if it's a match.
//      - Often - if not always - used in login forms and dropdown features.

export async function verifyBcrypt(input: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(input, hash);
}

// _________________________________________________________________________________

export async function hash(input: string, method: HashMethod): Promise<string> {

    if (!SALT) {
        throw new Error("HASH_SALT is not defined in .env | libs/hash/hash.ts");
    } 
    if (!HMAC_KEY) {
        throw new Error("HMAC requires a key.. | libs/hash/hash.ts");
    }

    switch (method) {
        case "SHA-256":
            return hashSHA256(input, SALT);
        case "SHA-512":
            return hashSHA512(input, SALT);
        case "HMAC":
            return hashHMAC(input, HMAC_KEY, SALT);
        case "BCRYPT10":
            return await hashBcryptSimple(input);
        case "BCRYPT12":
            return await hashBcryptMid(input);
        case "BCRYPT14":
            return await hashBcryptHard(input);
        default:
            throw new Error(`Unsupported hash method: ${method}`);
    }

}