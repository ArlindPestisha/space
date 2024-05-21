import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-home bg-cover bg-center max-sm:bg-homeTablet">
            <Nav />
            <div className="grid h-full grid-cols-1 items-center px-4 md:grid-cols-2 md:px-24">
                <div className="text-center font-light md:text-left">
                    <h1 className="font-barlowCondensed text-[28px] tracking-widest text-secondary">
                        SO, YOU WANT TO TRAVEL TO
                    </h1>
                    <h2 className="font-bellefair text-[150px]  tracking-wide text-white">
                        SPACE
                    </h2>
                    <p className="mx-auto max-w-md font-barlowCondensed text-base leading-relaxed text-secondary md:mx-0">
                        Let's face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we'll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="mt-10 flex justify-center md:mt-0 md:justify-end">
                    <Link to="/destination">
                        <button className="flex h-[270px] w-[270px] items-center justify-center rounded-full bg-white font-bellefair text-3xl uppercase tracking-wider text-black transition hover:before:absolute hover:before:h-[400px] hover:before:w-[400px] hover:before:rounded-full hover:before:bg-grayHover hover:before:opacity-10">
                            Explore
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
