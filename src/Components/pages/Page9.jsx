import headerText from './text';
import React from 'react'
import Header from './../Header/Header';
import Headers from './../headers/Headers';
import ProductCatalogAll from '../productCatalog/ProductCatalogAll';
import Footer from './../Footer/Footer';

export default function Page9({data,sortAlphabet, filter, setData,fil2, fil, size, handleClick,modal,}) {
    return (
        <div>
            <Header size={size}  />
            <Headers
            class={headerText.page9.class}
            second={headerText.page9.second}
            heading={headerText.page9.heading}
            />
            <ProductCatalogAll  sortAlphabet={sortAlphabet}  modal={modal} filter={filter} fil2={fil2} fil={fil} handleClick={handleClick} setData={setData} data={data} />
            <Footer />

        </div>
    )
}
