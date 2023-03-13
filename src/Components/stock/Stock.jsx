import React, { useState } from 'react'
import "./Stock.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRouble} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react/cjs/react.development'
import { items } from '../../data';
import { Link } from 'react-router-dom';




export default function Stock({item, handleClick}) {

let { text, price, src, sPrice,} = item;

    return (
        <div >
            <div className="card-stock">
                    <div className="card-img">
                        <img src={src} alt="" />
                        <span>-25%</span>
                    </div>
                    <div className='second-card'>
                    <div  className="card-text">
                    <Link to={`/component/${item.id}`}>{text}</Link>
                        <div>
                        <b>{price} <FontAwesomeIcon icon={faRouble}/></b>
                        <s>{sPrice}</s>
                        </div>
                        </div>
                        <button onClick={() => handleClick (item)}  class="button-slide button-card-stock">В корзину</button>
                        
                    </div>
                    </div>
               
        </div>
    )
}
