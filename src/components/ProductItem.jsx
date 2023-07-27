import { useDispatch } from "react-redux";
import "../css/ProductItem.css";
import { addToCart } from "../store/cartItemCountReducer";
import { Link } from "react-router-dom";

function ProducItem(props) {
  const { id, title, price, category, thumbnail, rating } = props;
  const dispatch = useDispatch()


  function handleClick() {
    dispatch(addToCart(1))
  }

  return (
    <div className="card border p-2 m-2 shadow">
      <Link to={`/Product/${id}`}>
        <img src={thumbnail} className="card-img-top" />
        <hr />
        <div className="cardBody">
          <h5 className="card-title">{title}</h5>
        </div>
      </Link>
      <div className="cardDetails">
        <p className="category"><b>Category:</b> {category}</p>
        <p className="cardText ms-4 fw-bold">₱ {price}</p>
        <p className="rating"><b>Rating:</b> {rating} </p>
        <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
      </div>
    </div >
  );
}

export default ProducItem;