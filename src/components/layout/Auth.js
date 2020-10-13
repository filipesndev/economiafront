import React from 'react'
import Login from './Login'
import Register from './Register'
import RecSenha from './RecSenha'
import { useState } from 'react'

export default (props) => {

    const [tela, setTela] = useState(1)

    return (
        tela === 1 ? <Login logar={props.logar} setTela={setTela}/> :
        tela === 2 ? <Register setTela={setTela}/> :
        tela === 3 ? <RecSenha setTela={setTela}/> : null
    )
}