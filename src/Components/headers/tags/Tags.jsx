import React, { useRef } from 'react'
import tag from './tag'
import './Tags.css'
import { Link } from 'react-router-dom';


export default function Tags({item}) {
    let span = useRef()


    let brands = tag.map(item => item.brand)
    let {id, brand} = item

  return (
    <div>

    <span >{item.brand}</span>


    </div>
  )
}
