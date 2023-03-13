import React from 'react'
import './Faq.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Faq(props) {
    return (
        <div>
                {props.children}
                <div class="faq">
                    <h5 class="faq-between">Водитель уведомит меня о начале доставки доставки? <FontAwesomeIcon className='icon' icon={faAngleDown} /> </h5>
                    <div>
                        <p>Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых <br /> нужно перейти
                            на сайт
                            магазина. Условия их получения отличаются. </p>

                        <p> В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые
                            продаются на Маркете, доставляются непосредственно продавцами <br /> и имеют пометку об этом. Для
                            таких товаров
                            могут быть доступны не все возможности, описанные ниже.</p>
                    </div>
                </div>
        </div>
    )
}
