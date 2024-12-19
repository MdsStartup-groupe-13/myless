export interface PollResult {
    option: string
    votes: number
    percentage: number
}

export interface Activity {
    nom: string
    type: string
    tarif: number
}

export interface CompletedPoll {
    id: number
    question: string
    totalVotes: number
    results: PollResult[]
    endDate: string
    lieu: string
    activites: Activity[]
}