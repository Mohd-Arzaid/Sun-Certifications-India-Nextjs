import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "BIS Certification for Foreign Manufacturers",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const BISFM = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BISFM"
      hero={hero}
    />
  );
};

export default BISFM;
