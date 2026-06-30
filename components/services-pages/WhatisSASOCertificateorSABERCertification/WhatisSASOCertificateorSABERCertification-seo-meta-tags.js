const CANONICAL_URL =
  "https://bis-certifications.com/saso-saber-certification";

const TITLE =
  "SASO Certificate or SABER Certification in Saudi Arabia – Process, Cost & Requirements";

const DESCRIPTION =
  "Learn everything about SASO Certificate or SABER Certification in Saudi Arabia, including process, cost, documents, PCoC, SCoC, and requirements for exporters. Ensure compliance and smooth customs clearance with this complete guide.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const SASO_SABER_CERTIFICATION_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "SASO Certificate, SASO Certification Saudi Arabia, SABER Certificate Saudi Arabia, SALEEM Program, SASO registration, SABER process, SASO approval",
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
