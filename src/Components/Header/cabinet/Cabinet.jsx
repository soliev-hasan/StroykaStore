import React from 'react'
import './Cabinet.css'

export default function Cabinet() {
    return (
        <>
            <div className='cabinet'>
                <h1>Личный кабинет</h1>
                <div className='information'>
                    <h2>Личная информация</h2>
                    <div className='information-inputs'>
                        <div className='input-column'>
                            <label htmlFor="">Имя</label>
                            <input type="text" placeholder='Harry' />
                        </div>
                        <div className='input-column'>
                            <label htmlFor="" >Фамилия</label>
                            <input type="text" placeholder='Potter' />
                        </div>
                    </div>
                    <div className='information-inputs'>
                        <div className='input-column'>
                            <label htmlFor="">Дата рождения</label>
                            <input type="text" placeholder='12.02.2022' />
                        </div>
                        <div className='input-column'>
                            <label htmlFor="" >Телефон</label>
                            <input type="text" placeholder='+992(918)61-61-61' />
                        </div>

                    </div>
                    <div className='information-inputs'>
                        <div className='input-column'>
                            <label htmlFor="">E-mail</label>
                            <input className='input-email' type="text" placeholder='example@gmail.com' />
                        </div>
                    </div>
                    <div className='information-inputs'>
                        <div className='input-column'>
                            <label htmlFor="">Новый пароль</label>
                            <input type="text" placeholder='****************' />
                        </div>
                        <div className='input-column'>
                            <label htmlFor="" >Подтверждение пароля</label>
                            <input type="text" placeholder='****************' />
                        </div>
                    
                    </div>
                    <button className='button-slide'>Сохранить</button>


                </div>
            </div>


        </>
    )
}
