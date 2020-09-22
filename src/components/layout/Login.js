import React from 'react'
import './Login.css'
import IcoEmail from '../../assets/images/icoemail.svg'
import IcoKey from '../../assets/images/key.svg'
import IcoUser from '../../assets/images/user.svg'
import { useState } from 'react'

export default (props) => {

    const [data, setData] = useState({
        email: '',
        senha: '',
        saveuser: false
    })

    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    const changeCheck = e => {
        const {name, checked} = e.target
        setData({
            ...data,
            [name]: checked
        })
        console.log(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.logar(true)
    }

    const goRegister = e => {
        e.preventDefault()
        props.setTela(2)
    }

    const goRecSenha = e => {
        e.preventDefault()
        props.setTela(3)
    }

    return (
        <>
            <div className = 'login'>
                <div id = 'card' className = 'card'>

                    <form className='login__form' onSubmit={handleSubmit}>
                        <img className = 'login__icon--3' src={IcoUser} alt='icon_up'/>
                        <h1 className = 'login__h1'>Login</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={onChange} value={data.email} name="email" type="email" className="form-control" id="email" placeholder='ex: filipedev@hotmail.com'/>
                            <img className = 'login__icon--1' src={IcoEmail} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={onChange} value={data.senha} name="senha" type="password" className="form-control" id="password"/>
                            <img className = 'login__icon--2' src={IcoKey} alt='icon'/>
                        </div>
                        <div className="login__checkbox">
                            <input type="checkbox" id="savename" name="saveuser" checked={data.saveuser} onChange={changeCheck}/>
                            <label htmlFor="savename">Lembre meu usuário.</label>
                        </div>
                        <button id='login__btn' className = 'btn btn-primary' type='submit' >Enviar</button>
                        <div className = "login__link">
                            <a href="/#" onClick={goRegister}>Registre-se</a>
                            <a href="/#" onClick={goRecSenha}>Esqueceu sua senha?</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}