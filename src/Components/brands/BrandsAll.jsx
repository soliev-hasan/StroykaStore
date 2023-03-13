import React from 'react'
import StockBetween from '../stock/StockBetween'
import Brands from './Brands'
import brands from './imgBrands'

export default function BrandsAll() {
  return (
    <div>
        <div className='brands'>
        <StockBetween 
         head = {brands.head}
         button = {brands.btn}
        />
        <div className='brands-card'>
        <Brands
        src = {brands.bever}
        />
         <Brands
        src = {brands.braer}
        />
         <Brands
        src = {brands.stone}
        />
         <Brands
        src = {brands.block}
        />
         <Brands
        src = {brands.perfekta}
        />
         <Brands
        src = {brands.mstera}
        />
         <Brands
        src = {brands.lcp}
        />
         <Brands
        src = {brands.galen}
        />
         <Brands
        src = {brands.recke}
        />
         <Brands
        src = {brands.mod}
        />
         <Brands
        src = {brands.decra}
        />
         <Brands
        src = {brands.engels}
        />
        </div>
        </div>
    </div>
  )
}
