import { Outlet } from "react-router-dom";
import "./styles/fonts.scss";
import styles from "./App.module.scss";

import { useContext } from "react";
import { themeContext } from "./store/ThemeContext";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${styles.app} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <Navbar />
      <main className={styles.pageMain}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
