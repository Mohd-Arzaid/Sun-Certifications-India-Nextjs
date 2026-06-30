const CANONICAL_URL =
  "https://bis-certifications.com/what-is-crs-bis-or-crs-registration";

const TITLE = "BIS Registration - Compulsory Registration Scheme (CRS)";

const DESCRIPTION =
  "BIS registration is getting a license from the BIS for Electronic and IT Products that conforms with the applicable Indian Standards under CRS scheme.";

const OG_IMAGE =
  "https://bis-certifications.com/services-main-images/CRSRegistration.webp";

export const CRS_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "BIS Certificate, BIS Registration Process, BIS Registration, BIS online registration process, BIS Certification for electronic products, BIS registration process in india, BIS Registration for Electronics Products, Compulsory registration scheme",
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
