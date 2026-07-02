import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { SCHEMEX_PRODUCTS_LIST } from "./scheme-x-products-data";

const hero = {
  heading: "SchemeX Products",
  description:
    "Comprehensive BIS Scheme X certification guides for pumps and liquid elevators",
};

const search_bar = {
  placeholder: "Search for SchemeX Products",
};

const SchemeXProductsPage = () => {
  return (
    <ListingPageLayout
      breadcrumbLabel="SchemeX Products"
      hero={hero}
      search_bar={search_bar}
      items={SCHEMEX_PRODUCTS_LIST}
    />
  );
};

export default SchemeXProductsPage;
