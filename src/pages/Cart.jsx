import { useEffect } from "react"


function Cart() {
  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <div>Cart</div>
  )
}

export default Cart