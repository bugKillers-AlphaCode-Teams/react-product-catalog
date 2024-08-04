import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import isFvoutites from "/public/img/favourite-red.svg";
import { useTranslation } from "react-i18next";

export type ProducType = "phones" | "tablets" | "accessories";

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
  id: string; // Added an ID prop to navigate to specific product pages
  productType: ProducType; // Added a productType prop
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
  id,
  productType,
}) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    if (productType === "phones") {
      navigate(`/phones/${id}`);
    } else if (productType === "tablets") {
      navigate(`/tablets/${id}`);
    } else if (productType === "accessories") {
      navigate(`/accessories/${id}`);
    }
  };
  const { t } = useTranslation();

  const buttonStyle =
    productQuontity && productQuontity > 0
      ? styles.productCardButtonsDisabled
      : styles.productCardButtonsAdd;

  return (
    <div className={styles.productCard}>
      <div className={styles.wrapper}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className={styles.productImage}
          onClick={navigateToProduct}
        />
        <p className={styles.productCardTitle}>{title}</p>

        <div className={styles.priceWrapper}>
          <p className={styles.productCardPrice}>${price}</p>
          {oldPrice && <p className={styles.oldPrice}>${oldPrice}</p>}
        </div>

        <p className={styles.productCardUnderscore}></p>

        <div className={styles.productCardSpecs}>
          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>
              {" "}
              {t("productCard.screen")}
            </span>
            <span className={styles.productCardValue}>{screen}</span>
          </div>

          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>
              {t("productCard.capacity")}
            </span>
            <span className={styles.productCardValue}>{capacity}</span>
          </div>

          <div className={styles.productCardSpec}>
            <span className={styles.productCardLabel}>
              {" "}
              {t("productCard.ram")}
            </span>
            <span className={styles.productCardValue}>{ram}</span>
          </div>
        </div>

        <div className={styles.productCardButtons}>
          <button
            onClick={addProducts}
            className={buttonStyle}
            disabled={!!productQuontity && productQuontity > 0}
          >
            {productQuontity && productQuontity > 0
              ? t("productCard.button.added")
              : t("productCard.button.add")}
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
