import React, { useEffect, useState } from "react";
import styles from "./ItemCard.module.scss";

// import SliderPhoto2 from "../../images/icons/Slider photo 2.svg";
// import SliderPhoto5 from "../../images/icons/Slider photo 5.svg";
import PinkColor from "../../images/icons/LightPinkColor.svg";
import LightGreyColor from "../../images/icons/LightGreyColor.svg";
import GreyColor from "../../images/icons/GreyColor.svg";
import WhiteColor from "../../images/icons/WhiteColor.svg";
import { YouMayAlsoLike } from "../YouMayAlsoLike";
import { useCart } from "../../utils/useCart";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFavourits } from "../../utils/useFavourites";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import isFvoutites from "/public/img/favourite-red.svg";
import { Product, ProductDescription } from "../../types/Product";
import { CurrentLocation } from "../CurrentLocation/CurrentLocation";
// import stylesButton from "./ProductSlide.module.scss"

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const { addProducts, getProductQuontity } = useCart();
  const { toggleFavouriteProduct, favouritesProducts } = useFavourits();
  const location = useLocation();
  const product = location.state?.product as Product;

  console.log(product);

  const {
    images,
    name,
    priceDiscount,
    screen,
    capacity,
    ram,
    priceRegular,
    id,
    // category,
    // capacityAvailable,
    // namespaceId,
    // colorsAvailable,
    // color,
    camera,
    zoom,
    description,
    resolution,
    processor,
    cell,
    // year,
  } = product;
  

  const productQuontity = getProductQuontity(id);
  const buttonStyle =
    productQuontity && productQuontity > 0
      ? styles.productCardButtonsDisabled
      : styles.productCardButtonsAdd;

  console.log(images[0]);
  console.log(images);

  const isFavourite = favouritesProducts.some(
    (favProduct: { id: unknown }) => favProduct.id === product.id
  );

  const [activeImageSrc, setActiveImageSrc] = useState(
    product?.images[0] || ""
  );

  useEffect(() => {
    if (product?.images.length > 0) {
      setActiveImageSrc(product.images[0]);
    }
  }, [product]);

  return (
    <div>
      {/* <button className={styles.backButton}>
        <img src={ChevronArrowLeft} alt="Back" className={styles.icon} />
        <span className={styles.backText}>Back</span>
      </button> */}
      {/* перекладу */}
      <CurrentLocation />

      <h1 className={styles.productTitle}>{name}</h1>

      <div className={styles.productPage}>
        <div className={styles.top}>
          {/* стилі картинкам */}
          <div className={styles.productImageWrapper}>
            <img
              src={`/${activeImageSrc}`}
              alt="Apple iPhone 11 Pro Max"
              className={styles.productImage}
            />
             {/* <button className={stylesButton.prevButton} onClick={handlePrevClick}>
              &lt;
            </button>
            <button className={stylesButton.nextButton} onClick={handleNextClick}>
              &gt;
            </button> */}
          </div>

          <div className={styles.gallery}>
            {images.map((img, index) => (
              <img
                key={index}
                src={`/${img}`}
                alt={`Gallery ${index + 1}`}
                className={styles.galleryImage}
                onClick={() => setActiveImageSrc(img)}
              />
            ))}
          </div>
        </div>

        <div className={styles.mainControls}>
          <div className={styles.productElements}>
            <div className={styles.colorsGroup}>
              <div className={styles.colorsText}>
                <div className={styles.Aviable}>Available colors</div>
                <div className={styles.ProdId}>ID: 802390</div>
              </div>
              <ul className={styles.colors}>
                <li className={styles.color1}>
                  <a href="PinkPhone">
                    <img src={PinkColor} alt="Pink" />
                  </a>
                </li>
                <li className={styles.color1}>
                  <a href="LightGreyPhone">
                    <img src={LightGreyColor} alt="LightGrey" />
                  </a>
                </li>
                <li className={styles.color1}>
                  <a href="GreyPhone">
                    <img src={GreyColor} alt="Grey" />
                  </a>
                </li>
                <li className={styles.color1}>
                  <a href="WhitePhone">
                    <img src={WhiteColor} alt="White" />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.capacity}>
              <div className={styles.selectCapacity}>Select capacity</div>
              <div className={styles.capacityWrapper}>
                <div className={styles.capacityText}>
                  {/* перебрати мапом , додати стилі при натисканні*/}
                  <div className={styles.capacity1}>
                    <button> {capacity[0]} GB</button>
                  </div>
                  <div className={styles.capacity1}>
                    <a href="/">256 GB</a>
                  </div>
                  <div className={styles.capacity1}>
                    <a href="/">512 GB</a>
                  </div>
                </div>
              </div>

              <div className={styles.AddToAndPrice}>
                <div className={styles.price}>
                  <div className={styles.newPrice}>{priceRegular}</div>
                  <div className={styles.oldPrice}>{priceDiscount}</div>
                </div>

                <div className={styles.productCardButtons}>
                  <button
                    className={buttonStyle}
                    onClick={() => addProducts(product)}
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
                      onClick={() => toggleFavouriteProduct(product)}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.shortInfo}>
              <ul className={styles.shortInfoText}>
                <li className={styles.shortInfoTextItem}>
                  <div className={styles.shortInfoTextItem1}>Screen</div>
                  <div className={styles.shortInfoTextItem2}>{screen}</div>
                </li>
                <li className={styles.shortInfoTextItem}>
                  <div className={styles.shortInfoTextItem1}>Resolution</div>
                  <div className={styles.shortInfoTextItem2}>{resolution}</div>
                </li>
                <li className={styles.shortInfoTextItem}>
                  <div className={styles.shortInfoTextItem1}>Processor</div>
                  <div className={styles.shortInfoTextItem2}>{processor}</div>
                </li>
                <li className={styles.shortInfoTextItem}>
                  <div className={styles.shortInfoTextItem1}>RAM</div>
                  <div className={styles.shortInfoTextItem2}>{ram}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.productDetails}>
          <div className={styles.section}>
            <div className={styles.sectionAbout}>About</div>
          </div>

          {description.map(
            (desc: ProductDescription, index: React.Key | null | undefined) => (
              <div key={index} className={styles.section}>
                <div className={styles.sectionTitle}>{desc.title}</div>
                <div className={styles.sectionText}>
                  {desc.text.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className={styles.techInfo}>
          <div className={styles.techSpecs}>Tech specs</div>
          <div className={styles.line}></div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Screen</div>
            <div className={styles.shortInfoTextItem4}>{screen}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Resolution</div>
            <div className={styles.shortInfoTextItem4}>{resolution}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Processor</div>
            <div className={styles.shortInfoTextItem4}>{processor}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>RAM</div>
            <div className={styles.shortInfoTextItem4}>{ram}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Built in memory</div>
            <div className={styles.shortInfoTextItem4}>{capacity}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Camera</div>
            <div className={styles.shortInfoTextItem4}>{camera}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Zoom</div>
            <div className={styles.shortInfoTextItem4}>{zoom}</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Cell</div>
            <div className={styles.shortInfoTextItem4}>{cell.join(", ")}</div>
          </div>
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
};


