import silverPhone from "../../../public/img/phones/apple-iphone-14-pro/silver/apple-iphone-14-pro-128-gb-silver.webp";
import purplePhone from "../../../public/img/phones/apple-iphone-14-pro/purple/apple-iphone-14-pro-128-gb-deep-purple.webp";
import goldPhone from "../../../public/img/phones/apple-iphone-14-pro/gold/apple-iphone-14-pro-128-gb-gold.webp";
import redPhone from "../../../public/img/phones/apple-iphone-14-pro/red/apple-iphone-14-pro-128-gb-red.webp";

import sliderRight from "../../images/icons/buttonSlider-right.png";
import sliderLeft from "../../images/icons/buttonSlider-left.png";
import addToFavorites from "../../images/icons/add-to-favorite.png";
import styles from "./NewModels.module.scss";

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

        <div className={styles.productsCards}>
          <div className={styles.productCard}>
            <img
              src={silverPhone}
              alt="Apple iPhone 14 Pro 128GB Silver"
              className="productCard__img"
            />
            <p className={styles.productCard__title}>
              Apple iPhone 14 Pro 128GB Silver (MQ023)
            </p>
            <p className={styles.productCard__price}>$999</p>
            <p className={styles.productCard__underscore}></p>

            <div className={styles.productCard__specs}>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Screen</span>
                <span className={styles['productCard__specs-value']}>6.1” OLED</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Capacity</span>
                <span className={styles['productCard__specs-value']}>128 GB</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>RAM</span>
                <span className={styles['productCard__specs-value']}>6 GB</span>
              </div>
            </div>

            <div className={styles.productCard__buttons}>
              <button className={ styles['productCard__buttons-add']}>Add to cart</button>
              <img
                className="productCard__buttons-add-to-favorite"
                src={addToFavorites}
                alt="add to favorites"
              />
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src={purplePhone}
              alt="Apple iPhone 14 Pro 128GB Deep Purple"
              className="productCard__img"
            />
            <p className={styles.productCard__title}>
              Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
            </p>
            <p className={styles.productCard__price}>$999</p>
            <p className={styles.productCard__underscore}></p>

            <div className={styles.productCard__specs}>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Screen</span>
                <span className={styles['productCard__specs-value']}>6.1” OLED</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Capacity</span>
                <span className={styles['productCard__specs-value']}>128 GB</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>RAM</span>
                <span className={styles['productCard__specs-value']}>6 GB</span>
              </div>
            </div>

            <div className={styles.productCard__buttons}>
              <button className={ styles['productCard__buttons-add']}>Add to cart</button>
              <img
                className="productCard__buttons-add-to-favorite"
                src={addToFavorites}
                alt="add to favorites"
              />
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src={goldPhone}
              alt="Apple iPhone 14 Pro 128GB Gold"
              className="productCard__img"
            />
            <p className={styles.productCard__title}>
              Apple iPhone 14 Pro 128GB Gold (MQ083)
            </p>
            <p className={styles.productCard__price}>$999</p>
            <p className={styles.productCard__underscore}></p>

            <div className={styles.productCard__specs}>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Screen</span>
                <span className={styles['productCard__specs-value']}>6.1” OLED</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Capacity</span>
                <span className={styles['productCard__specs-value']}>128 GB</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>RAM</span>
                <span className={styles['productCard__specs-value']}>6 GB</span>
              </div>
            </div>

            <div className={styles.productCard__buttons}>
              <button className={ styles['productCard__buttons-add']}>Add to cart</button>
              <img
                className="productCard__buttons-add-to-favorite"
                src={addToFavorites}
                alt="add to favorites"
              />
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src={redPhone}
              alt="Apple iPhone 14 Pro 128GB PRODUCT Red"
              className="productCard__img"
            />
            <p className={styles.productCard__title}>
              Apple iPhone 14 Pro 128GB PRODUCT Red (MQ513)
            </p>
            <p className={styles.productCard__price}>$999</p>
            <p className={styles.productCard__underscore}></p>

            <div className={styles.productCard__specs}>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Screen</span>
                <span className={styles['productCard__specs-value']}>6.7” OLED</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>Capacity</span>
                <span className={styles['productCard__specs-value']}>128 GB</span>
              </div>
              <div className={styles['productCard__specs-spec'] }>
                <span className={styles['productCard__specs-label']}>RAM</span>
                <span className={styles['productCard__specs-value']}>6 GB</span>
              </div>
            </div>

            <div className={styles.productCard__buttons}>
              <button className={ styles['productCard__buttons-add']}>Add to cart</button>
              <img
                className="productCard__buttons-add-to-favorite"
                src={addToFavorites}
                alt="add to favorites"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
