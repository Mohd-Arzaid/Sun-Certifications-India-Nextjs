"use client";

import { useState } from "react";

const DEFAULT_ITEMS_PER_PAGE = 6;

// ye hook hume bata ta hai ki kitne Items ek page pai dikhane hai
// for eg : if total items are 20 , aur items per page is 6
// then page 1 will show 6 items , page 2 will show 6 items , and so on

export const useListingPage = ({
  items,
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Math.ceil => round off to the nearest larger integer => 1.2 => 2 , 2.5 => 3
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;

  // 1st page , start = 0 , end = 6 => slice(0 , 6) => 0th , 1st , 2nd , 3rd , 4th , 5th index items (total 6 items)

  // 2nd page , start = 6 , end = 12 => slice(6, 12) => 6th , 7th , 8th , 9th , 10th , 11th index items (total 6 items)

  // Learning slice method => start include hota hai , end exclude hota hai
  const currentItems = items.slice(start, start + itemsPerPage);
  const showPagination = totalPages > 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    showPagination,
    handlePageChange,
  };
};
