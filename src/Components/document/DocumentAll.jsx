import React from 'react'
import Document from './Document';
import documentText from './documentText';
import './Document.css'

export default function DocumentAll() {
  return (
    <div>
        <div className='documents'>
        <Document
        src = {documentText.sdelka}
        text = {documentText.offertaText}
        />
        <Document
        src = {documentText.politika}
        text = {documentText.politikaText} />
        <Document
        src = {documentText.offerta}
        text = {documentText.offertaText} />
        </div>
       
    </div>
  )
}
