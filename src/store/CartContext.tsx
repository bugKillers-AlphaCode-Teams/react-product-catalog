import React, { createContext, useState } from "react";
import { Product } from "../types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContext = {
  products: CartItem[];
  addProducts: (product: Product) => void;
  getProductQuontity: (productId: string) => number;
  totalPrice: number;
  deleteProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
  totalQuantity: number;
};
type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContext>({
  products: [],
  addProducts: () => {},
  getProductQuontity: () => 0,
  totalPrice: 0,
  deleteProduct: () => {},
  decrementProduct: () => {},
  totalQuantity: 0,
});

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<CartItem[]>([]);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.product.priceDiscount * product.quantity;
  }, 0);

  const totalQuantity = products.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  const addProducts = (product: Product) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (p) => p.product.id === product.id
      );

      if (existingProduct) {
        return prevProducts.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevProducts, { product, quantity: 1 }];
    });
  };

  const deleteProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product.id !== productId)
    );
  };
  const decrementProduct = (productId: string) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (p) => p.product.id === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevProducts.map((p) =>
            p.product.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          );
        } else {
          return prevProducts.filter((p) => p.product.id !== productId);
        }
      }
      return prevProducts;
    });
  };
  const getProductQuontity = (prductId: string) => {
    const item = products.find((p) => p.product.id === prductId);
    return item ? item.quantity : 0;
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProducts,
        getProductQuontity,
        totalPrice,
        deleteProduct,
        decrementProduct,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
