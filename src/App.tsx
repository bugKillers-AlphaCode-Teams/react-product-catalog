import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar/Navbar";
import { useContext } from "react";
import { themeContext } from "./store/ThemeContext";
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
