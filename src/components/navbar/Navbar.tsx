import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <NavLink to="/" className="">
            <img src="/img/Logo.svg" alt="logo" className={styles.logo} />
          </NavLink>
          <nav className="">
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
          <div className={styles.header__icon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.buttons}>
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
  );
};
