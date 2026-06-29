import { buildFaqSchema } from "./build-faq-schema";

const FaqStructuredData = ({ faqs }) => {
  if (!faqs?.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildFaqSchema(faqs)),
      }}
    />
  );
};

export default FaqStructuredData;
