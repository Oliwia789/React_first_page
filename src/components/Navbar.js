import logo from "../assets/react-logo.png"

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <div className="nav-logo">
                <img src={logo} alt="logo react" className="nav-img"></img>
                <h2>ReactFacts</h2>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar