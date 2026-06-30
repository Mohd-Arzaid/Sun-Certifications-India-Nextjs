import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const emphasisClassName =
  "font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]";

const hero = {
  heading: (
    <>
      <span className="relative">
        BEE Registration
        <span className="absolute -bottom-2 left-0 w-[200px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certification
    </>
  ),
  headingAs: "h1",
  description:
    "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">BEE Registration Details</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      BEE Registration ensures energy efficiency and quality standards for
      appliances
    </SectionHeadingThree>

    <ServiceParagraph>
      BEE stands for{" "}
      <span className={emphasisClassName}>Bureau of Energy Efficiency</span>{" "}
      (which comes under the Ministry of Power), headquartered in Delhi. It is
      the national regulatory body for energy efficiency standards and
      labeling of appliances and equipment in India.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key functions of BEE include</SectionHeadingThree>

    <ServiceList
      points={[
        "Energy Efficiency Standards",
        "Star Labeling Program",
        "Energy Conservation Building Code",
        "Energy Audits",
        "Energy Manager Certification",
        "Energy Conservation Awareness",
      ]}
    />
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo as="h2">BEE Registration Eligibility</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Eligibility criteria for obtaining BEE registration
    </SectionHeadingThree>

    <ServiceParagraph>
      Manufacturers of{" "}
      <span className={emphasisClassName}>notified appliances and equipment</span>{" "}
      are eligible to apply for BEE registration. This includes both domestic
      and foreign manufacturers who wish to sell their products in India.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Who can apply for BEE registration?</SectionHeadingThree>

    <ServiceList
      points={[
        "Manufacturers of notified appliances",
        "Importers of notified appliances",
        "Authorized representatives of foreign manufacturers",
        "Companies with valid GST registration",
        "Manufacturers with testing facilities or tie-ups with accredited labs",
      ]}
    />
  </>
);

const ClassificationSection = () => (
  <>
    <SectionHeadingTwo as="h2">BEE Star Rating Classification</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Understanding the star rating system for energy efficiency
    </SectionHeadingThree>

    <ServiceParagraph>
      BEE uses a{" "}
      <span className={emphasisClassName}>star rating system</span> to classify
      appliances based on their energy efficiency, ranging from 1 to 5 stars,
      with 5 stars being the most energy-efficient.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Star Rating Classification</SectionHeadingThree>

    <ServiceList
      points={[
        "1 Star: Basic energy efficiency",
        "2 Stars: Moderate energy efficiency",
        "3 Stars: Good energy efficiency",
        "4 Stars: Very good energy efficiency",
        "5 Stars: Excellent energy efficiency",
      ]}
    />

    <SectionHeadingThree as="h3">Key aspects of BEE star rating</SectionHeadingThree>

    <ServiceList
      points={[
        "Mandatory for certain appliances",
        "Voluntary for others",
        "Updated periodically based on market average",
        "Different criteria for different product categories",
      ]}
    />
  </>
);

const RegistrationSection = () => (
  <>
    <SectionHeadingTwo as="h2">BEE Registration Process</SectionHeadingTwo>

    <SectionHeadingThree as="h3">Steps to obtain BEE registration</SectionHeadingThree>

    <ServiceParagraph>
      The process of obtaining BEE registration involves several steps,
      including:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Key steps in the registration process
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Gather necessary documents",
        "Submit application to BEE",
        "Receive initial assessment",
        "Conduct necessary tests",
        "Receive final approval",
      ]}
    />
  </>
);

const NecessitySection = () => (
  <>
    <SectionHeadingTwo as="h2">Why is BEE Registration Important?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">Benefits of obtaining BEE registration</SectionHeadingThree>

    <ServiceParagraph>
      BEE registration is important because it ensures that products meet
      energy efficiency standards, which can lead to:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Benefits of BEE registration</SectionHeadingThree>

    <ServiceList
      points={[
        "Reduced energy consumption",
        "Lower operating costs",
        "Improved product performance",
        "Enhanced market competitiveness",
        "Compliance with regulatory requirements",
      ]}
    />
  </>
);

