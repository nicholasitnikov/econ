/* _app.js */
import React, { useState, useEffect, useContext, useReducer } from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CartReducer from '../reducers/cartReducer.js'
import CartContext from '../contexts/cartContext.js'

const MyApp = (props) => {

  useEffect(() => {
    const initialCart = localStorage.getItem('cart') == null ? [] : localStorage.getItem('cart')
    if(initialCart.length != 0) {
      dispatch({ type: 'LOAD_CART', payload: initialCart })
    }
  },[0])

  const [cart, dispatch] = useReducer(CartReducer, []);
  const { Component, pageProps } = props;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cartItem) => {

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

  }

  const decreaseQuantity = (id) => {

    dispatch({ type: 'DECREASE_QUANTITY', payload: id })

  }

  const increaseQuantity = (id) => {

    dispatch({ type: 'INCREASE_QUANTITY', payload: id })

  }

  const emptyCart = () => {

    dispatch({ type: 'EMPTY_CART' })

  }

  return (
    <>
        <Head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="yandex-verification" content="2645a35e0e15e619" />
          <link href="/pages/index.css" rel="stylesheet" type="text/css" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript" />
          <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="/images/webclip.png" rel="apple-touch-icon" />
        </Head>

        <CartContext.Provider value={{ addToCart, cart, decreaseQuantity, increaseQuantity, emptyCart }}>
          <Component {...pageProps} />
        </CartContext.Provider>
    </>
  );

}

export default MyApp;
