"use client";

import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { SCHEMEX_PRODUCTS_LIST } from "./scheme-x-products-data";

// pageText = breadcrumb + heading + search placeholder
const pageText = {
  breadcrumb: "SchemeX Products",
  heading: "SchemeX Products",
  subtitle:
    "Comprehensive BIS Scheme X certification guides for pumps and liquid elevators",
  searchPlaceholder: "Search for SchemeX Products",
  searchAriaLabel: "Search SchemeX Products",
};

// noResults = jab koi card match na ho
const noResults = {
  message: "No products found matching your search criteria.",
  hint: "Try searching with different keywords or browse all our SchemeX products.",
  showContactButtons: true,
};

export default function SchemeXProductsPage() {
  return (
    <ListingPageLayout
      pageText={pageText}
      items={SCHEMEX_PRODUCTS_LIST}
      uniqueKey="id"
      cardType="slug"
      noResults={noResults}
      searchSettings={{ normalizeSearch: "lowercase-input" }}
    />
  );
}
