import { Link } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';


export const ShopByCategory = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>Shop by category</h2>

      <div className={styles.category} data-cy="categoryLinksContainer">
        <div className={styles.category__wrapper}>
          <Link to="phones">
            <div className={`${styles.category__photo} ${styles['category__photo--phones']}`}>
              <img
                src="src\images\icons\Phones for  banner.png"
                alt="phones category"
                className={`${styles.category__image} ${styles['category__image--phones']}`}
              />
            </div>
          </Link>

          <h3 className={styles.category__title}>Mobile phones</h3>
          <p className={styles.category__text}>95 models</p>
        </div>

        <div className={styles.category__wrapper}>
          <Link to="tablets">
            <div className={`${styles.category__photo} ${styles['category__photo--tablets']}`}>
              <img
                src="\img\IpadPhoto Banner.png"
                alt="tablets category"
                className={`${styles.category__image} ${styles['category__image--tablets']}`}
              />
            </div>
          </Link>

          <h3 className={styles.category__title}>Tablets</h3>
          <p className={styles.category__text}>24 models</p>
        </div>

        <div className={styles.category__wrapper}>
          <Link to="accessories">
            <div className={`${styles.category__photo} ${styles['category__photo--accessories']}`}>
              <img
                src="src\images\icons\Accessories for Iphone  banner.png"
                alt="accessories category"
                className={`${styles.category__image} ${styles['category__image--accessories']}`}
              />
            </div>
          </Link>

          <h3 className={styles.category__title}>Accessories</h3>
          <p className={styles.category__text}>100 models</p>
        </div>
      </div>
    </section>
  );
};
