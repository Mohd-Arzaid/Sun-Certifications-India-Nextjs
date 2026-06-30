const CANONICAL_URL =
  "https://bis-certifications.com/a-guide-on-how-to-obtain-lmpc-certificate";

const TITLE =
  "LMPC Certificate For Importers, Manufacturers and Packers | Sun Certifications";

const DESCRIPTION =
  "LMPC Registration is a critical step for manufacturers, packers & importers to ensure compliance with Legal Metrology (Packaged Commodities) Rules, 2011.";

const OG_IMAGE =
  "https://bis-certifications.com/services-images/lmpc-img.jpg";

export const LMPC_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "LMPC Registration, LMPC Certificate, LMPC Certificate Online, LMPC Certificate for Import, LMPC Certificate Apply Online, LMPC Certificate Registration",
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
