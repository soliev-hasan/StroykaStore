import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Headers from '../headers/Headers'
import headerText from './text'
import { useState } from 'react/cjs/react.development';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRouble } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
import Footer from '../Footer/Footer';

export default function Page11({ size, cart, order }) {
    const now = new Date().toLocaleDateString().slice(0, 2);
    const [moth, setMoth] = useState(new Date().toLocaleDateString().slice(3, 5))
    
    if (moth === '11') {
        setMoth('Ноября')
    } else if (moth === '02') {
        setMoth('Февраля')
    }
    const [sizes, setSizes] = useState(order.map(el => el.price));

function price () {
    
    let res = 0;
    order.map((item) => (res += item.price * item.count ));
    setSizes(res)
    }
    useEffect(() => {
        price()
    });
  
    return (

        <div>
            <Header size={size} />
            <Headers
                class={headerText.page11.class}
                second={headerText.page11.heading}
                heading={headerText.page11.second}
            />
            <div className='row'>   
              <div className='full'>
              <h2>Итог:</h2>
              <p>{sizes} ₽</p>
              </div>  
            <div className='cards-order'>
                {

                    order.map(item => (
                        <div className="card-stock card-order">
                            <div className="card-img">
                                <img src={item.src} alt="" />
                            </div>
                            <div className='second-card second-card-row'>
                                <div className="card-text cart-text">
                                    <p>{item.text}</p>
                                    <div>
                                        <b>{item.price} <FontAwesomeIcon icon={faRouble} /></b>
                                        <p>{item.count} шт</p>
                                    </div>

                                </div>

                            </div>
                            <div className='date-order'>
                                <div>
                                <p>Заказ от {now} {moth}</p>
                                <p>34078988-0047</p>
                                </div>
                                <div>
                                    <p><b>Статус</b></p>
                                    <p>Оплачен</p>
                                </div>
                               
                            </div>
                            

                        </div>

                    ))
                }
             
            </div>
            </div>
            <Footer />
   
        </div>
    )
}
