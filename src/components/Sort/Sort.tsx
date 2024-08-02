import { FC, useState } from "react";
import styles from "./Sort.module.scss";
import { Product } from "../../types/Product";

export enum Sorting {
  BY_YEAR = "newest",
  BY_NAME = "alphabetically",
  BY_PRICE = "cheapest",
}

interface Props {
  products: Product[];
  productsPerPage: number;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setProductsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Sort: FC<Props> = ({
  setProducts,
  products,
  setProductsPerPage,
  productsPerPage,
  setCurrentPage,
}) => {
  const [isSortActive, setIsSortActive] = useState(false);
  const [isSortNumberActive, setIsSortNumberActive] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(Sorting.BY_NAME);

  const sortProducts = (criteria: Sorting) => {
    const sortedProducts = [...products];
    switch (criteria) {
      // case Sorting.BY_YEAR:
      //   sortedProducts.sort((a, b) => b.year - a.year);
      //   break;
      case Sorting.BY_NAME:
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case Sorting.BY_PRICE:
        sortedProducts.sort((a, b) => a.priceRegular - b.priceRegular);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };
  const onSortTrigger = () => {
    setIsSortActive((prev) => !prev);
  };

  const handleSortOptionClick = (criteria: Sorting) => {
    setSortCriteria(criteria);
    sortProducts(criteria);
    onSortTrigger();
  };

  const handleSortByNumberClick = (number: number) => {
    setProductsPerPage(number);
    setCurrentPage(1);
    setIsSortNumberActive((current) => !current);
  };

  console.log(products);

  return (
    <div className={styles.sort__container}>
      <div className={styles.dropdown}>
        <p className={styles.dropdown__label}>Sort by</p>

        <div className={styles.dropdown__box}>
          <span className={`${styles.dropdown__box__text} ${styles.Alphabetically}`}>{sortCriteria}</span>
          <button
            className={styles.dropdown__box__trigger}
            onClick={onSortTrigger}
          >
            {isSortActive ? (
              <img src="/img/arrow-upp.svg" alt="" />
            ) : (
              <img src="/img/arrow-down.svg" alt="" />
            )}
          </button>
        </div>

        <ul
          className={`${styles.dropdown__options} ${
            isSortActive && styles.active
          }`}
        >
          {/* <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_YEAR}
            onClick={() => {
              handleSortOptionClick(Sorting.BY_YEAR);
            }}
          >
            Newest
          </li> */}
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_NAME}
            onClick={() => handleSortOptionClick(Sorting.BY_NAME)}
          >
            Alphabetically
          </li>
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_PRICE}
            onClick={() => handleSortOptionClick(Sorting.BY_PRICE)}
          >
            Cheapest
          </li>
        </ul>
      </div>

      <div className={styles.dropdown}>
        <p className={styles.dropdown__label}>Items on page</p>

        <div className={`${styles.dropdown__box} ${styles.sort__number}`}>
          <span className={styles.dropdown__box__text}>
            {productsPerPage > 16 ? "All" : productsPerPage}
          </span>
          <button
            className={styles.dropdown__box__trigger}
            onClick={() => setIsSortNumberActive((current) => !current)}
          >
            {isSortNumberActive ? (
              <img src="/img/arrow-upp.svg" alt="" />
            ) : (
              <img src="/img/arrow-down.svg" alt="" />
            )}
          </button>
        </div>

        <ul
          className={`${styles.dropdown__options} ${styles.sort__number} ${
            isSortNumberActive && styles.active
          }`}
        >
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_YEAR}
            onClick={() => handleSortByNumberClick(4)}
          >
            4
          </li>
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_NAME}
            onClick={() => handleSortByNumberClick(8)}
          >
            8
          </li>
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_PRICE}
            onClick={() => handleSortByNumberClick(16)}
          >
            16
          </li>
          <li
            className={styles.dropdown__options__option}
            data-value={Sorting.BY_PRICE}
            onClick={() => handleSortByNumberClick(products.length)}
          >
            All
          </li>
        </ul>
      </div>
    </div>
  );
};
