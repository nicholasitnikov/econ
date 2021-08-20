import Header from '../components/header.js'
import Footer from '../components/footer.js'


const Thankyou = () => {

  return(
    <div className="space-between">
      <Header />
      <section className="thankyou">
        <h2 className="thankyou__heading">Thank you, your order has been created</h2>
      </section>
      <Footer />
    </div>
  )

}

export default Thankyou
