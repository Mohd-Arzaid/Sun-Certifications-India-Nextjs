import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { BIS_QCO_UPDATES_LIST } from "./bis-qco-updates-data";

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
    />
  );
};

export default BIS_QCO_Updates;
