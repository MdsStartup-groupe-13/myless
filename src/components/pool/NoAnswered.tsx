'use client'
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaCheck } from "react-icons/fa6"
import { Label } from "@/components/ui/label"

export default function NoAnswered() {
    const [selectedOption, setSelectedOption] = useState("")
    const [isConfirmed, setIsConfirmed] = useState(false)

    // Données en dur
    const voyage = {
    lieu: "Paris",
    activites: [
        { nom: "Musée du Louvre", type: "Musée", tarif: 17 },
        { nom: "Tour Eiffel", type: "Monument", tarif: 25 },
        { nom: "Parc des Buttes-Chaumont", type: "Parc", tarif: 0 },
        { nom: "Restaurant Le Procope", type: "Restaurant", tarif: 30 },
        { nom: "Croisière sur la Seine", type: "Activité touristique", tarif: 15 },
    ],
}

return (
    <Card className="w-full mb-4 hover:shadow-lg transition-shadow">
        <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
            Choix activités
            </CardTitle>
        </CardHeader>
        <CardContent>
                {isConfirmed ? (
                    <div className="flex flex-col items-center">
                        <p className="text-md mb-4 text-green-600 font-bold">
                            {selectedOption}
                        </p>
                        <FaCheck className="text-slate-50 bg-green-500 p-2 rounded-full" size={40} />
                    </div>
                ) : (
                    <>
                        <p className="text-md mb-4 text-muted-foreground">
                            Que souhaitez-vous visiter à {voyage.lieu} ?
                        </p>
                        <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                            {voyage.activites.map((activite, index) => (
                                <div key={index} className="flex items-center space-x-2 mb-2">
                                    <RadioGroupItem value={activite.nom} id={`option-${index}`} />
                                    <Label htmlFor={`option-${index}`}>
                                        {activite.nom} - (Tarif:&nbsp;{activite.tarif}€)
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </>
                )}
            </CardContent>
            {!isConfirmed && (
                <CardFooter>
                    <button
                        className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm"
                        disabled={!selectedOption}
                        onClick={() => setIsConfirmed(true)}
                    >
                        Voter Maintenant
                    </button>
                </CardFooter>
            )}
    </Card>
    )
}
