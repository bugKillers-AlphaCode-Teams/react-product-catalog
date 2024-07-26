import green_iPhone_11_Pro from "/img/phones/apple-iphone-11-pro-max/midnightgreen/iPhone-11-pro-max-green.webp";
import gold_iPhone_11_Pro from "/img/phones/apple-iphone-11-pro-max/gold/iPhone-11-pro-max-gold.webp";
import purple_iPhone_11 from "/img/phones/apple-iphone-11/purple/iPhone-11-purple.webp";
import red_iPhone_11 from "/img/phones/apple-iphone-11/red/iPhone-11-red.webp";

import sliderRight from "../../images/icons/buttonSlider-right.png";
import sliderLeft from "../../images/icons/buttonSlider-left.png";
import oldPrice$1199 from "../../images/icons/old-price$1199.png";
import oldPrice$999 from "../../images/icons/old-price$999.png";
import oldPrice$859 from "../../images/icons/old-price$859.png";
import oldPrice$899 from "../../images/icons/old-price$899.png";
import styles from "./HotPrices.module.scss";
import { ProductCard } from "../ProductCard";

export const HotPrices = () => {
  return (
    <>
      <section className="newModels">
        <div className={styles.hotPrices__brand}>
          <h2 className={styles["hotPrices__brand-title"]}>Hot prices</h2>

          <div className={styles.buttonsSlider}>
            <button className={styles.buttonsSlider__left}>
              <img src={sliderLeft} alt="left" />
            </button>
            <button className={styles.buttonsSlider__right}>
              <img src={sliderRight} alt="right" />
            </button>
          </div>
        </div>

        <div className={styles.productsList}>
          <ProductCard
            imgSrc={green_iPhone_11_Pro}
            imgAlt="Apple iPhone 11 Pro Max 512GB Midnight Green"
            title="Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)"
            price="$849"
            oldPrice={oldPrice$1199}
            screen="6.5” OLED"
            capacity="512 GB"
            ram="4 GB"
          />
          <ProductCard
            imgSrc={gold_iPhone_11_Pro}
            imgAlt="Apple iPhone 11 Pro Max 64GB Gold"
            title="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
            price="$799"
            oldPrice={oldPrice$999}
            screen="6.5” OLED"
            capacity="64 GB"
            ram="4 GB"
          />
          <ProductCard
            imgSrc={purple_iPhone_11}
            imgAlt="Apple iPhone 11 256GB Purple"
            title="Apple iPhone 11 256GB Purple (iMT9G2FS/A)"
            price="$729"
            oldPrice={oldPrice$859}
            screen="6.2” IPS"
            capacity="256 GB"
            ram="4 GB"
          />
          <ProductCard
            imgSrc={red_iPhone_11}
            imgAlt="Apple iPhone 11 128GB (Product) Red"
            title="Apple iPhone 11 128GB (Product) Red (iMT9G2FS/A)"
            price="$699"
            oldPrice={oldPrice$899}
            screen="6.2” IPS"
            capacity="128 GB"
            ram="4 GB"
          />
        </div>
      </section>
    </>
  );
};
