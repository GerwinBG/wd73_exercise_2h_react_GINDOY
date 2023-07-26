import { useEffect } from "react"


function ProductInfo() {
  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo