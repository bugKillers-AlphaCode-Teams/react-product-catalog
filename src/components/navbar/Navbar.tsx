import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuWhenActive = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className={isMenuOpen ? styles.dropdown__menu : ""}>
      <div className={styles.header__top}>
        <NavLink to="/" className="">
          <img src="/img/Logo.svg" alt="logo" className="" />
        </NavLink>

        <nav className={""}>
          <ul className={styles.navbar}>
            <li>
              <NavLink
                to="/"
                className={styles.nav__link}
                onClick={() => toggleMenuWhenActive()}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="phone"
                onClick={() => toggleMenuWhenActive()}
              >
                Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="tablets"
                onClick={() => toggleMenuWhenActive()}
              >
                Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="accessories"
                onClick={() => toggleMenuWhenActive()}
              >
                accessories
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.themeButton}>
          <ThemeButton />
        </div>
        <div className={styles.icons}>
          <NavLink to="favourites" className={`${styles.icon} icon--favourit`} onClick={() => toggleMenuWhenActive()}>
            <img src="/img/favourit.svg" alt="favourit" />
          </NavLink>
          <NavLink to="cart" className={`${styles.icon} icon--shoping`} onClick={() => toggleMenuWhenActive()}>
            <img src="/img/shoping.svg" alt="shoping" />
          </NavLink>
        </div>

        <div className={styles.burger__menu}>
          {isMenuOpen ? (
            <div
              className={`${styles.burger__menu__close}`}
              onClick={() => toggleMenu()}
            >
              <img src="/img/closer-menu.svg" alt="Close" />
            </div>
          ) : (
            <div
              className={`${styles.burger__menu__open}`}
              onClick={() => toggleMenu()}
            >
              <img src="/img/open-menu.svg" alt="Open" />
            </div>
          )}
        </div>
      </div>
    </header>
    
  );
};
