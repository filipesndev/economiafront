import React, { useEffect, useState } from 'react'
import './CadastrosStyle.css'
import axios from 'axios'
import { URL_API } from '../../../config/constants'
import Adicionar from './Adicionar'
import Swal from 'sweetalert2'

export default (props) => {

    const [list, setList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [userId, setUserId] = useState(null)
    
    const loadUser = async () => {
        const resp = await axios.get( URL_API + '/users' )
        setList(resp.data)
    }
    
    useEffect(() => {
        loadUser()
    }, [])
    
    const novoUsuario = (e) => {
        setUserId(null)
        setShowModal(true)
    }

    const editarUsuario = (id) => {
        setUserId(id)
        setShowModal(true)
    } 

    const apagarUsuario = async (id) => {

        const result = await Swal.fire({
            title: 'Deletar usuário?',
            text: "Você tem certeza que quer deletar este usuário?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        })

        if (result.isConfirmed) {
            await axios.delete( URL_API + '/users/' + id )
            loadUser()
        }

    }

    const reloadUsers = () => {
        setShowModal(false)
        loadUser()
    }

    return (
        <div>
            <div className='btn_position'>
                <button className='btn btn-success btn-add' onClick={ novoUsuario }><i className="fas fa-plus"></i>Adicionar Usuário</button>
            </div>
            {
                showModal ? <Adicionar userId={userId} fechar={reloadUsers}/> : null
            }
            <div className='table_position'>
                <table id='cadastro__table' className='cadastro table'>
                    <thead id='cadastro__head' className='thead-dark'>
                        <tr>
                            <th className='cadastro__th'>ID</th>
                            <th className='cadastro__th'>Nome</th>
                            <th className='cadastro__th'>Email</th>
                            <th className='cadastro__th'>Admin</th>
                            <th className='cadastro__th'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td className='cadastro__tr'>{user.id}</td>
                                        <td className='cadastro__tr'>{user.username}</td>
                                        <td className='cadastro__tr'>{user.email}</td>
                                        <td className='cadastro__tr'>{ (!!user.admin && <i className='fas fa-check fa-lg icon__check'></i>) }</td>
                                        <td className='cadastro__tr'>
                                            <button className='btn btn-primary btn__action--edit' onClick={ (e) => {editarUsuario(user.id)} }><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn btn-danger btn__action--del' onClick={ (e) => {apagarUsuario(user.id)} }><i className="fas fa-trash-alt"></i></button>
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