import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import '../css/Product.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartItemCountReducer"



function Product() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const dispatch = useDispatch()
  const [multiple, setMultiple] = useState(0)

  function handleClick() {
    dispatch(addToCart(1 * multiple))
  }

  function handleValueChange(e) {
    setMultiple(e.target.value)
  }

  const fetchItem = async () => {
    const res = await axios(`https://fakestoreapi.com/products/${id}`)
    setItem(res.data)
  }

  useEffect(() => {
    fetchItem()
  }, [])

  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <>
      <div className="container m-5">
        <Link to="/" className="btn border">Back</Link>
        <div className="itemCard">
          <div className="imgContainer">
            <img src={item.image} />
          </div>
          <div className="itemInfo">
            <h4>{item.title}</h4>
            <p className="price"><b>₱ {item.price}</b></p>
            <p><b>Category: </b>{item.category}</p>
            <p><b>Description: </b>{item.description}</p>
            <button onClick={handleClick}>Add to Cart</button>
            <input type="number" onChange={handleValueChange} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product