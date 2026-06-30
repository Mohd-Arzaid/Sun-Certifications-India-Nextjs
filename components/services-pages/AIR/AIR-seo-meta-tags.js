const CANONICAL_URL =
  "https://bis-certifications.com/authorized-indian-representative";

const TITLE =
  "Authorized Indian Representative (AIR) for BIS Certification | Sun Certifications India";

const DESCRIPTION =
  "Appoint Sun Certifications India as your Authorized Indian Representative (AIR) for BIS certification. Legally structured, corporately accountable AIR service for foreign manufacturers — no subcontracting, dedicated compliance officers.";

const OG_IMAGE =
  "https://bis-certifications.com/blogImages/AuthorizedIndianRepresentative.webp";

export const AIR_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Authorized Indian Representative, AIR for BIS Certification, BIS AIR Service, Foreign Manufacturer AIR India, BIS FMCS AIR, Sun Certifications India AIR",
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
