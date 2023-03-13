import React from 'react'
import "./Stock.css"
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StockBetween(props) {

    let style = {
        button:{
            fontSize:"18px"
        }
    }

    return (
        
        <div>
            <div className="text-stock">
                <h1>{props.head}</h1>
                <button style={style.button}>{props.button} <FontAwesomeIcon icon={faChevronRight}/></button>
            </div>

        </div>
    )
}
