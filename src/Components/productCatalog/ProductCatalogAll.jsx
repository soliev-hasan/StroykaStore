import React from 'react'
import { Link } from 'react-router-dom'
import { productCatalog } from '../../data'
import PopularProduct from '../popularProduct/PopularProduct'
import ProductCatalog from './ProductCatalog'
import './ProductCatalog.css'
import { useState, useRef } from 'react/cjs/react.development';
import { logDOM } from '@testing-library/react'
import popularCategories from './../categories/categoriesText';

export default function ProductCatalogAll({ data, filter, fil, fil2, setData, handleClick, modal, sortAlphabet, }) {


    const [searchText, setSearchText] = useState("");
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);


    const filteredProducts = data.filter(
        (product =>
            (!minPrice || +product.price >= minPrice) &&
            (!maxPrice || +product.price <= maxPrice)
        ));
    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredProducts = data.filter((product) =>
            product.text.toLowerCase().includes(searchText)
        );
        setFilteredProduct(filteredProducts);
        setSearchText(searchText);
    };
    const visibleProducts = searchText ? filteredProduct : filteredProducts;
    return (
        <div>
            <div className='product-catalog '>

                <div className='filter'>
                    <p>Цена</p>
                    <div className='input-row'>
                        <input
                            placeholder='1000'
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)} />
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder='100 000' />
                    </div>
                    <div className='brand-filter'>
                        <p>Бренд</p>
                        <input type="text"
                            placeholder='Поиск'
                            value={searchText}
                            onChange={handleSearch} />
                        <div className='filter-brand'>
                            <input type="checkbox" />
                            <label htmlFor="">Braer</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">Mstera</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">Euroblock</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">Гален</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">ЛСР</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">Decra</label><br />
                            <input type="checkbox" />
                            <label htmlFor="">Аксон</label><br />
                        </div>
                        <p>Поставщик</p>
                        <select name="" id="">
                            <option value="">Аксон</option>
                        </select>
                    </div>
                    <div className='btn-filter'>
                        <button className=' button-slide submit'>Применить</button>
                        <button className=' remove-filter'>Сбросить</button>
                    </div>

                </div>

                <div>
                    <div>
                        <form className='filter-price' onSubmit={e => { e.preventDefault() }}>
                            <button onClick={() => setData(productCatalog)}>Все</button>
                            <button onClick={() => filter('yes')} >Популярные</button>
                            <button type='submit' onClick={() => fil()} >Дешевле</button>
                            <button type='submit' onClick={() => fil2()}>Дороже</button>
                            <button onClick={sortAlphabet}>По алфавиту</button>
                        </form>


                    </div>
                    <div className='catalog-cards'>
                        {

                            visibleProducts.map((item, index) => (
                                <div>
                                    <PopularProduct key={item.name} modal={modal} handleClick={handleClick} data={item} item={item} />
                                </div>

                            ))
                        }
                    </div>
                </div>



            </div>
        </div>
    )
}
