import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { ALL_INDIA_FIRST_LIST } from "./all-india-first-data";

const hero = {
  heading: "All India First Licenses",
  description:
    "Explore India's First Licenses and Access Expert Resources, Insights, and Guidance.",
};

const search_bar = {
  placeholder: "Search for India No 1 Pages",
};

const AllIndiaFirstPage = () => {
  return (
    <ListingPageLayout
      breadcrumbLabel="All India First Licenses"
      hero={hero}
      search_bar={search_bar}
      items={ALL_INDIA_FIRST_LIST}
    />
  );
};

export default AllIndiaFirstPage;
