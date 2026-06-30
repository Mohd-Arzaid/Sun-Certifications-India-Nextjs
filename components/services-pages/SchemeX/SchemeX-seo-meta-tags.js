const CANONICAL_URL =
  "https://bis-certifications.com/indian-bis-certification-under-scheme-x";

const TITLE =
  "BIS Scheme X Certification | Machinery & Electrical Equipment Safety";

const DESCRIPTION =
  "BIS Scheme X Certification is required to ensure quality and safety of low voltage switchgear, control gear, machinery, and electrical equipment.";

const OG_IMAGE =
  "https://bis-certifications.com/services-main-images/scheme-x-certification.webp";

export const SCHEME_X_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Scheme X, BIS Scheme X, BIS Scheme X Certification, Scheme X Certification, machinery certification, electrical equipment certification",
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
