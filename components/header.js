import Link from 'next/link'
import { useContext } from 'react'
import CartContext from '../contexts/cartContext.js'

const Header = (props) => {

  const { cart } = useContext(CartContext)

  const calculateTotalPrice = () => {

    const total = cart.reduce((res, current) => {
      return res += (current.quantity * current.price)
    }, 0)
    return Math.round(total * 100) / 100

  }

  return(
    <header className="header">
      <Link href="/">
        <a className="header__logo">
          <img className="header__logo-image" src="/assets/images/logo.svg" alt="Логотип" />
        </a>
      </Link>
      <Link href="/checkout">
        <a className="header__cart-link">
          <div className="header__cart-link-text">Cart</div>
          <img className="header__cart-link-image" src="/assets/images/shopping-cart.svg" alt="" />
          <div className="header__cart-link-total">{`${calculateTotalPrice()} €`}</div>
        </a>
      </Link>
    </header>
  )
}

export default Header
