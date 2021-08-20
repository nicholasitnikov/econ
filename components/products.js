
import Product from './product.js'

const renderProducts = (products, filter) => {

  const filtered = products.filter((el) => filter.length > 0 ? filter.includes(el.category) : true)

  return filtered.map((el) => {
    return <Product key={el.id} product={el} />
  })

}



const Products = (props) => {

  return(
    <div className="products">
      {renderProducts(props.products, props.filter)}
    </div>
  )

}

export default Products
