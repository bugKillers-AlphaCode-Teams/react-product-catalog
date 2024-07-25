import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { PhonePage } from "./pages/PhonePage";
import { TabletsPage } from "./pages/TabletsPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { FavouritesPage } from "./pages/FavoritesPage";
import { ThemeContextProvider } from "./store/ThemeContext";

export const Root = () => (
  <HashRouter>
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="phone">
            <Route index element={<PhonePage />} />
          </Route>

          <Route path="tablets">
            <Route index element={<TabletsPage />} />
          </Route>

          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
          </Route>

          <Route path="favorites">
            <Route index element={<FavouritesPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  </HashRouter>
);
