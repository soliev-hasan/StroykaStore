import React from 'react';
import Return from './Return';
import returnText from './returnText';

export default function ReturnAll() {
  return (
    <div>
        <section className='return-section'>
    <Return 
    heading = {returnText.headingFirst}
    text1 = {returnText.p1}
    text2 = {returnText.p2}
    text3 = {returnText.p3}
    text4 = {returnText.p4}
    />
      <Return 
    heading = {returnText.second.headingSecond}
    text1 = {returnText.second.p}
    />
      <Return 
    heading = {returnText.third.headingThird}
    text1 = {returnText.third.p1}
    text2 = {returnText.third.p2}
    text3 = {returnText.third.p3}
    text4 = {returnText.third.p4}
    />
    

        </section>

    </div>
  )
}
