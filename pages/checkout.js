import Header from '../components/header.js'
import Cart from '../components/cart.js'
import Order from '../components/order.js'
import Footer from '../components/footer.js'

const Checkout = (props) => {

  return(

    <>

      <Header />

      <div className="checkout">
        <Cart />
        <Order />
      </div>

      <Footer />

    </>

  )

}

export default Checkout
