import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import CategoriesContext from '../contexts/categoriesContext.js'

const Categories = (props) => {
  
  const {addFilter, cleanFilters} = useContext(CategoriesContext)

  const selectCategory = (e) => {
    addFilter(e.target.textContent);
  }

  const renderCategoriess = () => {
    return props.categories.map((el, index) => {
      return <a key={index} className={props.filter.includes(el) ? 'categories__element categories__element_theme_dark' : 'categories__element'} onClick={(e) => selectCategory(e)}>{el}</a>
    })

  }

  return(
    <div className="categories">
      { renderCategoriess() }
      { props.filter.length > 0 && <a onClick={() => cleanFilters()} className='categories__filter-clean'>Clean filters</a> }
    </div>
  )

}

export default Categories
