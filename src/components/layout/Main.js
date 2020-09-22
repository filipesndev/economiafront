import React from 'react'
import Cadastros from '../menu/cadastros/Cadastros'
import Lancamentos from '../menu/lancamentos/Lancamentos'
import Resultados from '../menu/resultado/Resultado'
import Config from '../menu/configuracoes/Config'
import './Main.css'

export default (props) => {



    return (
        <main className='app-main'>
            {
                props.opMenu === 1 ? <Cadastros/> :
                props.opMenu === 2 ? <Lancamentos/> :
                props.opMenu === 3 ? <Resultados/> :
                props.opMenu === 4 ? <Config/> : null
            }
        </main>
    )
}