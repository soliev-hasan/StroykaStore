import React from 'react'
import StockBetween from '../stock/StockBetween';
import Categories from './Categories'
import popularCategories from './categoriesText';


export default function CategoriesAll() {
  return (
    <div>
      <div className='categories'>
        <StockBetween
          head={popularCategories.between.headCategory}
          button={popularCategories.between.buttonCategory}
        />

        <div className='categories-cards'>
          <Categories
            name={popularCategories.name}
            src={popularCategories.dush}
          />

          <Categories
            name={popularCategories.nameP}
            src={popularCategories.polimaterial}
          />
          <Categories
            name={popularCategories.nameL}
            src={popularCategories.linoneium}
          />
          <Categories
            name={popularCategories.nameOb}
            src={popularCategories.oboi}
          />
          <Categories
            name={popularCategories.nameI}
            src={popularCategories.instruments}
          />
          <Categories
            name={popularCategories.nameT}
            src={popularCategories.tovarDacha}
          />
          <div className='categories-cards'>
            <Categories
              name={popularCategories.nameO}
              src={popularCategories.okna}
            />
            <Categories
              name={popularCategories.nameD}
              src={popularCategories.dveri}
            />
            <Categories
              name={popularCategories.nameS}
              src={popularCategories.santekhnika}
            />
            <Categories
              name={popularCategories.name}
              src={popularCategories.dush}
            />
            <Categories
              name={popularCategories.nameK}
              src={popularCategories.kraski}
            />
            <Categories
              name={popularCategories.nameIn}
              src={popularCategories.interer}
            />

          </div>
        </div>
      </div>
    </div>
  );
};
