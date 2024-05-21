import React, { useState } from 'react'
import Nav from './Nav'
import useFetchData from '../hooks/useFetchData'

const Crew = () => {
    const { data, loading, error } = useFetchData('/data.json')
    const [selectedCrewIndex, setSelectedCrewIndex] = useState(0)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading data: {error.message}</p>

    const crew = data?.crew || []
    const selectedCrew = crew[selectedCrewIndex]

    const handleDotClick = (index) => {
        setSelectedCrewIndex(index)
    }

    return (
        <div className="relative min-h-screen w-full bg-crewDesktop bg-cover bg-center text-white sm:bg-crewTablet">
            <Nav />
            <div className="flex flex-col items-center justify-center px-4 py-8 lg:px-24">
                <h1 className="mb-8 text-center font-barlowCondensed text-xl tracking-widest lg:text-2xl">
                    <span className="font-bold opacity-25">02</span> MEET YOUR
                    CREW
                </h1>
                <div className="flex w-full max-w-6xl flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-8 flex w-full justify-center lg:mb-0 lg:w-1/2 lg:justify-start">
                        {selectedCrew && (
                            <img
                                src={selectedCrew.images.webp}
                                alt={selectedCrew.name}
                                className="w-64 lg:w-96"
                            />
                        )}
                    </div>
                    <div className="w-full max-w-md text-center lg:w-1/2 lg:text-left">
                        {selectedCrew && (
                            <>
                                <h2 className="mb-4 font-barlowCondensed text-2xl text-secondary lg:text-3xl">
                                    {selectedCrew.role.toUpperCase()}
                                </h2>
                                <h3 className="mb-4 font-bellefair text-4xl lg:text-6xl">
                                    {selectedCrew.name.toUpperCase()}
                                </h3>
                                <p className="mb-8 font-barlowCondensed text-base leading-relaxed text-secondary lg:text-lg">
                                    {selectedCrew.bio}
                                </p>
                            </>
                        )}
                        <div className="mt-8 flex justify-center space-x-4 lg:justify-start">
                            {crew.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-4 w-4 cursor-pointer rounded-full ${
                                        selectedCrewIndex === index
                                            ? 'bg-white'
                                            : 'bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew
