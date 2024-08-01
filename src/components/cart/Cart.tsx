import styles from "./Cart.module.scss";
import cartEmpty from "../../../public/img/cart-is-empty.png";
import { useCart } from "../../utils/useCart";

import { CartItem } from "./CartItem/CartItem";
import { createForm, publicKey, Params } from "./liqpayUtils";

export const Cart = () => {
  const {
    products,
    totalPrice,
    deleteProduct,
    addProducts,
    decrementProduct,
    totalQuantity,
  } = useCart();

  const cartOrder = products.map((item) => ({
    name: item.product.name,
    quantity: item.quantity,
  }));

  const formatOrderDescription = (
    cartOrder: { name: string; quantity: number }[]
  ) => {
    return cartOrder.map(
      (item) => `Name: ${item.name} Quantity: ${item.quantity}`
    );
  };

  const handleConfirm = () => {
    const description = formatOrderDescription(cartOrder);

    const data: Params = {
      action: "pay",
      amount: totalPrice,
      currency: "UAH",
      description: `${description}`,
      order_id: new Date().getTime().toString(),
      version: 3,
      server_url: "http://localhost:5173",
      public_key: publicKey,
      language: "uk",
      result_url: "http://localhost:5173/thank-you",
    };

    const formHtml = createForm(data);

    const existingForm = document.getElementById("liqpay-form");
    if (existingForm) {
      existingForm.remove();
    }

    document.body.insertAdjacentHTML("beforeend", formHtml);

    const form = document.getElementById("liqpay-form");
    if (form !== null) {
      (form as HTMLFormElement).submit();
    }
  };

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
        <button className={styles.button} onClick={handleConfirm}>
          Checkout
        </button>
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
