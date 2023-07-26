import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/Navbar.css";

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cartItemCount)

  return (
    <nav className="navbar bg-dark px-4">
      <h2>BG'Store</h2>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart"><ShoppingCart size={32} /><span>Cart({cartItemCount})</span></Link>
      </div>
    </nav >
  );
}

export default Navbar;