import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "BIS Certification for Foreign Manufacturers",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const OverviewSection = () => <></>;
const StandardizationSection = () => <></>;
const RepresentationSection = () => <></>;
const DocumentSection = () => <></>;
const ProcessSection = () => <></>;
const CostingSection = () => <></>;
const SurveillanceSection = () => <></>;
const FacilitatorSection = () => <></>;

const sections = [
  {
    id: "overview",
    label: "Overview",
    section: <OverviewSection />,
  },
  {
    id: "standardization",
    label: "Standardization",
    section: <StandardizationSection />,
  },
  {
    id: "representation",
    label: "Representation",
    section: <RepresentationSection />,
  },
  {
    id: "document",
    label: "Document",
    section: <DocumentSection />,
  },
  {
    id: "process",
    label: "Process",
    section: <ProcessSection />,
  },
  {
    id: "costing",
    label: "Costing",
    section: <CostingSection />,
  },
  {
    id: "surveillance",
    label: "Surveillance",
    section: <SurveillanceSection />,
  },
  {
    id: "facilitator",
    label: "Facilitator",
    section: <FacilitatorSection />,
  },
];

const faqs = [
  {
    question:
      "What is BIS certification and why is it important for foreign manufacturers to obtain Indian BIS?",
    answer:
      "BIS certification is a regulatory process conducted by the Bureau of Indian Standards to ensure products meet Indian standards. It is essential for foreign manufacturers to gain market access, customs clearance, and consumer trust in India.",
  },
  {
    question: "What does the ISI mark represent?",
    answer:
      "The ISI mark indicates conformity to a specific Indian Standard. It is mandatory for products under the BIS certification and must be printed on packaging and products.",
  },
  {
    question: "Is BIS certification mandatory for all imports to India?",
    answer:
      "No. BIS certification is mandatory for products listed under the mandatory Indian BIS certification scheme. However, voluntary certification is available for other products.",
  },
  {
    question: "Who can apply for BIS certification under FMCS?",
    answer:
      "Only actual foreign manufacturers (not importers or traders) can apply. An Authorized Indian Representative (AIR) is mandatory to represent them in India.",
  },
  {
    question: "How long does it take to get a BIS certificate?",
    answer:
      "The average BIS certification process under FMCS takes 120 days, depending on document readiness, audit scheduling, and testing turnaround times.",
  },
  {
    question: "What are the major costs involved in BIS certification?",
    answer:
      "Costs include application fees, audit charges, lab testing fees, license and marking fees, and a Performance Bank Guarantee (PBG) from an RBI-approved Indian bank.",
  },
  {
    question: "Can the BIS license be renewed?",
    answer:
      "Yes. The BIS license is generally valid for 1–2 years and can be renewed upon meeting compliance and document update requirements.",
  },
  {
    question: "What happens if the product fails during BIS lab testing?",
    answer:
      "If a product fails, BIS may allow corrective action and re-testing. Persistent failure can result in rejection of the application.",
  },
  {
    question: "Is it necessary to hire a BIS certification consultant?",
    answer:
      "It's not mandatory but highly recommended. A consultant helps reduce delays, manage compliance, and improve approval chances by ensuring full alignment with BIS protocols.",
  },
  {
    question: "Can a BIS license be suspended or cancelled?",
    answer:
      "Yes. BIS may suspend or cancel a license for non-compliance, product failure, misuse of the ISI logo, or audit discrepancies.",
  },
  {
    question: "What documents are needed for the BIS certification process?",
    answer:
      "Documents include the FMCS application form, test reports, equipment lists, calibration certificates, factory layout, AIR appointment letter, and proof of fee payment.",
  },
  {
    question: "Can one AIR represent multiple BIS applications?",
    answer:
      "Yes, provided they are authorized for each project and have the bandwidth to handle documentation, audits, and communication for each certification.",
  },
  {
    question: "What is the role of a Performance Bank Guarantee?",
    answer:
      "A PBG assures BIS that the manufacturer will comply with Indian standards. It is refundable upon license cancellation and mandatory for all FMCS applications obtaining Indian BIS.",
  },
  {
    question: "Is BIS certification recognized outside India?",
    answer:
      "While the BIS certificate is an Indian standard, it is respected in trade contexts in many regions that accept Indian compliance, especially in Asia and Africa.",
  },
  {
    question: "How do I know if my product requires BIS certification?",
    answer:
      "Check the updated list on the official BIS website or consult with a BIS consultant to verify whether your product falls under mandatory certification.",
  },
];

const BISFM = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Mark (ISI License) for Foreign Manufacturers"
      hero={hero}
      intro={<></>}
      sections={sections}
    />
  );
};

export default BISFM;
