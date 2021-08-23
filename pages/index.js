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
        <title>Econ Store — best smells from local perfumers</title>
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
  const products = await axios.get('http://localhost:3000/api/products');
  const categories = products.data.reduce((res, current) => {
    return res.includes(current.category) ? res : res.concat(current.category);
  }, [])

  return {
    props: {
      products: products.data,
      categories
    }
  }
}

export default Home
