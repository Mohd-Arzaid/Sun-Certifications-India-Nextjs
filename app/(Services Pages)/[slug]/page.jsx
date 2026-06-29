import { notFound } from "next/navigation";
import BISFM from "@/components/services-pages/BISFM/BISFM";
import BISCertification from "@/components/services-pages/BISCertification/BISCertification";

const SERVICE_PAGES = {
  "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": BISFM,
  "what-is-bis-certificate-indian-bis":BISCertification,
};

export const generateStaticParams = () => {
  return Object.keys(SERVICE_PAGES).map((slug) => ({ slug }));
};

const ServiceSlugPage = async ({ params }) => {
  const { slug } = await params;
  const PageComponent = SERVICE_PAGES[slug];

  if (!PageComponent) {
    notFound();
  }

  return (
    <div className="w-full">
      <PageComponent />
    </div>
  );
};

export default ServiceSlugPage;
