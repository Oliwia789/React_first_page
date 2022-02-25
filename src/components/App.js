import React from "react"
import Main from "./Main"
import Navbar from "./Navbar"

function App () {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    } 

    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </>
    )
}

export default App