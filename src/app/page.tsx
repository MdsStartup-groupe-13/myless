import GroupCard from '../components/GroupCard'

interface Group {
  id: number
  name: string
  members: number
  image: string
}

export default function HomePage() {
  const groups: Group[] = [
    { 
      id: 1, 
      name: 'Les Aventuriers', 
      members: 12, 
      image: '/images/group1.jpg'
    },
    { 
      id: 2, 
      name: 'Développeurs JS', 
      members: 45, 
      image: '/images/group2.jpg'
    },
    {
      id: 3,
      name: 'Fan de React',
      members: 30,
      image: '/images/group3.jpg'
    },
    {
      id: 4,
      name: 'Photographes amateurs',
      members: 7,
      image: '/images/group4.jpg'
    },
  ]

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Liste des Groupes</h1>
      <div className="space-y-4">
        {groups.map((group) => (
          <GroupCard 
            key={group.id} 
            name={group.name} 
            members={group.members} 
            image={group.image} 
          />
        ))}
      </div>
    </div>
  )
}
