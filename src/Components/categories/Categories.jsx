import React from 'react'
import './Categories.css'

export default function Categories(props) {
  return (
    <div>
      <div class="categories-card">
        <p>{props.name}</p>
        <img src={props.src} alt="" />
      </div>

    </div>
  )
}
