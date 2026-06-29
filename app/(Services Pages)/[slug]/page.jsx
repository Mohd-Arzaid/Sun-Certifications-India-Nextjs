import { notFound } from "next/navigation";
import BISFM from "@/components/services-pages/BISFM/BISFM";
import BISCertification from "@/components/services-pages/BISCertification/BISCertification";
import ISIMark from "@/components/services-pages/ISIMark/ISIMark";
import { BISFM_SEO_META_TAGS } from "@/components/services-pages/BISFM/bisfm-seo-meta-tags";

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
