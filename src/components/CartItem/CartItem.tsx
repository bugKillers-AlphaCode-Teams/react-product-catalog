import styles from "./CartItem.module.scss";
import closeWhiteIcon from "../../images/icons/CloseWhiteIcon.png";
import minusWhiteIcon from "../../images/icons/MinusWhite.png";
import plusWhiteIcon from "../../images/icons/PlusWhite.png";
const temperaryImg = "/img/phones/apple-iphone-11/black/00.webp";

export const CartItem = () => {
  return (
    <>
      <article className={styles.cartitem}>
        <div className={styles.topContent}>
          <button className={styles.button}>
            <img src={closeWhiteIcon} alt="remove-item-icon" />
          </button>
          <img className={styles.imageItem} src={temperaryImg} alt="" />
          <p className={styles.title}>
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </p>
        </div>

        <div className={styles.buttonContent}>
          <div className={styles.buttonCounts}>
            <button className={styles.button}>
              <img className={styles.icon} src={minusWhiteIcon} alt="" />
            </button>
            <p className={styles.count}>1</p>
            <button className={styles.button}>
              <img
                className={`${styles.icon} ${styles.active}`}
                src={plusWhiteIcon}
                alt=""
              />
            </button>
          </div>
          <div className={styles.price}>$999</div>
        </div>
      </article>
    </>
  );
};
