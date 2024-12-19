"use client";

import GroupCard from "../components/GroupCard";

interface Group {
  id: number;
  name: string;
  members: number;
  imageSrc: string; // Propriété pour les images uniques
}

export default function HomePage() {
  const groups: Group[] = [
    { id: 1, name: "La famille", members: 12, imageSrc: "/images/miff.jpg" },
    { id: 2, name: "Les collègues", members: 8, imageSrc: "/images/col.jpg" },
    { id: 3, name: "Les potos", members: 15, imageSrc: "/images/poto.jpg" },
    { id: 4, name: "Vacances 2025", members: 6, imageSrc: "/images/vac.jpg" },
  ];

  return (
    <div className="p-4">
      {/* Titre de la section */}
      <h1 className="text-2xl font-bold text-center mb-4">Mes Groupes</h1>

      {/* Liste des groupes */}
      <div className="space-y-4">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            name={group.name}
            members={group.members}
            imageSrc={group.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
