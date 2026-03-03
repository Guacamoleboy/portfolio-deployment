// Typecasts
export type ContributionDay = {
    date: string;
    contributionCount: number;
};
export type Week = {
    contributionDays: ContributionDay[];
};
export type GithubGraphInput = {
    username: string;
};

// ______________________________________________________________________

// Setters
export type WeeksSetter = (weeks: Week[]) => void;
export type LoadingSetter = (loading: boolean) => void;

// ______________________________________________________________________

// API Response JSON Format
export type GitHubResponse = {
    data?: {
        user?: {
            contributionsCollection?: {
                contributionCalendar?: {
                    weeks?: Week[];
                };
            };
        };
    };
};