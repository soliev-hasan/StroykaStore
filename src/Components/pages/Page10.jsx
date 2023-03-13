import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Components from '../headers/cardsCatalog/Components'
import Cart from './../cart/Cart';

export default function Page10({cart, setCart,handleChange, size, data, addOrder,modal, btn }  ) {
  return (
    <div>
        <Header size={size} />
        <Cart  data={data} addOrder={addOrder} cart={cart} btn={btn} modal={modal} setCart={setCart} handleChange={handleChange} size={cart.length} />
        <Footer />
    </div>
  )
}
