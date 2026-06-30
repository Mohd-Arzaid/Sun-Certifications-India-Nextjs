const CANONICAL_URL = "https://bis-certifications.com/bee-certification";

const TITLE = "BEE Registration Certification | Sun Certifications";

const DESCRIPTION =
  "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const BEE_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "BEE registration, BEE certification, Bureau of Energy Efficiency, BEE star rating, energy efficiency labeling India, BEE label registration",
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
