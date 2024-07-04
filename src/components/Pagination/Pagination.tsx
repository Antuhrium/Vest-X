import React from 'react';
import styles from './style.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const pagesToShow = 5; // We'll show 5 page numbers at a time

    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button key={1} className={styles.paginationItem} onClick={() => onPageChange(1)}>1</button>
      );
      if (startPage > 2) {
        pageNumbers.push(<button key="ellipsis1" className={styles.paginationItem}>...</button>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${styles.paginationItem} ${currentPage === i ? styles.active : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<button key="ellipsis2" className={styles.paginationItem}>...</button>);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          className={styles.paginationItem}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {renderPageNumbers()}
        <button
          className={styles.nextButton}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        >
          &gt;
        </button>
      </div>
      <div className={styles.showItems}>
        Show items: <span className={styles.itemsNumber}>9</span> <span className={styles.arrowDown}>▼</span>
      </div>
    </div>
  );
};

export default Pagination;

// const [currentPage, setCurrentPage] = useState(1);
// const totalPages = 24;
//
// const handlePageChange = (page: number) => {
//   setCurrentPage(page);
// };
//
//
// <Pagination
//   totalPages={totalPages}
//   currentPage={currentPage}
//   onPageChange={handlePageChange}
// />
