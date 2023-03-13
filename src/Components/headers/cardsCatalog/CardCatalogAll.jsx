import React from 'react'
import cardCatalog from './card'
import CardCatalog from './CardCatalog'

export default function CardCatalogAll() {
  return (
    <div>
        <div>
            <div className='card-catalog'>
           {
            cardCatalog.map((item) => (
                <CardCatalog key={item.id} item={item} />
            ))
           } 
        </div>
        </div>

    </div>
  )
}
