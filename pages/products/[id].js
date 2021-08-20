import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import AddToCart from '../../components/addtocart.js'
import axios from 'axios';
import ProductContext from '../../contexts/productContext.js'
import CartContext from '../../contexts/cartContext.js'
import { useContext } from 'react';

const Product = (props) => {

  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart(props.product);
  }

  return(

    <>

      <Header />

      <div className="product-item">
      <img className="product-item__image" src={props.product.image} />
        <div className="product-item__info">
          <h2 className="product-item__heading">{props.product.title}</h2>
          <div className="product-item__description"><span>{props.product.description}</span></div>
          <ProductContext.Provider value={ { addToCartHandler } }>
            <AddToCart id={props.product.id} price={props.product.price} />
          </ProductContext.Provider>
        </div>
      </div>

      <Footer />

    </>

  )

}

export async function getServerSideProps(context) {
  const res = await axios.get(`https://fakestoreapi.com/products/${context.params.id}`);
  return {
    props: {
      product: res.data
    }
  }
}

export default Product;
