import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, index, label, children }) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            className={`relative ${isActive ? 'text-white' : ' text-secondary'} group hover:text-white`}
        >
            <span className="font-bold">{index}</span> {label}
            <span
                className={`absolute left-1/2 top-12 h-[3px] w-full -translate-x-1/2 ${
                    isActive
                        ? 'bg-white'
                        : 'bg-transparent group-hover:bg-gray-400'
                }`}
            ></span>
            {children}
        </Link>
    )
}

export default NavLink
