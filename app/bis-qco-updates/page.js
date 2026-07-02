import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { BIS_QCO_UPDATES_LIST } from "./bis-qco-updates-data";

const items_not_found = {
  message: "No Results found matching your Search Criteria.",
  hint: "Don't worry! We're here to help you find what you're looking for.",
  showContactButtons: true,
};

const hero = {
  heading: "QCO Notifications",
  description:
    "Stay updated with the latest Quality Control Order notifications and certification requirements",
};

const search_bar = {
  placeholder: "Search for Government Notification/QCO Updates",
};

const BIS_QCO_Updates = () => {
  return (
    <ListingPageLayout
      breadcrumbLabel="DRAFT QCO Notifications"
      hero={hero}
      search_bar={search_bar}
      items={BIS_QCO_UPDATES_LIST}
      items_not_found={items_not_found}
    />
  );
};

export default BIS_QCO_Updates;
