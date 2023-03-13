import img from "./img/Image.png"
import img2 from "./img/Image (1).png"
import img3 from "./img/Image (2).png"
import img4 from "./img/Image (3).png"
import yasmin from './img/Image (4).png'
import cresit from './img/Image (5).png'
import gruntovka from './img/Image (6).png'
import gips from './img/Image (7).png'
import profil from './img/Image (8).png'
import ruletka from './img/Image (9).png'
import knaufShtukaturka from './img/Image (10).png'
import ugolok from './img/Image (11).png'
import knaufRotband from './img/Image (12).png'
import samorez from './img/Image (13).png'
import superFinish from './img/Image (14).png'
import scoth from './img/Image (15).png'
import ProductCatalog from './Components/productCatalog/ProductCatalog';
import first from './img/product/Image (0).png'
import second from './img/product/Image (1).png'
import third from './img/product/Image (2).png'
import fourth from './img/product/Image (3).png'
import five from './img/product/Image (4).png'
import sixth from './img/product/Image (5).png'
import seven from './img/product/Image (6).png'
import eight from './img/product/Image (7).png'
import nine from './img/product/Image (8).png'
import ten from './img/product/Image (9).png'
import eleven from './img/product/Image (10).png'
import twelve from './img/product/Image (11).png'
import thirteen from './img/product/Image (12).png'
import fourteen from './img/product/Image (13).png'
import fiveteen from './img/product/Image (14).png'
import sixteen from './img/product/Image (15).png'
import seventeen from './img/product/Image (16).png'
import eighteen from './img/product/Image (17).png'


export const items = [
    {
        id: 19,
        src: img,
        text: 'Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)',
        price: 449,
        sPrice: 499,
        count: 1
    },
    {
        id: 20,
        src: img2,
        text: 'Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная',
        price: 495,
        sPrice: 600,
        count: 1
    },
    {
        id: 21,
        src: img3,
        text: 'Сетка "Рабица" яч. 50х50/1,5х10 м-ОЦ)',
        price: 1499,
        sPrice: 1890,
        count: 1
    },
    {
        id: 22,
        src: img4,
        text: 'Металлочерепица, цвет коричневый, 1.18 х 1.15 м',
        price: 769,
        sPrice: 999,
        count: 1
    },
]
export const itemsPopular = [

    {
        id: 23,
        src: yasmin,
        text: 'Керамогранит Yasmin 598х185 коричневый C-YA4M112D',
        price: 899,
        count: 1
    },
    {
        id: 24,
        src: cresit,
        text: 'Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг',
        price: 275,
        count: 1
    },
    {
        id: 25,
        src: gruntovka,
        text: 'Грунтовка Старатели 10л глубокого проникновения',
        price: 839,
        count: 1
    },
    {
        id: 26,
        src: gips,
        text: 'Гипсокартон Волма, 2500 х 1200 х 12,5 мм',
        price: 335,
        count: 1
    },
    {
        id: 27,
        src: profil,
        text: 'Профиль 0,55мм для гипсокартона',
        price: 195,
        count: 1
    },
    {
        id: 28,
        src: ruletka,
        text: 'Рулетка 3м',
        price: 100,
        count: 1
    },
    {
        id: 29,
        src: knaufShtukaturka,
        text: 'Кнауф Мп 75 штукатурка гипсовая МН 30кг)',
        price: 380,
        count: 1
    },
    {
        id: 30,
        src: ugolok,
        text: 'Уголок серый канализационный Д110 ГР90',
        price: 508,
        count: 1
    },
    {
        id: 31,
        src: knaufRotband,
        text: 'Knauf Ротбанд, 30 кг',
        price: 340,
        count: 1
    },
    {
        id: 32,
        src: samorez,
        text: 'Саморез по металлу 3,5х25 мм для гипсокартона',
        price: 340,
        count: 1
    },
    {
        id: 33,
        src: superFinish,
        text: 'Шпатлевка универсальная Danogips SuperFinish 17 л',
        price: 2555,
        count: 1
    },
    {
        id: 34,
        src: scoth,
        text: 'Клейкая лента металлизированная Изоспан FL 5х5000 см',
        price: 226,
        count: 1
    }
]

