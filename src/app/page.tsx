import GroupCard from '../components/GroupCard'

interface Group {
  id: number
  name: string
  members: number
}

export default function HomePage() {
  const groups: Group[] = [
    { id: 1, name: 'La famille', members: 12 },
    { id: 2, name: 'Les collègues', members: 8 },
    { id: 3, name: 'Les potos', members: 15 },
  ]

  return (
    <div className="p-4">
      {/* Titre de la section */}
      <h1 className="text-2xl font-bold text-center mb-4">Mes Groupes</h1>
      <h2 className="text-lg font-semibold mb-4">Mes Groupes</h2>

      {/* Liste des groupes */}
      <div className="space-y-4">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            name={group.name}
            members={group.members}
          />
        ))}
      </div>

      {/* Lien Voir Plus */}
      <div className="text-center mt-6">
        <button className="text-gray-500 underline">Voir plus</button>
      </div>
    </div>
  )
}
