import { useDispatch } from "react-redux";
import "./ProductItem.css";
import { addToCart } from "../store/cartItemCountReducer";

function ProducItem(props) {
  const { title, price, category, thumbnail, rating } = props;
  const dispatch = useDispatch()


  function handleClick() {
    dispatch(addToCart)
  }

  return (
    <div className="card border p-2 m-2 shadow">
      <img src={thumbnail} className="card-img-top" />
      <hr />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <p className="category"><b>Category:</b> {category}</p>
      <p className="cardText ms-4 fw-bold">₱ {price}</p>
      <p className="rating"><b>Rating:</b> {rating} </p>
      <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default ProducItem;