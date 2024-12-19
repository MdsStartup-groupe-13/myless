import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface GroupCardProps {
  name: string
  members: number
  imageSrc: string
}

export default function GroupCard({ name, members, imageSrc }: GroupCardProps) {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/form')
  }

  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg p-4 shadow">
      <div className="flex items-center space-x-4">
        {/* Image du groupe */}
        <div className="rounded-lg">
          <Image
            src={imageSrc}
            alt={`Logo de ${name}`}
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        {/* Détails du groupe */}
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">Membres : {members}</p>
        </div>
      </div>
      {/* Icône flèche vers la droite */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleRedirect}
          className="focus:outline-none p-2 rounded-full hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 4l8 8-8 8"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
