import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import isFvoutites from "/public/img/favourite-red.svg";
import { useTranslation } from "react-i18next";
import { Product } from "../../types/Product";

export type ProducType = "phones" | "tablets" | "accessories";

interface ProductCardProps {
  product: Product;
  addProducts?: () => void;
  productQuontity?: number;
  toggleFavouriteProduct?: () => void;
  isFavourite?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addProducts,
  productQuontity,
  toggleFavouriteProduct,
  isFavourite,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  if (!product) {
    return <div>No product available</div>;
  }
  const {
    images,
    name,
    priceDiscount,
    screen,
    capacity,
    ram,
    priceRegular,
    id,
    category,
    capacityAvailable,
    namespaceId,
    colorsAvailable,
    color,
    description,
    resolution,
    processor,
    cell,
    year,
  } = product;

  const navigateToProduct = () => {
    const productData = {
      id,
      category,
      namespaceId,
      name,
      capacityAvailable,
      capacity,
      priceRegular,
      priceDiscount,
      colorsAvailable,
      color,
      images,
      description,
      screen,
      resolution,
      processor,
      ram,
      cell,
      year,
    };

    if (category === "phones") {
      navigate(`/phones/${id}`, { state: { product: productData } });
    } else if (category === "tablets") {
      navigate(`/tablets/${id}`, { state: { product: productData } });
    } else if (category === "accessories") {
      navigate(`/accessories/${id}`, { state: { product: productData } });
    }
  };

  const buttonStyle =
    productQuontity && productQuontity > 0
      ? styles.productCardButtonsDisabled
      : styles.productCardButtonsAdd;

  return (
    <div className={styles.productCard}>
      <div className={styles.wrapper}>
        <img
          src={`/${images[0]}`}
          alt={"images"}
          className={styles.productImage}
          onClick={navigateToProduct}
        />
        <p className={styles.productCardTitle}>{name}</p>

        <div className={styles.priceWrapper}>
          <p className={styles.productCardPrice}>${priceDiscount}</p>
          {priceRegular && <p className={styles.oldPrice}>${priceRegular}</p>}
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
