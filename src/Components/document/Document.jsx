import React from 'react'
import './Document.css'


export default function Document(props) {
    return (
        <div>
    <div className='document'>
        <div className='document-img'>
        <img src={props.src} alt="" />
        </div>
        <div className='document-text'>
            <b>{props.text}</b>
            <p>PDF · 10 МБ</p>
            <button  class="button-slide document-button ">Скачать</button>
        </div>
       
    </div>



        </div>
    )
}
