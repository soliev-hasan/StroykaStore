import React from 'react'
import './Return.css'

export default function Return(props) {
    return (
        <div>
            <div className='return-row'>
                <h1>{props.heading}</h1>
                <div>
                    <p>{props.text1}</p>
                    <p>{props.text2} </p>
                    <p>{props.text3}</p>
                    <p>{props.text3}</p>
                </div>

            </div>

        </div>
    )
}
