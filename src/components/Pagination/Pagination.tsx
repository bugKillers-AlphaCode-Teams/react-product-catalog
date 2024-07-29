import React from "react";
import styles from "./Pagination.module.scss";

interface Props {
  productsPerPage: number;
  totalProducts: number;
  paginate: (number: number) => void;
  currentPage: number;
  prevPage: (number: number) => void;
  nextPage: (number: number) => void;
}

export const Pagination: React.FC<Props> = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumber: number[] = [];

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const getVisiblePages = () => {
    if (totalPages <= 4) {
      return pageNumber;
    }

    if (currentPage < 3) {
      return pageNumber.slice(0, 4);
    }

    if (currentPage > totalPages - 2) {
      return pageNumber.slice(totalPages - 4, totalPages);
    }

    return pageNumber.slice(currentPage - 2, currentPage + 2);
  };
  const visiblePages = getVisiblePages();

  return (
    <div>
      <ul className={styles.pagination}>
        <a
          href="#/"
          className={`${styles.pageLink} ${styles.arrow}`}
          onClick={() => prevPage(currentPage)}
        >
          <img src="./img/arrow-left-pagination.svg" alt="arrow-left" />
        </a>
        {visiblePages.map((number) => (
          <li className="" key={number}>
            <a
              href="#/"
              className={
                currentPage === number
                  ? `${styles.pageLink} ${styles.active}`
                  : styles.pageLink
              }
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <a
          href="#/"
          className={`${styles.pageLink} ${styles.arrow}`}
          onClick={() => nextPage(currentPage)}
        >
          <img src="./img/arrow-right-pagination.svg" alt="arrow-right" />
        </a>
      </ul>
    </div>
  );
};
