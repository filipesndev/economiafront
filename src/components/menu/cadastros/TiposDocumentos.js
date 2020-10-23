import React, { useEffect, useState } from 'react'
import './CadastrosStyle.css'
import axios from 'axios'
import { URL_API } from '../../../config/constants'
import AdicionarTipo from './AdicionarTipo'
import Swal from 'sweetalert2'

export default (props) => {

    const [types, setTypes] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [typeId, setTypeId] = useState(null)

    const loadTipos = async () => {
        const resp = await axios.get( URL_API + '/tipos-documentos')
        setTypes(resp.data)
    }

    const closeModal = (e) => {
        setShowModal(false)
        loadTipos()
    }

    const addType = (e) => {
        setTypeId(null)
        setShowModal(true)
    }

    const editType = (id) => {
        setTypeId(id)
        setShowModal(true)
    }

    useEffect(() => {
        loadTipos()
    }, [])

    const apagarTipo = async (id) => {

        const result = await Swal.fire({
            title: 'Deletar tipo?',
            text: "Você tem certeza que quer deletar este tipo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        })

        if (result.isConfirmed) {
            await axios.delete( URL_API + '/tipos-documentos/' + id )
            loadTipos()
        } 
    }

    return (
        <div>
            <div className='btn_position'>
                <button className='btn btn-success btn-add' onClick={ addType }><i className="fas fa-plus"></i>Adicionar Tipo</button>
            </div>
            {
                showModal ? <AdicionarTipo fechar={closeModal} typeId={typeId} /> : null
            }
            <div className='table_position'>
                <table id='cadastro__table' className='table'>
                    <thead id='cadastro__head' className='thead-dark'>
                        <tr>
                            <th className='cadastro__th'>ID</th>
                            <th className='cadastro__th'>Descrição</th>
                            <th className='cadastro__th'>Sigla</th>
                            <th className='cadastro__th'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            types.map( (tipo) => {
                                return (
                                    <tr key={tipo.id}>
                                        <td className='cadastro__tr'>{tipo.id}</td>
                                        <td className='cadastro__tr'>{tipo.descricao}</td>
                                        <td className='cadastro__tr'>{tipo.sigla}</td>
                                        <td className='cadastro__tr'>
                                            <button className='btn btn-primary btn__action--edit' onClick={ (e) => {editType(tipo.id)} }><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn btn-danger btn__action--del' onClick={ (e) => {apagarTipo(tipo.id)} }><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}