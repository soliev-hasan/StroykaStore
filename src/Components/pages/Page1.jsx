import React, { useEffect, useState } from 'react'
import Slider from './../slider/Slider';
import StockAll from './../stock/StockAll';
import CategoriesAll from './../categories/CategoriesAll';
import PopularProductAll from './../popularProduct/PopularProductAll';
import BrandsAll from './../brands/BrandsAll';
import ReviewAll from './../review/ReviewAll';
import About from './../about/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cart from '../cart/Cart';
import slider from '../slider/slideText';
import { items, itemsPopular, productCatalog } from './../../data';
import succes from './../../img/check-circle.png'
import { useRef } from 'react/cjs/react.development';
import Page2 from './Page2'
import popularCategories from './../categories/categoriesText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRouble } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Page1({ handleChange, handleClick, cart, setCart, modal, data}) {


    return (
        <div>
            <Header data={data}  size={cart.length} />
            <Slider />
            <StockAll handleClick={handleClick} />
            <CategoriesAll />
         
            <div className='popular-product'>
            <h1 className=''>Популярные товары</h1>
          
            
            <div className='card-catalog'>
            
                {
                    itemsPopular.map(el => (
                        <div key={el.id} class="popular-card">
                        <div class="popular-card-img">
                            <img src={el.src} alt="" />
                        </div>
                        <div>
                            <div className='text-card'>
                                <div className="popular-card-text">
                                <Link to={`/component/${el.id}`}>{el.text}</Link>
                                    <b>{el.price}  <FontAwesomeIcon icon={faRouble} /></b>
        
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
            <ReviewAll />
            <About />
            <Footer />
            <div ref={modal} className='modal-cart hide'>
                <div className='succes'>
                    <img src={succes} alt="" />
                    <div>
                        <h1>Товар успешно добавлен в корзину</h1>
                    </div>
                </div>
            </div>


        </div>


         
         



    )
}


