import Nav from './Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

const Destination = () => {
    const { data, loading, error } = useFetchData('/data.json')
    const location = useLocation()
    const navigate = useNavigate()

    const destinations = data?.destinations || []

    const selectedDestination =
        location.state?.selectedDestination || destinations[0]

    const handleClick = (destination) => {
        navigate('/destination', {
            state: { selectedDestination: destination },
        })
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading data: {error.message}</p>

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-destinationDesktop bg-cover bg-center text-white">
            <Nav />
            <div className="flex flex-wrap items-center justify-center px-4 py-24 md:flex-row lg:px-24">
                <h1 className="mb-14 text-center font-barlowCondensed text-xl tracking-widest lg:text-2xl">
                    <span className="font-bold opacity-25">01</span> PICK YOUR
                    DESTINATION
                </h1>
                <div className="flex w-full max-w-6xl flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-8 flex w-full justify-center lg:mb-0 lg:w-1/2 lg:justify-start">
                        {selectedDestination && (
                            <img
                                src={selectedDestination.images.webp}
                                alt={selectedDestination.name}
                                className="w-64 lg:w-96"
                            />
                        )}
                    </div>
                    <div className="w-full max-w-md text-center lg:w-1/2 lg:text-left">
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
                                <h2 className="mb-4 font-bellefair text-4xl lg:text-6xl">
                                    {selectedDestination.name.toUpperCase()}
                                </h2>
                                <p className="mb-8 font-barlowCondensed text-base leading-relaxed text-secondary lg:text-lg">
                                    {selectedDestination.description}
                                </p>
                                <div className="flex justify-center space-x-8 lg:justify-start">
                                    <div className="text-center lg:text-left">
                                        <p className="mb-2 font-barlowCondensed text-sm tracking-widest text-secondary lg:text-base">
                                            AVG. DISTANCE
                                        </p>
                                        <p className="font-bellefair text-2xl lg:text-3xl">
                                            {selectedDestination.distance}
                                        </p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <p className="mb-2 font-barlowCondensed text-sm tracking-widest text-secondary lg:text-base">
                                            EST. TRAVEL TIME
                                        </p>
                                        <p className="font-bellefair text-2xl lg:text-3xl">
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
