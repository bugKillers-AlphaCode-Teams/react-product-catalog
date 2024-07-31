import { ProductList } from "../ProductList/ProductList";
import styles from "./Favourites.module.scss";
import cartEmpty from "../../../public/img/cart-is-empty.png";
import { useFavourits } from "../../utils/useFavourites";

export const Favourites = () => {
  const { favouritsProducts } = useFavourits();

  return (
    <div className={styles.container}>
      {favouritsProducts.length ? (
        <>
          <div className={styles.favourite__block}>
            <div className={styles.favourite__links}>
              <a href="/" className={styles.favourite__link}>
                <img src="/img/House.svg" alt="House" />
              </a>
              <a href="/" className={styles.favourite__link}>
                <img src="/img/arrow.svg" alt="arrow" />
              </a>
              <a
                href="/"
                className={`${styles.favourite__link} ${styles.favourite__link_text}`}
              >
                Favourites
              </a>
            </div>
            <h2 className={styles.favourite_title}>Favourites</h2>
            <div className={styles.favourite_score_items}>
              {favouritsProducts.length} items
            </div>
          </div>
          <div className={styles.productsList}>
            <ProductList products={favouritsProducts} />
          </div>
        </>
      ) : (
        <div className={styles.cartEmpty}>
          <h2>Favourites are empty</h2>
          <img
            className={styles.cartEmptyImg}
            src={cartEmpty}
            alt="favourites are empty"
          />
        </div>
      )}
    </div>
  );
};
