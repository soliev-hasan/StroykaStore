import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../Header/Header';
import { items, itemsPopular, productCatalog } from './../../../data';
import { useEffect, useState } from 'react/cjs/react.development';
import './CardCatalog.css'
import check from './../../../img/check-circle.png'
import car from './../../../img/Icon.png'
import './CardCatalog.css'
import { faRouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './../../Footer/Footer';

export default function Components({ data, handleClick, cart, setCart, modal, size }) {
    const [count, setCount] = useState()

    const { id, text, price, src } = useParams();
    const result = productCatalog.map(i => {
        const randomIndex = Math.floor(Math.random() * productCatalog.length);
        return productCatalog[randomIndex];
    }).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);




    const combined = productCatalog.concat(items, itemsPopular)
    const newArr = combined.filter(el => el.id == id)
    const handleChange = (item, d) => {
        const ind = combined.indexOf(item);
        const arr = combined
        combined[ind].count += d;

        if (combined[ind].count === 0) combined[ind].count = 1;
        setCount(combined[ind].count)
    }
    return (
        <div>
            <Header size={size} />

            <div className=''>
                <div className='headers-document'>
                    <p>Главная → Каталог → Стройматериалы → Сухие смеси → {newArr[0].text}</p>
                </div>
                <div className='stock'>
                    <div className='card'>
                        <img className='img' src={newArr[0].src} alt="" />
                        <div className='texts'>
                            <h1>{newArr[0].text}</h1>
                            <div> <img src={check} alt="" /> <p className='green'> в наличии</p> </div>
                            <p>{newArr[0].price} ₽</p>
                            <div className='calc'>
                                <button className='button-slide button-com' onClick={() => handleClick(newArr[0])}>В Корзину</button>
                                <div>
                                    <button className='plus' onClick={() => handleChange(newArr[0], 1)} >+</button>
                                    <input type="text" className='count-com' value={newArr[0].count} />
                                    <button className='plus' onClick={() => handleChange(newArr[0], -1)}>-</button>
                                </div>

                            </div>
                            <p>Потавщик: Аксон</p>

                            <p>   <img src={car} alt="" />  Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика                              Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</p>

                        </div>

                    </div>
                    <div className='text-component'>
                        <h1>Описание</h1>
                        <div className=''>
                            <p>{newArr[0].text}</p>
                            <p>
                                НАЗНАЧЕНИЕ: <br />
                                Выравнивание оснований в помещениях нормальной влажности перед нанесением декоративного слоя;
                                Создание ровной поверхности на цементных, цементно-известковых, бетонных, кирпичных, гипсовых и гипсокартонных плоскостях.
                            </p>
                            <p>
                                ПРЕИМУЩЕСТВА: <br />
                                Экономичная (расход продукта 8-9 кг на 1 кв.м, не требует покрытия шпаклевкой);
                                Пластичная;
                                Слой нанесения от 5 до 60мм;
                                Можно использовать для создания декоративных поверхностей.
                            </p>
                            <p>
                                ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ: <br />
                                Подготовка основания:
                                Поверхность нужно очистить и просушить. Вещества, ослабляющие сцепление с поверхностью, такие как жир,
                                пыль и т.п. должны быть удалены.
                                Температурный режим в помещении должен быть не ниже +5 градусов.
                                Основания, хорошо впитывающие влагу, предварительно обработать составом «ВОЛМА-Универсал» или
                                «ВОЛМА-Интерьер». Гладкие (например, бетон) обработать составом «Волма-Контакт», просушить.
                                Приготовление смеси:
                                Емкость, в которой будут производить замес, и рабочий инструмент должны быть чистыми и сухими.
                                В воду комнатной температуры постепенно всыпать смесь из расчета на 1 кг смеси – 0,6-0,65 л воды.
                                Замешивать строительным миксером или дрелью с насадкой. Смесь должна стать однородной.
                                Дать отстояться в течение нескольких минут и снова замешать. Раствор можно наносить в течение 20 минут.
                                Нанесение:
                                Смесь наносить ручным способом, используя железный шпатель. Разровнять h-образным правилом.
                                Если состав наносится в два слоя, то на первый до высыхания наносятся насечки, после полного высыхания наносится
                                второй слой. После схватывания последнего слоя (примерно через 60 минут) правилом трапецией подрезать неровности.
                                Если в работе использовались маячки, рекомендуется их удалить и заделать оставшиеся углубления.
                                Для того чтобы загладить поверхность нужно через 10-20 минут после подрезки смочить водой, используя губчатую терку,
                                и затереть круговыми движениями.
                                Далее загладить металлическим шпателем.
                                Для того чтобы поверхность стала глянцевой нужно в течение суток, но не ранее трех часов, повторно смочить поверхность
                                водой и загладить шпателем.
                            </p>
                            <p>

                                РЕКОМЕНДАЦИИ: <br />
                                После окончания штукатурных работ основание рекомендуется прогрунтовать;
                                Поверхности, которые не будут штукатуриться (пол, окна, мебель и т.п.) необходимо закрывать;
                                Использованные инструмент и емкости необходимо вымыть водой после завершения работ.
                            </p>
                            <p>
                                МЕРЫ ПРЕДОСТОРОЖНОСТИ: <br />
                                При работе защищать кожу, глаза и дыхательные пути.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='stock'>
                    <h1>Похожие Товары</h1>
                    <div className='component-row'>
                        {

                            result.map(el => (
                                <div class="popular-card">
                                    <div class="popular-card-img">
                                        <img src={el.src} alt="" />
                                    </div>
                                    <div>
                                        <div className='text-card'>
                                            <div className="popular-card-text">
                                                <Link to={`/component/${el.id}`}>{el.text}</Link>
                                                <b>{el.price} <FontAwesomeIcon icon={faRouble} /> </b>

                                            </div>
                                            <button onClick={() => handleClick(el)} className="button-slide button-popular">В
                                                корзину</button>
                                        </div>
                                    </div>


                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div ref={modal} className='modal-cart modal-component hide'>
                <div className='succes succes-components'>
                    <div>
                        <h1>Товар успешно добавлен в корзину</h1>

                        <div className="card-stock card-order">
                            <div className="card-img">
                                <img src={newArr[0].src} alt="" />
                            </div>
                            <div className='second-card second-card-row'>
                                <div className="card-text cart-text">
                                    <p>{newArr[0].text}</p>
                                    <div>
                                        <b>{newArr[0].price} <FontAwesomeIcon icon={faRouble} /></b>
                                        <p>{newArr[0].count} шт</p>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className='btns-succes'>
                            <Link to='/cart'><button className='button-slide button-popular'>Перейти в корзину</button></Link>
                            <button className='remove button-popular'  style={{width:'230px',height:'48px'}}>Продолжить покупки</button>
                        </div>



                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
