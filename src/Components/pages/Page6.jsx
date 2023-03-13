import React from 'react'
import About from '../about/About';
import Contacts from '../contacts/Contacts';
import Header from '../Header/Header'
import Headers from './../headers/Headers';
import headerText from './text';
import Footer from './../Footer/Footer';

export default function Page6({size}) {
  return (
    <div>
        <Header size={size} />
        <Headers 
        class = {headerText.page6.class}
        second = {headerText.page6.second}
        heading = {headerText.page6.heading}
        />
        <Contacts />
        <About />
        <Footer />

    </div>
  )
}
