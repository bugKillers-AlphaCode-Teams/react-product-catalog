import { Outlet } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar/Navbar";
import { NewModels } from "./components/NewModels";
export const App = () => {
  return (
    <>
      <Navbar />
      <NewModels />
      <main className="page__main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
