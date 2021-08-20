import Link from 'next/link'
import { useContext } from 'react'
import CartContext from '../contexts/cartContext.js'
import CartItem from './cartItem.js'

const Cart = () => {

  const { cart } = useContext(CartContext)

  const calculateTotalPrice = () => {
    
    const total = cart.reduce((res, current) => {
      return res += (current.quantity * current.price)
    }, 0)
    return Math.round(total * 100) / 100

  }

  const renderCartItems = () => {

    return cart.map((el, index) => {
      return <CartItem key={index} product={el} />
    })

  }

  const renderEmpty = () => {

    return(
      <div className="empty-cart">
        <img src="/assets/images/empty-card.svg" />
        <h2>There is not any items</h2>
      </div>
    )

  }

  return(
    <div className="cart">
      <h2 className="cart__heading">Cart</h2>
      <div className="cart__items">
        { cart.length != 0 ? renderCartItems() : renderEmpty() }
      </div>
      <div className="cart__total">
        <div className="cart__total-label">Shipping: +10 €</div>
        <h2 className="cart__total-price">{`${calculateTotalPrice()} €`}</h2>
      </div>
    </div>
  )

}

export default Cart
