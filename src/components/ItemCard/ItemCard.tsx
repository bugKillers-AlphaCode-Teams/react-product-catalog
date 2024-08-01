import React from "react";
import styles from "./ItemCard.module.scss";
import ChevronArrowRight from "../../images/icons/Chevron (Arrow Right).png";
import ChevronArrowLeft from "../../images/icons/Chevron (Arrow Left).png";
import home from "../../../public/img/House.svg";
import iphoneMask from "../../images/icons/Photo mask.svg";
import SliderPhoto1 from "../../images/icons/Slider photo 1.svg";
import SliderPhoto2 from "../../images/icons/Slider photo 2.svg";
import SliderPhoto3 from "../../images/icons/Slider photo 3.svg";
import SliderPhoto4 from "../../images/icons/Slider photo 4.svg";
import SliderPhoto5 from "../../images/icons/Slider photo 5.svg";
import PinkColor from "../../images/icons/LightPinkColor.svg";
import LightGreyColor from "../../images/icons/LightGreyColor.svg";
import GreyColor from "../../images/icons/GreyColor.svg";
import WhiteColor from "../../images/icons/WhiteColor.svg";
import newPrice from "../../images/icons/$799.svg";
import oldPrice from "../../images/icons/$1199.svg";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import isFvoutites from "/public/img/favourite-red.svg";

interface ProductPage {
  addProducts?: () => void;
  productQuontity?: number;
  toggleFavouriteProduct: () => void;
  isFavourite: boolean;
}

export const ProductPage: React.FC<ProductPage> = ({
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
    <div className={styles.productPage}>
      {/* <div className={styles.breadcrumbs}>
        <img src={home} alt="Home" className={styles.icon} />
        <img src={ChevronArrowRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Phones</span>
        <img src={ChevronArrowRight} alt="Arrow" className={styles.icon} />
        <span className={styles.breadcrumbItem}>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</span>
      </div> */}

      <button className={styles.backButton}>
        <img src={ChevronArrowLeft} alt="Back" className={styles.icon} />
        <span className={styles.backText}>Back</span>
      </button>

      <h1 className={styles.productTitle}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={styles.productImageWrapper}>
        <img src={iphoneMask} alt="Apple iPhone 11 Pro Max" className={styles.productImage} />
      </div>

      <div className={styles.gallery}>
        <img src={SliderPhoto3} alt="Gallery 3" className={styles.galleryImage} />
        <img src={SliderPhoto1} alt="Gallery 1" className={styles.galleryImage} />
        <img src={SliderPhoto4} alt="Gallery 4" className={styles.galleryImage} />
        <img src={SliderPhoto2} alt="Gallery 2" className={styles.galleryImage} />
        <img src={SliderPhoto5} alt="Gallery 5" className={styles.galleryImage} />
      </div>

    <div className={styles.mainControls}>
      <div className={styles.productElements}>
        <div className={styles.colorsGroup}>
          <div className={styles.colorsText}>
          Available colors
          </div>
          <div className={styles.ProdId}>
            ID: 802390
          </div>
          <ul className={styles.colors}>
            <li className={styles.color1}>
              <a href="PinkPhone">
                <img src={PinkColor} alt="Pink" />
              </a>
            </li>
            <li className={styles.color2}>
              <a href="LightGreyPhone">
                <img src={LightGreyColor} alt="LightGrey" />
              </a>
            </li>
            <li className={styles.color3}>
            <a href="GreyPhone">
            </a>
              <img src={GreyColor} alt="Grey" />
            </li>
            <li className={styles.color4}>
              <a href="WhitePhone">
                <img src={WhiteColor} alt="White" />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.line}> </div>

        <div className={styles.capacity}>
          <div className={styles.selectCapacity}>
            Select capacity
          </div>
          <div className={styles.capacityWrapper}>
            <div>
              <div className={styles.capacity1}>
                <a href="/">64 GB</a>
              </div>
            </div>
            <div>
              <div className={styles.capacity2}>
                <a href="/">256 GB</a>
              </div>
            </div>
            <div>
              <div className={styles.capacity3}>
                <a href="/">512 GB</a>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className={styles.line}> </div>

      <div className={styles.AddToAndPrice}>
        <div className={styles.price}>
          <div className={styles.newPrice}>
            <img src={newPrice} alt="newPrice" />
          </div>
          <div className={styles.oldPrice}>
            <img src={oldPrice} alt="oldPrice" />
          </div>
        </div>

        <div className={styles.productCardButtons}>
          <button onClick={addProducts} className={buttonStyle}>
            {productQuontity && productQuontity > 0
              ? "Added to cart"
              : "Add to cart"}
          </button>
          <img
            className={styles.productCardAddToFavorite}
            src={isFavourite ? isFvoutites : addToFavorites}
            alt="add to favorites"
            onClick={toggleFavouriteProduct}
          />
        </div>
      </div>

      <div className={styles.shortInfo}>
        <ul className={styles.shortInfoText}>
          <li className={styles.shortInfoTextItem}>
            <div className={styles.shortInfoTextItem1}>
              Screen
            </div>
            <div className={styles.shortInfoTextItem2}>
              6.5” OLED
            </div>
          </li>
          <li className={styles.shortInfoTextItem}>
            <div className={styles.shortInfoTextItem1}>
              Resolution
            </div>
            <div className={styles.shortInfoTextItem2}>
              2688x1242
            </div>
          </li>
          <li className={styles.shortInfoTextItem}>
            <div className={styles.shortInfoTextItem1}>
              Processor
            </div>
            <div className={styles.shortInfoTextItem2}>
              Apple A12 Bionic
            </div>
          </li>
          <li className={styles.shortInfoTextItem}>
            <div className={styles.shortInfoTextItem1}>
              RAM
            </div>
            <div className={styles.shortInfoTextItem2}>
              3 GB
            </div>
          </li>
        </ul>
      </div>

    </div>

      <div className={styles.productDetails}>
        <div className={styles.section}>
          <div className={styles.sectionAbout}>
            About
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            And then there was Pro
          </div>
          <div className={styles.sectionText}>
            A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Camera
          </div>
          <div className={styles.sectionText}>
            Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
          </div>
          <div className={styles.sectionText}>
            iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
          </div>
        </div>
      </div>

        <div className={styles.techInfo}>
          <div className={styles.techSpecs}>
            Tech specs
          </div>

          <div className={styles.line}>

          </div>
          <div className={styles.inlineGroup}>
              <div className={styles.shortInfoTextItem3}>Screen</div>
              <div className={styles.shortInfoTextItem4}>6.5” OLED</div>
          </div>
          <div className={styles.inlineGroup}>
              <div className={styles.shortInfoTextItem3}>Resolution</div>
              <div className={styles.shortInfoTextItem4}>2688x1242</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Processor</div>
            <div className={styles.shortInfoTextItem4}>Apple A12 Bionic</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>RAM</div>
            <div className={styles.shortInfoTextItem4}>3 GB</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Built in memory</div>
            <div className={styles.shortInfoTextItem4}>64 GB</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Camera</div>
            <div className={styles.shortInfoTextItem4}>12 Mp + 12 Mp + 12 Mp (Triple)</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Zoom</div>
            <div className={styles.shortInfoTextItem4}>Optical, 2x</div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.shortInfoTextItem3}>Cell</div>
            <div className={styles.shortInfoTextItem4}>GSM, LTE, UMTS</div>
          </div>
        </div>
      </div>
  );
};
