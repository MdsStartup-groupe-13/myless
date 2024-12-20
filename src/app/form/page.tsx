'use client'
import { useRouter } from 'next/navigation';


import React, { useState } from 'react'
import Image from 'next/image'


export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [selectedAccommodations, setSelectedAccommodations] = useState<string[]>([])
  const [budget, setBudget] = useState<number>(500)
  const router = useRouter(); // Importation du routeur Next.js

  const cities = [
    'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice',
    'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Montpellier',
  ]

  const activities = [
    'Musée', 'Resto', 'Parc d\'attraction', 'Randonnée', 'Plage',
    'Cinéma', 'Théâtre', 'Escape Game', 'Bowling', 'Shopping',
  ]

  const accommodations = [
    'Hôtel', 'Auberge', 'Camping', 'Appartement', 'Villa',
    'Bungalow', 'Maison d\'hôte', 'Chalet', 'Yourte', 'Gîte',
  ]

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    )
  }

  const handleActivityChange = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity]
    )
  }

  const handleAccommodationChange = (accommodation: string) => {
    setSelectedAccommodations((prev) =>
      prev.includes(accommodation) ? prev.filter((a) => a !== accommodation) : [...prev, accommodation]
    )
  }

  const handleBudgetChange = (value: number) => {
    setBudget(value)
  }
  
const handleFinish = () => {
    router.push('/loading');
    setTimeout(() => {
      router.push('/sondage');
    }, 100000); // 4000 ms = 4 secondes
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Barre d'avancement */}
      <div className="w-full max-w-md mt-4 px-4">
        <div className="text-center mb-2">
          <span className="text-sm font-semibold">Étape {step} sur 4</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Étapes du formulaire */}
      <div className="w-full max-w-md mt-4 bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
        {/* Images et contenu */}
        {step === 1 && (
          <>
            <Image
              src="/images/paris.png"
              alt="Icon ville"
              width={50}
              height={50}
              className="mx-auto mb-8"
            />
            <h2 className="text-lg font-semibold text-center mb-3">Choisir des Villes</h2>
            <div className="max-h-64 overflow-y-auto space-y-2">
              {cities.map((city) => (
                <label key={city} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={city}
                    onChange={() => handleCityChange(city)}
                    checked={selectedCities.includes(city)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-600">{city}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Image
              src="/images/money-bag.png"
              alt="Icon budget"
              width={50}
              height={50}
              className="mx-auto mb-8"
            />
            <h2 className="text-lg font-semibold text-center mb-3">Choisir un Budget</h2>
            <div className="flex items-center space-x-4 py-4">

              <span className="text-gray-600 text-sm">0€</span>
              <input
                type="range"
                min={0}
                max={2000}
                value={budget}
                onChange={(e) => handleBudgetChange(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg cursor-pointer"
              />
              <span className="text-gray-600 text-sm">2000€</span>
            </div>
            <p className="text-gray-600 mt-2 text-center text-sm">
              Budget sélectionné : <span className="font-bold">{budget}€</span>
            </p>
          </>
        )}

        {step === 3 && (
          <>
            <Image
              src="/images/participation.png"
              alt="Icon activités"
              width={50}
              height={50}
              className="mx-auto mb-8"
            />
            <h2 className="text-lg font-semibold text-center mb-3">Choisir des Activités</h2>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {activities.map((activity) => (
                <label key={activity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={activity}
                    onChange={() => handleActivityChange(activity)}
                    checked={selectedActivities.includes(activity)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-600">{activity}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <Image
              src="/images/sleep.png"
              alt="Icon hébergements"
              width={50}
              height={50}
              className="mx-auto mb-8"
            />
            <h2 className="text-lg font-semibold text-center mb-3">Choisir un Hébergement</h2>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {accommodations.map((accommodation) => (
                <label key={accommodation} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={accommodation}
                    onChange={() => handleAccommodationChange(accommodation)}
                    checked={selectedAccommodations.includes(accommodation)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-600">{accommodation}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* Boutons navigation */}
        <div className="flex justify-between mt-10">
          <button
            disabled={step === 1}
            onClick={handlePrevious}
            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg disabled:opacity-50"
          >
            Précédent
          </button>
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Suivant
            </button>
          ) : (
<button
  onClick={handleFinish}
  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
>
  Terminer
</button>
          )}
        </div>
      </div>
    </div>
  )
}
