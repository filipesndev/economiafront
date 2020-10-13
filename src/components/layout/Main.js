import React from 'react'
import CadastrosUsuarios from '../menu/cadastros/CadastrosUsuarios'
import Lancamentos from '../menu/lancamentos/Lancamentos'
import Resultados from '../menu/resultado/Resultado'
import Config from '../menu/configuracoes/Config'
import CadastrosTipos from '../menu/cadastros/CadastrosTipos'
import CadastrosGrupos from '../menu/cadastros/CadastrosGrupos'
import './Main.css'

export default (props) => {



    return (
        <main className='app-main'>
            {
                props.opMenu === 1 ? <CadastrosTipos/> :
                props.opMenu === 2 ? <CadastrosGrupos/> : 
                props.opMenu === 3 ? <CadastrosUsuarios/> :
                props.opMenu === 4 ? <Lancamentos/> :
                props.opMenu === 5 ? <Resultados/> :
                props.opMenu === 6 ? <Config/> : null
            }
        </main>
    )
}