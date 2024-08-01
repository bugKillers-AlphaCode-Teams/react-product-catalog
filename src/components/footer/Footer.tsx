import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/icons/Logo.svg";
import chevron from "../../images/icons/Chevron (Arrow Right).svg";

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

  return (
    <div className={styles.footer}>


      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          <img src={logo} className={styles.logoImage} alt="logo" />
        </a>

        <div className={styles.items}>
          <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>Github</a>
            </li>
            <li>
              <a href="#" className={styles.link}>Contacts</a>
            </li>
            <li>
              <a href="#" className={styles.link}>Rights</a>

            </li>
          </ul>
        </div>


        <div className={styles.goUp} onClick={scrollToTop}>
          <span className={styles.goUpText}>
            Back to top
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
