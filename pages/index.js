import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Hero from '../components/hero.js';
import Header from '../components/header.js'
import Categories from '../components/categories.js'
import Products from '../components/products.js'
import Footer from '../components/footer.js'
import CategoriesContext from '../contexts/categoriesContext.js'


const Home = (props) => {

  const [filter, setFilter] = useState('');

  const addFilter = (data) => {
    setFilter([...filter, data]);
  }

  const cleanFilters = () => {
    setFilter([]);
  }

  return(
    <>  
      <Head>
        <title>Econ Store — basic clothes from local designers</title>
      </Head>
      <Header withHero></Header>
      <Hero />
      <CategoriesContext.Provider value={ {addFilter, cleanFilters} }>
        <Categories filter={filter} categories={props.categories} />
      </CategoriesContext.Provider>
      <Products products={props.products} filter={filter} />
      <Footer />
    </>
  )

}

export async function getServerSideProps() {
  const products = await axios.get('https://fakestoreapi.com/products/');
  const categories = await axios.get('https://fakestoreapi.com/products/categories');

  return {
    props: {
      products: products.data,
      categories: categories.data
    }
  }
}

export default Home
