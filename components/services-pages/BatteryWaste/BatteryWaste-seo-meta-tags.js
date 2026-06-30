const CANONICAL_URL =
  "https://bis-certifications.com/epr-certificate-for-battery-waste-management-bwm";

const TITLE = "EPR Registration for Battery Waste Management | Sun Certifications";

const DESCRIPTION =
  "EPR Registration for battery waste is a regulatory authorization that holds producers responsible for sustainable collection, recycling and disposal of used batteries.";

const OG_IMAGE =
  "https://bis-certifications.com/services-images/EPRCertificate.jpg";

export const BATTERY_WASTE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "epr portal for battery waste management, epr authorization for battery waste management, battery waste epr, epr for battery waste, epr registration for battery waste management, battery epr, battery waste epr certificate, CPCB battery waste registration, battery waste management rules 2022, extended producer responsibility battery",
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
