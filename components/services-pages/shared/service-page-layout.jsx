import CommonBreadcrumb from "@/components/common/common-breadcrumb";

const ServicePageLayout = ({ breadcrumbLabel }) => {
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
