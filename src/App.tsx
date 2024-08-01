import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './styles/fonts.scss';
import styles from './App.module.scss';
import { themeContext } from './store/ThemeContext';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import Loader from '../src/components/Loader/Loader';

export const App: React.FC = () => {
  const { theme } = useContext(themeContext);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleNavigation = () => {
      setLoading(true);
      // Симуляція затримки для завантаження даних або компонента
      const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Задайте затримку, яка вам потрібна
        setLoading(false);
      };

      fetchData();
    };

    handleNavigation();
  }, [location]);

  return (
    <div
      className={`${styles.app} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      {loading && <Loader />}
      <Navbar />
      <main className={styles.pageMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
