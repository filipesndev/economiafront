import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Auth from './layout/Auth'
import { useState } from 'react'
import './App.css'

export default (props) => {

    const [login, setLogin] = useState(false)
    const [opMenu, setOpMenu] = useState(0)

    if (login) {
        return (
            <div className="app">
                <Header logar={setLogin} setOpMenu={setOpMenu}/>
                <Main opMenu={opMenu}/>
                <Footer/> 
            </div>
        )
    } else {
        return (
            <div className="app">
                <Auth logar={setLogin} />
            </div>
        )
    }

}