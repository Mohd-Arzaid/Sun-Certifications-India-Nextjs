const CANONICAL_URL =
  "https://bis-certifications.com/tac-certificate-india";

const TITLE =
  "TAC Certificate in India: Process, Cost, Audit & Complete Guide";

const DESCRIPTION =
  "Complete details on TAC Certificate in India including TAC Certification process, cost, audit, requirements, and approval.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const TAC_CERTIFICATE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "TAC Certificate, TAC Certification, TAC License, TAC Licence, TAC Audit, TAC Certification Cost, TAC Approval, TAC Certification Process, TAC Certification Requirements",
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
