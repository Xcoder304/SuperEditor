import React from 'react'
import Styles from "./Styles/Main.css"
import Header from "./components/Header"
import AllRoutes from "./Routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

let MainApp = () =>{
  const [EnbaleDarkMod,SetDarkMode] = React.useState(true)
    return(
       <React.Fragment>
           <Header DarkMode={EnbaleDarkMod} ChangeDarkMode={SetDarkMode}/>
           <AllRoutes DarkMode={EnbaleDarkMod}/>
       </React.Fragment>
    )
}

export default MainApp