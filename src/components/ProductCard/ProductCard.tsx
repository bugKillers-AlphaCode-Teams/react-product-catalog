import styles from "./ProductCard.module.scss";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import isFvoutites from "/public/img/favourite-red.svg";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: number;
  oldPrice?: number;
  screen: string;
  capacity: string;
  ram: string;
  addProducts?: () => void;
  productQuontity?: number;
  toggleFavouriteProduct?: () => void;
  isFavourite?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  price,
  screen,
  capacity,
  ram,
  oldPrice,
  addProducts,
  productQuontity,
  toggleFavouriteProduct,
  isFavourite,
}) => {
  const buttonStyle =
    productQuontity && productQuontity > 0
      ? styles.productCardButtonsDisabled
      : styles.productCardButtonsAdd;

  return (
    <div className={styles.productCard}>
      <div className={styles.wrapper}>
     
        <img src={imgSrc} alt={imgAlt} className={styles.productImage} />
        <p className={styles.productCardTitle}>{title}</p>

        <div className={styles.priceWrapper}>
          <p className={styles.productCardPrice}>${price}</p>
          {oldPrice && <p className={styles.oldPrice}>${oldPrice}</p>}
        </div>

        <p className={styles.productCardUnderscore}></p>

        <div className={styles.productCardSpecs}>
          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>Screen</span>
            <span className={styles.productCardValue}>{screen}</span>
          </div>

          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>Capacity</span>
            <span className={styles.productCardValue}>{capacity}</span>
          </div>

          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>RAM</span>
            <span className={styles.productCardValue}>{ram}</span>
          </div>
        </div>

        <div className={styles.productCardButtons}>
          <button onClick={addProducts} className={buttonStyle}>
            {productQuontity && productQuontity > 0
              ? "Added to cart"
              : "Add to cart"}
          </button>
          <button className={styles.toFavorite}>
          <img
            className={styles.productCardAddToFavorite}
            src={isFavourite ? isFvoutites : addToFavorites}
            alt="add to favorites"
            onClick={toggleFavouriteProduct}
          />
          </button>
        </div>
      </div>
    </div>
  );
};
