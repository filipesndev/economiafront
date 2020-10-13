import React from 'react'
import './Adicionar.css'
import { useState, useEffect } from 'react'
import { URL_API } from '../../../config/constants'
import axios from 'axios'

export default (props) => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confpassword: '',
        admin: 0
    })

    const [active, setActive] = useState(false)

    const onChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const changeCheck = (e) => {
        const {name, checked} = e.target
        setData({
            ...data,
            [name]: checked ? 1 : 0
        })
        console.log(data)
    }

    const submitUser = async (e) => {
        e.preventDefault()
        try {
            if (data.password !== data.confpassword) {
                alert('Confirmação de senha inválida')
                return
            }
            if (props.userId) {
                await axios.put( URL_API + '/users/' + props.userId ,data )
            } else {
                await axios.post( URL_API + '/users' ,data )
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
        props.fechar(false)
    }

    useEffect(() => {
        setActive(true)
    }, [])

    useEffect(() => {
        const loadUser = async () => {
            try {
                const resp = await axios.get( URL_API + '/users/' + props.userId)
                setData({
                    ...resp.data,
                    password: '',
                    confpassword: ''
                })
            } catch (error) {
                console.log(error)
            }
        }
        if(props.userId) {loadUser()}
    }, [props.userId])

    return (
        <div className='modal-container'>
            <div className={'cardadd' + (active ? ' active' : '')}>
                <div className='cardadd__head'>
                    <h1>Novo usuario</h1>
                    <button className='btn' onClick={ (e) => {props.fechar(false)} }><i className="fas fa-times"></i></button>
                </div>

                <div className='cardadd__body'>
                    <form className='formadd' onSubmit={submitUser}>
                        <div className='formadd__input'>
                            <label className='addlabel' htmlFor="addnome">Nome</label>
                            <input ctype="text" onChange={onChange} required name='username' value={data.username} className="form-control" id="addnome" aria-describedby="emailHelp"/>
                        </div>
                        <div  className='formadd__input'>
                            <label className='addlabel' htmlFor="addemail">Email</label>
                            <input type="email" onChange={onChange} required name='email' value={data.email} className="form-control" id="addemail" aria-describedby="emailHelp"/>
                        </div>
                        <div  className='formadd__input'>
                            <label className='addlabel' htmlFor="addpassword">Senha</label>
                            <input type="password" onChange={onChange} required name='password' value={data.password} className="form-control" id="addpassword" aria-describedby="emailHelp"/>
                        </div>
                        <div  className='formadd__input'>
                            <label className='addlabel' htmlFor="addconfpassword">Confirmar senha</label>
                            <input type="password" onChange={onChange} required name='confpassword' value={data.confpassword} className="form-control" id="addconfpassword" aria-describedby="emailHelp"/>
                        </div>
                        <div className='formadd__check'>
                            <input type="checkbox" id='admin' checked={data.admin} onChange={changeCheck} name='admin'/>
                            <label className="label_check" htmlFor="admin">Administrador</label>
                        </div>
                        <button className='btn btn-success btn_save' type='submit'><i className="fas fa-check"></i>Salvar</button>
                        <button className='btn btn-danger btn_cancel' onClick={ (e) => {props.fechar(false)} }><i className="fas fa-times"></i>Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}