"use client";

import CommonBreadcrumb from "../common/common-breadcrumb";
import { useListingPage } from "./hooks/use-listing-page";
import ListingPageCard from "./listing-page-card";
import ListingPageGrid from "./listing-page-grid";
import ListingPageHero from "./listing-page-hero";
import ListingPageItemsNotFound from "./listing-page-items-not-found";
import ListingPagePagination from "./listing-page-pagination";
import ListingPageSearchBar from "./listing-page-search-bar";

const ListingPageLayout = ({
  breadcrumbLabel,
  hero,
  search_bar,
  items,
  items_not_found,
}) => {
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    searchQueryText,
    handleSearchChange,
  } = useListingPage({ items });

  return (
    <>
      {/* Breadcrumb Section */}
      <CommonBreadcrumb label={breadcrumbLabel} />
      <div className="bg-[#f9f7f2]">
        <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
          {/* Hero Section */}
          <ListingPageHero
            heading={hero.heading}
            description={hero.description}
          />
          {/* Search Bar Section */}
          <ListingPageSearchBar
            placeholder={search_bar.placeholder}
            searchQueryText={searchQueryText}
            onSearchChange={handleSearchChange}
          />
          {/* Listing Page Grid Section */}
          <ListingPageGrid>
            {currentItems.length > 0
              ? currentItems.map((item) => (
                  <ListingPageCard key={item.id} item={item} />
                ))
              : items_not_found && (
                  <ListingPageItemsNotFound
                    message={items_not_found.message}
                    hint={items_not_found.hint}
                    showContactButtons={items_not_found.showContactButtons}
                  />
                )}
          </ListingPageGrid>
        </div>
        <ListingPagePagination
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ListingPageLayout;
