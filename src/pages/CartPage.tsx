import { Cart } from "../components/Cart/Cart";
import { CurrentLocation } from "../components/CurrentLocation/CurrentLocation";

export const CartPage = () => {
  return (
    <div>
      <CurrentLocation />
      <Cart />
    </div>
  );
};
