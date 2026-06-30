import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: (
    <>
      <span className="relative">
        Legal Metrology Certification
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      certifications
    </>
  ),
  headingAs: "h1",
  description:
    "Required for plastic producers, recyclers & raw material manufacturers to ensure eco-friendly disposal. Valid for 5 years, processed in 6-8 weeks.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is Legal Metrology?</SectionHeadingTwo>

    <ServiceParagraph>
      Legal Metrology governs the scientific, regulatory, and legal framework
      applied to weights and measurements. In India, this is overseen by the
      Department of Consumer Affairs under the Ministry of Consumer Affairs,
      Food and Public Distribution. The Legal Metrology Act, 2009 was
      introduced to consolidate laws relating to weights and measures and other
      goods which are sold or distributed by weight, measure, or number.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Objectives of Legal Metrology:</SectionHeadingThree>

    <ServiceList
      points={[
        "Protect consumers by ensuring the accuracy of measurements",
        "Prevent fraud in commercial transactions",
        "Promote fair trade and confidence in trade practices",
        "Facilitate transparency and compliance in product labeling",
      ]}
    />

    <ServiceParagraph>
      Legal Metrology includes standardization of measurement units, approval
      and calibration of measuring instruments, licensing for businesses
      handling weights and measures, and enforcement of penalties for
      violations.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Where It Applies:</SectionHeadingThree>

    <ServiceParagraph>
      Legal metrology applies to any industry where goods are bought and sold
      by weight or measure. This includes sectors like:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Retail trade",
        "Food and beverage",
        "E-commerce",
        "Pharmaceuticals",
        "Manufacturing",
        "Transportation and logistics",
      ]}
    />
  </>
);

const ImportanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">Why Legal Metrology Matters in India</SectionHeadingTwo>

    <ServiceParagraph>
      Legal Metrology is not just a regulatory obligation; it is a foundational
      component of a fair and transparent economy. In India&apos;s rapidly
      expanding marketplace, with booming sectors like e-commerce,
      pharmaceuticals, and packaged goods, the relevance of Legal Metrology
      has increased multifold.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Economic Significance</SectionHeadingThree>

    <ServiceParagraph>
      Legal Metrology ensures trust in the market by guaranteeing that a
      product&apos;s weight or volume is accurate. This assurance is vital to:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Maintain fairness in trade",
        "Protect consumers from deception",
        "Build business credibility",
        "Prevent disputes among commercial parties",
      ]}
    />

    <ServiceParagraph>
      Each time a consumer buys a liter of milk, a packet of rice, or a
      cylinder of gas, they rely on the integrity of the weight and
      measurement systems. Legal Metrology makes that trust possible.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Government&apos;s Role in Consumer Protection
    </SectionHeadingThree>

    <ServiceParagraph>
      The Indian government has made Legal Metrology compliance mandatory to:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Enforce fair pricing",
        "Standardize labeling",
        "Monitor imported goods",
        "Detect fraud and manipulation",
      ]}
    />

    <ServiceParagraph>
      The Legal Metrology Packaged Commodities Rules are frequently updated
      to reflect current market practices. These rules impact pricing
      disclosures, nutritional labeling, use-by dates, and country-of-origin
      declarations.
    </ServiceParagraph>
  </>
);

const TradeImpactSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      How Legal Metrology Influences Trade
    </SectionHeadingTwo>

    <ServiceParagraph>
      For manufacturers and importers, proper Legal Metrology compliance means:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Easy customs clearance",
        "Seamless onboarding on e-commerce platforms",
        "Avoidance of legal penalties",
        "Improved product marketability",
      ]}
    />

    <SectionHeadingThree as="h3">
      Empowering Consumers Through Regulation
    </SectionHeadingThree>

    <ServiceParagraph>
      A well-informed consumer is a protected consumer. Legal Metrology
      provides transparency in pricing and quantity, especially:
    </ServiceParagraph>

    <ServiceList
      points={[
        "On electronic weighing scales at grocery shops",
        "On price labels of pre-packed items",
        "On meters for LPG, electricity, and water",
      ]}
    />

    <ServiceParagraph>
      When consumers know what they&apos;re paying for is accurate, confidence
      in the system grows.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      National and International Trade Impact
    </SectionHeadingThree>

    <ServiceParagraph>For exporters and importers:</ServiceParagraph>

    <ServiceList
      points={[
        "LMPC registration ensures that products meet global standards",
        "Non-compliance can result in customs hold-ups, product rejections, and loss of trade licenses",
      ]}
    />
  </>
);

const LegalActSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Legal Metrology Act: Complete Breakdown
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Legal Metrology Act, 2009 is a transformative statute that governs
      units of measurement, measuring instruments, and the protection of
      consumer rights in India. This act lays the foundation for ensuring
      accuracy, fairness, and transparency in all commercial and industrial
      transactions that rely on measurement.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Purpose of the Act</SectionHeadingThree>

    <ServiceParagraph>The Legal Metrology Act serves several key purposes:</ServiceParagraph>

    <ServiceList
      points={[
        "Standardization of weights and measures",
        "Regulation of manufacturing, import, sale, and repair of weighing/measuring instruments",
        "Consumer protection through verified and certified measurements",
        "Legal enforcement through penalties for non-compliance",
      ]}
    />

    <SectionHeadingThree as="h3">Key Definitions</SectionHeadingThree>

    <ServiceParagraph>The Act defines critical terms such as:</ServiceParagraph>

    <ServiceList
      points={[
        "Weight or measure: Standard units prescribed by the government",
        "Pre-packaged commodity: Products packed without buyer presence and labeled for sale",
        "Manufacturer: Any entity that manufactures or assembles weights or measures",
        "Legal Metrology Officer (LMO): An officer authorized to inspect, verify, and enforce the Act",
      ]}
    />

    <ServiceParagraph>
      Understanding these definitions helps stakeholders determine their
      obligations and rights.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Applicability</SectionHeadingThree>

    <ServiceParagraph>The Act applies to:</ServiceParagraph>

    <ServiceList
      points={[
        "All goods sold or distributed by weight, measure, or number",
        "Every entity dealing with packaged commodities, including importers and e-commerce sellers",
        "Manufacturers, repairers, and dealers of weighing/measuring devices",
      ]}
    />

    <SectionHeadingThree as="h3">Structure of the Act</SectionHeadingThree>

    <ServiceParagraph>The Act is supported by three important rules:</ServiceParagraph>

    <ServiceList
      points={[
        "Legal Metrology (General) Rules, 2011",
        "Legal Metrology (Packaged Commodities) Rules, 2011",
        "Legal Metrology (National Standards) Rules, 2011",
      ]}
    />

    <ServiceParagraph>These rules elaborate on:</ServiceParagraph>

    <ServiceList
      points={[
        "Registration and licensing procedures",
        "Labeling requirements",
        "Penalties for violations",
        "Methods for standardization and calibration",
      ]}
    />

    <SectionHeadingThree as="h3">Enforcement Mechanism</SectionHeadingThree>

    <ServiceParagraph>
      The Act is enforced through a well-structured hierarchy:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Central Government: Establishes policy and coordination",
        "State Governments: Appoint Controllers and LMOs",
        "Legal Metrology Officers: Conduct inspections, seize goods, issue fines",
      ]}
    />

    <ServiceParagraph>They have authority to:</ServiceParagraph>

    <ServiceList
      points={[
        "Inspect premises without prior notice",
        "Seize non-compliant goods",
        "File prosecution for violations",
      ]}
    />
  </>
);

const LmpcRulesSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Legal Metrology Packaged Commodities Rules (LMPC Rules)
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Legal Metrology (Packaged Commodities) Rules, 2011—commonly referred
      to as LMPC Rules—are an extension of the Legal Metrology Act, 2009. These
      rules ensure that every pre-packaged commodity is labeled with accurate,
      transparent, and standardized information to protect consumers from
      misleading practices.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Why LMPC Rules Exist</SectionHeadingThree>

    <ServiceParagraph>
      Pre-packaged goods are often purchased without direct interaction between
      the buyer and seller. The LMPC Rules enforce labeling that makes sure the
      buyer receives accurate and essential product details.
    </ServiceParagraph>

    <ServiceParagraph>These rules are mandatory for:</ServiceParagraph>

    <ServiceList
      points={["Manufacturers", "Packers", "Importers", "E-commerce sellers"]}
    />

    <SectionHeadingThree as="h3">Applicability</SectionHeadingThree>

    <ServiceParagraph>The LMPC Rules apply to any commodity that is:</ServiceParagraph>

    <ServiceList
      points={[
        "Pre-packed in a sealed container",
        "Intended for retail sale",
        "Labeled for direct consumer purchase",
      ]}
    />

    <ServiceParagraph>This includes a wide range of products:</ServiceParagraph>

    <ServiceList
      points={[
        "Food and beverages",
        "Pharmaceuticals",
        "Cosmetics",
        "Consumer electronics",
        "Household goods",
      ]}
    />

    <SectionHeadingThree as="h3">Key Labeling Requirements</SectionHeadingThree>

    <ServiceParagraph>Each package must clearly bear the following:</ServiceParagraph>

    <ServiceList
      points={[
        "Name and address of the manufacturer/packer/importer",
        "Net quantity expressed in standard units (kg, g, L, mL, etc.)",
        "Retail Sale Price (MRP) including all taxes",
        "Date of manufacture/import/packing",
        "Customer care contact",
        "Country of origin (mandatory for imported goods)",
      ]}
    />
  </>
);

const LmpcProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      LMPC Process: Step-by-Step Detailed Application Guide
    </SectionHeadingTwo>

    <ServiceParagraph>
      The LMPC certification process involves a series of legal, documentation,
      and inspection procedures. It must be completed by every importer,
      manufacturer, or packer of pre-packaged commodities before their goods can
      be sold in the Indian retail market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Identify Applicability</SectionHeadingThree>

    <ServiceParagraph>
      Before beginning the process, determine whether your product falls under
      the Legal Metrology (Packaged Commodities) Rules. If your product is
      packaged and meant for retail sale, LMPC applies.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 2: Gather LMPC Documents</SectionHeadingThree>

    <ServiceParagraph>Prepare the following documents:</ServiceParagraph>

    <ServiceList
      points={[
        "Copy of IEC code (for importers)",
        "GST registration certificate",
        "PAN card of business entity",
        "Address proof of premises",
        "Sample label or packaging",
        "Product list with net quantities",
        "Declaration letter",
        "Authorization letter (if applying via consultant)",
      ]}
    />

    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
      <p className="font-geist text-sm md:text-base text-blue-800">
        TIP: Keep both hard copies and soft copies scanned in advance to save
        time.
      </p>
    </div>

    <SectionHeadingThree as="h3">Step 3: Choose Registration Type</SectionHeadingThree>

    <ServiceParagraph>Depending on your business scope:</ServiceParagraph>

    <ServiceList
      points={[
        "Apply for Central Registration with the Director of Legal Metrology (for inter-state trade)",
        "Apply for State Registration with the Controller of Legal Metrology (for intra-state only)",
      ]}
    />

    <SectionHeadingThree as="h3">Step 4: Fill the Application Form</SectionHeadingThree>

    <ServiceParagraph>Obtain and fill the LMPC application form:</ServiceParagraph>

    <ServiceList
      points={[
        "Include accurate product names",
        "State correct pack sizes and weights",
        "Mention trade name/brand clearly",
        "Sign and stamp with official seal",
      ]}
    />

    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p className="font-geist text-sm md:text-base text-yellow-800">
        Ensure there are no spelling errors, mismatched details, or inconsistent
        units.
      </p>
    </div>

    <SectionHeadingThree as="h3">Step 5: Submit the Application</SectionHeadingThree>

    <ServiceParagraph>Submit the application along with the required fee:</ServiceParagraph>

    <ServiceList
      points={[
        "Via post to the respective department",
        "In-person at the Legal Metrology Office",
        "Online (where available)",
      ]}
    />

    <ServiceParagraph>
      Make sure to obtain an acknowledgment receipt or reference number.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 6: Department Review &amp; Inspection
    </SectionHeadingThree>

    <ServiceParagraph>The Legal Metrology Department will:</ServiceParagraph>

    <ServiceList
      points={[
        "Scrutinize your application",
        "Inspect packaging samples",
        "Conduct a physical visit (if required)",
      ]}
    />

    <SectionHeadingThree as="h3">Step 7: Certificate Issuance</SectionHeadingThree>

    <ServiceParagraph>If all criteria are met:</ServiceParagraph>

    <ServiceList
      points={[
        "LMPC certificate is granted",
        "You will receive it via post or email (depending on the portal)",
        "It includes validity period, pack sizes, and authority seal",
      ]}
    />
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo as="h2">LMPC Certificate Documents</SectionHeadingTwo>

    <ServiceParagraph>
      To ensure a smooth application process, here is a consolidated LMPC
      document checklist:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Mandatory Documents:</SectionHeadingThree>

    <ServiceList
      points={[
        "Business incorporation certificate (Company/LLP/Partnership)",
        "Import Export Code (for importers)",
        "PAN card (Entity)",
        "GST certificate",
        "Rent agreement or property ownership proof",
        "Packaging label (actual or draft)",
        "Board resolution/Authorization letter (if applicable)",
        "Demand Draft or fee payment receipt",
      ]}
    />

    <SectionHeadingThree as="h3">Optional But Recommended:</SectionHeadingThree>

    <ServiceList
      points={[
        "Product catalog with specifications",
        "Client invoices (if available)",
        "ISO certificates (if applicable)",
      ]}
    />

    <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4 rounded">
      <p className="font-geist text-sm md:text-base text-green-800">
        Pro Tip: Arrange documents in the order specified by your state&apos;s
        Legal Metrology Office.
      </p>
    </div>

    <SectionHeadingThree as="h3">Sample Label Format</SectionHeadingThree>

    <ServiceParagraph>Every product label must include:</ServiceParagraph>

    <ServiceList
      points={[
        "Name & address of importer/packer",
        "Net weight or volume",
        "MRP (inclusive of all taxes)",
        "Month & year of packing/import",
        "Customer care contact",
        "Country of origin (for imported goods)",
      ]}
    />

    <SectionHeadingThree as="h3">
      LMPC Certificate Cost: State-Wise Fee Structure Explained
    </SectionHeadingThree>

    <ServiceParagraph>
      The cost of obtaining an LMPC certificate can vary by state and type of
      application.
    </ServiceParagraph>
  </>
);

const LmOfficeSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Role &amp; Functions of the Legal Metrology Office
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Legal Metrology Office plays a pivotal role in upholding consumer
      rights and fair trade practices through the implementation of standards
      related to weight and measurement. This office, operating under the
      Department of Consumer Affairs, ensures that the Legal Metrology Act and
      related rules are properly enforced.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Core Responsibilities</SectionHeadingThree>

    <ServiceList
      points={[
        "Registration & Licensing: Issues licenses to manufacturers, dealers, and repairers of weights and measures.",
        "LMPC Certification: Processes applications and grants LMPC certificates to importers and packers.",
        "Verification & Stamping: Conducts inspection, verification, and stamping of measuring instruments.",
        "Surveillance & Enforcement: Carries out raids, inspections, and enforcement actions against non-compliance.",
      ]}
    />
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "eligibility", label: "Importance", section: <ImportanceSection /> },
  {
    id: "compliance",
    label: "Trade Impact",
    section: <TradeImpactSection />,
  },
  { id: "process", label: "Legal Act", section: <LegalActSection /> },
  { id: "lmpc-rules", label: "LMPC Rules", section: <LmpcRulesSection /> },
  {
    id: "lmpc-process",
    label: "LMPC Process",
    section: <LmpcProcessSection />,
  },
  {
    id: "lmpc-documents",
    label: "Documents",
    section: <DocumentsSection />,
  },
  {
    id: "legal-metrology-office",
    label: "LM Office",
    section: <LmOfficeSection />,
  },
];

