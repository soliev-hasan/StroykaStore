import sante from '../../../img/image 88.png'
import material from '../../../img/image 48.png'
import linoneum from '../../../img/image 49.png'
import oboi from '../../../img/image 53.png'
import otoplenie from '../../../img/image 93.png'
import okno from '../../../img/image 86.png'
import kraska from '../../../img/pngwing 1.png'
import instrumenti from '../../../img/image 54.png'
import elekro from '../../../img/image 89.png'
import krepezh from '../../../img/image 94.png'
import osveshenie from '../../../img/image 95.png'
import plitka from '../../../img/image 91.png'
import { Link } from 'react-router-dom'

const cardCatalog = [
    {
        id:1,
        src:sante,
        heading:'Сантехника',
        first:'Ванны',
        second:'Комплектующие для ванн',
        third:'Душевые',
        fourth:'Унитазы и биде',
        five:'Смесители',
        sixth:'Душевое оборудование',
        seven:'Раковины',
        eigth:'Пьедесталы для раковин'
    },
    {
        id:2,
        src:material,
        heading:'Стройматериалы',
        first:<Link to='/catalog'>Сухие смеси</Link>,
        second:'Пиломатериалы',
        third:'Гипсокартон',
        fourth:'Профиль для гипсокартона',
        five:'Изоляционные материалы',
        sixth:'Армирующие материалы',
        seven:'Кровля',
        eigth:'Ленты строительные'
    },
    {
        id:3,
        src:linoneum,
        heading:'Напольные покрытия',
        first:'Линолеум',
        second:'Ламинат',
        third:'Ковролин',
        fourth:'Плинтус напольный',
        five:'Пороги',
        sixth:'Подложки',
        seven:'Ковровые дорожки',
        eigth:'Плитка ПВХ, виниловый ламинат'
    },
    {
        id:4,
        src:oboi,
        heading:'Отделка стен и потолка',
        first:'Обои',
        second:'Стеновые панели',
        third:'Плинтус потолочный',
        fourth:'Углы к потолочному плинтусу',
        five:'Потолочная плитка',
        sixth:'Профили алюминиевые',
        seven:'Декоративные молдинги, багеты',
        eigth:'Пленки самоклеящиеся'
    },
    {
        id:5,
        src:plitka,
        heading:'Керамическая плитка',
        first:'Настенная плитка',
        second:'Напольная плитка',
        third:'Керамогранит',
        fourth:'Декоративная плитка',
        five:'Системы выравнивания плитки',
        sixth:'Уголки и профили для плитки',
        seven:'Керамический плинтус',
        eigth:'Мозаика'
    },
    {
        id:6,
        src:okno,
        heading:'Двери и окна',
        first:'Межкомнатные двери',
        second:'Входные двери',
        third:'Дверные коробки',
        fourth:'Арки',
        five:'Дверные наличники',
        sixth:'Дверные доборы',
        seven:'Раздвижные двери',
        eigth:'Скобяные изделия'
    },
    {
        id:7,
        src:kraska,
        heading:'Краски',
        first:'Эмали',
        second:'Грунтовки',
        third:'Монтажные пены',
        fourth:'Герметики',
        five:'Клеи',
        sixth:'Покрытия для дерева',
        seven:'Лаки',
    },
    {
        id:8,
        src:otoplenie,
        heading:'Климат и отопление',
        first:'Радиаторы отопления',
        second:'Теплый пол',
        third:'Электрические камины',
        fourth:'Вентиляция',
        five:'Тепловое оборудование',
        sixth:'Котлы отопительныее',
        seven:'Расширительные баки',
        eigth:'Насосы циркуляционные'
    },
    {
        id:9,
        src:instrumenti,
        heading:'Инструменты',
        first:'Электроинструмент',
        second:'Расходные материалы',
        third:'Малярный инструмент',
        fourth:'Штукатурный инструмент',
        five:'Шлифовальный инструмент',
        sixth:'Измерительный инструмент',
        seven:'Шпатели',
        eigth:'Спецодежда и средства защиты'
    },
    {
        id:10,
        src:krepezh,
        heading:'Крепеж и фурнитура',
        first:'Саморезы',
        second:'Дюбель',
        third:'Гвозди',
        fourth:'Анкер',
        five:'Болты',
        sixth:'Гайки',
        seven:'Шуруп',
        eigth:'Шайбы'
    },
    {
        id:11,
        src:osveshenie,
        heading:'Освещение',
        first:'Лампы',
        second:'Люстры',
        third:'Потолочные светильники',
        fourth:'Светодиодные светильники',
        five:'Подвесные светильники',
        sixth:'Светодиодные панели',
        seven:'Бра',
        eigth:'Настольные лампы'
    },
    {
        id:12,
        src:elekro,
        heading:'Розетки и выключатели',
        first:'Кабели и комплектующие',
        second:'Телекоммуникации',
        third:'Счетчики электроэнергии',
        fourth:'Автоматические выключатели',
        five:'Электрические щитки',
        sixth:'Тройники для розетки',
        seven:'Удлинители электрические',
    },
]

export default cardCatalog;