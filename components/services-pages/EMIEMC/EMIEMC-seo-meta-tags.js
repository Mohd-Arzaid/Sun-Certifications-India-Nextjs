const CANONICAL_URL = "https://bis-certifications.com/emi-emc-certification";

const TITLE = "EMI/EMC Certification Guide | Sun Certifications";

const DESCRIPTION =
  "EMI Metrology ensures accurate and standardized weighing and measuring practices as per government regulations, safeguarding public trust and measurement accuracy.";

const OG_IMAGE =
  "https://bis-certifications.com/services-main-images/scheme-x-certification.webp";

export const EMIEMC_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "EMI EMC Certification, EMI Metrology, Legal Metrology, weights and measures, Sun Certifications India",
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
