import { CompletedPoll } from "@/types/poll"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResultBar } from "@/components/pool/ResultBar"
import { formatDate } from "@/lib/utils"

interface PollResultProps {
    poll: CompletedPoll;
}

export function PollResult({ poll }: PollResultProps) {
    return (
        <Card className="w-full mb-4 hover:shadow-lg transition-shadow">
            <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
                Sondage : {poll.lieu}
            </CardTitle>
            <div className="text-sm text-muted-foreground">
                Fin des votes : {poll.endDate} • {poll.totalVotes.toLocaleString()} votes
            </div>
            </CardHeader>
            <CardContent>
            <p className="text-lg mb-4">{poll.question}</p>
            <div className="space-y-4">
                {poll.results.map((result, index) => (
                <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                    <span>{result.option}</span>
                    <span className="font-medium">
                        {result.votes.toLocaleString()} votes
                    </span>
                    </div>
                    <ResultBar percentage={result.percentage} color={"black"} />
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
    )
}