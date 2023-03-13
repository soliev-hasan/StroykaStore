import React from 'react'
import Cart from '../cart/Cart';
import Header from '../Header/Header'
import CardCatalogAll from '../headers/cardsCatalog/CardCatalogAll';
import TagsAll from '../headers/tags/TagsAll';
import Headers from './../headers/Headers';
import headerText from './text';
export default function Page8({size}) {

  return (
    <div>
      <Header size={size} />
      <Headers
        class={headerText.page8.class}
        heading={headerText.page8.heading}
        second={headerText.page8.heading}
      />
      <TagsAll />
      <CardCatalogAll />


    </div>
  )
}
