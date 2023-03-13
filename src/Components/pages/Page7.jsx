import React from 'react'
import Footer from '../Footer/Footer'
import Cabinet from '../Header/cabinet/Cabinet'
import Header from '../Header/Header'

export default function Page7({size}) {
  return (
    <div>
        <Header size={size} />
        <Cabinet />
        <Footer />

    </div>
  )
}
