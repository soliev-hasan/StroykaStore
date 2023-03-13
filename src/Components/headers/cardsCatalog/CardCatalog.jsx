import React from 'react'
import cardCatalog from './card';
import './CardCatalog.css'

export default function CardCatalog({item}) {

    let {id, heading, first, second, fourth, five, seven, eigth} = item

  return (
    <div>
        <div className='all-catalog'>
                    <div className='img-catalog'>
                        <h5>{item.heading}</h5>
                        <img src={item.src} alt="" />
                    </div>
                    <div className='categories-catalog'>
                        <ul>
                            <li>{item.first}</li>
                            <li>{item.second}</li>
                            <li>{item.third}</li>
                            <li>{item.fourth}</li>
                            <li>{item.five}</li>
                            <li>{item.sixth}</li>
                            <li>{item.seven}</li>
                            <li>{item.eigth}</li>
                        </ul>
                    </div>
                    </div>
        
    </div>
  )
}
