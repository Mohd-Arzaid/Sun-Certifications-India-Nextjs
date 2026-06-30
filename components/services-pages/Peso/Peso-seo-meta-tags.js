const CANONICAL_URL =
  "https://bis-certifications.com/information-about-peso-certification-peso-license-india";

const TITLE = "PESO Certification for Hazardous Goods | Sun Certifications";

const DESCRIPTION =
  "PESO certification ensures safety compliance for hazardous materials like petroleum, gas, and explosives.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const PESO_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "PESO certification, PESO license, PESO license India, PESO certification for hazardous goods, petroleum explosives safety organization, ATEX IECEx PESO",
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
