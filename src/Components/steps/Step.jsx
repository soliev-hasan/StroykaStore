import React from 'react'
import './Step.css'


export default function Step(props) {
  return (
    <div>
    
            <div class="step">
                <img src={props.src} alt="" />
                <p>{props.text}</p>
            </div>

    </div>
  )
}
