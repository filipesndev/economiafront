import React from 'react'
import TiposDocumentos from './TiposDocumentos'
import './CadastrosTipos.css'

export default (props) => {

    return (
        <>
            <div className='top'>
                <h1 className='titulo1'>Tipos de documento</h1>
            </div>
            <TiposDocumentos/>
        </>
    )
}