import React from 'react'
import './NovaSenha.css'
import IcoKey from '../../assets/images/key.svg'
import IcoKeyBall from '../../assets/images/keyballicon.png'
import { useState } from 'react'

export default (props) => {

    const [senha, setSenha] = useState({
        novasenha: '',
        confnovasenha: ''
    })

    const handleChange = e => {
        const {name, value} = e.target
        setSenha({
            ...senha,
            [name]: value
        })
        console.log(senha)
    }

    return (
        <>
            <div className = 'novasenha'>
                <div id = 'card' className = 'card'>

                    <form className='novasenha__form'>
                        <img className = 'novasenha__icon--3' src={IcoKeyBall} alt='icon_up'/>
                        <h1 className = 'novasenha__h1'>Nova senha</h1>
                        <div className="form-group">
                            <label htmlFor="novasenha">Nova senha</label>
                            <input onChange={handleChange} value={senha.novasenha} name="novasenha" type="password" className="form-control" id="novasenha"/>
                            <img className = 'novasenha__icon--1' src={IcoKey} alt='icon'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confnovasenha">Confirmar nova senha</label>
                            <input onChange={handleChange} value={senha.confnovasenha} name="confnovasenha" type="password" className="form-control" id="confnovasenha"/>
                            <img className = 'novasenha__icon--2' src={IcoKey} alt='icon'/>
                        </div>
                        <button id='novasenha__btn' className = 'btn btn-primary' type='submit' >Enviar</button>
                    </form>

                </div>
            </div>
        </>
    )
}