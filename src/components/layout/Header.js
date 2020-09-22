import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.jpg' 
import User from '../../assets/images/user.jpg' 

export default (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.logar(false)
    }

    return (
        <header className = 'header'>

            <div className = 'header__logo'>
                <img src={Logo} alt="logo"/>
            </div>

            <div className = 'header__nav'>
                <nav>
                    <ul>
                        <a href="/#" onClick={ e => props.setOpMenu(1)}><li>Cadastros</li></a>
                        <a href="/#" onClick={ e => props.setOpMenu(2)}><li>Lançamentos</li></a>
                        <a href="/#" onClick={ e => props.setOpMenu(3)}><li>Resultados</li></a>
                        <a href="/#" onClick={ e => props.setOpMenu(4)}><li>Configurações</li></a>
                    </ul>
                </nav>
            </div>

            <div className = 'header__user'>
                <span>
                    <a href="/#" onClick={handleClick}>
                        <img src={User} alt="perfil"/>
                        <h1>Filipe Eduardo</h1>
                    </a>
                </span>
            </div>
        </header>
    )
}