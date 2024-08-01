import styles from "./ModalCart.module.scss";
import closeWhiteIcon from "../../../images/icons/CloseWhiteIcon.png";
import React from "react";
import { createForm, Params, publicKey } from "./liqpayUtils";

type Props = {
  closeModal: () => void;
  amount: number;
  cartOrder: { id: string; quantity: number }[];
};

export const ModalCart: React.FC<Props> = ({
  closeModal,
  amount,
  cartOrder,
}) => {
  const formatOrderDescription = (
    cartOrder: { id: string; quantity: number }[]
  ) => {
    return cartOrder
      .map((item) => `Name: ${item.id} Quantity: ${item.quantity}`)
      .join("<br>");
  };

  const handleConfirm = () => {
    const description = formatOrderDescription(cartOrder);

    const data: Params = {
      action: "pay",
      amount: amount,
      currency: "UAH",
      description: `${description}`,
      order_id: new Date().getTime().toString(),
      version: 3,
      server_url: "http://localhost:5173/callback",
      public_key: publicKey,
      language: "uk",
    };

    const formHtml = createForm(data);

    const existingForm = document.getElementById("liqpay-form");
    if (existingForm) {
      existingForm.remove();
    }

    document.body.insertAdjacentHTML("beforeend", formHtml);

    const form = document.getElementById("liqpay-form");
    if (form !== null) {
      (form as HTMLFormElement).submit();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalCart}>
        <button className={styles.close} onClick={closeModal}>
          <img src={closeWhiteIcon} alt="close-item-icon" />
        </button>

        <h1 className={styles.title}>
          Checkout is not implemented yet. Do you want to clear the Cart?
        </h1>
        <button className={styles.button} onClick={handleConfirm}>
          confirm
        </button>
        {/* <button className={styles.button}>confirm</button> */}
      </div>
    </div>
  );
};
