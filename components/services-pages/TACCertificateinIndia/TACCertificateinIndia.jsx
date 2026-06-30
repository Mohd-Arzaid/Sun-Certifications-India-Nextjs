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
        TAC
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certificate
    </>
  ),
  headingAs: "h1",
  description:
    "TAC Certificate ensures automotive components and systems meet Indian safety and technical standards—essential for manufacturers, importers, and suppliers entering the Indian market.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      TAC Certificate in India: Complete Information
    </SectionHeadingTwo>

    <ServiceParagraph>
      In India&apos;s rapidly evolving automotive and transportation ecosystem,
      regulatory compliance is no longer optional—it is essential. Whether you
      are a manufacturer, importer, or automotive component supplier, you may have
      come across terms like TAC Certificate, TAC Certification, or TAC Approval.
      Yet, many businesses struggle to understand what it actually means, when it
      is required, and how to obtain it.
    </ServiceParagraph>

    <ServiceParagraph>
      The lack of clarity often leads to delays in product approvals, compliance
      risks, and even financial losses. That&apos;s where a well-structured
      understanding of TAC Certification in India becomes critical.
    </ServiceParagraph>

    <ServiceParagraph>
      This comprehensive guide simplifies everything you need to know—from what is
      TAC Certificate, to the TAC Certification process, cost, requirements, and
      the role of TAC Consultants—so you can move forward with confidence and
      compliance.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is TAC Certificate?</SectionHeadingTwo>

    <ServiceParagraph>
      A TAC Certificate (Type Approval Certificate) is an official approval
      granted to automotive components, vehicles, or related products after
      verifying that they comply with prescribed technical and safety standards.
    </ServiceParagraph>

    <ServiceParagraph>In simple terms:</ServiceParagraph>
    <ServiceParagraph>
      TAC Certification ensures that a product meets regulatory requirements before
      it is allowed for use or sale in India.
    </ServiceParagraph>

    <ServiceParagraph>It is commonly required for:</ServiceParagraph>
    <ServiceList
      points={[
        "Automotive components",
        "Vehicle systems",
        "Safety-critical parts",
        "Imported automobile equipment",
      ]}
    />

    <SectionHeadingThree as="h3">Key Highlights of TAC Certification:</SectionHeadingThree>
    <ServiceList
      points={[
        "Confirms compliance with Indian automotive standards",
        "Issued after testing and evaluation",
        "Mandatory for specific regulated products",
        "Ensures safety, quality, and performance",
      ]}
    />
  </>
);

const ImportanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Why TAC Certification is Important in India
    </SectionHeadingTwo>

    <ServiceParagraph>
      With increasing focus on road safety, environmental compliance, and product
      quality, TAC Certification in India plays a vital role in the automotive
      sector.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Legal Compliance</SectionHeadingThree>
    <ServiceParagraph>
      Without a valid TAC Certificate, certain automotive products cannot be legally
      sold or used in India.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Ensures Product Safety</SectionHeadingThree>
    <ServiceParagraph>
      TAC testing verifies that products meet safety benchmarks, reducing risks
      for end users.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Market Access</SectionHeadingThree>
    <ServiceParagraph>
      Manufacturers and importers must obtain TAC Approval to enter the Indian
      automotive market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Builds Brand Trust</SectionHeadingThree>
    <ServiceParagraph>
      A TAC Certified product signals reliability, quality, and compliance to
      customers and regulators.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">5. Avoids Penalties & Rejections</SectionHeadingThree>
    <ServiceParagraph>Non-compliance can result in:</ServiceParagraph>
    <ServiceList
      points={["Product rejection", "Fines and penalties", "Market bans"]}
    />
  </>
);

