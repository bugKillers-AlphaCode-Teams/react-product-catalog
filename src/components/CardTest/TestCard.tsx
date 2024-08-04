import { useLocation } from "react-router-dom";
import { useCart } from "../../utils/useCart";

export const CardItem: React.FC = () => {
  const { addProducts } = useCart();

  const location = useLocation();
  const product = location.state?.product;
  console.log(product);

  return (
    <section>
      <div>{product?.name}</div>
      <button onClick={() => addProducts(product)}>add</button>
    </section>
  );
};
