const CANONICAL_URL =
  "https://bis-certifications.com/apeda-registration-india";

const TITLE =
  "APEDA Registration | APEDA RCMC Certificate for Agricultural Exporters in India";

const DESCRIPTION =
  "Complete guide to APEDA Registration in India. Learn about APEDA RCMC, registration process, documents, fees, renewal, return filing, and benefits for agricultural exporters.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const APEDA_REGISTRATION_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "APEDA Registration, APEDA RCMC, APEDA License, APEDA Certificate, APEDA Registration Online, APEDA Registration Documents, APEDA Registration Fee, APEDA Renewal, APEDA Return Filing, Agricultural Export Registration",
  authors: [{ name: "Dhruv Aggarwal" }],
  other: {
    publisher: "Sun Certifications India",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Sun Certifications India",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};
