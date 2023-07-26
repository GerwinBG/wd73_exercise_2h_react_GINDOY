import { Star } from "phosphor-react"
import { useEffect } from "react"
import '../css/Cart.css'


function Cart() {
  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <div>
      <div className="checkOutBox container border shadow">
        <div className="innerLeftCOB">
          <input type="checkbox" id="productName" name="productName" />
          <label htmlFor="productName"><img src="" alt="" /> <Star /></label><br />
        </div>

        <div className="innerRightCOB">
          <div className="title">
            <h5 className="productName">Name</h5>
          </div>
          <div className="costQty">
            <span>₱ 00.00</span>
            <span>Qty:</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart