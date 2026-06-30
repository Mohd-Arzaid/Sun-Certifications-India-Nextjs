"use client";

import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { BLOGS_LIST } from "./blogs-data";

// pageText = breadcrumb + heading + search placeholder
const pageText = {
  breadcrumb: "Latest Blogs",
  heading: "Latest Blogs",
  subtitle:
    "Stay updated with the latest blogs and articles from our experts",
  searchPlaceholder: "Search for Latest Blogs",
  searchAriaLabel: "Search Latest Blogs",
};

// noResults = jab koi card match na ho
const noResults = {
  message: "No blogs found matching your search criteria.",
  hint: "Try searching with different keywords or browse all our latest blogs.",
  showContactButtons: true,
};

export default function BlogsPage() {
  return (
    <ListingPageLayout
      pageText={pageText}
      items={BLOGS_LIST}
      uniqueKey="slug"
      cardType="slug"
      cardSettings={{ dateField: "date" }}
      noResults={noResults}
    />
  );
}
