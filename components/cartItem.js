import CartContext from '../contexts/cartContext.js'
import { useContext } from 'react'
import Link from 'next/link'

const CartItem = (props) => {

  const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  return(<>
      <img className="cart__item-image" src={`/products/images/${props.product.image}`} alt="" />
      <div className="cart__item-heading">
        <Link href={"/products/" + props.product.id}>
          <a className='cart__item-heading-link'>{ `${props.product.brand} ${props.product.name}` }</a>
        </Link>
      </div>
      <div className="cart__item-quantity">
        <span className="cart__item-quantity-control cart__item-quantity-control_icon_minus" onClick={() => decreaseQuantity(props.product)}></span>
        <span className="cart__item-quanity-value">{ props.product.quantity }</span>
        <span className="cart__item-quantity-control cart__item-quantity-control_icon_plus" onClick={() => increaseQuantity(props.product)}></span>
      </div>
      <div className="cart__item-price">{`${parseInt(props.product.price)} ₽`}</div>
  </>)

}

export default CartItem
