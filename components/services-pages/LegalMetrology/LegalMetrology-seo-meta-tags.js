const CANONICAL_URL =
  "https://bis-certifications.com/what-is-legal-metrology-or-lmpc-certificate";

const TITLE =
  "Legal Metrology Certification Services | Weights & Measures | Sun Certifications";

const DESCRIPTION =
  "Expert Legal Metrology certification services for weights and measures. Get certification for weighing and measuring instruments. Trusted since 2013.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const LEGAL_METROLOGY_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Legal Metrology, weights and measures, metrology certification, weighing instruments, measuring instruments",
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
