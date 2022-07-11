import LAM from './audio/LAM.mp3'
import VAM from './audio/VAM.mp3'
import RAM from './audio/RAM.mp3'
import YAM from './audio/YAM.mp3'
import HAM from './audio/HAM.mp3'
import AUM from './audio/OM.mp3'
import ANG from './audio/ANG.mp3'
import C1 from './image/Yoga/Chakra-07.png'
import C2 from './image/Yoga/Chakra-06.png'
import C3 from './image/Yoga/Chakra-05.png'
import C4 from './image/Yoga/Chakra-04.png'
import C5 from './image/Yoga/Chakra-03.png'
import C6 from './image/Yoga/Chakra-02.png'
import C7 from './image/Yoga/Chakra-01.png'
import L1 from './image/Yoga/Logo-01.png'
import L2 from './image/Yoga/Logo-02.png'
import L3 from './image/Yoga/Logo-03.png'
import L4 from './image/Yoga/Logo-04.png'
import L5 from './image/Yoga/Logo-05.png'
import L6 from './image/Yoga/Logo-06.png'
import L7 from './image/Yoga/Logo-07.png'




const ChakraData = [
    {
        path: "root",
        name: "Root Chakra",
        sanskrit: "Muladhara",
        color: "red",
        tailwindStyle: [
            "App_btn bg-red-300 text-red-900 dark:bg-red-600 dark:text-slate-300",
            "py-8 px-6 bg-red-100 text-red-900 dark:text-red-200 dark:bg-slate-800",
            "bg-red-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-red-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-red-900 dark:text-red-200",
            "bg-red-100 text-red-900 dark:bg-red-600 dark:text-red-200",
            "text-red-600 dark:text-red-400"
        ],
        chant: "LAM",
        positionBottom: 1,
        petalCount: 4,
        position: "Base of Spine on Perineum",
        quality: ["Survival", "Grounding", "Trust", "Stability", "Energy"],
        bodyWell: ["Spinal Column", "Kidneys", "Legs", "Colon"],
        sound: LAM,
        petalIcon: L1,
        positionImg: C1,
        element: "Earth"
    },
    {
        path: "sacral",
        name: "Sacral Chakra",
        sanskrit: "Swadhisthana",
        color: "orange",
        tailwindStyle: [
            "App_btn bg-orange-300 text-orange-900 dark:bg-orange-600 dark:text-slate-300",
            "py-8 px-6 bg-orange-100 text-orange-900 dark:text-orange-200 dark:bg-slate-800",
            "bg-orange-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-orange-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-orange-900 dark:text-orange-200",
            "bg-orange-100 text-orange-800 dark:bg-orange-600 dark:text-orange-200",
            "text-orange-600 dark:text-orange-400"
        ],
        chant: "VAM",
        positionBottom: 2,
        petalCount: 6,
        position: "Lower Abdomen, below the navel",
        quality: ["Creativity", "Pleasure", "Sexuality", "Emotions", "Sensuality"],
        bodyWell: ["Spleen", "Bladder", "Womb", "Prostate", "Ovaries", "Testicles"],
        sound: VAM,
        petalIcon: L2,
        positionImg: C2,
        element: "Water"
    },
    {
        path: "solar-pexus",
        name: "Solar Pexus Chakra",
        sanskrit: "Manipura",
        color: "yellow",
        tailwindStyle: [
            "App_btn bg-amber-300 text-amber-900 dark:bg-amber-600 dark:text-slate-300",
            "py-8 px-6 bg-amber-100 text-amber-900 dark:text-amber-200 dark:bg-slate-800",
            "bg-amber-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-amber-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-amber-900 dark:text-amber-200",
            "bg-amber-100 text-amber-800 dark:bg-amber-600 dark:text-amber-200",
            "text-amber-600 dark:text-amber-400"
        ],
        chant: "RAM",
        positionBottom: 3,
        petalCount: 10,
        position: "Stomach Area",
        quality: ["Will", "Confidence", "Self-esteem", "Power", "Personality"],
        bodyWell: ["Pancreas", "Adrenals", "Stomach", "Liver", "Gallbladder"],
        sound: RAM,
        petalIcon: L3,
        positionImg: C3,
        element: "Fire"
    },
    {
        path: "heart",
        name: "Heart Chakra",
        sanskrit: "Anahata",
        color: "green",
        tailwindStyle: [
            "App_btn bg-emerald-300 text-emerald-900 dark:bg-emerald-600 dark:text-slate-300",
            "py-8 px-6 bg-emerald-100 text-emerald-900 dark:text-emerald-200 dark:bg-slate-800",
            "bg-emerald-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-emerald-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-emerald-900 dark:text-emerald-200",
            "bg-emerald-100 text-emerald-800 dark:bg-emerald-600 dark:text-emerald-200",
            "text-emerald-600 dark:text-emerald-400"
        ],
        chant: "YAM",
        positionBottom: 4,
        petalCount: 12,
        position: "Center of Chest",
        quality: ["Love", "Inner-Peace", "Joy", "Compassion", "Sincerity"],
        bodyWell: ["Heart", "Thymus Gland", "Circulatory System", "Lungs", "Arms"],
        sound: YAM,
        petalIcon: L4,
        positionImg: C4,
        element: "Air"
    },
    {
        path: "throat",
        name: "Throat Chakra",
        sanskrit: "Vishuddha",
        color: "blue",
        tailwindStyle: [
            "App_btn bg-cyan-300 text-cyan-900 dark:bg-cyan-600 dark:text-slate-300",
            "py-8 px-6 bg-cyan-100 text-cyan-900 dark:text-cyan-200 dark:bg-slate-800",
            "bg-cyan-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-cyan-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-cyan-900 dark:text-cyan-200",
            "bg-cyan-100 text-cyan-800 dark:bg-cyan-600 dark:text-cyan-200",
            "text-cyan-600 dark:text-cyan-400"
        ],
        chant: "HAM",
        positionBottom: 6,
        petalCount: 16,
        position: "Throat Area",
        quality: ["Truth", "Expression", "Communication", "Inspiration"],
        bodyWell: ["Mouth", "Throat", "Thyroid", "Parathyroid", "Hypothalamus"],
        sound: HAM,
        petalIcon: L5,
        positionImg: C5,
        element: "Light"
    },
    {
        path: "third-eye",
        name: "Third Eye Chakra",
        sanskrit: "Ajna",
        color: "indigo",
        tailwindStyle: [
            "App_btn bg-indigo-300 text-indigo-900 dark:bg-indigo-600 dark:text-slate-300",
            "py-8 px-6 bg-indigo-100 text-indigo-900 dark:text-indigo-200 dark:bg-slate-800",
            "bg-indigo-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-indigo-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-indigo-900 dark:text-indigo-200",
            "bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-200",
            "text-indigo-600 dark:text-indigo-400"
        ],
        chant: "AUM",
        positionBottom: 6,
        petalCount: 2,
        position: "Center of Forehead",
        quality: ["Intuition", "Imagination", "Wisdom", "Lucidity", "Meditation"],
        bodyWell: ["Pituitary", "Pineal", "Eyes", "Ears", "Nose"],
        sound: AUM,
        petalIcon: L6,
        positionImg: C6,
        element: "Light"
    },
    {
        path: "crown",
        name: "Crown Chakra",
        sanskrit: "Sahasrara",
        color: "violet",
        tailwindStyle: [
            "App_btn bg-fuchsia-300 text-fuchsia-900 dark:bg-fuchsia-600 dark:text-slate-300",
            "py-8 px-6 bg-fuchsia-100 text-fuchsia-900 dark:text-fuchsia-200 dark:bg-slate-800",
            "bg-fuchsia-400",
            "max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-fuchsia-200 dark:bg-gray-800 dark:border-gray-700",
            "text-xl sm:text-2xl font-semibold text-fuchsia-900 dark:text-fuchsia-200",
            "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-600 dark:text-fuchsia-200",
            "text-fuchsia-600 dark:text-fuchsia-400"
        ],
        chant: "ANG",
        positionBottom: 7,
        petalCount: 1000,
        position: "Top of Head",
        quality: ["Spirituality", "Consiousness", "Knowledge", "Fulfilment"],
        bodyWell: ["Cerebrum"],
        sound: ANG,
        petalIcon: L7,
        positionImg: C7,
        element: "Divine Consciousness"
    },
]


export default ChakraData