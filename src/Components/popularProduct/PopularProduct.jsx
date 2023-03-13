import React, { useRef, useState } from 'react'
import './PopularProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRouble } from '@fortawesome/free-solid-svg-icons'
import su from '../../img/check-circle.png'
import { Link } from 'react-router-dom';

export default function PopularProduct({ data, handleClick,modal }) {



    return (



        <div>
            <div class="popular-card">
                <div class="popular-card-img">
                    <img src={data.src} alt="" />
                </div>
                <div>
                    <div className='text-card'>
                        <div className="popular-card-text">
                           <Link key={data.id} to={`/component/${data.id}`}><p>{data.text}</p></Link> 
                            <b>{data.price}  <FontAwesomeIcon icon={faRouble} /></b>

                        </div>
                        <button onClick={() => handleClick(data)} className="button-slide button-popular">В
                            корзину</button>
                    </div>
                </div>

            </div>
            <div ref={modal} className='modal-cart hide'>
                <div className='succes'>
                    <img src={su} alt="" />
                    <div>
                        <h1>Товар успешно добавлен в корзину</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
