import Nav from "./Nav";

const Layout = ({children}) => {
    console.log(children)
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default Layout