import React from 'react'
import './CadastrosUsuarios.css'
import Usuarios from './Usuarios'

export default (props) => {
    return (
        <div>
            <div className='top'>
                <h1 className='titulo1'>Cadastro de usuários</h1>
            </div>
            <Usuarios/>
        </div>
    )
}