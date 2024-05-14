import Nav from './Nav'

const Home = () => {
    return (
        <div className="h-screen bg-home bg-cover bg-center max-sm:bg-homeTablet">
            <Nav />
            <h1 className="font-barlowCondensed  text-red-500">Hello</h1>
            <h2 className=" font-bellefair">Arlind Pestisha</h2>
        </div>
    )
}

export default Home
