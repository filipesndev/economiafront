import React from 'react'
import './Top.css'

export default (props) => {
    return (
        <div className='top_card'>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}