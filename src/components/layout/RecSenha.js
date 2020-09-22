import React from 'react'
import './RecSenha.css'
import IcoEmail from '../../assets/images/icoemail.svg'
import IcoLock from '../../assets/images/lock.svg'
import { useState } from 'react'

export default (props) => {

    const [emailRec, setEmailRec] = useState('')

    const changeEmail = e => {
        const value = e.target.value
        setEmailRec(value)
        console.log(emailRec)
    }

    const goBack = e => {
        e.preventDefault()
        props.setTela(1)
    }

    return (
        <>
            <div className = 'recsenha'>
                <div id = 'card' className = 'card'>

                    <form className='recsenha__form' action="">
                        <img className = 'recsenha__icon--3' src={IcoLock} alt="icon_up"/>
                        <h1 className = 'recsenha__h1'>Recuperar Senha</h1>
                        <div className="form-group">
                            <label htmlFor="email">Insira seu email</label>
                            <input onChange={changeEmail} value={emailRec} name="email" type="email" className="form-control" id="email" placeholder='ex: filipedev@hotmail.com'/>
                            <img className = 'recsenha__icon--1' src={IcoEmail} alt='icon'/>
                        </div>
                        <button id='recsenha__btn' className = 'btn btn-primary' type='submit'>Recuperar</button>
                        <div className = "recsenha__link">
                            <a href="/#" onClick={goBack}>Voltar para login.</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}