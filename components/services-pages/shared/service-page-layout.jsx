import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import ServiceHero from "./service-hero";

const ServicePageLayout = ({ breadcrumbLabel, hero }) => {
  return (
    <div>
      <CommonBreadcrumb label={breadcrumbLabel} />
      <ServiceHero
        heading={hero.heading}
        description={hero.description}
        headingAs={hero.headingAs}
      />
    </div>
  );
};

export default ServicePageLayout;