const faqs = [
  {
    question: "What is Legal Metrology?",
    answer:
      "Legal Metrology is the field of law that deals with units of measurement, weighing and measuring instruments, and their verification to ensure fairness in trade and consumer protection.",
  },
  {
    question: "What does an LMPC certificate mean?",
    answer:
      "An LMPC (Legal Metrology Packaged Commodities) certificate is a mandatory document for importers and packers of pre-packaged goods in India. It certifies compliance with labeling and packaging rules under the Legal Metrology Act.",
  },
  {
    question: "Who needs LMPC registration?",
    answer:
      "Anyone who imports, manufactures, or packages pre-packed commodities for sale in India must obtain LMPC registration, including private label owners and e-commerce brands.",
  },
  {
    question: "What is the LMPC registration process?",
    answer:
      "The process includes document preparation, submission of an application form, inspection by Legal Metrology Officers, and issuance of the certificate upon approval.",
  },
  {
    question:
      "What are the penalties for non-compliance with Legal Metrology rules?",
    answer:
      "Penalties range from ₹2,000 to over ₹50,000 and may include seizure of goods, cancellation of licenses, or prosecution.",
  },
  {
    question: "How long does an LMPC certificate remain valid?",
    answer:
      "It is valid for a period of 1 to 5 years, depending on state policies. Timely renewal is essential to maintain compliance.",
  },
  {
    question: "Can I apply for LMPC registration online?",
    answer:
      "Some states offer online portals for LMPC registration. However, many still require physical submission and verification.",
  },
  {
    question: "What is the role of the Legal Metrology Office?",
    answer:
      "It registers manufacturers, dealers, and repairers of weighing/measuring devices, verifies instruments, processes LMPC applications, and enforces compliance through inspections.",
  },
  {
    question: "Do I need separate LMPC registration for each product?",
    answer:
      "No, a single registration can cover multiple products, but all must be declared in the application.",
  },
  {
    question:
      "What are the waste management laws that apply to my business?",
    answer:
      "Depending on your operations, you may need to comply with the Environment Protection Act, E-Waste Rules, Plastic Waste Rules, and Battery Waste Management Rules, among others.",
  },
  {
    question: "Is waste management legally mandatory for all companies?",
    answer:
      "Yes, especially for manufacturing units, importers, and entities that generate electronic, plastic, or hazardous waste.",
  },
  {
    question: "What happens if I fail to manage waste properly?",
    answer:
      "Consequences include fines, suspension of business operations, and in severe cases, criminal prosecution.",
  },
  {
    question: "Can consultants help with LMPC and waste compliance?",
    answer:
      "Absolutely. Experts like Sun Certifications India provide comprehensive services for LMPC registration, documentation, packaging audits, and waste management compliance.",
  },
  {
    question: "Do I need to display my LMPC certificate?",
    answer:
      "Yes. It must be prominently displayed at your place of business and presented during inspections or customs clearance.",
  },
  {
    question:
      "How can I get started with legal metrology or waste management compliance?",
    answer:
      "Start by evaluating your product and waste types, gathering necessary documents, and consulting with professionals to guide you through registration and ongoing obligations.",
  },
  {
    question:
      "What is the difference between LMPC certificate and Legal Metrology registration?",
    answer:
      "The LMPC certificate is for packaged commodities, especially importers and packers, while Legal Metrology registration is required by manufacturers, dealers, or repairers of weighing and measuring devices.",
  },
  {
    question: "How often should weighing instruments be verified?",
    answer:
      "Most commercial instruments must be verified annually. Some specialized equipment may require more frequent verification depending on usage and state-specific guidelines.",
  },
  {
    question: "Can I sell a product online without LMPC compliance?",
    answer:
      "No. All e-commerce platforms operating in India require sellers to comply with LMPC regulations. Non-compliance can result in delisting or legal notices.",
  },
  {
    question: "What is Battery Waste Management compliance?",
    answer:
      "Battery waste management includes proper disposal, recycling, and documentation of used batteries. Businesses handling batteries must comply with the Battery Waste Management Rules, 2022.",
  },
  {
    question: "Is electronic waste management mandatory for IT companies?",
    answer:
      "Yes. Any organization generating e-waste, including IT firms, must comply with the E-Waste Management Rules, ensure safe disposal, and maintain disposal records.",
  },
];

const LegalMetrology = () => (
  <ServicePageLayout
    breadcrumbLabel="Legal Metrology Certification certifications"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default LegalMetrology;
