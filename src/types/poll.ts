export interface PollResult {
    option: string;
    votes: number;
    percentage: number;
}

export interface CompletedPoll {
    id: string;
    title: string;
    question: string;
    totalVotes: number;
    results: PollResult[];
    endDate: string;
}