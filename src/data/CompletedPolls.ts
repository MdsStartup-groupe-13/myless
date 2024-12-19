import { CompletedPoll } from "@/types/poll"

export const CompletedPolls: CompletedPoll[] = [
    {
        id: 0,
        lieu: "Paris",
        question: "Quel est votre activité préférée à Paris ?",
        totalVotes: 10,
        results: [
            { option: "Musée du Louvre", votes: 3, percentage: 3 },
            { option: "Tour Eiffel", votes: 4, percentage: 4 },
            { option: "Parc des Buttes-Chaumont", votes: 1, percentage: 1 },
            { option: "Restaurant Le Procope", votes: 15, percentage: 15 },
            { option: "Croisière sur la Seine", votes: 5, percentage: 5 },
        ],
        endDate: "2024-12-31",
        activites: [
                { nom: "Musée du Louvre", type: "Musée", tarif: 17 },
                { nom: "Tour Eiffel", type: "Monument", tarif: 25 },
                { nom: "Parc des Buttes-Chaumont", type: "Parc", tarif: 0 },
                { nom: "Restaurant Le Procope", type: "Restaurant", tarif: 30 },
                { nom: "Croisière sur la Seine", type: "Activité touristique", tarif: 15 },
            ],
        }
]