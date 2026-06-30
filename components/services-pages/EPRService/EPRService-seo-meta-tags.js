const CANONICAL_URL =
  "https://bis-certifications.com/a-guide-on-how-to-obtain-epr-certificate";

const TITLE = "Guide to EPR Registration for E-Waste Management in India";

const DESCRIPTION =
  "EPR guidelines for E Waste Management obligates Producers, Manufacturers, recyclers and Refurbishers to register through the EPR portal meet their Recycling Targets.";

const OG_IMAGE =
  "https://bis-certifications.com/services-images/EPRCertificate.jpg";

export const EPR_SERVICE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "epr e-waste, epr e waste cpcb, e waste epr portal, epr registration for e waste, epr e waste management, epr e waste certificate, extended producer responsibility epr e waste, epr certificate for e waste, epr registration for e waste, epr authorization for e waste",
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
