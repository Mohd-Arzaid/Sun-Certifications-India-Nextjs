const CANONICAL_URL = "https://bis-certifications.com/cb-certification";

const TITLE = "CB Mark Certification";

const DESCRIPTION =
  "CB Marking Certifies product safety, quality, and compliance for goods sold in the European Economic Area (EEA).";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const CBCERTIFICATION_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "CB Mark Certification, CB Marking, CB Certification, CB Scheme, IECEE CB, CB Mark for EEA, product safety certification, international certification, CB compliance, European Economic Area certification",
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
