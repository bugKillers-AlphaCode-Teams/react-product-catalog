import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/icons/Logo.svg";
import chevron from "../../images/icons/Chevron (Arrow Right).svg";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const scrollFraction = Math.min(timeElapsed / duration, 1);
      const distance = startPosition * (1 - scrollFraction);
      window.scrollTo(0, distance);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          <img src={logo} className={styles.logoImage} alt="logo" />
        </a>

        <div className={styles.items}>
          <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>
                {t("footer.github.text")}
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                {t("footer.contacts.text")}
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                {t("footer.rights.text")}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.goUp} onClick={scrollToTop}>
          <span className={styles.goUpText}>
            {t("footer.back.text")}

            <div className={styles.chevron}>
              <div className={styles.wrapperChevron}>
                <img src={chevron} alt="chevron" />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
