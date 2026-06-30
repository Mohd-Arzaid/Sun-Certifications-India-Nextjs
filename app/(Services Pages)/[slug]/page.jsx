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
import EMIEMC from "@/components/services-pages/EMIEMC/EMIEMC";
import { EMIEMC_SEO_META_TAGS } from "@/components/services-pages/EMIEMC/EMIEMC-seo-meta-tags";
import CDSCO from "@/components/services-pages/CDSCO/CDSCO";
import { CDSCO_SEO_META_TAGS } from "@/components/services-pages/CDSCO/CDSCO-seo-meta-tags";
import BatteryWaste from "@/components/services-pages/BatteryWaste/BatteryWaste";
import { BATTERY_WASTE_SEO_META_TAGS } from "@/components/services-pages/BatteryWaste/BatteryWaste-seo-meta-tags";
import Tec from "@/components/services-pages/Tec/Tec";
import { TEC_SEO_META_TAGS } from "@/components/services-pages/Tec/Tec-seo-meta-tags";
import LMPC from "@/components/services-pages/LMPC/LMPC";
import { LMPC_SEO_META_TAGS } from "@/components/services-pages/LMPC/LMPC-seo-meta-tags";
import Peso from "@/components/services-pages/Peso/Peso";
import { PESO_SEO_META_TAGS } from "@/components/services-pages/Peso/Peso-seo-meta-tags";
import BEE from "@/components/services-pages/BEE/BEE";
import { BEE_SEO_META_TAGS } from "@/components/services-pages/BEE/BEE-seo-meta-tags";
import LegalMetrology from "@/components/services-pages/LegalMetrology/LegalMetrology";
import { LEGAL_METROLOGY_SEO_META_TAGS } from "@/components/services-pages/LegalMetrology/LegalMetrology-seo-meta-tags";
import WPC from "@/components/services-pages/WPC/WPC";
import { WPC_SEO_META_TAGS } from "@/components/services-pages/WPC/WPC-seo-meta-tags";
import CBCertification from "@/components/services-pages/CBCertification/CBCertification";
import { CBCERTIFICATION_SEO_META_TAGS } from "@/components/services-pages/CBCertification/CBCertification-seo-meta-tags";
import NABL from "@/components/services-pages/NABL/NABL";
import { NABL_SEO_META_TAGS } from "@/components/services-pages/NABL/NABL-seo-meta-tags";
import APEDARegistration from "@/components/services-pages/APEDARegistration/APEDARegistration";
import { APEDA_REGISTRATION_SEO_META_TAGS } from "@/components/services-pages/APEDARegistration/APEDARegistration-seo-meta-tags";
import IntroductiontoERDAandERDACertificate from "@/components/services-pages/IntroductiontoERDAandERDACertificate/IntroductiontoERDAandERDACertificate";
import { ERDA_CERTIFICATE_SEO_META_TAGS } from "@/components/services-pages/IntroductiontoERDAandERDACertificate/IntroductiontoERDAandERDACertificate-seo-meta-tags";

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
  "emi-emc-certification": {
    component: EMIEMC,
    metadata: EMIEMC_SEO_META_TAGS,
  },
  "cdsco-registration-certification": {
    component: CDSCO,
    metadata: CDSCO_SEO_META_TAGS,
  },  
  "epr-certificate-for-battery-waste-management-bwm": {
    component: BatteryWaste,
    metadata: BATTERY_WASTE_SEO_META_TAGS,
  },
  "information-about-tec-certificate-mtcte": {
    component: Tec,
    metadata: TEC_SEO_META_TAGS,
  },
  "a-guide-on-how-to-obtain-lmpc-certificate": {
    component: LMPC,
    metadata: LMPC_SEO_META_TAGS,
  },
  "information-about-peso-certification-peso-license-india": {
    component: Peso,
    metadata: PESO_SEO_META_TAGS,
  },
  "bee-certification": {
    component: BEE,
    metadata: BEE_SEO_META_TAGS,
  },
  "what-is-legal-metrology-or-lmpc-certificate": {
    component: LegalMetrology,
    metadata: LEGAL_METROLOGY_SEO_META_TAGS,
  },
  "information-about-wpc-certificate-eta-approval": {
    component: WPC,
    metadata: WPC_SEO_META_TAGS,
  },
  "cb-certification": {
    component: CBCertification,
    metadata: CBCERTIFICATION_SEO_META_TAGS,
  },
  "nabl-certification-india": {
    component: NABL,
    metadata: NABL_SEO_META_TAGS,
  },
  "apeda-registration-india": {
    component: APEDARegistration,
    metadata: APEDA_REGISTRATION_SEO_META_TAGS,
  },
  "erda-certificate-india": {
    component: IntroductiontoERDAandERDACertificate,
    metadata: ERDA_CERTIFICATE_SEO_META_TAGS,
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
