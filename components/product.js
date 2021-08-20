import { useState,useContext } from 'react'
import Link from 'next/link'
import AddToCart from './addtocart.js'
import Options from './options.js'
import ProductContext from '../contexts/productContext.js'
import CartContext from '../contexts/cartContext.js'

const Product = (props) => {

  // const [option, setOption] = useState(props.product.options.split(',')[0])
  const { addToCart, cart } = useContext(CartContext)

  const addToCartHandler = () => {

    addToCart(props.product);

  }

  const optionsHandler = (selectedOption) => {

    setOption(selectedOption)

  }

  // <Options data={ props.product.options } />

  return(
    <div className="product" key={props.product.id}>
      <Link href={"/products/" + props.product.id}>
        <img className="product__image" src={props.product.image} />
      </Link>
      <Link href={"/products/" + props.product.id}><a className="product__heading-link">
        <h2 className="product__heading">{ props.product.title }</h2>
      </a></Link>
      <ProductContext.Provider value={ {addToCartHandler, optionsHandler} }>     
        <AddToCart id={props.product.id} price={props.product.price} />
      </ProductContext.Provider>
    </div>
  )

}

export default Product
