import React from 'react'
import './AdicionarLancamento.css'
import { useState } from  'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import br from '../../../../node_modules/date-fns/locale/pt-BR'
registerLocale('br', br)

export default (props) => {

    const [dataVencimento, setDataVencimento] = useState(new Date())
    const [dataPagamento, setDataPagamento] = useState(new Date())

    return (
        <div className='modal-container'>
            <div className='card-lancamento'>
                <div className='card-lancamento_head'>
                    <h1>Novo lançamento:</h1>
                    <button className='btn'><i className="fas fa-times"></i></button>
                </div>
                <div className='card-lancamento_body'>
                    <form>
                        <div className='formrow1'>
                            <div className="form-group">
                                <label htmlFor="tipodocumento">Tipo de documento:</label>
                                <select className="form-control" name="tipodocumento" id="tipodocumento">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numerodocumento">Número do documento:</label>
                                <input className="form-control" type="text" name='numerodocumento' id='numerodocumento'></input>
                            </div>
                        </div>
                        <div className='formrow2'>
                            <div id="text-historico" class="form-group">
                                <label htmlFor="historico">Histórico:</label>
                                <textarea className="form-control" name="historico" id="historico" rows="5"></textarea>
                            </div>
                        </div>
                        <div className='formrow3'>
                            <div className="form-group">
                                <label>Vencimento:</label>
                                <DatePicker
                                    locale="br"
                                    selected={dataVencimento}
                                    onChange={date => setDataVencimento(date)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Data do pagamento:</label>
                                <DatePicker
                                    locale="br"
                                    selected={dataPagamento}
                                    onChange={date => setDataPagamento(date)}
                                />
                            </div>
                        </div>
                        <div className='formrow4'>
                            <div className="form-group">
                                <label htmlFor="valor">Valor:</label>
                                <input className="form-control" type="number" name="valor" id="valor"/>
                            </div>
                            <div className="form-group">
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="r/d" id="receita" value={0} checked/>
                                    <label className="form-check-label" htmlFor="receita">
                                        Receita
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="r/d" id="despesa" value={1}/>
                                    <label className="form-check-label" htmlFor="despesa">
                                        Despesa
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='formrow5'>
                            <button className='btn btn-success btn_save' type='submit'><i className="fas fa-check"></i>Salvar</button>
                            <button className='btn btn-danger btn_cancel'><i className="fas fa-times"></i>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}