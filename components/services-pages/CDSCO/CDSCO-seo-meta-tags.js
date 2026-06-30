const CANONICAL_URL =
  "https://bis-certifications.com/cdsco-registration-certification";

const TITLE = "CDSCO Registration Certificate | Sun Certifications";

const DESCRIPTION =
  "CDSCO license is mandatory for the manufacturing, import, sale, and distribution of all medical devices in India.";

const OG_IMAGE =
  "https://bis-certifications.com/services-images/cdsco-one.png";

export const CDSCO_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "CDSCO registration, CDSCO license, medical device registration India, CDSCO certification, Sun Certifications India",
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
