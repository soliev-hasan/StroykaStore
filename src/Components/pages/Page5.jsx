import React from 'react'
import Header from '../Header/Header'
import Headers from './../headers/Headers';
import headerText from './text';
import Document from './../document/Document';
import DocumentAll from '../document/DocumentAll';
import Footer from '../Footer/Footer';

export default function Page5({size}) {
  return (
    <div>
        <Header size={size} />
        <Headers 
        class = {headerText.page5.class}
        second = {headerText.page5.second} 
        heading = {headerText.page5.heading}
        />
        <DocumentAll />
        <Footer />
       
    </div>
  )
}
