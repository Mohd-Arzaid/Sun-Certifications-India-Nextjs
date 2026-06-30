"use client";

import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { ALL_INDIA_FIRST_LIST } from "./all-india-first-data";

// pageText = breadcrumb + heading + search placeholder
const pageText = {
  breadcrumb: "India No 1",
  heading: "All India First Licenses",
  subtitle:
    "Explore India's First Licenses and Access Expert Resources, Insights, and Guidance.",
  searchPlaceholder: "Search for India No 1 Pages",
  searchAriaLabel: "Search India No 1 Pages",
};

// noResults = jab koi card match na ho
const noResults = {
  message: "No pages found matching your search criteria.",
  hint: "Try searching with different keywords or browse all India No 1 pages.",
  showContactButtons: true,
};

export default function AllIndiaFirstPage() {
  return (
    <ListingPageLayout
      pageText={pageText}
      items={ALL_INDIA_FIRST_LIST}
      uniqueKey="slug"
      cardType="slug"
      cardSettings={{ dateField: "date" }}
      noResults={noResults}
    />
  );
}
