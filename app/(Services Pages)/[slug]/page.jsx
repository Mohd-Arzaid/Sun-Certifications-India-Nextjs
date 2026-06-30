import { notFound } from "next/navigation";
import BISFM from "@/components/services-pages/BISFM/BISFM";
import BISCertification from "@/components/services-pages/BISCertification/BISCertification";
import ISIMark from "@/components/services-pages/ISIMark/ISIMark";
import { BISFM_SEO_META_TAGS } from "@/components/services-pages/BISFM/bisfm-seo-meta-tags";
import { AIR_SEO_META_TAGS } from "@/components/services-pages/AIR/AIR-seo-meta-tags";
import AuthorizedIndianRepresentativeAIR from "@/components/services-pages/AIR/AuthorizedIndianRepresentativeAIR";
import CRSRegistration from "@/components/services-pages/CRSRegistration/CRSRegistration";
import { CRS_SEO_META_TAGS } from "@/components/services-pages/CRSRegistration/CRS-seo-meta-tags";
import CECertification from "@/components/services-pages/CECertification/CECertification";
import { CE_CERTIFICATION_SEO_META_TAGS } from "@/components/services-pages/CECertification/CECertification-seo-meta-tags";
import SchemeX from "@/components/services-pages/SchemeX/SchemeX";
import { SCHEME_X_SEO_META_TAGS } from "@/components/services-pages/SchemeX/SchemeX-seo-meta-tags";
import EPRService from "@/components/services-pages/EPRService/EPRService";
import { EPR_SERVICE_SEO_META_TAGS } from "@/components/services-pages/EPRService/EPRService-seo-meta-tags";
import ROHS from "@/components/services-pages/ROHS/ROHS";
import { ROHS_SEO_META_TAGS } from "@/components/services-pages/ROHS/ROHS-seo-meta-tags";
import PlasticWaste from "@/components/services-pages/PlasticWaste/PlasticWaste";
import { PLASTIC_WASTE_SEO_META_TAGS } from "@/components/services-pages/PlasticWaste/PlasticWaste-seo-meta-tags";

const SERVICES = {
  "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": {
    component: BISFM,
    metadata: BISFM_SEO_META_TAGS,
  },
  "what-is-bis-certificate-indian-bis": {
    component: BISCertification,
  },
  "a-guide-to-bis-certification-indian-bis": {
    component: ISIMark,
  },
  "authorized-indian-representative": {
    component: AuthorizedIndianRepresentativeAIR,
    metadata: AIR_SEO_META_TAGS,
  },

  "what-is-crs-bis-or-crs-registration": {
    component: CRSRegistration,
    metadata: CRS_SEO_META_TAGS,
  },
  "ce-certification": {
    component: CECertification,
    metadata: CE_CERTIFICATION_SEO_META_TAGS,
  },
  "indian-bis-certification-under-scheme-x": {
    component: SchemeX,
    metadata: SCHEME_X_SEO_META_TAGS,
  },
  "a-guide-on-how-to-obtain-epr-certificate": {
    component: EPRService,
    metadata: EPR_SERVICE_SEO_META_TAGS,
  },
  "restriction-of-hazardous-substance-rohs-certificate": {
    component: ROHS,
    metadata: ROHS_SEO_META_TAGS,
  },
  "epr-certificate-for-plastic-waste-management-pwm": {
    component: PlasticWaste,
    metadata: PLASTIC_WASTE_SEO_META_TAGS,
  },
};

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  return SERVICES[slug]?.metadata ?? {};
};

export const generateStaticParams = () =>
  Object.keys(SERVICES).map((slug) => ({ slug }));

const ServiceSlugPage = async ({ params }) => {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  const PageComponent = service.component;

  return (
    <div className="w-full">
      <PageComponent />
    </div>
  );
};

export default ServiceSlugPage;
