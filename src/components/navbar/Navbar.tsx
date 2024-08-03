import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { useCart } from "../../utils/useCart";
import { useFavourits } from "../../utils/useFavourites";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useCart();
  const { favouritesProducts } = useFavourits();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "uk" : "en";
    i18n.changeLanguage(newLanguage);
  };

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
                {i18n.t("nav.home.text")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="phones"
                onClick={() => toggleMenuWhenActive()}
              >
                {i18n.t("nav.phones.text")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="tablets"
                onClick={() => toggleMenuWhenActive()}
              >
                {i18n.t("nav.tablets.text")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.nav__link}
                to="accessories"
                onClick={() => toggleMenuWhenActive()}
              >
                {t("nav.accessories.text")}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.themeButton}>
          <ThemeButton />
        </div>

        <div className={styles.icons}>
          <button onClick={toggleLanguage} className={`${styles.language}`}>
            {currentLanguage === "en"
              ? i18n.t("header.lang.text")
              : i18n.t("header.lang.text")}
          </button>
          <NavLink
            to="favourites"
            className={`${styles.icon} icon--favourit`}
            onClick={() => toggleMenuWhenActive()}
          >
            <img src="/img/favourit.svg" alt="favourit" />
            <span className={`${styles.iconCount} ${styles.favourit}`}>
              {favouritesProducts.length}
            </span>
          </NavLink>
          <NavLink
            to="cart"
            className={`${styles.icon} icon--shoping`}
            onClick={() => toggleMenuWhenActive()}
          >
            <img src="/img/shoping.svg" alt="shoping" />
            <span className={styles.iconCount}>{totalQuantity}</span>
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
