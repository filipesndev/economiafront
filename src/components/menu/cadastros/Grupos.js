import React, { useEffect, useState } from 'react'
import './CadastrosStyle.css'
import axios from 'axios'
import AdicionarGrupos from './AdicionarGrupo'
import { URL_API } from '../../../config/constants'
import Swal from 'sweetalert2'

export default (props) => {

    const [showModal, setShowModal] = useState(false)
    const [list, setList] = useState([])
    const [groupId, setGroupId] = useState(null)

    const loadGrupos = async (e) => {
        const resp = await axios.get( URL_API + '/grupos-despesas' )
        setList(resp.data)
    }

    const addGroup = (e) => {
        setGroupId(null)
        setShowModal(true)
    }

    const editGroup = (id) => {
        setGroupId(id)
        setShowModal(true)
    }

    const delGroup = async (id) => {

        const result = await Swal.fire({
            title: 'Deletar grupo?',
            text: "Você tem certeza que quer deletar este grupo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        })

        if (result.isConfirmed) {
            await axios.delete( URL_API + '/grupos-despesas/' + id )
            loadGrupos()
        } 
    }

    useEffect(() => {
        loadGrupos()
    }, [])

    const closeModal = (e) => {
        setShowModal(false)
        loadGrupos()
    }

    return (
        <div>
            <div className='btn_position'>
                <button className='btn btn-success btn-add' onClick={ addGroup }><i className="fas fa-plus"></i>Adicionar Grupo</button>
            </div>
            {
                showModal ? <AdicionarGrupos fechar={closeModal} groupId={groupId} /> : null
            }
            <table id='cadastro__table' className='table'>
                <thead id='cadastro__head' className='thead-dark'>
                    <tr>
                        <th className='cadastro__th'>ID</th>
                        <th className='cadastro__th'>Descrição</th>
                        <th className='cadastro__th'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map( (grupo) => {
                            return (
                                <tr key={grupo.id}>
                                    <td className='cadastro__tr'>{grupo.id}</td>
                                    <td className='cadastro__tr'>{grupo.descricao}</td>
                                    <td className='cadastro__tr'>
                                        <button className='btn btn-primary btn__action--edit' onClick={ (e) => editGroup(grupo.id) }><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn btn-danger btn__action--del' onClick={ (e) => delGroup(grupo.id) } ><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div>
    )
}