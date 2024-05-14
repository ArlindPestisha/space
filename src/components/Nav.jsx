import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="flex justify-between">
            <div className="">
                <Link to="/">
                    <img src="/public/shared/logo.svg" alt="Logo" />
                </Link>
            </div>
            <div>
                
            </div>
            <ul className="text-white flex space-x-10">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="/crew">Crew</Link>
                </li>
                <li>
                    <Link to="/technology">Technology</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav