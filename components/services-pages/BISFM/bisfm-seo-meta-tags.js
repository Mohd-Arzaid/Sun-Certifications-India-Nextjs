const CANONICAL_URL =
  "https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";

const TITLE = "BIS FMCS | BIS Certification for Foreign Manufacturers";

const DESCRIPTION =
  "The Bureau of Indian Standards offers the Foreign Manufacturers Certification Scheme (FMCS) for foreign manufacturers to get BIS certification for selling products in India.";

export const BISFM_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "BIS FMCS, BIS Certification for Foreign Manufacturers, BIS License for Foreign Manufacturers, ISI Mark for Foreign Manufacturers, BIS FMCS Certification",
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
    images: [
      "https://bis-certifications.com/services-main-images/BISCertificationforForeignManufacaturers.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};
