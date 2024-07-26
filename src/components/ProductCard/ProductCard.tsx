import styles from "./ProductCard.module.scss";
import addToFavorites from "../../images/icons/add-to-favorite.png";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className={styles.productCard}>
      <img src={imgSrc} alt={imgAlt} className="productCard__img" />
      <p className={styles.productCard__title}>{title}</p>
      <p className={styles.productCard__price}>{price}</p>
      <p className={styles.productCard__underscore}></p>

      <div className={styles.productCard__specs}>
        <div className={styles["productCard__specs-spec"]}>
          <span className={styles["productCard__specs-label"]}>Screen</span>
          <span className={styles["productCard__specs-value"]}>{screen}</span>
        </div>
        <div className={styles["productCard__specs-spec"]}>
          <span className={styles["productCard__specs-label"]}>Capacity</span>
          <span className={styles["productCard__specs-value"]}>{capacity}</span>
        </div>
        <div className={styles["productCard__specs-spec"]}>
          <span className={styles["productCard__specs-label"]}>RAM</span>
          <span className={styles["productCard__specs-value"]}>{ram}</span>
        </div>
      </div>

      <div className={styles.productCard__buttons}>
        <button className={styles["productCard__buttons-add"]}>
          Add to cart
        </button>
        <img
          className="productCard__buttons-add-to-favorite"
          src={addToFavorites}
          alt="add to favorites"
        />
      </div>
    </div>
  );
};
