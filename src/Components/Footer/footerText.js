import { Link } from "react-router-dom";

let links = {
    cabinet:'Личный кабинет',
    zakaz:'Заказы',
    favorite:'Избранное',
    cart:'Корзина',
    catalog:'Каталог',
    stock:'Акции',
    brands:<Link to='/brands'>Бренды</Link> ,
    contacts:'Контакты',
    stay:'Стать продавцом',
    delivery:<Link to='/delivery'>Доставка</Link> ,
    vozvrat:<Link to='/return'>Возврат</Link> ,
    document:<Link to='/document'>Документация</Link> ,
}

export default links;