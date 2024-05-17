import { useState, useEffect } from 'react'
import Nav from './Nav'
import { useLocation, useNavigate } from 'react-router-dom'

const Destination = () => {
    const [destinations, setDestinations] = useState([])
    // const [selectedDestination, setSelectedDestination] = useState(null)
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
            console.log('Data', data)
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
        <div className="h-screen bg-destinationDesktop bg-cover bg-center">
            <Nav />
            <ul className="text-white">
                {destinations.map((destination) => (
                    <li
                        key={destination.name}
                        onClick={() => handleClick(destination)}
                    >
                        {destination.name}
                    </li>
                ))}
            </ul>
            {selectedDestination && (
                <div className="text-white">
                    <img
                        src={selectedDestination.images.webp}
                        alt={selectedDestination.name}
                    />
                    <h2>{selectedDestination.name}</h2>
                    <p>Description: {selectedDestination.description}</p>
                    <p>Distance: {selectedDestination.distance}</p>
                    <p>Travel Time: {selectedDestination.travel}</p>
                </div>
            )}
        </div>
    )
}

export default Destination
