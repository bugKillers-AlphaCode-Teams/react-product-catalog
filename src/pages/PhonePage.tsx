
import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { Product } from "../types/Product";
const URL = "/api/phones.json";
export const PhonePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
 
  console.log(products);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((phones) => setProducts(phones))
      .catch(() => {
        "some error";
      });
  }, []);
  return (
    <>
      <h1>Mobile phones</h1>
      <ProductList products={products} />
    </>
  );


};
