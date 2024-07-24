import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
<<<<<<< HEAD
import { useState } from "react";
=======
import { ThemeButton } from "../ThemeButton/ThemeButton"; 
>>>>>>> 726ce513094ebdb868078b6e19e8f7908611ed89

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={isMenuOpen ? styles.header__active : styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <NavLink to="/" className="">
            <img src="/img/Logo.svg" alt="logo" className={styles.logo} />
          </NavLink>
<<<<<<< HEAD
          <nav className={isMenuOpen ? styles.nav__active : styles.nav}>
            <ul className={styles.navbar}>
              <li>
                <NavLink to="/" className={styles.nav__link}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.nav__link} to="phone">
                  Phones
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.nav__link} to="tablets">
                  Tablets
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.nav__link} to="accessories">
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.icon__container} onClick={() => toggleMenu()}>
            <div
              className={`${styles.header__icon} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`${styles.buttons} ${isMenuOpen ? styles.show : ''}`}>
            <NavLink to="favourit" className={styles.cart_and_like}>
              <img src="/img/favourit.svg" alt="favourit" />
            </NavLink>
            <NavLink to="shoping" className={styles.cart_and_like}>
              <img src="/img/shoping.svg" alt="shoping" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
=======
        </li>
        <li>
          <NavLink className="" to="phone">
            Phones
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="tablets">
            Tablets
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="accessories">
            accessories
          </NavLink>
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
>>>>>>> 726ce513094ebdb868078b6e19e8f7908611ed89
  );
};
