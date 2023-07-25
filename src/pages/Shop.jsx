import { useEffect, useState } from "react";
import ProducItem from "../components/ProductItem";
import "./Shop.css"
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

function Shop() {
  const [products, setProducts] = useState([])
  const cartItemCount = useSelector((state) => state.cartItemCount)

  useEffect(() => {
    document.title = 'Shop'
  }, [])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [setProducts]);



  return (

    <div className="shop container-fluid">
      <div className="shopTitle container-fluid d-flex justify-content-evenly">
        <h1>StressDotCart</h1>
      </div>
      <div className="">
        <ShoppingCart size={32} /><span>Cart({cartItemCount})</span>
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