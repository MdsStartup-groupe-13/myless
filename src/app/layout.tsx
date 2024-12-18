import '../app/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export const metadata = {
  title: 'Mon App Mobile-First',
  description: 'Une app front-only'
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Navbar />
      </body>
    </html>
  )
}
