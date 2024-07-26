import { CartItem } from "../CartItem/CartItem";
import styles from "./Cart.module.scss";

export const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <div className={styles.cartList}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={styles.checkout}>
        <div className={styles.totalPrice}>
          <p className={styles.price}>$2657</p>
          <span>Total for 3 items</span>
        </div>
        <button className={styles.button}>Checkout</button>
      </div>
    </div>
  );
};
