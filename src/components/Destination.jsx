// import { useState, useEffect } from 'react'
// import Nav from './Nav'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Destination = () => {
//     const [destinations, setDestinations] = useState([])
//     const location = useLocation()
//     const navigate = useNavigate()

//     const selectedDestination =
//         location.state?.selectedDestination || destinations[0]

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const fetchData = async () => {
//         try {
//             const res = await fetch('/data.json')
//             const data = await res.json()
//             setDestinations(data.destinations)
//             console.log('Data', data)
//         } catch (error) {
//             console.error('Error fetching data', error)
//         }
//     }

//     const handleClick = (destination) => {
//         navigate('/destination', {
//             state: { selectedDestination: destination },
//         })
//     }

//     return (
//         <div className="h-screen bg-destinationDesktop bg-cover bg-center">
//             <Nav />
//             <ul className="text-white">
//                 {destinations.map((destination) => (
//                     <li
//                         key={destination.name}
//                         onClick={() => handleClick(destination)}
//                     >
//                         {destination.name}
//                     </li>
//                 ))}
//             </ul>
//             {selectedDestination && (
//                 <div className="text-white">
//                     <img
//                         src={selectedDestination.images.webp}
//                         alt={selectedDestination.name}
//                     />
//                     <h2>{selectedDestination.name}</h2>
//                     <p>Description: {selectedDestination.description}</p>
//                     <p>Distance: {selectedDestination.distance}</p>
//                     <p>Travel Time: {selectedDestination.travel}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Destination

import { useState, useEffect } from 'react'
import Nav from './Nav'
import { useLocation, useNavigate } from 'react-router-dom'

const Destination = () => {
    const [destinations, setDestinations] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    const selectedDestination =
        location.state?.selectedDestination || destinations[0]

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await fetch('/data.json')
            const data = await res.json()
            setDestinations(data.destinations)
        } catch (error) {
            console.error('Error fetching data', error)
        }
    }

    const handleClick = (destination) => {
        navigate('/destination', {
            state: { selectedDestination: destination },
        })
    }

    return (
        <div className="h-screen bg-destinationDesktop bg-cover bg-center text-white">
            <Nav />
            <div className="flex flex-row flex-wrap items-center justify-between px-4 py-8 md:flex-row lg:px-24">
                <h1 className="mb-20 text-center font-barlowCondensed text-xl tracking-widest lg:text-2xl">
                    <span className="font-bold opacity-25">01</span> PICK YOUR
                    DESTINATION
                </h1>
                <div className="flex w-full max-w-6xl flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex w-full lg:mb-0 lg:w-1/2">
                        {selectedDestination && (
                            <img
                                src={selectedDestination.images.webp}
                                alt={selectedDestination.name}
                                className="max-w-xs lg:max-w-md"
                            />
                        )}
                    </div>
                    <div className="w-full max-w-[445px] text-center lg:w-1/2 lg:text-left">
                        <div className="mb-6 flex justify-center space-x-4 font-barlowCondensed text-secondary lg:justify-start">
                            {destinations.map((destination) => (
                                <span
                                    key={destination.name}
                                    onClick={() => handleClick(destination)}
                                    className={`cursor-pointer text-lg tracking-wider hover:text-white ${
                                        selectedDestination.name ===
                                        destination.name
                                            ? 'border-b-2 border-white text-white'
                                            : ''
                                    }`}
                                >
                                    {destination.name.toUpperCase()}
                                </span>
                            ))}
                        </div>
                        {selectedDestination && (
                            <>
                                <h2 className="mb-4 font-bellefair text-8xl lg:text-6xl">
                                    {selectedDestination.name.toUpperCase()}
                                </h2>
                                <p className="mb-6 text-lg lg:text-xl">
                                    {selectedDestination.description}
                                </p>
                                <div className="flex justify-center space-x-12 lg:justify-start">
                                    <div className="text-center">
                                        <p className="text-sm tracking-widest lg:text-base">
                                            AVG. DISTANCE
                                        </p>
                                        <p className="text-2xl lg:text-3xl">
                                            {selectedDestination.distance}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm tracking-widest lg:text-base">
                                            EST. TRAVEL TIME
                                        </p>
                                        <p className="text-2xl lg:text-3xl">
                                            {selectedDestination.travel}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
