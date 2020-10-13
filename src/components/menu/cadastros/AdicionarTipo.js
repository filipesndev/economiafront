import React from 'react'
import './Adicionar.css'
import { useState, useEffect } from 'react'
import { URL_API } from '../../../config/constants'
import axios from 'axios'

export default (props) => {

    const [data, setData] = useState({
        descricao : '',
        sigla: ''
    })
    const [active, setActive] = useState(false)

    const onChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (props.typeId) {
                await axios.put( URL_API + '/tipos-documentos/' + props.typeId ,data )
            }else{
                await axios.post( URL_API + '/tipos-documentos' ,data )
            }
        } catch (error) {
            console.log(error)
        }
        fecharForm()
    }

    useEffect(() => {
        setActive(true)
    }, [])

    useEffect(() => {
        const loadType = async () => {
            try {
                const resp = await axios.get( URL_API + '/tipos-documentos/' + props.typeId)
                setData({
                    ...resp.data,
                })
            } catch (error) {
                console.log(error)
            }
        }
        if(props.typeId) {loadType()}
    }, [props.typeId])

    const fecharForm = (e) => {
        props.fechar(false)
    }

    return (
        <div className='modal-container'>
            <div className={'cardadd'+ ( active ? ' active' : '' )}>
                <div className='cardadd__head'>
                    <h1>Novo usuario</h1>
                    <button className='btn' onClick={ fecharForm } ><i className="fas fa-times"></i></button>
                </div>

                <div className='cardadd__body'>
                    <form className='formadd-tipos' onSubmit={handleSubmit}>
                        <div className='formadd__input'>
                            <label className='addlabel' htmlFor="adddescricao">Descrição</label>
                            <input ctype="text" onChange={onChange} value={data.descricao} required name='descricao' className="form-control" id="adddescricao" aria-describedby="emailHelp"/>
                        </div>
                        <div  className='formadd__input'>
                            <label className='addlabel' htmlFor="addsigla">Sigla</label>
                            <input type="text" onChange={onChange} value={data.sigla} required name='sigla' className="form-control" id="addsigla" aria-describedby="emailHelp"/>
                        </div>
                        <button className='btn btn-success btn_save' type='submit'><i className="fas fa-check"></i>Salvar</button>
                        <button className='btn btn-danger btn_cancel' onClick={ fecharForm } ><i className="fas fa-times"></i>Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}