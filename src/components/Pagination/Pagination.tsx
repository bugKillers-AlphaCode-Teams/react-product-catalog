import React from "react";
import styles from "./Pagination.module.scss";

interface Props {
  productsPerPage: number;
  totalProducts: number;
  paginate: (number: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div >
      <ul className={styles.pagination}>
        {pageNumber.map((number) => (
          <li className='' key={number}>
            <a
              href="#/"
              className={currentPage === number ? `${styles.pageLink} ${styles.active}` : styles.pageLink}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
