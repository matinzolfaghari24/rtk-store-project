import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
// import { useCart } from "../context/CartProvider";
import styles from "./CheckoutPage.module.css";
function CheckoutPage() {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  if (!state.itemsCounter)
    return (
      <h2 style={{ textAlign: "center", minHeight: 475 }}>
        Your shopping cart is empty
      </h2>
    );
  return (
    <div className={styles.container}>
      <BasketSideBar data={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
