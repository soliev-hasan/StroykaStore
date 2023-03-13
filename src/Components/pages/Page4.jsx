import React from 'react'
import Header from '../Header/Header'
import Return from '../Header/return/Return';
import ReturnAll from '../Header/return/ReturnAll';
import Step from '../steps/Step';
import StepAll from '../steps/StepAll';
import Headers from './../headers/Headers';
import headerText from './text';
import Footer from './../Footer/Footer';

export default function Page4({size}) {
    return (
        <div>
            <Header size={size} />
            <Headers
            class = {headerText.page4.class}
            second = {headerText.page4.second}
            heading = {headerText.page4.heading}
            text = {headerText.page4.text}
            />
            <ReturnAll />
            <Footer />

        </div>
    )
}
