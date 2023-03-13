import React from 'react'
import './Contacts.css'
import map from './image 2.png'

export default function Contacts() {
    return (
        <div>
            <div className='img-map'>
                <img src={map} alt="" />
            </div>
            <div className='text-contacts'>
                <h1>ООО «СтройкаСтор»</h1>
                <div className='text-contacts-row'>
                    <div className='text-contact'>
                        <p>115114, г. Москва, Дербеневская <br />набережная, д. 7, стр. 8</p>
                        <p>Павелецкая<br />
                            Автобусы 13, 106, 158, 184, 632<br />
                            Остановка «Дербеневская наб., д. 7»</p>
                    </div>
                    <div className='text-contact'>
                        <p>ОГРН: 1047796688554 <br />
                            ИНН 7703528301<br />
                            КПП 774850001<br />
                            ОКТМО 45380000<br />
                            ОГРН 1047796688554<br />
                            Расчетный рублевый счет: 40702810900001403352<br />
                            Банк: АО «Сбербанк» г. Москва<br />
                            Корреспондентский счет: 30101810200000000700<br />
                            БИК: 044525700</p>
                    </div>
                    <div className='text-contact'>
                        <p>Поддержка клиентов<br />
                            info@stroykastore.ru</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
