import React from 'react'
import './Lancamentos.css'
import './Bottom.css'
import Top from './Top'
import Table from './Table'
import Bottom from './Bottom'

export default (props) => {
    return (
        <>
            <Top/>
            <Table/>
            <div className='bottom'>
                <Bottom/>
                <div className='bottom_options'>
                    <button className='btn-option'><i class="fas fa-table"></i>Exportar para Exel</button>
                    <button className='btn-option'><i class="fas fa-file"></i>Gerar relatório</button>
                    <button className='btn-option'><i class="fas fa-chart-line"></i>Visualizar gráficos</button>
                </div>
            </div>
        </>
    )
}