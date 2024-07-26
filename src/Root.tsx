import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { PhonePage } from "./pages/PhonePage";
import { TabletsPage } from "./pages/TabletsPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { FavouritesPage } from "./pages/FavoritesPage";
import { ThemeContextProvider } from "./store/ThemeContext";

export const Root = () => (
  <BrowserRouter>
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phone" element={<PhonePage />} />
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="favorites" element={<FavouritesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeContextProvider>
  </BrowserRouter>
);
