import React from 'react'
import './Bottom.css'

export default (props) => {
    return (
        <div className='bottom_table'>
            <h1>Resumo:</h1>
            <table id='table_resumo' className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Grupo</th>
                        <th>Receita Total</th>
                        <th>Despesa Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Template</td>
                        <td>Template</td>
                        <td>Template</td>
                    </tr>
                    <tr>
                        <td>Template</td>
                        <td>Template</td>
                        <td>Template</td>
                    </tr>
                    <tr>
                        <td>Template</td>
                        <td>Template</td>
                        <td>Template</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}