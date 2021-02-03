import React from 'react'
import './Table.css'
import AdicionarLancamento from './AdicionarLancamento'
import { useState } from 'react'

export default (props) => {

    const [showModal, setShowModal] = useState(false)

    const addLancamento = (e) => {
        setShowModal(true)
    }

    const closeModal = (e) => {
        setShowModal(false)
    }

    return (
        <div className='table_container'>
            <button className='btn btn-success' onClick={ addLancamento }><i className="fas fa-plus"></i>Novo Lançamento</button>
            {
                showModal ? <AdicionarLancamento fechar={ closeModal } /> : null
            }
            <div className='table_itens'>
                <table id='table_lancamentos' className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Tipo de Documento</th>
                            <th>Nº Documento</th>
                            <th>Histórico</th>
                            <th>Vencimento</th>
                            <th>Data do Pagamento</th>
                            <th>Valor</th>
                            <th>R / D</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td>Template</td>
                            <td className='table_options'>
                                <button className='btn btn-primary btn-table-option'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn btn-danger btn-table-option'><i className="fas fa-trash-alt"></i></button>
                                <button className='btn btn-warning btn-table-option'><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}