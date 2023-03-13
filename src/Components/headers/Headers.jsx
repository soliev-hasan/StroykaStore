import React from 'react'
import { Link } from 'react-router-dom'
import './Headers.css'

export default function Headers(props) {

  let style = {
    p:{
      width:'400px'
    },
    a:{
      textDecoration:'none',
      color:'black'
    },
    h1:{
      fontSize:'48px',
      margin:'0'
    }
  

  }

  return (
    <div>
      <section class={props.class}>
        <div class="text-header-brands">
           <p> <Link style={style.a} to='/' >Главная</Link> -{'>'} {props.second}</p>
            <h1 style={style.h1}>{props.heading}</h1>
            <p style={style.p}>{props.text}</p>
        </div>
    </section>

    </div>
  )
}
