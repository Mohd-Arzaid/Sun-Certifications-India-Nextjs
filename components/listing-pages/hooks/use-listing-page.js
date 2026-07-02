"use client";

import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { compareListingItemsNewestFirst } from "../utils/listing-date-helpers";
import { itemMatchesSearchQuery } from "../utils/listing-search-helpers";

const DEFAULT_ITEMS_PER_PAGE = 6;

const parsePageFromUrl = (searchParams, totalPages) => {
  const rawPage = Number(searchParams.get("page"));
  if (!Number.isFinite(rawPage) || rawPage < 1) return 1;
  if (totalPages > 0 && rawPage > totalPages) return totalPages;
  return rawPage;
};

export const useListingPage = ({
  items,
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQueryText, setSearchQueryText] = useState("");

  const hasDateField = items.length > 0 && items[0]?.date;
  const sortedItems = hasDateField
    ? [...items].sort(compareListingItemsNewestFirst)
    : items;

  const filteredItems = searchQueryText.trim()
    ? sortedItems.filter((item) =>
        itemMatchesSearchQuery(item, searchQueryText)
      )
    : sortedItems;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentPage = parsePageFromUrl(searchParams, totalPages);

  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(start, start + itemsPerPage);
  const showPagination = totalPages > 1;

  const handleSearchChange = (inputValue) => {
    setSearchQueryText(inputValue.toLowerCase());

    if (searchParams.get("page")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    showPagination,
    handlePageChange,
    searchQueryText,
    handleSearchChange,
  };
};
