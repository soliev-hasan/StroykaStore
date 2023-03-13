import React from 'react'
import "./Slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react/cjs/react.development';
import slider from './slideText';
import { useState } from 'react';


export default function Slider(props) {
    let style = {
        h1: {
            fontSize: '48px',
            margin: "0"
        },
        p: {
            margin: "0",
            width:'700px'
        }
    }

let slide = useRef(),
    [name, setName] = useState('Специальные '),
    [ras, setRas] = useState ('предложения'),
    [para, setPara] = useState('на строительные материалы '),
    [para2, setPara2] = useState('и товары для ремонта '),
    [para3, setPara3] = useState('')



function sliders () {
    
    if(slide.current.classList.contains('slide')){
        slide.current.style.opacity = 0; 
        slide.current.style.transition ='800ms' ; 
       setTimeout(() => {
        slide.current.style.opacity = 100; 
        slide.current.style.transition ='800ms' ; 
        slide.current.classList.remove('slide')
        slide.current.classList.add('slide2')
        setName(name = slider.slide2)
        setRas(ras = slider.inst)
        setPara(para = '«СтройкаСтор» стремится сделать условия покупки')
        setPara2(para2 = 'максимально выгодными для каждого покупателя, поэтому')
        setPara3(para3 = ' на сайте регулярно появляются товары со скидкой')
        
      
       }, 500);
    }else if ( slide.current.classList.contains('slide2')) {
        slide.current.style.opacity = 0; 
        slide.current.style.transition ='800ms' ; 
       setTimeout(() => {
        slide.current.style.opacity = 100; 
        slide.current.style.transition ='800ms' ; 
        slide.current.classList.remove('slide2')
        slide.current.classList.add('slide')
        setName(name = slider.slide1)
        setRas(ras = slider.pred)
        setPara(para = 'на строительные материалы')
        setPara2(para2 = 'и товары для ремонта')
        setPara3(para3 = '')
       }, 500);
      };
};



    return (
        <div>
            <section className='slider'>
                    <div ref={slide} className="slide">
                        <div class="text-slide">
                            <h1 style={style.h1}>{name} <br /> {ras} </h1>
                            <p style={style.p}>{para} <br /> {para2} <br /> {para3}</p>
                        </div>
                        <div class="buttons-slide-row">
                            <button class="button-slide">Подробнее</button>
                            <div class="buttons-slide">
                                <button onClick={sliders}> <FontAwesomeIcon icon={faArrowLeft} /></button>
                                <button onClick={sliders} class="fa fa-arrow-right"> <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                        </div>


                    </div>

            


            </section>
        </div>
    )
}
