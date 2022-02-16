import logo from "../assets/react-logo.png"

function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="logo react" className="nav-img"></img>
                <h2>ReactFacts</h2>
            </div>
            <h3 className="nav-project-title">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar