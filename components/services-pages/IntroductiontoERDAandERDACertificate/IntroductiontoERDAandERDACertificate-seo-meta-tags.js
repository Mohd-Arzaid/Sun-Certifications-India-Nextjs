const CANONICAL_URL =
  "https://bis-certifications.com/erda-certificate-india";

const TITLE =
  "ERDA Certificate in India: Process, Cost, Audit & Complete Guide";

const DESCRIPTION =
  "Complete details on ERDA Certificate in India including ERDA Certification process, cost, audit, requirements, and approval.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const ERDA_CERTIFICATE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "ERDA Certificate, ERDA Certification, ERDA License, ERDA Licence, ERDA Audit, ERDA Certification Cost, ERDA Approval, ERDA Certification Process, ERDA Certification Requirements",
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