const ComplianceSection = () => (
  <>
    <SectionHeadingTwo as="h2">BEE Compliance Requirements</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Requirements for maintaining BEE registration
    </SectionHeadingThree>

    <ServiceParagraph>
      Manufacturers must comply with BEE&apos;s energy efficiency standards and
      labeling requirements. This includes:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key compliance requirements</SectionHeadingThree>

    <ServiceList
      points={[
        "Testing and certification",
        "Labeling compliance",
        "Energy performance audits",
        "Post-approval compliance monitoring",
      ]}
    />
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  {
    id: "classification",
    label: "Classification",
    section: <ClassificationSection />,
  },
  {
    id: "registration",
    label: "Registration",
    section: <RegistrationSection />,
  },
  { id: "necessity", label: "Necessity", section: <NecessitySection /> },
  { id: "compliance", label: "Compliance", section: <ComplianceSection /> },
];

const faqs = [
  {
    question: "What services do you offer for CDSCO compliance?",
    answer:
      "We offer comprehensive CDSCO regulatory compliance services including product registration, license applications, regulatory strategy, documentation preparation, and post-approval compliance monitoring for pharmaceuticals, medical devices, and cosmetics in India.",
  },
  {
    question: "How long does the CDSCO approval process typically take?",
    answer:
      "CDSCO approval timelines vary based on product category and application type. Typically, drug approvals take 6-12 months, medical device registrations 3-6 months, and cosmetic registrations 2-4 months. Our certifications work to expedite these timelines through proper documentation and regulatory strategy.",
  },
  {
    question: "What documents are required for CDSCO registration?",
    answer:
      "Required documents include product dossiers, manufacturing information, stability data, clinical trial results (if applicable), Good Manufacturing Practice (GMP) certificates, Certificate of Pharmaceutical Product (CoPP), and various application forms specific to your product category. Our team assists in preparing all necessary documentation.",
  },
  {
    question: "Do you assist with clinical trial approvals in India?",
    answer:
      "Yes, we provide end-to-end support for clinical trial applications in India, including protocol development, ethics committee submissions, CDSCO applications, site selection assistance, and regulatory compliance throughout the trial process. We also help navigate the New Drugs and Clinical Trials Rules, 2019.",
  },
  {
    question: "What are the costs associated with CDSCO registrations?",
    answer:
      "CDSCO registration costs include official government fees (which vary by product type), testing fees, consultant fees, and potential inspection costs. We provide transparent quotations based on your specific product and requirements, with options for different service levels to fit various budgets.",
  },
  {
    question: "How do you handle post-approval regulatory requirements?",
    answer:
      "Our post-approval services include pharmacovigilance support, periodic safety update reports, variation applications, renewal submissions, compliance with labeling requirements, adverse event reporting, and ongoing regulatory intelligence to keep you informed of regulatory changes affecting your products.",
  },
  {
    question:
      "Can you help with import licenses for pharmaceuticals and medical devices?",
    answer:
      "Yes, we specialize in obtaining Import Licenses (Form 10) for drugs and Registration Certificates for medical devices. Our services include preparing all necessary documentation, coordinating with Indian authorized agents, liaising with CDSCO, and handling post-approval compliance requirements for imported products.",
  },
  {
    question:
      "What experience does your consulting team have with CDSCO regulations?",
    answer:
      "Our consulting team consists of regulatory experts with 10+ years of experience in Indian pharmaceutical regulations. Team members include former regulatory professionals, pharmacists, and industry specialists who maintain close relationships with regulatory authorities and stay updated on the latest regulatory developments.",
  },
  {
    question:
      "How do recent regulatory changes affect pharmaceutical registrations in India?",
    answer:
      "Recent regulatory changes include the New Drugs and Clinical Trials Rules (2019), Medical Device Rules (2017), and ongoing updates to the Drugs and Cosmetics Act. These changes have streamlined some processes while adding new requirements for safety monitoring and quality control. Our certifications keep abreast of all changes and adjust strategies accordingly.",
  },
  {
    question: "Do you offer support for manufacturing facility inspections?",
    answer:
      "Yes, we provide comprehensive support for CDSCO manufacturing facility inspections, including pre-inspection readiness assessments, gap analysis, preparation of required documentation, mock inspections, training of personnel, and assistance during actual inspections to ensure a successful outcome.",
  },
];

const BEE = () => (
  <ServicePageLayout
    breadcrumbLabel="BEE Registration Certification"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default BEE;
