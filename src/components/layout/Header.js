import React from 'react'
import './Header.css'
import Logo from '../../assets/images/Logo.png' 
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

            <nav className = 'header__nav'>
                <ul className='header__menu'>

                    <li className='header__menu-item header__submenu'>
                        <a href="/#">Cadastros</a>
                        <ul>
                            <li className='header__submenu-item' ><a onClick={ e => props.setOpMenu(1)} href="/#">Tipos de pagamento</a></li>
                            <li className='header__submenu-item' ><a onClick={ e => props.setOpMenu(2)} href="/#">Grupos</a></li>
                            <li className='header__submenu-item' ><a onClick={ e => props.setOpMenu(3)} href="/#">Usuários</a></li>
                        </ul>
                    </li>

                    <li className='header__menu-item'>
                        <a href="/#" onClick={ e => props.setOpMenu(4)}>Lançamentos</a>
                    </li>

                    <li className='header__menu-item'>
                        <a href="/#" onClick={ e => props.setOpMenu(5)}>Resultados</a>
                    
                    </li>

                    <li className='header__menu-item'>
                        <a href="/#" onClick={ e => props.setOpMenu(6)}>Configurações</a>
                    </li>

                </ul>
            </nav>

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