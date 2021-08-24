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
      <img className="product-item__image" src={`/products/images/${props.product.image}`} />
        <div className="product-item__info">
          <span className='product-item__caption'>${props.product.caption}</span>
          <h2 className="product-item__heading">{`${props.product.brand} ${props.product.name}`}</h2>
          <div className="product-item__description">{props.product.description}</div>
          <div className="product-item__description">{`Состав: ${props.product.composition}`}</div>
          <div className="product-item__description">{`Меры предосторожности: ${props.product.precautionary}`}</div>
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
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://econ.store' : 'http://localhost:3000';
  const res = await axios.get(`${baseUrl}/api/products/${context.params.id}`);
  return {
    props: {
      product: res.data
    }
  }
}

export default Product;
