import React from 'react'
import './AdicionarLancamento.css'
import { useState } from  'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import br from '../../../../node_modules/date-fns/locale/pt-BR'
registerLocale('br', br)

export default (props) => {

    const [data, setData] = useState({
        tipoDocumento: '',
        numeroDocumento: '',
        historico: '',
        vencimento: new Date(),
        pagamento: new Date(),
        valor: 0,
        rd: '1'
    })

    const handleChange = (e) => {
        console.log(e.target)
        const {name, value} = e.target
        setField(name, value)
    }
    
    const setField = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='modal-container'>
            <div className='card-lancamento'>
                <div className='card-lancamento_head'>
                    <h1>Novo lançamento:</h1>
                    <button className='btn' onClick={ props.fechar } ><i className="fas fa-times"></i></button>
                </div>
                <div className='card-lancamento_body'>
                    <form onSubmit={ handleSubmit }>
                        <div className='formrow1'>
                            <div className="form-group">
                                <label htmlFor="tipoDocumento">Tipo de documento:</label>
                                <select className="form-control" value={data.tipoDocumento} onChange={ handleChange } name="tipoDocumento" id="tipoDocumento">
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numeroDocumento">Número do documento:</label>
                                <input className="form-control" onChange={handleChange} type="text" name='numeroDocumento' id='numeroDocumento'></input>
                            </div>
                        </div>
                        <div className='formrow2'>
                            <div id="text-historico" className="form-group">
                                <label htmlFor="historico">Histórico:</label>
                                <textarea className="form-control" onChange={handleChange} name="historico" id="historico" rows="5"></textarea>
                            </div>
                        </div>
                        <div className='formrow3'>
                            <div className="form-group">
                                <label>Vencimento:</label>
                                <DatePicker
                                    locale="br"
                                    selected={data.vencimento}
                                    onChange={ date => setField('vencimento', date) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Data do pagamento:</label>
                                <DatePicker
                                    locale="br"
                                    selected={data.pagamento}
                                    onChange={ date => setField('pagamento', date)}
                                />
                            </div>
                        </div>
                        <div className='formrow4'>
                            <div className="form-group">
                                <label htmlFor="valor">Valor:</label>
                                <input className="form-control" onChange={handleChange} type="number" name="valor" id="valor"/>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input"  onChange={ handleChange } type="radio" name="rd" id="receita" value={0} checked={ data.rd === '0' } />
                                    <label className="form-check-label" htmlFor="receita">
                                        Receita
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={ handleChange } type="radio" name="rd" id="despesa" value={1} checked={ data.rd === '1' } />
                                    <label className="form-check-label" htmlFor="despesa">
                                        Despesa
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='formrow5'>
                            <button className='btn btn-success btn_save' type='submit'><i className="fas fa-check"></i>Salvar</button>
                            <button className='btn btn-danger btn_cancel' onClick={ props.fechar }><i className="fas fa-times"></i>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}