const ScopeSection = () => (
  <>
    <SectionHeadingTwo as="h2">Scope of TAC Certification</SectionHeadingTwo>

    <ServiceParagraph>
      The scope of TAC Registration typically includes:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Automotive Components</SectionHeadingThree>
    <ServiceList
      points={["Braking systems", "Lighting systems", "Tyres and safety parts"]}
    />

    <SectionHeadingThree as="h3">2. Vehicle Systems</SectionHeadingThree>
    <ServiceList
      points={[
        "Electrical systems",
        "Control modules",
        "Engine-related components",
      ]}
    />

    <SectionHeadingThree as="h3">3. Imported Products</SectionHeadingThree>
    <ServiceParagraph>
      Imported automotive goods must undergo TAC Certification Process before
      entering the Indian market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Safety Equipment</SectionHeadingThree>
    <ServiceList
      points={["Helmets", "Reflective devices", "Safety accessories"]}
    />
  </>
);

const RequirementsSection = () => (
  <>
    <SectionHeadingTwo as="h2">TAC Certification Requirements</SectionHeadingTwo>

    <ServiceParagraph>
      To obtain a TAC Certificate, businesses must meet specific technical and
      documentation requirements.
    </ServiceParagraph>

    <ServiceParagraph>Basic Requirements:</ServiceParagraph>

    <SectionHeadingThree as="h3">1. Product Details</SectionHeadingThree>
    <ServiceList
      points={[
        "Technical specifications",
        "Design drawings",
        "Material composition",
      ]}
    />

    <SectionHeadingThree as="h3">2. Test Reports</SectionHeadingThree>
    <ServiceList
      points={[
        "Lab testing reports from approved laboratories",
        "Performance evaluation results",
      ]}
    />

    <SectionHeadingThree as="h3">3. Manufacturer Details</SectionHeadingThree>
    <ServiceList
      points={["Company registration documents", "Manufacturing unit details"]}
    />

    <SectionHeadingThree as="h3">4. Quality Compliance</SectionHeadingThree>
    <ServiceList
      points={[
        "Compliance with relevant Indian standards",
        "Quality control procedures",
      ]}
    />

    <SectionHeadingThree as="h3">5. Application Documents</SectionHeadingThree>
    <ServiceList
      points={[
        "Filled application form",
        "Authorization letters (if applicable)",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">TAC Certification Process</SectionHeadingTwo>

    <ServiceParagraph>
      The TAC Certification Process involves multiple stages of verification and
      approval.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Application Submission</SectionHeadingThree>
    <ServiceParagraph>
      Submit the application along with required documents for TAC Registration.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 2: Product Evaluation</SectionHeadingThree>
    <ServiceParagraph>
      Authorities review technical specifications and compliance details.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 3: Testing</SectionHeadingThree>
    <ServiceParagraph>
      Products are tested in authorized laboratories to ensure compliance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 4: Inspection (if required)</SectionHeadingThree>
    <ServiceParagraph>
      Manufacturing facilities may be inspected for quality assurance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 5: Approval & Issuance</SectionHeadingThree>
    <ServiceParagraph>
      After successful evaluation, the TAC Certificate is issued.
    </ServiceParagraph>
  </>
);

const CostSection = () => (
  <>
    <SectionHeadingTwo as="h2">TAC Certification Cost</SectionHeadingTwo>

    <ServiceParagraph>
      The TAC Certification Cost varies based on several factors.
    </ServiceParagraph>

    <ServiceParagraph>Key Cost Factors:</ServiceParagraph>
    <ServiceList
      points={[
        "Type of product",
        "Testing requirements",
        "Number of variants",
        "Documentation complexity",
        "Consultant involvement",
      ]}
    />
  </>
);

const ConsultantSection = () => (
  <>
    <SectionHeadingTwo as="h2">Role of TAC Consultants</SectionHeadingTwo>

    <ServiceParagraph>
      Navigating the TAC Certification Process can be complex, especially for
      first-time applicants. This is where TAC Consultants play a crucial role.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. End-to-End Support</SectionHeadingThree>
    <ServiceParagraph>
      From documentation to approval, consultants manage the entire process.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Documentation Accuracy</SectionHeadingThree>
    <ServiceParagraph>
      They ensure all documents meet regulatory standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Faster Approvals</SectionHeadingThree>
    <ServiceParagraph>
      Minimize delays by avoiding errors and rejections.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Cost Optimization</SectionHeadingThree>
    <ServiceParagraph>
      Help reduce unnecessary testing and expenses.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">5. Compliance Expertise</SectionHeadingThree>
    <ServiceParagraph>
      Stay updated with changing regulations and requirements.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The TAC Certificate is a crucial regulatory requirement in India&apos;s
      automotive ecosystem. Whether you are launching a new product or importing
      components, obtaining TAC Certification ensures compliance, safety, and
      seamless market entry.
    </ServiceParagraph>

    <ServiceParagraph>
      Understanding the TAC Certification Process, requirements, and costs can save
      your business from delays and penalties. However, due to the technical nature
      of approvals, working with experienced TAC Consultants is often the smartest
      move.
    </ServiceParagraph>

    <ServiceParagraph>
      If you&apos;re planning to apply, now is the right time to take action—because
      in today&apos;s competitive market, compliance is not just a requirement, it&apos;s
      a strategic advantage.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "importance", label: "Importance", section: <ImportanceSection /> },
  { id: "scope", label: "Scope", section: <ScopeSection /> },
  {
    id: "requirements",
    label: "Requirements",
    section: <RequirementsSection />,
  },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "cost", label: "Cost", section: <CostSection /> },
  { id: "consultant", label: "Consultant", section: <ConsultantSection /> },
];

