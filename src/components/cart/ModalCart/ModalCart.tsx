import styles from "./ModalCart.module.scss";
import closeWhiteIcon from "../../../images/icons/CloseWhiteIcon.png";
import React from "react";

type Props = {
  closeModal: () => void;
};
export const ModalCart: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalCart}>
        <button className={styles.close} onClick={closeModal}>
          <img src={closeWhiteIcon} alt="close-item-icon" />
        </button>

        <h1 className={styles.title}>
          Checkout is not implemented yet. Do you want to clear the Cart?
        </h1>
        <button className={styles.button}>confirm</button>
      </div>
    </div>
  );
};
