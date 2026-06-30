"use client";

import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { ministryDateSort } from "@/components/listing-pages/utils/parse-date";
import { MINISTRY_UPDATES_LIST } from "./ministry-updates-data";

// pageText = breadcrumb + heading + search placeholder
const pageText = {
  breadcrumb: "Ministry Updates",
  heading: "Ministry Updates",
  subtitle:
    "Stay updated with the latest Quality Control Order withdraw notifications and regulatory changes",
  searchPlaceholder: "Search for Ministry Updates/QCO Withdraw Orders",
  searchAriaLabel: "Search ministry updates",
};

// noResults = jab koi card match na ho
const noResults = {
  message: "No ministry updates found matching your Search Criteria.",
  hint: "Don't worry! We're here to help you find what you're looking for.",
  showContactButtons: true,
};

export default function MinistryUpdatesPage() {
  return (
    <ListingPageLayout
      pageText={pageText}
      items={MINISTRY_UPDATES_LIST}
      uniqueKey="id"
      cardType="notification"
      cardSettings={{
        hrefField: "link",
        dateField: "displayDate",
        showPdf: false,
      }}
      noResults={noResults}
      sortItems={ministryDateSort} // newest ministry update pehle
      searchSettings={{ normalizeSearch: "lowercase-input" }}
    />
  );
}
