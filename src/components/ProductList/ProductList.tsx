import React from "react";
import styles from "./ProductList.module.scss";
import { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";

type Props = {
  phones: Product[];
};
export const ProductList: React.FC<Props> = ({ phones }) => {
  console.log(phones);

  return (
    <section className={styles.productList}>
      {phones.map((phone) => (
        <ProductCard
          imgAlt={"phones image"}
          title={phone.name}
          price={phone.priceRegular}
          imgSrc={phone.images[0]}
          screen={phone.screen}
          capacity={phone.capacity}
          ram={phone.ram}
        />
      ))}
    </section>
  );
};
