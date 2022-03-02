import React from 'react'
import { Route,Routes } from "react-router-dom"
import HomePage from "./components/Pages/HomePage"
import AboutPage from './components/Pages/AboutPage'

const AllRoutes = (props) =>{
    return(
        <React.Fragment>
            <Routes>
                <Route path='/' element={<HomePage DarkModeVal={props.DarkMode} />} />
                <Route path='/about' element={<AboutPage DarkModeVal={props.DarkMode} />} />
            </Routes>
        </React.Fragment>
    )
}

export default AllRoutes