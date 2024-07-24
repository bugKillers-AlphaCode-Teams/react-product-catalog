import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink to="/" className="">
            Home
          </NavLink>
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
  );
};
