import React, { createContext, useState } from "react";
import { Product } from "../types/Product";

type FavouritesContext = {
  favouritsProducts: Product[];
  toggleFavoutiteProduct: (product: Product) => void;
};

type Props = {
  children: React.ReactNode;
};

export const FavouritesContext = createContext<FavouritesContext>({
  favouritsProducts: [],
  toggleFavoutiteProduct: () => {},
});

export const FvouritesContextProvider: React.FC<Props> = ({ children }) => {
  const [favouritsProducts, setProducts] = useState<Product[]>([]);

  const toggleFavoutiteProduct = (product: Product) => {
    setProducts((prevProducts) => {
      const productExists = prevProducts.some((p) => p.id === product.id);

      if (productExists) {
        return prevProducts.filter((p) => p.id !== product.id);
      } else {
        return [...prevProducts, product];
      }
    });
  };

  // const deleteProduct = (productId: string) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.filter((product) => product.id !== productId)
  //   );
  // };

  return (
    <FavouritesContext.Provider
      value={{
        favouritsProducts,
        toggleFavoutiteProduct,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
