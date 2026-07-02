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
        ERDA
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certificate
    </>
  ),
  headingAs: "h1",
  description:
    "ERDA Certificate and ERDA License help electrical manufacturers validate product safety, meet compliance standards, and gain market credibility in India and abroad.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      Introduction to ERDA and ERDA Certificate
    </SectionHeadingTwo>

    <ServiceParagraph>
      The ERDA full form is Electrical Research and Development Association. It
      is one of India&apos;s most important organizations working in the
      electrical sector, focusing on testing, certification, and research. ERDA
      was established to ensure that electrical products used in industries and
      households meet safety and quality standards. It is supported by the
      Government of India and major electrical companies, making it a trusted
      authority in the field.
    </ServiceParagraph>

    <ServiceParagraph>
      ERDA acts as a backbone for the electrical industry by ensuring that every
      product is safe, efficient, and reliable before it reaches consumers. Its
      services help manufacturers improve quality and gain trust in both national
      and international markets.
    </ServiceParagraph>

    <ServiceParagraph>
      In India&apos;s rapidly growing electrical and power sector, ensuring
      product safety, reliability, and compliance is no longer optional—it is
      mandatory. Manufacturers, exporters, and suppliers of electrical
      equipment often face a critical challenge: how to prove product quality and
      meet regulatory expectations without delays or rejections.
    </ServiceParagraph>

    <ServiceParagraph>
      This is where ERDA Certificate and ERDA License play a crucial role.
    </ServiceParagraph>

    <ServiceParagraph>
      The Electrical Research and Development Association (ERDA) provides
      advanced testing, certification, and research services that help
      businesses validate product performance and comply with national and
      international standards. Whether you are dealing with transformers,
      switchgear, cables, or power equipment, obtaining an ERDA License / ERDA
      Certificate can significantly enhance credibility and market acceptance.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is ERDA Certificate</SectionHeadingTwo>

    <ServiceParagraph>
      An ERDA certificate is an official proof that a product has been tested
      and approved by ERDA. It confirms that the product meets all required
      safety, quality, and performance standards. This certificate is extremely
      important for manufacturers because it allows them to sell their products
      in the market with confidence.
    </ServiceParagraph>

    <ServiceParagraph>
      The ERDA certificate is not just a document; it represents trust,
      reliability, and compliance. It assures customers and authorities that the
      product is safe to use and meets all regulatory requirements.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Issued after successful testing</SectionHeadingThree>
    <ServiceParagraph>
      The ERDA certificate is only given when a product passes all tests
      conducted in ERDA laboratories, ensuring it meets required standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Confirms safety and compliance</SectionHeadingThree>
    <ServiceParagraph>
      It proves that the product is safe for use and follows all necessary
      regulations.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Required for industrial acceptance</SectionHeadingThree>
    <ServiceParagraph>
      Many industries and government projects require an ERDA certificate before
      using any electrical product.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Builds trust among customers</SectionHeadingThree>
    <ServiceParagraph>
      Customers feel more confident buying products that are ERDA certified
      because they know they are tested and reliable.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Important for exports</SectionHeadingThree>
    <ServiceParagraph>
      An ERDA certificate helps companies enter international markets as it is
      recognized globally.
    </ServiceParagraph>
  </>
);

const ImportanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Why ERDA Certification is Important in India
    </SectionHeadingTwo>

    <ServiceParagraph>
      With increasing regulatory scrutiny and rising competition, obtaining an
      ERDA Certificate is becoming essential rather than optional.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      1. Ensures Product Safety and Compliance
    </SectionHeadingThree>
    <ServiceParagraph>
      Electrical products can pose serious risks if not tested properly. ERDA
      Certification ensures compliance with safety standards, reducing hazards
      like short circuits, overheating, or failure.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Mandatory for Certain Sectors</SectionHeadingThree>
    <ServiceParagraph>
      In industries like power transmission, utilities, and infrastructure, ERDA
      Approval is often required before product deployment.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Enhances Market Credibility</SectionHeadingThree>
    <ServiceParagraph>
      Having an ERDA License signals that your product has been independently
      tested, increasing trust among buyers and stakeholders.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      4. Supports Government and Tender Requirements
    </SectionHeadingThree>
    <ServiceParagraph>
      Many tenders and procurement processes require an ERDA Test Certificate as
      a qualification criterion.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">5. Facilitates Export Opportunities</SectionHeadingThree>
    <ServiceParagraph>
      Global buyers prefer products backed by recognized testing bodies like ERDA,
      making exports smoother.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">ERDA Certification Process</SectionHeadingTwo>

    <ServiceParagraph>
      The ERDA certification process is detailed and systematic. It ensures that
      every product is thoroughly checked before approval. This process involves
      multiple steps, including application, testing, evaluation, and
      certification.
    </ServiceParagraph>

    <ServiceParagraph>
      The goal of ERDA certification is to maintain high-quality standards and
      ensure that only safe products are available in the market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Application submission</SectionHeadingThree>
    <ServiceParagraph>
      The company submits an application with product details and required
      documents to initiate the certification process.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Documentation verification</SectionHeadingThree>
    <ServiceParagraph>
      ERDA checks all documents to ensure that the product meets basic
      requirements before testing begins.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Laboratory testing</SectionHeadingThree>
    <ServiceParagraph>
      The product is tested under various conditions to check its performance,
      safety, and durability.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Evaluation and analysis</SectionHeadingThree>
    <ServiceParagraph>
      Experts analyze test results to determine whether the product meets
      standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Issuance of ERDA certificate</SectionHeadingThree>
    <ServiceParagraph>
      If the product passes all tests, the ERDA certificate is issued.
    </ServiceParagraph>
  </>
);

const ServicesSection = () => (
  <>
    <SectionHeadingTwo as="h2">Types of ERDA Services</SectionHeadingTwo>

    <ServiceParagraph>
      ERDA offers a wide range of services that go beyond just certification.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Testing Services</SectionHeadingThree>
    <ServiceList
      points={[
        "Type testing",
        "Routine testing",
        "Special testing",
        "Short circuit testing",
      ]}
    />
    <ServiceParagraph>
      These tests result in an ERDA Test Certificate, which is crucial for
      compliance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Certification Services</SectionHeadingThree>
    <ServiceList
      points={[
        "Product certification",
        "Quality validation",
        "Performance verification",
      ]}
    />

    <SectionHeadingThree as="h3">3. ERDA NABL Certificate Testing</SectionHeadingThree>
    <ServiceParagraph>
      ERDA labs are NABL accredited, meaning results are highly reliable and
      recognized across industries.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Research & Development</SectionHeadingThree>
    <ServiceList
      points={[
        "Product innovation support",
        "Design validation",
        "Failure analysis",
      ]}
    />

    <SectionHeadingThree as="h3">5. Consultancy Services</SectionHeadingThree>
    <ServiceList
      points={[
        "Guidance on ERDA Certification Requirements",
        "Documentation support",
      ]}
    />
  </>
);

const RequirementsSection = () => (
  <>
    <SectionHeadingTwo as="h2">ERDA Certification Requirements</SectionHeadingTwo>

    <ServiceParagraph>To obtain an ERDA Certificate, you need:</ServiceParagraph>

    <ServiceList
      points={[
        "Product specifications",
        "Technical drawings",
        "Test samples",
        "Quality control documents",
        "Manufacturing details",
      ]}
    />

    <ServiceParagraph>
      Meeting these ERDA Certification Requirements ensures faster approval.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">ERDA Certification Cost</SectionHeadingTwo>

    <ServiceParagraph>
      The ERDA Certification Cost depends on multiple factors:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Type of product",
        "Number of tests required",
        "Complexity of testing",
        "Sample quantity",
      ]}
    />
  </>
);

