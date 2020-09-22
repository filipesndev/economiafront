import React from 'react'
import './Register.css'
import IcoName from '../../assets/images/iconame.svg'
import IcoEmail from '../../assets/images/icoemail.svg'
import IcoKey from '../../assets/images/key.svg'
import IcoReg from '../../assets/images/registerico.svg'
import { useState } from 'react'

export default (props) => {

    const [data, setData] = useState({
        nome: '',
        email: '',
        senha: '',
        confSenha: ''
    })

    const onChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    const goBack = e => {
        e.preventDefault()
        props.setTela(1)
    }

    return (
        <>
            <div className = 'register'>
                <div id = 'card' className = 'card'>

                    <form className='register__form' action="">
                        <img className = 'register__icon--3' src={IcoReg} alt="icon_up"/>
                        <h1 className = 'register__h1'>Registre-se</h1>
                        <div className="form-group">
                            <label htmlFor="nameuser">Nome</label>
                            <input onChange={onChange} value={data.nome} name="nome" type="text" className="form-control" id="nameuser" placeholder='ex: Filipe Eduardo'/>
                            <img className = 'register__icon--1' src={IcoName} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={onChange} value={data.email} name="email" type="email" className="form-control" id="email" placeholder='ex: filipedev@hotmail.com'/>
                            <img className = 'register__icon--1' src={IcoEmail} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input onChange={onChange} value={data.senha} name="senha" type="password" className="form-control" id="password"/>
                            <img className = 'register__icon--2' src={IcoKey} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirmar Senha</label>
                            <input onChange={onChange} value={data.confSenha} name="confSenha" type="password" className="form-control" id="confirmpassword"/>
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