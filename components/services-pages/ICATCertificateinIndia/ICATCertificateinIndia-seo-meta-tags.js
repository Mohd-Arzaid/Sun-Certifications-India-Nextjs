const CANONICAL_URL =
  "https://bis-certifications.com/icat-certificate-india";

const TITLE =
  "ICAT Certificate in India: Process, Cost, Audit & Complete Guide";

const DESCRIPTION =
  "Complete details on ICAT Certificate in India including ICAT Certification process, cost, audit, requirements, and approval.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const ICAT_CERTIFICATE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "ICAT Certificate, ICAT Certification, ICAT License, ICAT Licence, ICAT Audit, ICAT Certification Cost, ICAT Approval, ICAT Certification Process, ICAT Certification Requirements",
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
