import styles from "./Cart.module.scss";
import cartEmpty from "../../../public/img/cart-is-empty.png";
import { useCart } from "../../utils/useCart";
import { CartItem } from "./CartItem/CartItem";
//import { CartItem } from "./CartItem/CartItem";
export const Cart = () => {
  const {
    products,
    totalPrice,
    deleteProduct,
    addProducts,
    decrementProduct,
    totalQuantity,
  } = useCart();
  console.log(products);

  return products.length > 0 ? (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <div className={styles.cartList}>
        {products.map((product) => (
          <CartItem
            key={product.product.id}
            product={product.product}
            quantity={product.quantity}
            deleteProduct={() => deleteProduct(product.product.id)}
            incrementProduct={() => addProducts(product.product)}
            decrementProduct={() => {
              decrementProduct(product.product.id);
            }}
          />
        ))}
      </div>
      <div className={styles.checkout}>
        <div className={styles.totalPrice}>
          <p className={styles.price}>{totalPrice}</p>
          <span>Total for {totalQuantity} items</span>
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
