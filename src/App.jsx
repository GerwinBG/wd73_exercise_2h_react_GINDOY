import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import { Provider } from "react-redux"
import { store } from "./store/store"
import "./css/App.css"
import ProductInfo from "./pages/ProductInfo"




function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/ProductInfo" element={<ProductInfo />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
