import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Headers from '../headers/Headers'
import FaqAll from '../steps/faqs/FaqAll';
import StepAll from '../steps/StepAll';
import headerText from './text';

export default function Page3({size}) {
  return (
    <div>
        <Header size={size} />
        <Headers
        class = {headerText.page3.class}
        second = {headerText.page3.second}
        heading = {headerText.page3.heading}
        text = {headerText.page3.text}
        />
        <StepAll />
        <FaqAll />
        <Footer />
    </div>
  )
}
