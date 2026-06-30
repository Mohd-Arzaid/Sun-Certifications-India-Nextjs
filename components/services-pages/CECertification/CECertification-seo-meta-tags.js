const CANONICAL_URL = "https://bis-certifications.com/ce-certification";

const TITLE = "CE Mark Certification";

const DESCRIPTION =
  "CE Marking certifies product safety, quality, and compliance for goods sold in the European Economic Area (EEA).";

export const CE_CERTIFICATION_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "CE Mark Certification, CE Marking, CE Certification, CE Mark for EEA, European Conformity, CE Marking Certification, ISO Certification, CE compliance, European Economic Area certification",
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
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};