const faqs = [
  {
    question: "What is TAC Certificate in India?",
    answer:
      "A TAC Certificate is a Type Approval Certificate issued to confirm that an automotive product complies with Indian safety and technical standards. It is mandatory for certain regulated components and ensures the product is safe, reliable, and legally approved for use or sale in India.",
  },
  {
    question: "Is TAC Certification mandatory in India?",
    answer:
      "Yes, TAC Certification is mandatory for specific automotive components and systems that fall under regulatory requirements. Without TAC Approval, such products cannot be legally sold, imported, or used in India, making it essential for compliance and market access.",
  },
  {
    question: "What is the TAC Certification Process?",
    answer:
      "The TAC Certification Process includes application submission, document verification, product testing, and final approval. Authorities evaluate compliance with standards, and once the product passes all checks, a TAC Certificate or TAC License is issued to the applicant.",
  },
  {
    question: "How long does it take to get TAC Certificate?",
    answer:
      "The timeline for obtaining a TAC Certificate usually ranges from 2 to 6 weeks. However, it may vary depending on product complexity, testing requirements, and the completeness of submitted documentation.",
  },
  {
    question: "What is the cost of TAC Certification in India?",
    answer:
      "TAC Certification Cost depends on factors like product type, testing scope, and documentation. Typically, it ranges between ₹25,000 and ₹2,00,000 or more. Engaging TAC Consultants can help manage costs efficiently.",
  },
  {
    question: "Who needs TAC Approval?",
    answer:
      "Manufacturers, importers, and suppliers of automotive components or systems that fall under regulated categories require TAC Approval. It is essential for ensuring compliance with Indian standards before entering the market.",
  },
  {
    question: "Can I apply for TAC Certification without a consultant?",
    answer:
      "Yes, you can apply independently, but the process can be complex. Many businesses prefer TAC Certificate Consultants to ensure accurate documentation, faster approvals, and reduced chances of rejection.",
  },
  {
    question: "What documents are required for TAC Registration?",
    answer:
      "Documents include product specifications, test reports, manufacturer details, quality compliance records, and application forms. Proper documentation is crucial for successful TAC Certification and avoiding delays.",
  },
  {
    question: "What happens if TAC Certification is not obtained?",
    answer:
      "Failure to obtain TAC Certification can lead to product rejection, penalties, legal action, and inability to sell or import products in India. It also damages brand credibility and business operations.",
  },
  {
    question: "How can TAC Consultants help in certification?",
    answer:
      "TAC Consultants provide end-to-end support, including documentation, testing coordination, application filing, and follow-ups. Their expertise ensures faster approvals, compliance accuracy, and reduced risks in the TAC Certification process.",
  },
];

const TACCertificateinIndia = () => (
  <ServicePageLayout
    breadcrumbLabel="TAC Certificate in India: Complete Information"
    hero={hero}
    intro={intro}
    sections={sections}
    faqs={faqs}
  />
);

export default TACCertificateinIndia;
