import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar/Navbar";
import { NewModels } from "./components/NewModels";
import { useContext } from "react";
import { themeContext } from "./store/ThemeContext";
import { HotPrices } from "./components/HotPrices";

export const App = () => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`${styles.app} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <Navbar />
      <NewModels />

      <main className={styles.pageMain}>
        <Outlet />
      </main>
      <HotPrices />
      <Footer />
    </div>
  );
};
