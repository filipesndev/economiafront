import React from 'react'
import Card from './CardTotal'
import './Top.css'
import { useState } from  'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import br from '../../../../node_modules/date-fns/locale/pt-BR'
registerLocale('br', br)

export default (props) => {

    const [date, setDate] = useState(new Date())

    return (
        <div className='top_cards'>
            <Card title={'Selecione o mês:'}>
                <div className='date_picker'>
                    <DatePicker
                        locale="br"
                        selected={date}
                        onChange={date => setDate(date)}
                        dateFormat="MMMM/yyyy"
                        showMonthYearPicker
                    />
                </div>
            </Card>
            <Card title={'Receitas:'}>
                <p>R$2300,00</p>
            </Card>
            <Card title={'Despesas:'}>
                <p>R$500,00</p>
            </Card>
            <Card title={'Saldo:'}>
                <p className='saldo_negativo'>R$1800,00</p>
            </Card>
        </div>
    )
}