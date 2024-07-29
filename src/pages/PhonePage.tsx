import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { Product } from "../types/Product";
import { Pagination } from "../components/Pagination/Pagination.tsx";

const URL = "/api/phones.json";
export const PhonePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((phones) => setProducts(phones))
      .catch(() => {
        "some error";
      });
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <h1>Mobile phones</h1>
      <ProductList products={currentProduct} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
