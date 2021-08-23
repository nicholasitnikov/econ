import { useContext } from 'react'
import ProductContext from '../contexts/productContext.js'
import CartContext from '../contexts/cartContext.js'

const findProductInCart = (id, cart) => {

  return cart.filter((el) => el.id === id)[0];

}

const AddToCart = (props) => {

  const {addToCartHandler} = useContext(ProductContext)
  const { cart } = useContext(CartContext)

  const onClickHandler = () => {
    addToCartHandler()
  }

  if(findProductInCart(props.id, cart)) {

    return(
      <a className="add-to-cart add-to-cart_theme_dark" onClick={onClickHandler}>
        <div className="add-to-cart__text add-to-cart__text_theme_dark">В корзине</div>
        <div className="add-to-cart__label add-to-cart__label_theme_dark">{ parseInt(props.price) } ₽</div>
        <div className="add-to-cart__label add-to-cart__label_theme_dark">x {findProductInCart(props.id, cart).quantity}</div>
      </a>
    )

  } else {

    return(
      <a className="add-to-cart" onClick={onClickHandler}>
        <div className="add-to-cart__text">Добавить в корзину</div>
        <div className="add-to-cart__price">{ parseInt(props.price) } ₽</div>
      </a>
    )

  }



}

export default AddToCart
