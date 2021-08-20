import { useState, useContext } from 'react'
import ProductContext from '../contexts/productContext.js'

const Options = (props) => {

  const [currentOption, setCurrentOption] = useState(0)
  const { optionsHandler } = useContext(ProductContext)

  const clickHandler = (e) => {

    const currentOption = parseInt(e.target.getAttribute("data-key"))

    setCurrentOption(currentOption)
    optionsHandler(props.data.split(',')[currentOption])
  }

  const renderOptions = (data) => {

    let content = []

    for (var i = 0; i < data.length; i++) {
      content.push(<div key={i} data-key={i} onClick={ (e) => clickHandler(e) } className={ i == currentOption ? "option selected" : "option" }>{data[i]}</div>)
    }

    return content;

  }

  return(
    <div className="options">
      { renderOptions(props.data.split(',')) }
    </div>
  )

}

export default Options
