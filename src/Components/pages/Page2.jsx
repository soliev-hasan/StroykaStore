import React from 'react'
import BrandsAll from '../brands/BrandsAll'
import Header from '../Header/Header'
import Headers from '../headers/Headers'
import headerText from './text'
import BrandsFilter from '../brandsFilter/BrandsFilter'
import Footer from './../Footer/Footer';
import Cart from '../cart/Cart'
import { useState } from 'react/cjs/react.development'

export default function Page2({size}) {
  return (

    <div>
      <button>OK</button>
      <Header size={size} 
      />
      <Headers
        class={headerText.class}
        second={headerText.second}
        heading={headerText.heading}

      />
      <BrandsAll />
      <BrandsFilter />
      <Footer />


    </div>
  )
}
