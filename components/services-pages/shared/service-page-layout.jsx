import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import ServiceHero from "./service-hero";
import ServiceIndex from "./service-index";

const ServicePageLayout = ({ breadcrumbLabel, hero, sections, faqs }) => {
  // basically agar faqs hai toh sections ke end mai FAQs add kardenge in index
  const sectionsWithFaqs =
    faqs?.length > 0 ? [...sections, { id: "faqs", label: "FAQs" }] : sections;
  return (
    <div>
      <CommonBreadcrumb label={breadcrumbLabel} />
      <ServiceHero
        heading={hero.heading}
        description={hero.description}
        headingAs={hero.headingAs}
      />
      <ServiceIndex index={sectionsWithFaqs} />
    </div>
  );
};

export default ServicePageLayout;
