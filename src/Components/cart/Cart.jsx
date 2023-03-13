import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRouble } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import success from '../../img/check-circle.png'
import Headers from '../headers/Headers'
import headerText from '../pages/text';

export default function Cart({ cart, setCart, handleChange, size, addOrder, modal }) {

    const [price, setPrice] = useState(0)
    const none = 'Нет Товаров на Корзине'
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr)
        handlePrice();
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.count * item.price));
        setPrice(ans);

    }
    useEffect(() => {
        handlePrice()
    });
    const removeAll = (item) => {
        const arr = item.filter((item) => item !== item);
        setCart(arr)

    }
    return (
        <div>
            <Headers
                class={headerText.page7.class}
                heading={headerText.page7.heading}
                second={headerText.page7.heading}


            />
            <div className='cart'>
                <div className='itog'>
                    <h2>Итого</h2>
                    <div>
                        <p>Количество товаров</p>
                        <p>{size}шт</p>
                    </div>
                    <div>
                        <p>Товар на сумму</p>
                        <p>{price} <FontAwesomeIcon icon={faRouble} /></p>
                    </div>
                    <div>
                        <p>Поставщик</p>
                        <p>Аксон</p>
                    </div>
                    <button className='button-popular button-slide' onClick={() => addOrder()}>Оформить Заказ</button>
                </div>

                <div className='cart-card'>
                    {
                        cart.length > 0 ?
                            cart.map((item) => (

                                <div>
                                    <div className="card-stock">
                                        <div className="card-img">
                                            <img src={item.src} alt="" />
                                        </div>
                                        <div className='second-card'>
                                            <div className="card-text cart-text">
                                                <p>{item.text}</p>
                                                <div>
                                                    <b>{item.price} <FontAwesomeIcon icon={faRouble} /></b>

                                                </div>

                                            </div>
                                            <div className='btn-cart'>
                                                <button className='plus' onClick={() => handleChange(item, 1)}>+</button>
                                                <input type="text" className='coun' value={item.count} />
                                                <button className='plus' onClick={() => handleChange(item, -1)}>-</button>
                                                <button className='remove' onClick={() => handleRemove(item.id)}>Удалить товар</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            ))
                            : <h1>{none}</h1>
                    }
                    {
                        cart.length > 0 ?
                            <button onClick={() => removeAll(cart)} className='remove'>Удалить все товары</button>
                            : null
                    }

                </div>

            </div>
            <div className='modal-cart modal-order hide ' ref={modal}>
                <div className='succes success'>

                    <img src={success} alt="" />
                    <h1>Спасибо</h1>
                    <h3>Ваша заявка принята. Мы свяжемся с вами <br /> в ближайшее время</h3>

                </div>
            </div>
        </div>
    )
}
