import React from 'react'
import { useState } from 'react'
import './Register.css'
import IcoName from '../../assets/images/iconame.svg'
import IcoEmail from '../../assets/images/icoemail.svg'
import IcoKey from '../../assets/images/key.svg'
import IcoReg from '../../assets/images/registerico.svg'
import { URL_API } from '../../config/constants'
import axios from 'axios'

export default (props) => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confpassword: ''
    })

    const onChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post(URL_API + '/users', data)
            alert('Cadastro concluído com sucesso!')
        } catch (error) {
            alert('Não foi possivel cadastrar o usuário.')
            console.log(error)
        }
    }

    const goBack = e => {
        e.preventDefault()
        props.setTela(1)
    }

    return (
        <>
            <div className = 'register'>
                <div id = 'card__register' className = 'card'>

                    <form className='register__form' onSubmit={saveUser}>
                        <img className = 'register__icon--3' src={IcoReg} alt="icon_up"/>
                        <h1 className = 'register__h1'>Registre-se</h1>
                        <div className="form-group">
                            <label htmlFor="username">Nome</label>
                            <input onChange={onChange} value={data.username} name="username" type="text" className="form-control" id="username" placeholder='ex: Filipe Eduardo'/>
                            <img className = 'register__icon--1' src={IcoName} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={onChange} value={data.email} name="email" type="email" className="form-control" id="email" placeholder='ex: filipedev@hotmail.com'/>
                            <img className = 'register__icon--1' src={IcoEmail} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input onChange={onChange} value={data.password} name="password" type="password" className="form-control" id="password"/>
                            <img className = 'register__icon--2' src={IcoKey} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confpassword">Confirmar Senha</label>
                            <input onChange={onChange} value={data.confpassword} name="confpassword" type="password" className="form-control" id="confpassword"/>
                            <img className = 'register__icon--2' src={IcoKey} alt='icon'/>
                        </div>
                        <button id='register__btn' className = 'btn btn-primary' type='submit'>Registrar</button>
                        <div className = "register__link">
                            <a href="/#" onClick={goBack}>Voltar para login.</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}