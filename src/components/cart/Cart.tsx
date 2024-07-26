import { Product } from "../../types/Product";
import { CartItem } from "../CartItem/CartItem";
import styles from "./Cart.module.scss";
import cartEmpty from "../../../public/img/cart-is-empty.png";
export const Cart = () => {
  const cartProducts: Product[] = [];

  return cartProducts.length > 0 ? (
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
  ) : (
    <div className={styles.cartEmpty}>
      <h2>Cart is empty</h2>
      <img
        className={styles.cartEmptyImg}
        src={cartEmpty}
        alt="cart is empty"
      />
    </div>
  );
};
