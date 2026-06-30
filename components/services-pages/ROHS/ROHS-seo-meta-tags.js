const CANONICAL_URL =
  "https://bis-certifications.com/restriction-of-hazardous-substance-rohs-certificate";

const TITLE = "RoHS Certification (Restriction of Hazardous Substance)";

const DESCRIPTION =
  "RoHS certification (Restriction of Hazardous Substances) confirms that electronic and electrical products do not exceed maximum permitted levels of 10 restricted hazardous substances";

const OG_IMAGE =
  "https://bis-certifications.com/services-main-images/scheme-x-certification.webp";

export const ROHS_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "RoHS Certification, RoHS Certificate, RoHS Compliance, RoHS Compliant, RoHS Certification online, RoHS Certification cost, RoHS Certification fee, RoHS Certification requirement",
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
