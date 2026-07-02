import ListingPageLayout from "@/components/listing-pages/listing-page-layout";
import { MINISTRY_UPDATES_LIST } from "./ministry-updates-data";

const hero = {
  heading: "Ministry Updates",
  description:
    "Stay updated with the latest Quality Control Order withdraw notifications and regulatory changes",
};

const search_bar = {
  placeholder: "Search for Ministry Updates/QCO Withdraw Orders",
};

const MinistryUpdatesPage = () => {
  return (
    <ListingPageLayout
      breadcrumbLabel="Ministry Updates"
      hero={hero}
      search_bar={search_bar}
      items={MINISTRY_UPDATES_LIST}
    />
  );
};

export default MinistryUpdatesPage;
