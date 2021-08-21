import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CartContext from '../contexts/cartContext.js'
import { useRouter } from 'next/router'

const Order = () => {

  const router = useRouter()

  const { cart, emptyCart } = useContext(CartContext)

  const [order, setOrder] = useState({
    name: "",
    paymentMethod: "cash",
    deliveryMethod: "courier",
    address: ""
  })

  const completeOrder = (e) => {

    e.preventDefault()

    emptyCart();
    router.push('/thankyou');

  }

  return(
    <div className="order order_disabled">
        <form className="order__form" onSubmit={(e) => completeOrder(e)}>
          <h2 className="order__heading">Order</h2>
          <input onChange={(e) => setOrder({...order, name: e.target.value})} value={order.name} className="order__textfield" type="text" maxLength="256" data-name="Name" placeholder="Your name" required />
          <input onChange={(e) => setOrder({...order, phone: e.target.value})} value={order.phone} className="order__textfield" type="text" maxLength="256" data-name="Phone number" placeholder="Phone number" required />
          <h2 className="order__subheading">Payment method</h2>
          <label className="order__radio" onClick={() => setOrder({...order, paymentMethod: 'self'})} >
            <input className="order__radio-input" type="radio" name="radio" value="cash" />
            <span className={
              order.paymentMethod == "cash" ? "order__radio-label order__radio-label_selected" : "order__radio-label"
            }>Cash</span>
          </label>

          <h2 className="order__subheading">Доставка</h2>
          <label className="order__radio" onClick={() => setOrder({...order, deliveryMethod: 'self'})} >
            <input className="order__radio-input" type="radio" name="radio" value="self" />
            <span className={
              order.deliveryMethod == "self" ? "order__radio-label order__radio-label_selected" : "order__radio-label"
            }>Pickup</span>
            <span className="order__radio-caption">Out of stock, fitting included</span>
          </label>
          
          <label className="order__radio" onClick={() => setOrder({...order, deliveryMethod: 'courier'})} >
            <input className="order__radio-input" type="radio" name="radio" value="courier" />
            <span className={
              order.deliveryMethod == "courier" ? "order__radio-label order__radio-label_selected" : "order__radio-label"
            }>Delivery</span>
          </label>
          <textarea disabled={order.deliveryMethod == "self"} onChange={(e) => setOrder({...order, address: e.target.value})} value={order.address} className="order__textarea" placeholder="Address" data-name="Address" required={order.deliveryMethod == "courier"}></textarea>
          <input disabled={cart.length === 0} className="order__complete" type="submit" value="Complete order" />
        </form>
    </div>
  )

}

export default Order
