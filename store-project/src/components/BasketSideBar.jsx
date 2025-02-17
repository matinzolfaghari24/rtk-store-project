import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSidebar.module.css"
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";
function BasketSideBar({ data }) {
  const dispatch = useDispatch()
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{data.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity :</p>
        <span>{data.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!data.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
