import { CompletedPoll } from "@/types/poll"

export const CompletedPolls: CompletedPoll[] = [
    {
        id: "1",
        title: "Programming Languages 2024",
        question: "What's your primary programming language?",
        totalVotes: 2547,
        results: [
            { option: "JavaScript", votes: 982, percentage: 38.6 },
            { option: "Python", votes: 743, percentage: 29.2 },
            { option: "TypeScript", votes: 521, percentage: 20.5 },
            { option: "Java", votes: 189, percentage: 7.4 },
            { option: "Other", votes: 112, percentage: 4.3 }
        ],
        endDate: "2024-03-15"
    },
    {
        id: "2",
        title: "Remote Work Preferences",
        question: "What's your preferred work arrangement?",
        totalVotes: 1893,
        results: [
            { option: "Hybrid", votes: 892, percentage: 47.1 },
            { option: "Fully Remote", votes: 673, percentage: 35.6 },
            { option: "Office", votes: 328, percentage: 17.3 }
        ],
        endDate: "2024-03-10"
    },
    {
        id: "3",
        title: "Developer Tools 2024",
        question: "What's your primary code editor?",
        totalVotes: 3102,
        results: [
            { option: "VS Code", votes: 1892, percentage: 61.0 },
            { option: "WebStorm", votes: 521, percentage: 16.8 },
            { option: "Neovim", votes: 412, percentage: 13.3 },
            { option: "Sublime Text", votes: 277, percentage: 8.9 }
        ],
        endDate: "2024-03-01"
    }
]