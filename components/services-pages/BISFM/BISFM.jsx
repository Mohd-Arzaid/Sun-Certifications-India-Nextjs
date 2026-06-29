import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const BISFMOverviewImage =
  "/services-main-images/BISCertificationforForeignManufacaturers.webp";

const hero = {
  heading: "BIS Certification for Foreign Manufacturers",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const intro = (
  <div className="flex flex-col gap-6">
    <SectionHeadingTwo as="h1">
      BIS Certification under FMCS Scheme
    </SectionHeadingTwo>

    <ServiceImage
      src={BISFMOverviewImage}
      alt="BIS Certification for Foreign Manufacturers"
      title="BIS Certification for Foreign Manufacturers"
    />

    <SectionHeadingThree as="h2">What is Indian BIS?</SectionHeadingThree>

    <ServiceParagraph>
      The Bureau of Indian Standards (BIS) is India's national standards body
      under the Ministry of Consumer Affairs, Food and Public Distribution.
      Established under the BIS Act 1986, and revised in 2016, BIS plays a
      pivotal role in standardization, marking, and quality certification of
      goods. It aims to ensure the quality, safety, and reliability of products
      offered to Indian consumers.
    </ServiceParagraph>

    <ServiceParagraph>
      A BIS License is mandatory for both Indian and foreign manufacturers to
      manufacture, import or sell various products in India, listed in the BIS
      mandatory certification category. To grant licenses BIS operates various
      certification schemes like Product Certification Scheme (ISI Mark Scheme
      for Indian Manufacturers), Hallmarking Scheme, BIS FMCS Scheme and many
      more.
    </ServiceParagraph>

    <ServiceParagraph>
      Foreign Manufacturers Certification Scheme (BIS FMCS) enables the overseas
      manufacturers to apply for BIS certification to use the standard ISI mark
      on their products. Foreign manufacturers can apply for BIS certification
      by appointing an Authorized Indian Representative (AIR) to handle
      compliance, documentation and communication with the Bureau of Indian
      Standards.
    </ServiceParagraph>
  </div>
);

const OverviewSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      What is Foreign Manufacturers Certification Scheme (BIS FMCS)
    </SectionHeadingTwo>

    <ServiceParagraph>
      Foreign manufacturers certification scheme (FMCS) was introduced by the
      Bureau of Indian Standards in 2000 that allows the overseas manufacturers
      to use the standard mark (ISI Mark) on their products exported to India.
      Just like the Product Certification Scheme for Indian manufacturers, BIS
      FMCS scheme ensures that the products manufactured outside India must meet
      the same safety and quality standards benchmarks before being exported and
      sold in the Indian market.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">Key Features and Scopes</SectionHeadingThree>

    <ServiceList
      points={[
        "Target: BIS FMCS covers manufacturing units located outside India. The scheme is available to manufacturers only; importers and traders cannot obtain a BIS licence under FMCS.",
        "Testing facilities: The manufacturing unit must have adequate in-house testing facilities and technically qualified quality control personnel to test products as per Indian Standards.",
        "Authorized Indian Representative (AIR): The foreign manufacturer must appoint an Indian resident as AIR to act as the local point of contact with BIS for compliance management.",
        "Products coverage: A wide range of products notified under Quality Control Orders (QCOs) issued by the Indian government—such as steel, cement, electrical appliances, chemicals, automotive parts, toys, and more.",
        "Exclusions: Electronics and IT products are excluded from this scheme; they are covered under the Bureau of Indian Standards Compulsory Registration Scheme (CRS).",
      ]}
    />

    <ServiceParagraph>
      BIS has listed over 600 products under mandatory certification, and over
      20,000 items are eligible for a voluntary BIS certificate.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      Why BIS Certification is Crucial ?
    </SectionHeadingThree>

    <ServiceParagraph>
      Obtaining a BIS certificate is more than a legal requirement—it's a
      gateway to India's vast consumer market. Here are a few key reasons why
      it's essential:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Legal Compliance: Products must comply with relevant Indian standards.",
        "Brand Credibility: The ISI mark serves as proof of quality and boosts consumer trust.",
        "Customs Clearance: Without a valid BIS licence, products may be rejected at customs.",
        "Market Access: Helps foreign brands gain seamless entry and widespread acceptance in India.",
        "Risk Mitigation: Ensures that products are safe, thus avoiding potential recalls and liability issues.",
      ]}
    />

    <SectionHeadingThree as="h2">
      Key Features of BIS certificate for foreign manufacturers
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["FEATURE", "DESCRIPTION"]}
      rows={[
        ["Applicability", "Foreign manufacturers only"],
        ["Marking", "ISI mark + CM/L number"],
        ["Audit Requirement", "Mandatory factory inspection"],
        ["Testing", "Conducted at BIS-approved Indian labs"],
        ["Validity", "BIS license valid for 1-2 years"],
        ["Renewal", "Required upon expiry or product updates"],
        [
          "AIR (Authorized Indian Representative)",
          "Must be appointed to liaise with BIS",
        ],
        [
          "Performance Bank Guarantee",
          "Required from RBI-approved Indian bank",
        ],
      ]}
    />
  </div>
);
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
      intro={intro}
      sections={sections}
    />
  );
};

export default BISFM;
