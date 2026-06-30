import ListingPageLayout from "@/components/listing-pages/listing-page-layout";

const BIS_QCO_UPDATES_LIST = [
  {
    id: 1,
    color: "#1A8781",
    tagType: "New QCO",
    date: "13 February 2025",
    title: "BIS certification for Work chairs",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ Work chairs.",
    pdfUrl: "/pdf/bis-qco-for-work-chairs.pdf",
    href: "/bis-qco-updates/bis-certificate-for-work-chairs",
  },
  {
    id: 2,
    color: "#C86A31",
    tagType: "Update",
    date: "13 February 2025",
    title: "BIS certification for Chairs and stools",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ General purpose chairs and stools.",
    pdfUrl: "/pdf/bis-qco-for-chairs-and-stools.pdf",
    href: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
  },
];

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
