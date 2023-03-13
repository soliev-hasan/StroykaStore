import React from 'react'
import Step from './Step'
import './Step.css'
import step from './stepImg';

export default function StepAll() {
  return (
    <div>
        <section className='section-steps'>
            <div>
        <h2>Как сделать заказ: 4 простых шага</h2>
        <div className='step-row'>
        <Step 
            src = {step.cart}
            text = {step.cartText}
            
            />
            <Step
             src = {step.dong}
             text = {step.dongText}
            />
            <Step
             src = {step.cube}
             text = {step.cubeText}
            />
            <Step 
             src = {step.location}
             text = {step.locationText}
            />  
        </div>
        </div>
       
        </section>
        
    

    </div>
  )
}
