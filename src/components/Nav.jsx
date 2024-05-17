import { Link } from 'react-router-dom'
import NavLink from './NavLink'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between pt-5">
            <div className="pl-16">
                <Link to="/">
                    <img
                        src="
                    /shared/logo.svg"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="hidden h-[1px] w-full max-w-[400px] divide-y  divide-solid bg-white bg-opacity-25 lg:block"></div>
            <ul className="flex h-[96px]  w-full max-w-[830px] items-center justify-center space-x-10 bg-gray-400 bg-opacity-25 font-barlowCondensed text-base uppercase text-white backdrop-blur-sm">
                <li>
                    <NavLink to="/" index="00" label="Home" />
                </li>
                <li>
                    <NavLink to="/destination" index="01" label="Destination" />
                </li>
                <li>
                    <NavLink to="/crew" index="02" label="Crew" />
                </li>
                <li>
                    <NavLink to="/technology" index="03" label="Technology" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav
