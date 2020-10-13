import React from 'react'
import Grupos from './Grupos'
import './CadastrosTipos.css'

export default (props) => {

    return (
        <>
            <div className='top'>
                <h1 className='titulo1'>Grupos cadastrados</h1>
            </div>
            <Grupos/>
        </>
    )
}