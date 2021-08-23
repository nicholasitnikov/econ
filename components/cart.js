import Link from 'next/link'
import { useContext } from 'react'
import CartContext from '../contexts/cartContext.js'
import CartItem from './cartItem.js'

const Cart = () => {

  const { cart } = useContext(CartContext)

  const calculateTotalPrice = () => {
    
    const total = cart.reduce((res, current) => {
      return res += (current.quantity * parseInt(current.price))
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
        <img className="empty-cart__icon" src="/assets/images/empty-card.svg" />
        <h2 className="empty-cart__heading">В корзине нет товаров</h2>
      </div>
    )

  }

  return(
    <div className="cart">
      <h2 className="cart__heading">Корзина</h2>
      <div>{ cart.length === 0 && renderEmpty() }</div>
      <div className="cart__items">
        { cart.length > 0 && renderCartItems()} 
      </div>
      { cart.length > 0 &&
        <div className="cart__total">
          <div className="cart__total-label">Доставка: +150 ₽</div>
          <h2 className="cart__total-price">{`${calculateTotalPrice()} ₽`}</h2>
        </div>
      }
    </div>
  )

}

export default Cart
