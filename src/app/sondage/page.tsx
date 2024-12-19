import NoAnswered from "@/components/pool/NoAnswered"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PollResult } from "@/components/pool/PollResult"
import { CompletedPolls } from "@/data/CompletedPolls"
import { LuSlidersHorizontal } from "react-icons/lu"

interface Group {
  id: number
  name: string
  members: number
  image: string
}

export default function Sondage() {

  return (
    <div className="p-4">
      {/* Titre de la section */}
      <h1 className="text-2xl font-bold text-center mb-8">Sondages</h1>
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Catégories</h2>
          <button className="flex items-center text-[8px] text-gray-60">
            Filter par Catégories
            <LuSlidersHorizontal size={16} className="ml-2" />
          </button>
        </div>
      </div>

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
