import { Outlet } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar/Navbar";
import { ShopByCategory } from "./components/ShopByCategory";
export const App = () => {
  return (
    <>
      <Navbar />

      <main className="page__main">
        <Outlet />
      </main>
      <ShopByCategory />

      <Footer />
    </>
  );
};
