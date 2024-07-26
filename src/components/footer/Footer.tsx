import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/icons/Logo.svg";
import chevron from "../../images/icons/Chevron (Arrow Right).svg";

export const Footer: React.FC = () => {
  return (
  <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
       <div className={styles.footer__logo}>
          <img src={logo} className={styles["footer__logo-image"]} alt="logo" />
        </div>

      <div className={styles.footer__items}>
        <ul className={styles["footer__items-links"]}>
          <li>
            <a href="#" className={styles["footer__items-item"]}>Github</a>
          </li>
          <li>
            <a href="#" className={styles["footer__items-item"]}>Contacts</a>
          </li>
          <li>
            <a href="#" className={styles["footer__items-item"]}>Rights</a>
          </li>
        </ul>
      </div>

      <div className={styles["footer__goup"]}>
        <a href="" className={styles["footer__goup-text"]}>Back to top button 
          <div className={styles["footer__goup-chevron"]}>
            <div className={styles["footer__goup-wrapper"]}>
             <img src={chevron} alt="chevron" />
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
  );
};
