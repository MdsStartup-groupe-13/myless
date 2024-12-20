import NoAnswered from "@/components/pool/NoAnswered"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PollResult } from "@/components/pool/PollResult"
import { CompletedPolls } from "@/data/CompletedPolls"

export default function Sondage() {

  return (
    <div className="p-4">
      {/* Titre de la section */}
      <h1 className="text-2xl font-bold text-center mb-8">Sondages</h1>
      
      <NoAnswered />

      <h2 className="text-lg font-semibold mt-4 mb-2">Mes Sondages</h2>
      <ScrollArea className="h-[calc(100vh-12rem)] rounded-lg">
          <div className="space-y-4">
            {CompletedPolls.map((poll) => (
                <PollResult key={poll.id} poll={poll} />
            ))}
          </div>
      </ScrollArea>
    </div>
  )
}
