import React from 'react'
import "./Header.css";
import eye from './img/image 42 (Traced).png'
import burger from './img/Object=Menu, Size=24.png'
import logo from './img/StroykaStore.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Header({ size, sizes,data }) {

    let modal = useRef(),
        body = document.querySelector('body'),
        registration = useRef()

    function showModal() {
        if (modal.current.classList.contains('hide')) {
            modal.current.classList.add('show')
            modal.current.classList.remove('hide')
            body.classList.add('hidden')

        }
    }
    function showReg() {
        if (registration.current.classList.contains('hide')) {
            modal.current.classList.add('hide')
            registration.current.classList.add('show')
            registration.current.classList.remove('hide')
            body.classList.add('hidden')

        }
    }
    function hideModal() {
        if (modal.current.classList.contains('show') || registration.current.classList.contains('show')) {
            modal.current.classList.add('hide')
            registration.current.classList.add('hide')
            modal.current.classList.remove('show')
            body.classList.remove('hidden')
        }
    }
    function back() {
        if (modal.current.classList.contains('hide') && registration.current.classList.contains('show')) {
            modal.current.classList.add('show')
            registration.current.classList.add('hide')
            modal.current.classList.remove('hide')
            body.classList.add('hidden')
        }

    };
//     const [searchText, setSearchText] = useState('');
  
//     const filteredProducts = data.filter((product) =>
//     product.text.toLowerCase().includes(searchText.toLowerCase())
//   );
    return (

        <div className="header">
            <div className='top-nav col-xs-12 col-md-12 col-xl-12'>
                <div className='location'> <FontAwesomeIcon icon={faLocationDot} /><b>Москва</b></div>
                <div className='links-top-nav'>
                    <ul>

                        <li>
                            <Link to='/brands' >Бренды</Link>
                        </li>
                        <li>
                            <Link to='/delivery' >Доставка</Link>
                        </li>
                        <li>
                            <Link to='/return'>Возврат</Link>
                        </li>
                        <li>
                            <Link to='/document'>Документация</Link>
                        </li>

                        <li>
                            <Link to='/contacts'>Контакты</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="catalog" >
                <div className="logo">
                    <div className="logos">
                        <img src={eye} alt=" " />

                    </div>
                    <div className='stroyka'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                </div>

                <div className="catalogs">
                    <Link to='/cat'>
                        <button>
                            <img src={burger} alt="" />
                            <span>Каталог</span>
                        </button></Link>

                    <form >
                        <input type="text" placeholder="Поиск"  />
        {/* //                 id="before" value={searchText}
        // onChange={(e) => setSearchText(e.target.value)} */}
                        <label for="before" class="fa fa-search"> </label>
                    </form>
                </div>
                <div className="catalog-icon">
                    <div className="catalog-nav-row">
                        <div onClick={showModal} className="catalog-nav">
                            <FontAwesomeIcon icon={faUser} />
                            <Link to=''>Профиль</Link>
                        </div>
                        <Link to='/order'>
                            <div className="catalog-nav">
                                <FontAwesomeIcon icon={faCube} />
                                <span>Заказ</span>
                            </div>
                        </Link>
                        <Link to='/cart'>
                            <div className="catalog-nav" >

                                <FontAwesomeIcon icon={faCartShopping} />
                                <span>Корзина</span>
                                <span className='count'>{size}</span>

                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <hr />
            <div class="nav">
                <div class="nav-row">
                    <ul>
                        <li>Акции</li>
                        <li><Link to=''>Строительные</Link></li>
                        <li><Link to=''>Керамическая плитка</Link></li>
                        <li><Link to=''>Краски</Link></li>
                        <li><Link to=''>Сантехника</Link></li>
                        <li><Link to=''>Напольные покрытия</Link></li>
                        <li><Link to=''>Инструменты</Link></li>
                        <li> <Link to=''>Обои</Link></li>
                        <li><Link to=''>Окна</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div ref={modal} className='sign-up-bg hide'>

                <div className='iconX'><FontAwesomeIcon onClick={hideModal} icon={faXmark} /></div>
                <div className='sign-up'>

                    <h1>Вход</h1>
                    <form action="">
                        <div>
                            <label htmlFor="">E-mail</label>
                            <input type="text" placeholder='youmail@mail.com' />
                        </div>
                        <div>
                            <label htmlFor="">Пароль</label>
                            <input type="password" placeholder='****************' />
                        </div>
                        <p>Забыли пароль?</p>
                        <button className='button-card-stock button-slide'>Войти</button>


                    </form>
                    <button onClick={showReg} className='button-card-stock button-slide new-sign'>Создать учeтную запись</button>

                </div>
            </div>
            <div ref={registration} className='sign-up-bg registration-bg hide'>
                <div className='iconX'><FontAwesomeIcon onClick={hideModal} icon={faXmark} /></div>
                <div className='sign-up registration'>
                    <div className='iconArrow'><FontAwesomeIcon onClick={back} icon={faArrowLeft} /></div>
                    <h1>Регистрация</h1>
                    <form action="">
                        <div className='registration-row'>

                            <div>
                                <label htmlFor="">Имя</label>
                                <input type="text" placeholder='Илмхона' />
                            </div>
                            <div>
                                <label htmlFor="">E-mail</label>
                                <input type="text" placeholder='youmail@mail.com' />
                            </div>
                        </div>
                        <div className='registration-row'>
                            <div>
                                <label htmlFor="">Новый пароль</label>
                                <input type="password" placeholder='****************' />
                            </div>
                            <div>
                                <label htmlFor="">Подтверждение пароля</label>
                                <input type="password" placeholder='****************' />
                            </div>
                        </div>
                        <Link to='/cabinet'><button className='button-card-stock button-slide btn-regis'>Зарегистрироваться</button></Link>
                    </form>

                </div>
            </div>
            <Link to='/cart'>
                <div className="cart-icon" >
                    <p>Корзина</p>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className='count-icon'>{size}</span>

                </div>
            </Link>

            {/* {filteredProducts.map((product) => (
          <li key={product.name}>
            {product.text} - {product.price}
          </li>
        ))} */}
        </div>
    )
}
