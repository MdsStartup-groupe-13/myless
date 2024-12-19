import Image from 'next/image';

interface GroupCardProps {
  name: string;
  members: number;
  imageSrc: string; // Nouvelle propriété pour l'image unique
  onFeedbackClick: () => void; // Gestionnaire d'événement pour le formulaire
}

export default function GroupCard({
  name,
  members,
  imageSrc,
  onFeedbackClick,
}: GroupCardProps) {
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
      {/* Icône de feedback */}
      <div className="flex items-center space-x-4">
        <button onClick={onFeedbackClick} className="focus:outline-none">
          <Image
            src="/images/feedback.png"
            alt="Feedback"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