const ConsultantSection = () => (
  <>
    <SectionHeadingTwo as="h2">Role of ERDA Consultants</SectionHeadingTwo>

    <ServiceParagraph>
      Navigating the ERDA Certification Process can be complex, especially for
      first-time applicants. This is where ERDA Consultants come in.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">What ERDA Consultants Do</SectionHeadingThree>
    <ServiceList
      points={[
        "Assess product readiness",
        "Guide on applicable standards",
        "Prepare documentation",
        "Coordinate with ERDA labs",
        "Track application progress",
        "Resolve technical queries",
      ]}
    />

    <SectionHeadingThree as="h3">
      Why You Should Hire ERDA Certificate Consultants
    </SectionHeadingThree>
    <ServiceList
      points={[
        "Saves time and reduces errors",
        "Ensures faster approval",
        "Minimizes rejection risks",
        "Provides expert guidance",
      ]}
    />

    <ServiceParagraph>
      Professional ERDA Certificate Consultants act as a bridge between your
      business and certification authorities, making the process smooth and
      efficient.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      In today&apos;s competitive and compliance-driven market, obtaining an ERDA
      Certificate is a strategic investment rather than just a regulatory step.
      It not only ensures product safety and quality but also enhances brand
      credibility, market acceptance, and business growth.
    </ServiceParagraph>

    <ServiceParagraph>
      Whether you are a manufacturer, exporter, or supplier, understanding the
      ERDA Certification Process, requirements, and benefits can give you a
      strong edge. With the right approach—and possibly the support of
      experienced ERDA Consultants—you can secure your ERDA License / ERDA
      Licence smoothly and unlock new opportunities in the electrical industry.
    </ServiceParagraph>

    <ServiceParagraph>
      If your goal is long-term success, trust, and compliance—ERDA Certification
      is the way forward.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "importance", label: "Importance", section: <ImportanceSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  {
    id: "erda-services",
    label: "Services",
    section: <ServicesSection />,
  },
  { id: "requirements", label: "Requirements", section: <RequirementsSection /> },
  { id: "consultant", label: "Consultant", section: <ConsultantSection /> },
];

const faqs = [
  {
    question: "What is ERDA Certificate?",
    answer:
      "An ERDA Certificate is a testing and validation document issued after electrical products successfully meet required safety and performance standards. It ensures that the product complies with Indian and international regulations and is safe for use in real-world applications.",
  },
  {
    question: "What is the ERDA Full Form?",
    answer:
      "The ERDA Full Form is Electrical Research and Development Association. It is an organization that provides testing, certification, and research services for electrical and power equipment in India.",
  },
  {
    question: "How to get ERDA Certificate in India?",
    answer:
      "To get an ERDA Certificate, you must submit an application, provide product samples, undergo testing, and meet all compliance requirements. Once the product passes all tests, ERDA issues the certification confirming product quality and safety.",
  },
  {
    question: "What does ERDA do?",
    answer:
      "ERDA conducts testing, certification, research, and consultancy services for electrical products. It helps manufacturers ensure compliance with safety standards and improve product reliability through advanced laboratory testing and technical expertise.",
  },
  {
    question: "What is ERDA Approval meaning?",
    answer:
      "ERDA Approval means that a product has successfully passed all required tests conducted by ERDA and meets applicable standards. It serves as proof of quality, safety, and compliance for electrical equipment.",
  },
  {
    question: "What is ERDA Certification Cost?",
    answer:
      "ERDA Certification Cost varies depending on product type, complexity, and testing requirements. It typically ranges from ₹50,000 to several lakhs, depending on the scope of testing and technical evaluation involved.",
  },
  {
    question: "What is ERDA Certificate Validity?",
    answer:
      "ERDA Certificate Validity usually depends on product type and applicable standards. It remains valid unless there are changes in product design, manufacturing process, or regulatory requirements that require re-testing.",
  },
  {
    question: "Is ERDA Certification mandatory in India?",
    answer:
      "ERDA Certification is not universally mandatory but is often required in government tenders, utility projects, and high-risk electrical applications where product safety and performance validation are critical.",
  },
  {
    question: "What are ERDA Certification Requirements?",
    answer:
      "ERDA Certification Requirements include product specifications, technical documents, test samples, and compliance details. Proper documentation and adherence to standards are essential for successful certification.",
  },
  {
    question: "Why should I hire ERDA Consultants?",
    answer:
      "Hiring ERDA Consultants simplifies the certification process by ensuring proper documentation, reducing delays, and increasing approval chances. They provide expert guidance and help businesses achieve certification efficiently.",
  },
];

const IntroductiontoERDAandERDACertificate = () => (
  <ServicePageLayout
    breadcrumbLabel="Introduction to ERDA and ERDA Certificate"
    hero={hero}
    intro={intro}
    sections={sections}
    faqs={faqs}
  />
);

export default IntroductiontoERDAandERDACertificate;
