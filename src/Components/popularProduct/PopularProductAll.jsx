import React from 'react'
import PopularProduct from './PopularProduct'
import popular from './product'
import { itemsPopular } from '../../data'

export default function PopularProductAll({handleClick, data, cart}) {
    return (
        <div>
            <div className='popular-section'>
                <div class="text-popular">
                    <h1>Популярные товары</h1>
                </div>
                <div className='popular-cards'>
                   {
                    itemsPopular.map((item) => (
                        <div>
                        <PopularProduct cart={cart} key={item.id} data={item} handleClick={handleClick} />
                    
                        </div>
                    ))
                   }

                </div>


            </div>


        </div>
    )
}
