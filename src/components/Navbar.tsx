import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
      <Link href="/" className="text-blue-500">Accueil</Link>
      <Link href="/form" className="text-blue-500">Formulaire</Link>
      <Link href="/sondage" className="text-blue-500">Sondage</Link>
    </nav>
  )
}
