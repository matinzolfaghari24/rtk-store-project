import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";
import { productQuantity, shortenText } from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";
// import { useCart } from "../context/CartProvider";

function Card({ data }) {
  const { id, title, image, price } = data;
  const state = useSelector((store) => store.cart);
  const quantity = productQuantity(state, id);
  const dispatch = useDispatch()
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() =>dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() =>dispatch(decrease(data))}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() =>dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
