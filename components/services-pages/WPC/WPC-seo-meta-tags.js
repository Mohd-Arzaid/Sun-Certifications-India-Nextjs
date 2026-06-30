const CANONICAL_URL =
  "https://bis-certifications.com/information-about-wpc-certificate-eta-approval";

const TITLE =
  "WPC Approval | WPC ETA Certification, Process, Cost, and Requirements | Sun Certifications";

const DESCRIPTION =
  "WPC Equipment Type Approval (ETA) is a certification issued by the Wireless Planning & Coordination (WPC) Wing of the Department of Telecommunications (DoT) mandatory for all wireless devices.";

const OG_IMAGE = "https://bis-certifications.com/services-images/BIS.jpg";

export const WPC_SEO_META_TAGS = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "WPC license requirement, WPC india approval, WPC Certification india, WPC, WPC ETA product approval certificate, WPC certificate and rf testing consultants in india, Radiofrequency Testing Lab, RF Test Report for WPC, Equipment type Approval, WPC Licence for Import, 2.4 Ghz WPC ETA, Bluetooth WPC, RFID WPC ETA, RF test facility in INDIA, Eta certificate india, WPC services, WPC license india, WPC certification services, WPC consultant, WPC approval india, WPC consultancy, WPC approval consultant, WPC certificate consultant, WPC certificate for bluetooth, procedure for WPC certificate",
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
