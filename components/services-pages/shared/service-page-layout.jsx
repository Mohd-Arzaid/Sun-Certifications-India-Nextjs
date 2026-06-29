import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import ServiceHero from "./service-hero";
import ServiceIndex from "./service-index";
import { ServiceSeparator } from "./service-content";
import ServiceSection from "./service-section";
import { Fragment } from "react";
import ServiceRightSideContent from "./service-right-side-content";
import ServiceFaq from "./service-faq";
import Author from "../../common/author";
import ServiceLanguageSelector from "./service-language-selector";

const ServicePageLayout = ({
  breadcrumbLabel,
  hero,
  intro,
  sections,
  faqs,
  languages,
}) => {
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
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:pt-12 md:pb-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex flex-col gap-6 md:gap-9">
              {intro}
              {intro && <ServiceSeparator />}
              {sections.map((section, index) => (
                <Fragment key={section.id}>
                  {index > 0 && <ServiceSeparator />}
                  <ServiceSection id={section.id} label={section.label}>
                    {section.section}
                  </ServiceSection>
                </Fragment>
              ))}
              <Author />
            </div>
          </div>

          {/* Right Side */}
          <ServiceRightSideContent />
        </div>
      </div>
      {faqs?.length > 0 && <ServiceFaq faqs={faqs} />}
      {languages?.length > 0 && <ServiceLanguageSelector languages={languages} />}
    </div>
  );
};

export default ServicePageLayout;
