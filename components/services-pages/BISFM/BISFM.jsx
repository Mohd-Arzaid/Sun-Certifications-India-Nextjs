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

const ISIMarkImage = "/services-images/ISIMARKUpdated.jpg";

const BISCertificateImage = "/bisfm-page-images/biscertificate.png";

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

const StandardizationSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      BIS Mark: Compliance Requirements, Usage Rules, and Legal Guidelines
    </SectionHeadingTwo>

    <ServiceParagraph>
      The BIS FMCS logo is issued by the Bureau of Indian Standards (BIS). It
      signifies that products manufactured outside India comply with relevant
      Indian Standards (IS) and are authorized for import and sale. The mark
      includes a unique license number (e.g., CM/L-XXXXXXXXXX) and the IS
      number. The logo must be accompanied by a unique 7 to 10-digit number
      (CM/L-XXXXXXX) that identifies the specific foreign manufacturing unit.
    </ServiceParagraph>

    <ServiceParagraph>
      For a product to bear the Indian BIS or ISI mark, it must pass through a
      rigorous BIS certification process, including lab testing, factory
      inspection, documentation audits, and compliance checks with Indian BIS
      guidelines.
    </ServiceParagraph>

    <SectionHeadingThree>According to the BIS Act, 2016 :</SectionHeadingThree>

    <ServiceList
      points={[
        "Use of the ISI mark without a valid BIS license is punishable by law.",
        "Certified products must display both the ISI logo and CM/L number (Certificate of Manufacturing License).",
        "Violators may face product bans, fines, or even criminal prosecution.",
      ]}
    />

    <ServiceImage
      src={ISIMarkImage}
      alt="ISI Mark logo"
      title="ISI Mark logo"
      className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-neutral-200 hover:shadow-md transition-shadow duration-300"
    />

    <SectionHeadingThree as="p">
      The ISI logo typically consists of:
    </SectionHeadingThree>

    <ServiceList
      points={[
        'The stylized letters "ISI" inside a rectangle with rounded corners',
        "The CM/L number displayed beneath or adjacent to the mark",
        "The reference Indian standard code number (e.g., IS 302 for electrical appliances)",
      ]}
    />

    <SectionHeadingThree as="p">Placement must be:</SectionHeadingThree>

    <ServiceList
      points={[
        "Permanent and clearly visible on the product",
        "On the packaging if not possible on the product",
        "On user manuals in some product categories",
      ]}
    />

    <SectionHeadingThree as="h2">
      Indian BIS vs. Other Global Certifications
    </SectionHeadingThree>

    <ServiceParagraph>
      Let's compare the ISI mark with other international symbols:
    </ServiceParagraph>

    <ServiceTable
      className="my-2"
      emphasizeAllColumns
      headers={["MARK", "COUNTRY", "MANDATORY?", "FOCUS"]}
      rows={[
        ["ISI", "India", "Yes", "Product safety and quality"],
        [
          "CE",
          "EU",
          "Yes (for specific categories)",
          "Health, safety, environment",
        ],
        ["UL", "USA", "No", "Safety standards (voluntary)"],
        ["CCC", "China", "Yes", "Electrical goods safety"],
      ]}
    />

    <ServiceParagraph>
      Unlike UL (voluntary) or CE (region-specific), the ISI mark under the BIS
      registration scheme is both compulsory and locally enforced.
    </ServiceParagraph>
  </div>
);

const RepresentationSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Role of Authorized Indian Representative (AIR) in BIS Certification
    </SectionHeadingTwo>

    <SectionHeadingThree>
      What is an Authorized Indian Representative (AIR)?
    </SectionHeadingThree>

    <ServiceParagraph>
      An Authorized Indian Representative (AIR) is a crucial intermediary
      appointed by a foreign manufacturer seeking BIS certification under the
      FMCS registration scheme. The AIR serves as the official liaison between
      the Bureau of Indian Standards (BIS) and the manufacturer, ensuring smooth
      communication, documentation handling, and coordination of the
      certification process.
    </ServiceParagraph>

    <SectionHeadingThree>
      Legal Requirement for AIR Appointment
    </SectionHeadingThree>

    <ServiceParagraph>
      As per BIS guidelines, any foreign manufacturer who does not have a
      registered office in India must appoint an AIR. This requirement ensures
      that BIS has a reliable, accessible point of contact within Indian
      jurisdiction.
    </ServiceParagraph>

    <SectionHeadingThree>Key Responsibilities of the AIR</SectionHeadingThree>

    <ServiceParagraph>
      The AIR&apos;s role spans the entire BIS certification process, from
      documentation and application submission to audit coordination and
      post-certification compliance:
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={["RESPONSIBILITY", "DESCRIPTION"]}
      rows={[
        [
          "Communication",
          "Acts as the point of contact with BIS officers and departments",
        ],
        [
          "Application Support",
          "Assists in filling forms, compiling documents, and submitting the application",
        ],
        [
          "Audit Coordination",
          "Coordinates factory inspection schedules and addresses auditor queries",
        ],
        [
          "Compliance Monitoring",
          "Ensures all testing and certification activities meet BIS norms",
        ],
        [
          "Renewal Management",
          "Oversees BIS licence renewal, documentation updates, and fee payments",
        ],
      ]}
    />

    <SectionHeadingThree>
      Eligibility Criteria to Become an AIR
    </SectionHeadingThree>

    <ServiceParagraph>
      To serve as an AIR, an individual or organization must :
    </ServiceParagraph>

    <ServiceList
      points={[
        "Be an Indian citizen or a legally registered business entity in India",
        "Have a physical address in India with a valid postal code",
        "Be capable of communicating fluently in English and local languages",
        "Understand the certification scheme, BIS documentation protocols, and regulatory expectations",
        "Be able to respond to audits and correspondence promptly on behalf of the foreign manufacturer",
      ]}
    />

    <SectionHeadingThree>Why the AIR Role is Vital</SectionHeadingThree>

    <ServiceParagraph>
      The AIR ensures continuity and accountability throughout the BIS
      certification process. Without an AIR:
    </ServiceParagraph>

    <ServiceList
      points={[
        "BIS has no jurisdiction to act against a non-complying foreign manufacturer",
        "Time-sensitive queries and audit schedules may get delayed",
        "The certification process can get stuck, revoked, or rejected",
      ]}
    />

    <ServiceParagraph>
      A proactive and experienced AIR significantly increases the chance of
      successful BIS certification.
    </ServiceParagraph>
  </div>
);
const DocumentSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Documentation Required for BIS Certification under FMCS
    </SectionHeadingTwo>

    <ServiceTable
      className="mt-2"
      headers={["DOCUMENT TYPE", "PURPOSE"]}
      rows={[
        ["FMCS Application Form", "Official request for certification"],
        ["Manufacturing Equipment List", "Shows production capabilities"],
        ["Raw Materials List", "Ensures input material quality"],
        [
          "Testing Equipment List",
          "Evaluates testing and compliance readiness",
        ],
        ["Calibration Certificates", "Proves test equipment accuracy"],
        [
          "Factory Layout & Process Flow",
          "Helps auditors understand manufacturing stages",
        ],
        [
          "Test Certificates",
          "Proves quality of raw materials and final product",
        ],
        ["Quality Control Profile", "Verifies staff qualifications and SOPs"],
        ["Payment Proof", "Validates fee submission to BIS"],
        ["Performance Bank Guarantee", "Acts as financial assurance for BIS"],
      ]}
    />

    <SectionHeadingTwo as="h3">
      Detailed Breakdown of Each document required to Indian BIS certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="div">1. FMCS Application Form</SectionHeadingThree>

    <ServiceParagraph>
      This document provides general details about the foreign manufacturer,
      including:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Product details (type, category, model)",
        "Intended Indian Standard",
        "Contact details of factory and AIR",
        "Manufacturing capacity and testing scope",
      ]}
    />

    <SectionHeadingThree as="div">
      2. List of Manufacturing Equipment
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Machine name and make",
        "Production capacity",
        "Contact details of factory and AIR",
        "Maintenance records (if applicable)",
      ]}
    />

    <SectionHeadingThree as="div">3. List of Raw Materials</SectionHeadingThree>

    <ServiceList
      points={[
        "Source of procurement",
        "Grades and specifications",
        "Testing protocol (if any)",
      ]}
    />

    <SectionHeadingThree as="div">
      4. List of Testing Equipment
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Equipment name and manufacturer",
        "Compliance with test parameters in Indian Standard",
        "Location within the factory",
      ]}
    />

    <SectionHeadingThree as="div">
      5. Calibration Certificates
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Date of last calibration",
        "Validity period",
        "Certificate number",
      ]}
    />

    <SectionHeadingThree as="div">
      6. Factory Layout & Process Flow Diagram
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Entry and exit points",
        "Testing lab areas",
        "QC checkpoints",
        "Storage and packaging sections",
      ]}
    />

    <SectionHeadingThree as="div">
      7. Performance Bank Guarantee
    </SectionHeadingThree>

    <ServiceParagraph>
      Issued by an RBI-approved Indian bank, the Performance Bank Guarantee
      (PBG) covers liability in case of non-compliance. This document must:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Be on official bank letterhead",
        "Indicate guarantee period and amount",
        "Be signed and sealed",
      ]}
    />

    <SectionHeadingThree as="div">
      Common documentation mistakes to avoid while applying for BIS certificate
      or Indian BIS.
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Mismatch between form data and factory reality",
        "Submitting expired calibration reports",
        "Missing BIS fee proof",
        "Incomplete or vague process flows",
        "Naming inconsistencies between documents",
      ]}
    />
  </div>
);

const ProcessSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Step-by-Step BIS Certification Process Under FMCS
    </SectionHeadingTwo>

    <SectionHeadingThree>
      Overview of the BIS Certification Journey
    </SectionHeadingThree>

    <ServiceParagraph>
      The BIS certification process under the Foreign Manufacturers
      Certification Scheme (FMCS) is methodical, structured, and multi-phased.
      It ensures that products comply with applicable Indian standards,
      manufacturing processes are robust, and testing is accurate.
    </ServiceParagraph>

    <SectionHeadingThree>
      Step-by-Step BIS license Process Summary Table
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["STEP", "DESCRIPTION"]}
      rows={[
        ["1", "Application Submission to BIS FMCD"],
        ["2", "Documentation Scrutiny and Initial Review"],
        ["3", "Query Resolution & Clarification Submission"],
        ["4", "Nomination of BIS Technical Auditor"],
        ["5", "Factory Audit Scheduling & Coordination via AIR"],
        ["6", "Factory Inspection & Sample Sealing by BIS Auditor"],
        ["7", "In-House Product Testing (if applicable)"],
        ["8", "Testing of Sealed Samples in BIS-Approved Labs in India"],
        ["9", "Review of Test Reports & Audit Findings"],
        ["10", "Issuance of BIS License and Use of ISI Mark"],
      ]}
    />

    <SectionHeadingThree>
      Sample copy of BIS FMCS certificate.
    </SectionHeadingThree>

    <ServiceImage
      src={BISCertificateImage}
      alt="Sample BIS FMCS certificate"
      title="Sample BIS FMCS certificate"
      className="w-full h-auto rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 my-4 mx-auto"
    />

    <SectionHeadingThree>
      Timeframe to Obtain BIS Certificate
    </SectionHeadingThree>

    <SectionHeadingThree as="div">
      Typical Duration from Application to Certificate
    </SectionHeadingThree>

    <ServiceParagraph>
      The BIS certification process under FMCS generally takes about 120 working
      days (approximately 3–4 months) from the date of correct application
      submission. Delays often occur when documents are unclear or if the
      factory isn&apos;t audit ready.
    </ServiceParagraph>
  </div>
);

const CostingSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      BIS Certification Cost Structure Explained
    </SectionHeadingTwo>

    <SectionHeadingThree>
      Overview of BIS Certification Costs
    </SectionHeadingThree>

    <ServiceParagraph>
      Securing a BIS certificate under the Foreign Manufacturers Certification
      Scheme (FMCS) involves several types of costs. These cover everything from
      application submission and audits to product testing and mark usage.
    </ServiceParagraph>

    <ServiceParagraph>
      Foreign manufacturers must budget adequately to ensure timely payments, as
      failure to pay can lead to rejection of BIS certification mid-way.
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={["COST CATEGORY", "DESCRIPTION"]}
      rows={[
        [
          "Application Fee (INR 1000)",
          "Paid during submission of the FMCS application form for obtaining Indian BIS",
        ],
        [
          "Audit Charges (INR 7000)",
          "Covers BIS auditor travel, man-day rates, and related expenses",
        ],
        [
          "Product Testing Fees (As per product)",
          "For testing sealed samples at BIS-recognized labs in India",
        ],
        [
          "License Fee (INR 1000)",
          "One-time fee paid upon grant of BIS certificate",
        ],
        [
          "Marking Fee (As per product)",
          "Annual fee for usage of the ISI mark on certified products",
        ],
        [
          "Performance Bank Guarantee (USD 10,000)",
          "Financial guarantee deposited via Indian bank to ensure compliance",
        ],
      ]}
    />
  </div>
);
const SurveillanceSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Post BIS Certification Surveillance and Compliance Requirements
    </SectionHeadingTwo>

    <ServiceParagraph>
      Once a BIS certificate is granted, the responsibility doesn&apos;t end
      there. The BIS certification includes an ongoing surveillance and
      compliance system to ensure continuous adherence to Indian standards. This
      post-certification phase is crucial to maintaining your BIS license,
      retaining the right to use the ISI mark, and avoiding legal penalties or
      suspensions.
    </ServiceParagraph>

    <ServiceParagraph>
      Key Surveillance Components after obtaining BIS certificate Market
      Surveillance : Random product sampling from the Indian market for
      independent lab testing , if the sample fails the BIS certificate is
      suspended. It is done twice every year.
    </ServiceParagraph>
  </div>
);

const FacilitatorSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Why Choose a BIS Certification Consultant?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The BIS certification under the FMCS registration scheme is intricate,
      highly technical, and time-sensitive. While it is possible to pursue
      certification independently, most successful foreign manufacturers rely on
      BIS consultants to streamline the journey and minimize risks.
    </ServiceParagraph>

    <SectionHeadingThree>What Does a BIS Consultant Do?</SectionHeadingThree>

    <ServiceParagraph>
      A BIS certification consultant provides end-to-end guidance across every
      step of the process. Their core responsibilities include:
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={["TASK", "DESCRIPTION"]}
      rows={[
        [
          "Documentation",
          "Prepares, reviews, and formats all required documents",
        ],
        ["Application Support", "Submits and tracks your BIS application"],
        ["Audit Preparation", "Guides factory teams to ensure audit readiness"],
        [
          "Sample Coordination",
          "Manages sealing and shipment of samples to India",
        ],
        ["Testing Assistance", "Liaises with labs and helps interpret results"],
        [
          "Renewal & Surveillance",
          "Oversees license extensions and compliance checks",
        ],
      ]}
    />

    <ServiceParagraph>
      They act as your strategic partner, often doubling as your Authorized
      Indian Representative (AIR).
    </ServiceParagraph>
  </div>
);

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

const languages = [
  {
    code: "zh",
    name: "Chinese",
    flag: "https://flagcdn.com/w320/cn.png",
    path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
  },
  {
    code: "de",
    name: "German",
    flag: "https://flagcdn.com/w320/de.png",
    path: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
  },
  {
    code: "nl",
    name: "Dutch",
    flag: "https://flagcdn.com/w320/nl.png",
    path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
  },
  {
    code: "ja",
    name: "Japanese",
    flag: "https://flagcdn.com/w320/jp.png",
    path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
  },
  {
    code: "ko",
    name: "Korean",
    flag: "https://flagcdn.com/w320/kr.png",
    path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
  },
  {
    code: "fr",
    name: "French",
    flag: "https://flagcdn.com/w320/fr.png",
    path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
  },
  {
    code: "es",
    name: "Spanish",
    flag: "https://flagcdn.com/w320/es.png",
    path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
  },
  {
    code: "th",
    name: "Thai",
    flag: "https://flagcdn.com/w320/th.png",
    path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
  },
  {
    code: "id",
    name: "Indonesian",
    flag: "https://flagcdn.com/w320/id.png",
    path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
  },
  {
    code: "it",
    name: "Italian",
    flag: "https://flagcdn.com/w320/it.png",
    path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
  },
  {
    code: "ar",
    name: "Arabic",
    flag: "https://flagcdn.com/w320/sa.png",
    path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
  },
  {
    code: "vi",
    name: "Vietnamese",
    flag: "https://flagcdn.com/w320/vn.png",
    path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
  },
];

const BISFM = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Mark (ISI License) for Foreign Manufacturers"
      hero={hero}
      intro={intro}
      sections={sections}
      faqs={faqs}
    />
  );
};

export default BISFM;
