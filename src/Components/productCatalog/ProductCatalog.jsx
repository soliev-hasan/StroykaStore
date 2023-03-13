import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRouble } from '@fortawesome/free-solid-svg-icons'
import './ProductCatalog.css'

export default function ProductCatalog({item}) {

    let {id, src, text, price} = item

   
    return (
        <div>
            <div>
          
               
                {
                    
                      <div class="popular-card">
                      <div class="popular-card-img">
                          <img src={item.src} alt="" />
                      </div>
                      <div>
                          <div  className='text-card'>
                              <div  className="popular-card-text">
                                  <p>{item.text}</p>
                                  <b> {item.price} <FontAwesomeIcon icon={faRouble} /></b>
                                 
                              </div>
                              <button className="button-slide button-popular">В
                                  корзину</button>
                          </div>
                      </div>
                      
      
                  </div>
                }
              
            <div>
              
            </div>
            </div>


        </div>
    )
}
