import React from "react";
import styles from "./ProductList.module.scss";
import { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";
import { useCart } from "../../utils/useCart";

type Props = {
  products: Product[];
};
export const ProductList: React.FC<Props> = ({ products }) => {
  const { addProducts, getProductQuontity } = useCart();

  console.log(addProducts);
  return (
    <section className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          oldPrice={product.priceRegular}
          imgAlt={"image"}
          title={product.name}
          price={product.priceRegular}
          imgSrc={product.images[0]}
          screen={product.screen}
          capacity={product.capacity}
          ram={product.ram}
          addProducts={() => addProducts(product)}
          productQuontity={getProductQuontity(product.id)}
        />
      ))}
    </section>
  );
};
