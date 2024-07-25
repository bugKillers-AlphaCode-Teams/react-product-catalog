import silverPhone from "../../../public/img/phones/apple-iphone-14-pro/silver/apple-iphone-14-pro-128-gb-silver.webp";
import purplePhone from "../../../public/img/phones/apple-iphone-14-pro/purple/apple-iphone-14-pro-128-gb-deep-purple.webp";
import goldPhone from "../../../public/img/phones/apple-iphone-14-pro/gold/apple-iphone-14-pro-128-gb-gold.webp";
import redPhone from "../../../public/img/phones/apple-iphone-14-pro/red/apple-iphone-14-pro-128-gb-red.webp";

import sliderRight from "../../images/icons/buttonSlider-right.png";
import sliderLeft from "../../images/icons/buttonSlider-left.png";
import styles from "./NewModels.module.scss";
import { ProductCard } from "../ProductCard";

export const NewModels = () => {
  return (
    <>
      <section className="newModels">
        <div className={styles.newModels__brand}>
          <h2 className={styles["newModels__brand-title"]}>Brand new models</h2>

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
            imgSrc={silverPhone}
            imgAlt="Apple iPhone 14 Pro 128GB Silver"
            title="Apple iPhone 14 Pro 128GB Silver (MQ023)"
            price="$999"
            screen="6.1” OLED"
            capacity="128 GB"
            ram="6 GB"
          />
          <ProductCard
            imgSrc={purplePhone}
            imgAlt="Apple iPhone 14 Pro 128GB Deep Purple"
            title="Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)"
            price="$999"
            screen="6.1” OLED"
            capacity="128 GB"
            ram="6 GB"
          />
          <ProductCard
            imgSrc={goldPhone}
            imgAlt="Apple iPhone 14 Pro 128GB Gold"
            title="Apple iPhone 14 Pro 128GB Gold (MQ083)"
            price="$999"
            screen="6.1” OLED"
            capacity="128 GB"
            ram="6 GB"
          />
          <ProductCard
            imgSrc={redPhone}
            imgAlt="Apple iPhone 14 Pro 128GB PRODUCT Red"
            title="Apple iPhone 14 Pro 128GB PRODUCT Red (MQ513)"
            price="$999"
            screen="6.7” OLED"
            capacity="128 GB"
            ram="6 GB"
          />
        </div>
      </section>
    </>
  );
};
