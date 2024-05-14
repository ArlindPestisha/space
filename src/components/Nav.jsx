import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between pt-5">
            <div className="pl-4">
                <Link to="/">
                    <img src="/public/shared/logo.svg" alt="Logo" />
                </Link>
            </div>
            <div class="h-[1px] w-[473px] divide-y divide-solid bg-white bg-opacity-25"></div>
            <ul className="flex h-[96px]  w-full max-w-[830px] items-center justify-center space-x-10 bg-gray-400 bg-opacity-25 font-barlowCondensed text-base uppercase text-white backdrop-blur-sm">
                <li>
                    <Link to="/">
                        <span className="font-bold">00</span> Home
                    </Link>
                </li>
                <li>
                    <Link to="/destination">
                        <span className="font-bold">01</span> Destination
                    </Link>
                </li>
                <li>
                    <Link to="/crew">
                        <span className="font-bold">02</span> Crew
                    </Link>
                </li>
                <li>
                    <Link to="/technology">
                        <span className="font-bold">03</span> Technology
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
