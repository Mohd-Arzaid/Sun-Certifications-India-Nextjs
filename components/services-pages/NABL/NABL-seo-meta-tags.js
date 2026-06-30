const CANONICAL_URL =
  "https://bis-certifications.com/nabl-certification-india";

const TITLE =
  "Complete Guide to NABL Accreditation - Process, Benefits, Documentation";

const DESCRIPTION =
  "Boost your lab's credibility and quality with NABL Accreditation. Learn about the benefits, detailed application process, and get expert assistance from Corpseed for hassle-free certification.";

const OG_TITLE = "NABL Accreditation: Your Trusted Path to Certified Excellence";

const OG_DESCRIPTION =
  "Unlock unparalleled quality and credibility for your testing or calibration lab. Explore our comprehensive guide to NABL Accreditation, understand its immense benefits, the detailed application process.";

const TWITTER_TITLE =
  "Navigating NABL Certification? We make it simple! Get expert assistance for your testing & calibration lab's accreditation journey with us.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const NABL_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "NABL accreditation, NABL certificate, Lab accreditation",
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
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Sun Certifications India",
    type: "article",
    locale: "en_IN",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};