export const productCatalog = [
    {
        id: 1,
        src: first,
        text: 'Шпатлевка масляно-клеевая 3кг Л-С',
        price: '212',
        popular: 'yes', 
        count: 1
    },
    {
        id: 2,
        src: second,
        text: 'Штукатурка цементная толстослойная PLITONIT Т1+ 25 кг',
        price: '349',
        popular: 'no',
        count: 1
    },
    {
        id: 3,
        src: third,
        text: 'Штукатурка гипсовая Волма Слой, 5 кг',
        price: '229',
        count: 1


    },
    {
        id: 4,
        src: fourth,
        text: 'Клей плиточный Дауэр Кварц Dauer Quartz 25кг',
        price: '490',
        popular: 'yes',
        count: 1
    },
    {
        id: 5,
        src: five,
        text: 'Клей плиточный Dauer Maxi Дауэр Макси 25кг толстослойный',
        price: '470',
        popular: 'no',
        count: 1
    },
    {
        id: 6,
        src: sixth,
        text: 'Кнауф МП 75 штукатурка гипсовая МН 30кг',
        price: '380',
        popular: 'yes',
        count: 1
    },
    {
        id: 7,
        src: seven,
        text: 'Штукатурка гипсовая Основит Т-25 Гипсвэлл',
        price: '295',
        popular: 'yes',
        count: 1
    },
    {
        id: 8,
        src: eight,
        text: 'Затирка CERESIT CE33 (ЦЕРЕЗИТ СЕ33) розовая (2 кг)',
        price: '250',
        popular: 'no',
        count: 1
    },
    {
        id: 9,
        src: nine,
        text: 'Основит PG 35 W (Т-35) Экосилк Шпатлевка гипсовая белая (20 кг)',
        price: '320',
        popular: 'yes',
        count: 1
    },
    {
        id: 10,
        src: ten,
        text: 'Клей гипсовый монтажный Knauf Перлфикс 30 кг',
        price: '425',
        popular: 'no',
        count: 1
    },
    {
        id: 11,
        src: eleven,
        text: 'Шпатлевка готовая финишная Sheetrock Danogips SuperFinish 17 л',
        price: '2200',
        popular: 'yes',
        count: 1
    },
    {
        id: 12,
        src: twelve,
        text: 'Грунтовка Knauf Тифенгрунд морозостойкая 10 кг',
        price: '969',
        popular: 'no',
        count: 1
    },
    {
        id: 13,
        src: thirteen,
        text: 'Грунтовка Knauf Тифенгрунд морозостойкая 10 кг',
        price: '315',
        popular: 'yes',
        count: 1
    },
    {
        id: 14,
        src: fourteen,
        text: 'Шпатлевка финишная полимерная Litokol Litofinish Fine белая 20 кг',
        price: '976',
        popular: 'no',
        count: 1
    },
    {
        id: 15,
        src: fiveteen,
        text: 'Штукатурка гипсовая Perfekta Гипстар серая 30 кг',
        price: '502',
        popular: 'yes',
        count: 1
    },
    {
        id: 16,
        src: sixteen,
        text: 'Штукатурка цементная высокопрочная Hands Socle PRO, 24 кг',
        price: '265',
        popular: 'no',
        count: 1
    },
    {
        id: 17,
        src: seventeen,
        text: 'Смесь М-200 монтажно-кладочная, Baumax (50 кг)',
        price: '289',
        popular: 'no',
        count: 1
    },
    {
        id: 18,
        src: eighteen,
        text: 'Клей плиточный (C0) BUILDER КП-500 25 кг.',
        price: '302',
        popular: 'no',
        count: 1
    },
]