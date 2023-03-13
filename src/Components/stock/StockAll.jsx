import React, { useState } from 'react'
import Stock from './Stock'
import './Stock.css'
import StockText from './mock'
import StockBetween from './StockBetween'
import { items }  from './../../data';

export default function StockAll({handleClick}) {
 


  return (
    <div>
       <div className='stock stock-div'>
      <StockBetween 
       head = {StockText.stock.headStocks}
       button = {StockText.stock.buttonStocks}
     />
   <div className='cards-stock'>
      {items.map((item) => (
        <Stock  key={item.id} item={item} handleClick={handleClick} />
      ))}</div>
    
    </div>
    </div>
  )
}
