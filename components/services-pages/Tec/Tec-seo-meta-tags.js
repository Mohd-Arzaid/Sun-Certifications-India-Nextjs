const CANONICAL_URL =
  "https://bis-certifications.com/information-about-tec-certificate-mtcte";

const TITLE =
  "TEC Registration for Telecom Equipment | MTCTE Scheme | Sun Certifications";

const DESCRIPTION =
  "TEC Certification is Important to Manufacture, Import or Sell Telecommunication Equipment in India under MTCTE Scheme of the Government of India.";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const TEC_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "TEC MTCTE certification, TEC Registration, TEC Certificate, TEC Certification, MTCTE Registration, TEC Registration free, MTCTE Portal",
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
