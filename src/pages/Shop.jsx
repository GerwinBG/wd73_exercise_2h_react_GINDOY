import { useEffect, useState } from "react";
import ProducItem from "../components/ProductItem";
import "../css/Shop.css";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    document.title = 'Shop'
  }, [])

  const fetchProducts = async () => {
    const res = await axios('https://fakestoreapi.com/products')
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [setProducts]);



  return (

    <div className="shop container-fluid">
      <div className="shopTitle container-fluid d-flex justify-content-evenly">
        <h1>StressDotCart</h1>
      </div>
      <div className="productContainer">
        {
          products.map(
            product => <ProducItem
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              category={product.category}
              thumbnail={product.image}
              rating={product.rating.rate}

            />
          )
        }
      </div>
    </div >
  )

}

export default Shop