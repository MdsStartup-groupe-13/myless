import Image from 'next/image'
import { FaBookmark } from "react-icons/fa"


export default function NoAnswered() {
    return (
        <div className='text-center'>
            <h2 className="text-xl font-semibold text-center">Sondages non répondus</h2>
            <p className='my-4'>Vous n'avez pas encore répondu au sondage !</p>
            <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium">Nom du sondage</h4>
                    <FaBookmark className="w-5 h-5" />
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm text-center mt-12 mb-6">
                    Répondre maintenant
                </button>
                <p className="text-sm text-gray-600 text-end">Nbre de réponses : 5/7</p>
            </div>
        </div>
    )
}
