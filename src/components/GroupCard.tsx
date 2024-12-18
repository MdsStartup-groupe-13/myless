import Image from 'next/image'

interface GroupCardProps {
  image: string // URL de l'image (local ou externe)
  name: string  // Nom du groupe
  members: number // Nombre de membres
}

export default function GroupCard({ image, name, members }: GroupCardProps) {
  return (
    <div className="flex items-center space-x-4 bg-white shadow p-4 rounded">
      {/* Utilisation du composant Image de Next.js */}
      <Image 
        src={image} 
        alt={`Image de ${name}`} 
        width={64} 
        height={64} 
        className="rounded-full object-cover"
        priority
      />
      <div className="flex flex-col">
        <h2 className="font-bold">{name}</h2>
        <span className="text-sm text-gray-500">{members} membres</span>
      </div>
    </div>
  )
}
