import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './App/MainApp'
import { BrowserRouter as Routers } from "react-router-dom"

ReactDOM.render(
    <Routers>
        <MainApp />
    </Routers>,
    document.getElementById('root')
)