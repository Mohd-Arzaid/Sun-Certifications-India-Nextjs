const CANONICAL_URL =
  "https://bis-certifications.com/epr-certificate-for-plastic-waste-management-pwm";

const TITLE = "EPR Certificate for Plastic Waste Management | Sun Certifications";

const DESCRIPTION =
  "Get EPR certificate for plastic waste management (PWM). Complete CPCB compliance guide for plastic recycling and waste management plans.";

const OG_IMAGE =
  "https://bis-certifications.com/services-images/EPRCertificate.jpg";

export const PLASTIC_WASTE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "EPR Certificate, Plastic Waste Management, PWM, CPCB Compliance, Plastic Recycling",
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
