// import { ProductList } from "../ProductList/ProductList";
import styles from "./Favourites.module.scss";

export const Favourites = () => {
  return (
    <div className={styles.container}>
      <div className="favourites__block">
        <div className={styles.favourite__links}>
          <a href="" className={styles.favourite__link}>
            <img src="/img/House.svg" alt="House" />
          </a>
          <a href="" className={styles.favourite__link}>
            <img src="/img/arrow.svg" alt="arrow" />
          </a>
          <a
            href=""
            className={`${styles.favourite__link} ${styles.favourite__link_text}`}
          >
            favourites
          </a>
        </div>
        <h2 className={styles.favourite_title}>Favourites</h2>
        <div className={styles.favourite_score_items}>5 items</div>

        <div className={styles.productsList}>
          {/* <ProductList phones={products} /> */}
        </div>
      </div>
    </div>
  );
};
