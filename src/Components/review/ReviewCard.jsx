import React from 'react'
import './Review.css'

import quotes from './img/image 84 (Traced).png'


export default function ReviewCard(props) {

   

  return (
    <div>
        

            <div class="review-card">
                <div class="user">
                    <div className='review-img-row' >
                        <img src={props.src} alt="" />
                        <h4>{props.name}</h4>
                    </div>
                    <div class="d-flex align-self-start">
                        <img src={quotes} alt="" />
                    </div>
                </div>
                <div class="text-review">
                    <p >{props.text}</p>
                </div>
                <p >{props.date}</p>
            </div>
            
    </div>
  )
}
