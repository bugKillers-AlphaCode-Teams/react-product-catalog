import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { Product } from "../types/Product";
import { Pagination } from "../components/Pagination/Pagination.tsx";
import { fetchPhones } from "../services/phoneService.ts";

export const PhonePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phones = await fetchPhones();
        setProducts(phones);
      } catch (error) {
        console.error("Failed to fetch phones:", error);
      }
    };

    fetchData();
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = (current: number) => {
    if (currentPage === Math.ceil(products.length / productsPerPage)) {
      return;
    }
    setCurrentPage(current + 1);
  };
  const prevPage = (current: number) => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(current - 1);
  };

  return (
    <>
      <h1>Mobile phones</h1>
      <ProductList products={currentProduct} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};
