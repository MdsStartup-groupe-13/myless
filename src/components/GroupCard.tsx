import Image from 'next/image'

interface GroupCardProps {
  name: string
  members: number
}

export default function GroupCard({ name, members }: GroupCardProps) {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg p-4 shadow">
      <div className="flex items-center space-x-4">
        {/* Icône d'image */}
        <div className="bg-gray-400 rounded-lg p-2">
          <Image
            src="/images/placeholder-image.png" 
            alt={`Logo de ${name}`}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {/* Détails du groupe */}
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">Membres : {members}</p>
        </div>
      </div>
      {/* Flèche */}
      <div>
        <span className="text-gray-600">{'>'}</span>
      </div>
    </div>
  )
}
