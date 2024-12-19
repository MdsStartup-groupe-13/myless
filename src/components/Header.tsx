import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 bg-gray-100 flex items-center justify-between px-4 shadow">
      {/* Icône de recherche */}
      <div className="flex items-center cursor-pointer hover:text-gray-700 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.1-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Logo centré */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/myless.svg" // Remplacez par le chemin de votre logo
          alt="Logo Myless"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Icône utilisateur */}
      <div className="flex items-center cursor-pointer hover:opacity-80 transition">
        <Image
          src="/images/man.png" // Remplacez par le chemin de votre icône utilisateur
          alt="User Icon"
          width={26}
          height={26}
          className="object-cover rounded-full"
        />
      </div>
    </header>
  );
}
