const CANONICAL_URL =
  "https://bis-certifications.com/stqc-certificate-india";

const TITLE =
  "STQC Certificate in India: Process, Cost, Audit & Complete Guide";

const DESCRIPTION =
  "Complete details on STQC Certificate in India including STQC Certification process, cost, audit, requirements, and approval.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const STQC_CERTIFICATE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "STQC Certificate, STQC Certification, STQC License, STQC Licence, STQC Audit, STQC Certification Cost, STQC Approval, STQC Certification Process, STQC Certification Requirements",
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
