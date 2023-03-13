import { useRef, useState, } from 'react';
import { Routes, Route } from 'react-router-dom';
import Components from './Components/headers/cardsCatalog/Components';
import Page1 from './Components/pages/Page1';
import Page10 from './Components/pages/Page10';
import Page2 from './Components/pages/Page2';
import Page3 from './Components/pages/Page3';
import Page4 from './Components/pages/Page4';
import Page5 from './Components/pages/Page5';
import Page6 from './Components/pages/Page6';
import Page7 from './Components/pages/Page7';
import Page8 from './Components/pages/Page8';
import Page9 from './Components/pages/Page9';
import { productCatalog, } from './data';
import Page11 from './Components/pages/Page11';



export default function App() {
  const [data, setData] = useState(productCatalog)

  function filter(item) {
    setData(productCatalog.filter(el => el.popular !== item))
  }
  function fil() {
    setData(productCatalog.sort((a, b) => +a.price > +b.price ? 1 : -1).map(el => (el)))

  }
  function fil2() {
    setData(productCatalog.sort((a, b) => +a.price < +b.price ? 1 : -1).map(el => (el)))

  }
  function sortAlphabet() {
    setData(productCatalog.sort((a, b) => a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1).map(el => (el)))

  }

  const [cart, setCart] = useState([])
  const [order, setOrder] = useState([])
  const modal = useRef();
  const btn = useRef();




  const handleClick = (item) => {
    setCart([...cart, item])


    if (cart.length < 0) {
      btn.current.classList.remove('hide')

    }

    modal.current.classList.add('show')
    modal.current.classList.remove('hide')




    setTimeout(() => {
      if (modal.current.classList.contains('show')) {
        modal.current.classList.add('hide')
        modal.current.classList.remove('show')

      }
    }, 1000);

  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].count += d;

    if (arr[ind].count === 0) arr[ind].count = 1;
    setCart([...arr])
  }
  const addOrder = () => {
    if (order.indexOf(order) !== -1) return;
    setOrder([...cart, ...order])
    if (cart.length === 0) {
      alert('Товаров не найдено')
    } else {
      modal.current.classList.add('show')
      modal.current.classList.remove('hide')
    }
    setTimeout(() => {
      if (modal.current.classList.contains('show')) {
        modal.current.classList.add('hide')
        modal.current.classList.remove('show')
      }
    }, 1000);

    const arr = cart.filter(item => item !== item)
    setCart(arr)

  }








  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 data={data} handleClick={handleClick} handleChange={handleChange} cart={cart} setCart={setCart} modal={modal} />} />
        <Route path='/brands' element={<Page2 size={cart.length} />} />
        <Route path='/delivery' element={<Page3 size={cart.length} />} />
        <Route path='/return' element={<Page4 size={cart.length} />} />
        <Route path='/document' element={<Page5 size={cart.length} />} />
        <Route path='/contacts' element={<Page6 size={cart.length} />} />
        <Route path='/cabinet' element={<Page7 size={cart.length} />} />
        <Route path='/cat' element={<Page8 size={cart.length} />} />
        <Route path='/catalog' element={<Page9 modal={modal} data={data} sortAlphabet={sortAlphabet} fil={fil} fil2={fil2} setData={setData} filter={filter} handleClick={handleClick} cart={cart} size={cart.length} />} />
        <Route path='/cart' element={<Page10 btn={btn} data={data} modal={modal} addOrder={addOrder} cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length} />} />
        <Route path='/order' element={<Page11 data={data} order={order} cart={cart} size={cart.length} />} />
        <Route path="/component/:id" element={<Components cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length} handleClick={handleClick} modal={modal} data={data} />} />

      </Routes>

    </div>

  );
};
