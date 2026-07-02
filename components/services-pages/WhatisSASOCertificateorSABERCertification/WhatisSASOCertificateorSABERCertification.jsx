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
        SASO
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      SABER
    </>
  ),
  headingAs: "h1",
  description:
    "SASO Certificate and SABER Certification are mandatory for exporting regulated goods to Saudi Arabia—ensuring compliance, quality, and smooth customs clearance through the SALEEM program.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      What is SASO Certificate or SABER Certification
    </SectionHeadingTwo>

    <ServiceParagraph>
      A SASO certificate (Saudi Standards, Metrology and Quality Organization) is
      a mandatory compliance document required for exporting regulated goods to
      Saudi Arabia. It verifies that products meet safety and quality standards
      via the SABER online platform, ensuring smooth customs clearance. SASO
      Certificate is also known as SABER Certificate.
    </ServiceParagraph>

    <ServiceParagraph>
      SASO certification is a formal process that verifies whether a product
      complies with Saudi standards. It involves testing, inspection, and
      documentation review.
    </ServiceParagraph>

    <ServiceParagraph>
      From a company&apos;s perspective, SABER Certificate is not just a
      regulatory requirement but also a quality assurance mechanism. It ensures
      that products meet international safety standards and are suitable for the
      Saudi market.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is SALEEM Program?</SectionHeadingTwo>

    <ServiceParagraph>
      &ldquo;SALEEM&rdquo; is the name of the Saudi Arabian Product Safety Program,
      administered by the Saudi Standards, Metrology, and Quality Organization
      (SASO). The SALEEM Saudi Arabia program focuses on ensuring the quality of
      products sold in Saudi Arabia, hence the name. The Arabic word SALEEM means
      &ldquo;without risk&rdquo; or &ldquo;without danger&rdquo; to the user, the
      community, or the environment. SABER Saudi Arabia is an online system used by
      SALEEM to ensure that all products and shipments comply with the
      program&apos;s standards. As a platform, SABER facilitates the electronic
      acquisition of the Certificate of Conformity and Certificate of Shipment
      Conformity necessary for the entry of imported and domestically manufactured
      consumer goods into the Saudi market, called the Saber Certification Saudi
      Arabia.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Introduction to SABER System</SectionHeadingTwo>

    <ServiceParagraph>
      SASO (Saudi Standards, Metrology and Quality Organization) launched the
      online Platform named SABER. It facilitates product&apos;s SASO registration
      and SASO certification. Mandatory for exports to Saudi Arabia. SASO uses the
      SABER platform as its digital gateway to implement the SALEEM product safety
      program which regulates the imports of goods in Saudi Arabia. SASO defines
      the standards and regulations while SABER acts as the system that facilitates
      the registration and certification of the products.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key purpose SASO Certificate</SectionHeadingThree>
    <ServiceList
      points={[
        "Digitalization of SASO Certification process",
        "Transparency in imports",
        "Faster customs clearance",
      ]}
    />

    <SectionHeadingThree as="h3">Key Features of SABER Certification</SectionHeadingThree>
    <ServiceList
      points={[
        "Online system for product certification",
        "Centralized platform for all stakeholders",
        "Product registration with HS code and details",
        "Issues certificates (PCoC & SCoC)",
        "Real Time tracking of applications",
        "Ensures compliance with SASO Standards",
        "Mandatory for imports into Saudi Arabia",
      ]}
    />

    <SectionHeadingTwo as="h2">
      Objectives of SASO Certification or SABER Certificate
    </SectionHeadingTwo>
    <ServiceList
      points={[
        "Issuing Saudi standards, quality regulations and guides, and conformity assessment that are consistent with international standards and guides as well as meeting the requirements of the World Trade Organization agreement in this scope in line with Islamic Sharia and in the interests of the Kingdom.",
        "Providing environmental and health protection and general safety by ensuring that products comply with the standards approved by SASO.",
        "Ensuring the national products quality by approving suitable Saudi standard that enables national products to compete in the domestic and international markets in addition to protecting the Kingdom's markets from counterfeit goods.",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">SABER Certification Process</SectionHeadingTwo>

    <ServiceParagraph>
      The SABER certification process is a two-stage online system managed by SASO
      for importing goods into Saudi Arabia. It involves registering products to
      obtain a Product Certificate of Conformity (PCoC) based on risk, followed by a
      Shipment Certificate of Conformity (SCoC) for each consignment to ensure
      customs clearance.
    </ServiceParagraph>

    <ServiceParagraph>
      The SABER certification process is structured and involves multiple steps.
      Although the Saudi importer registers the product, exporters play a crucial
      role in providing accurate information and documentation.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Account Creation</SectionHeadingThree>
    <ServiceList
      points={[
        "The importer creates an account on the SABER platform and logs in to initiate the process.",
      ]}
    />

    <SectionHeadingThree as="h3">Step 2: Product Registration</SectionHeadingThree>
    <ServiceParagraph>
      Identify if your product is regulated (needs certification) or non-regulated
      (self-declaration only). Classification is based on SASO technical
      regulations. The product is registered with details such as product name, HS
      code, category, and technical specifications.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 3: Selection of Certification Body</SectionHeadingThree>
    <ServiceParagraph>
      An approved certification body is selected to evaluate the product (e.g.,
      SGS, Intertek, Bureau Veritas).
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 4: Document Submission</SectionHeadingThree>
    <ServiceParagraph>
      The exporter provides necessary documents, including test reports, product
      specifications, and declaration of conformity.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 5: Product Evaluation</SectionHeadingThree>
    <ServiceParagraph>
      The SASO certification body reviews the documents and may request additional
      testing if required.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 6: Issuance of Product Certificate (PCoC)</SectionHeadingThree>
    <ServiceParagraph>
      Once SASO approved, the Product Certificate of Conformity is issued.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 7: Shipment Certificate (SCoC)</SectionHeadingThree>
    <ServiceParagraph>
      For each shipment, a Shipment Certificate is generated, which is required for
      customs clearance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 8: Certification Body Approval</SectionHeadingThree>
    <ServiceList
      points={[
        "Certification body verifies shipment details",
        "Issues SCoC",
      ]}
    />

    <SectionHeadingThree as="h3">Step 9: Customs Clearance</SectionHeadingThree>
    <ServiceList
      points={[
        "Saudi customs checks SABER certificates",
        "If valid → shipment cleared",
      ]}
    />
  </>
);

const CertificatesSection = () => (
  <>
    <SectionHeadingTwo as="h2">Types of SASO Certificates</SectionHeadingTwo>

    <SectionHeadingThree as="h3">Product Certificate of Conformity (PCoC)</SectionHeadingThree>
    <ServiceParagraph>
      The PCoC is issued for a specific product and is valid for one year. It
      confirms that the product complies with Saudi standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Shipment Certificate of Conformity (SCoC)</SectionHeadingThree>
    <ServiceParagraph>
      The SCoC is issued for each shipment and ensures that the shipped goods match
      the approved product.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">SASO Registration and Documentation</SectionHeadingTwo>

    <ServiceParagraph>
      SASO registration is done through the SABER platform, which is managed by
      the Saudi Standards, Metrology and Quality Organization. Proper
      documentation is essential for obtaining SASO certification. Companies must
      ensure that all documents are accurate and complete.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Who Registers?</SectionHeadingThree>
    <ServiceList
      points={[
        "Saudi Importer (mandatory)",
        "Must have a valid Commercial Registration (CR)",
        "Exporters cannot register directly (they support documentation)",
      ]}
    />

    <SectionHeadingTwo as="h2">Documents Required for Saber Certification</SectionHeadingTwo>
    <ServiceList
      points={[
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading",
        "Product Test Reports",
        "Product Images",
        "Declaration of Conformity",
      ]}
    />

    <ServiceParagraph>
      Incomplete or incorrect documentation can lead to delays or rejection.
    </ServiceParagraph>
  </>
);

const CostSection = () => (
  <>
    <SectionHeadingTwo as="h2">SASO Certification Cost</SectionHeadingTwo>

    <ServiceParagraph>
      SASO SABER certification costs typically range from ₹20,000 to ₹45,000+ per
      certificate in India, depending on product complexity and the agency. The
      process involves a Product Certificate of Conformity (PCoC) valid for one
      year and a Shipment Certificate of Conformity (SCoC) for each consignment,
      with total costs including assessment fees and mandatory platform charges.
    </ServiceParagraph>

    <ServiceParagraph>
      The SASO certification cost varies depending on several factors, including
      product type, testing requirements, and certification body charges.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Cost Components</SectionHeadingThree>
    <ServiceList
      points={[
        "Testing fees",
        "Certification fees",
        "SABER platform charges",
        "Documentation costs",
      ]}
    />

    <SectionHeadingThree as="h3">Approximate Cost Range</SectionHeadingThree>
    <ServiceList
      points={[
        "Product Certificate (PCoC): ₹50,000 – ₹2,00,000",
        "Shipment Certificate (SCoC): ₹10,000 – ₹50,000",
      ]}
    />

    <SectionHeadingTwo as="h2">
      Role of Companies in SABER Certification Process
    </SectionHeadingTwo>

    <ServiceParagraph>
      Companies play a central role in the SASO certification process by ensuring
      product safety, technical compliance, and initiating the two-stage
      certification (PCoC and SCoC) via the SABER online platform. They must
      register products, provide lab test reports from accredited bodies, and
      ensure compliance with Saudi technical regulations.
    </ServiceParagraph>

    <ServiceParagraph>
      Companies must actively participate in the SASO certification process by:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Preparing accurate documentation",
        "Coordinating with importers",
        "Ensuring product quality",
        "Maintaining certification validity",
      ]}
    />
  </>
);

const GuidanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Challenges Faced by Companies during SASO Certificate Process
    </SectionHeadingTwo>

    <ServiceParagraph>
      Companies looking to export regulated products to Saudi Arabia face
      significant hurdles in complying with the SABER Certificate regulations,
      primarily due to complex, evolving, and mandatory conformity assessment
      procedures. Failure to navigate these requirements often leads to shipment
      delays, product rejection, or severe penalties.
    </ServiceParagraph>

    <ServiceParagraph>
      Companies often face several challenges during the SASO certification process:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Common Issues</SectionHeadingThree>
    <ServiceList
      points={[
        "High certification cost",
        "Complex documentation",
        "Time delays",
        "Technical compliance issues",
      ]}
    />

    <SectionHeadingTwo as="h2">Solutions and Best Practices</SectionHeadingTwo>

    <ServiceParagraph>
      Navigating SASO Certificate (Saudi Standards, Metrology and Quality
      Organization) requirements is essential for importing goods into Saudi
      Arabia. The process centers on the SABER platform, an online system designed
      to ensure products comply with safety and quality regulations, reducing delays
      at customs.
    </ServiceParagraph>

    <ServiceParagraph>To overcome challenges, companies should:</ServiceParagraph>
    <ServiceList
      points={[
        "Conduct pre-testing of products",
        "Use experienced consultants",
        "Maintain proper documentation",
        "Stay updated with regulations",
      ]}
    />

    <SectionHeadingTwo as="h2">Benefits of SASO SABER Certification</SectionHeadingTwo>

    <ServiceParagraph>
      SASO SABER certification is a mandatory online platform in Saudi Arabia that
      ensures imported products meet safety and quality standards, enabling legal
      market access and streamlined customs clearance. Benefits include reduced
      shipping delays, enhanced brand trust, increased consumer confidence, and
      compliance with regulations to prevent product rejection.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">For Companies</SectionHeadingThree>
    <ServiceList
      points={[
        "Easy market access",
        "Improved credibility",
        "Compliance assurance",
        "Business growth opportunities",
      ]}
    />

    <SectionHeadingThree as="h3">For Consumers</SectionHeadingThree>
    <ServiceList points={["Safe and reliable products", "Quality assurance"]} />

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      SASO SABER certification are essential for companies exporting to Saudi
      Arabia. They ensure that products meet quality and safety standards while
      simplifying the SASO certification process through digitalization.
    </ServiceParagraph>

    <ServiceParagraph>
      By understanding the SASO certification process, SABER certification
      process, SASO approval, and SASO certification costs, companies can
      effectively manage their export operations and achieve long-term success in
      the Saudi market.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  {
    id: "certificates",
    label: "Certificates",
    section: <CertificatesSection />,
  },
  { id: "cost", label: "Cost", section: <CostSection /> },
  { id: "guidance", label: "Guidance", section: <GuidanceSection /> },
];

const faqs = [
  {
    question: "What is a SASO Certificate and why is it required?",
    answer:
      "A Saudi Standards, Metrology and Quality Organization (SASO) Certificate is a mandatory document required for exporting regulated products to Saudi Arabia. It confirms that the product complies with Saudi safety, quality, and technical regulations. Without this certification, products cannot clear customs in Saudi Arabia. The certificate ensures consumer safety, environmental protection, and adherence to international standards. It also helps prevent counterfeit or substandard goods from entering the Saudi market, making it essential for legal and smooth trade operations.",
  },
  {
    question: "What is SABER Certification in Saudi Arabia?",
    answer:
      "SABER Certification is an online conformity assessment system introduced under the SALEEM program. It is used to register products and obtain compliance certificates before exporting goods to Saudi Arabia. SABER is not a certification itself but a digital platform that facilitates issuing Product Certificate of Conformity (PCoC) and Shipment Certificate of Conformity (SCoC). It simplifies and digitizes the entire SASO certification process, ensuring faster approvals, transparency, and efficient customs clearance for imported products.",
  },
  {
    question: "What is the difference between SASO and SABER?",
    answer:
      "SASO refers to the regulatory authority that sets standards and technical regulations in Saudi Arabia, while SABER is the online system used to implement those regulations. In simple terms, SASO creates the rules, and SABER is the platform where businesses register products and obtain certification. Exporters must comply with SASO standards through the SABER system to get approval. Both are interconnected and essential for product compliance and legal entry into the Saudi Arabian market.",
  },
  {
    question: "What is the SALEEM Program in Saudi Arabia?",
    answer:
      "SALEEM is the Saudi Product Safety Program designed to ensure that all products entering the Saudi market are safe and compliant. The word \"SALEEM\" means \"safe\" or \"risk-free.\" This program is managed by SASO and implemented through the SABER platform. It focuses on improving product quality, protecting consumers, and eliminating unsafe goods. Under SALEEM, every product must go through a structured certification process before it is allowed to be imported or sold in Saudi Arabia.",
  },
  {
    question: "What are PCoC and SCoC in SABER Certification?",
    answer:
      "PCoC (Product Certificate of Conformity) is issued for a specific product and confirms that it complies with Saudi standards. It is generally valid for one year. SCoC (Shipment Certificate of Conformity) is issued for each shipment and ensures that the goods being shipped match the approved product. Both certificates are mandatory under the SABER system. Without these certificates, shipments may be delayed, rejected, or denied entry at Saudi customs.",
  },
  {
    question: "Who is responsible for SABER registration?",
    answer:
      "The Saudi importer is responsible for registering products on the SABER platform. They must have a valid Commercial Registration (CR) to initiate the process. However, exporters play a critical supporting role by providing technical documents, test reports, and product details. Without proper coordination between the importer and exporter, the certification process may face delays or rejection. Therefore, both parties must work together to ensure compliance with SASO regulations.",
  },
  {
    question: "What documents are required for SABER Certification?",
    answer:
      "To obtain SABER Certification, several documents are required, including a commercial invoice, packing list, bill of lading, product test reports, product images, and declaration of conformity. These documents help certification bodies evaluate whether the product meets Saudi standards. Accurate and complete documentation is crucial, as any errors or missing information can result in delays or rejection. Proper documentation also ensures smooth processing and faster approval through the SABER system.",
  },
  {
    question: "How long does the SABER certification process take?",
    answer:
      "The timeline for SABER certification depends on product type, documentation accuracy, and testing requirements. Generally, obtaining a Product Certificate (PCoC) can take a few days to a few weeks. Once the product is approved, generating a Shipment Certificate (SCoC) for each shipment is usually quicker and can be done within 1–3 days. Delays may occur if additional testing or corrections are required, so proper preparation is essential to speed up the process.",
  },
  {
    question: "What is the cost of SASO SABER Certification?",
    answer:
      "The cost of SASO SABER Certification varies depending on product complexity, testing requirements, and certification body fees. Typically, the Product Certificate (PCoC) may cost between ₹50,000 to ₹2,00,000, while the Shipment Certificate (SCoC) ranges from ₹10,000 to ₹50,000 per shipment. Additional costs may include testing fees, documentation charges, and SABER platform fees. Businesses should plan their budget accordingly and work with experienced consultants to optimize costs.",
  },
  {
    question: "What products require SASO SABER Certification?",
    answer:
      "Most regulated products exported to Saudi Arabia require SASO SABER Certification. These include electrical products, construction materials, automotive components, and consumer goods. Products are classified as regulated or non-regulated based on SASO technical regulations. Regulated products require certification, while non-regulated products may only need self-declaration. It is important to verify product classification before exporting to avoid compliance issues and shipment delays.",
  },
  {
    question: "What are the benefits of SABER Certification for businesses?",
    answer:
      "SABER Certification offers multiple benefits for businesses, including easy access to the Saudi market, improved brand credibility, and compliance with international standards. It reduces shipment delays, ensures smooth customs clearance, and enhances customer trust. Companies with certified products gain a competitive advantage and can expand their market presence in Saudi Arabia. It also helps avoid penalties, product rejection, and legal issues during import processes.",
  },
  {
    question: "What challenges do companies face during SASO certification?",
    answer:
      "Companies often face challenges such as complex documentation, high certification costs, and evolving regulatory requirements. Technical compliance issues and delays in testing can also impact timelines. Additionally, lack of awareness about SABER procedures can lead to mistakes in product registration. To overcome these challenges, businesses should work with experienced consultants, maintain accurate documentation, and stay updated with the latest SASO regulations.",
  },
  {
    question: "Can exporters directly apply for SABER Certification?",
    answer:
      "No, exporters cannot directly apply for SABER Certification. The Saudi importer must register the product on the SABER platform. However, exporters are responsible for providing all required technical documents, test reports, and product specifications. Their role is crucial in ensuring compliance with SASO standards. Proper coordination between importer and exporter is essential for successful certification and timely shipment clearance.",
  },
  {
    question: "What happens if a product does not have SABER Certification?",
    answer:
      "If a product does not have SABER Certification, it will not be allowed to enter Saudi Arabia. The shipment may be held at customs, rejected, or returned to the origin country. In some cases, penalties may also be imposed. Lack of certification can lead to financial losses, delays, and damage to business reputation. Therefore, obtaining proper certification before shipment is mandatory for smooth trade operations.",
  },
  {
    question: "How can companies ensure successful SABER Certification?",
    answer:
      "Companies can ensure successful SABER Certification by preparing accurate documentation, conducting pre-testing of products, and working with approved certification bodies. Staying updated with SASO regulations and using experienced consultants can significantly reduce errors and delays. Proper planning and coordination with the Saudi importer are also essential. Following best practices helps streamline the process, reduce costs, and ensure faster approvals.",
  },
];

const WhatisSASOCertificateorSABERCertification = () => (
  <ServicePageLayout
    breadcrumbLabel="What is SASO Certificate or SABER Certification"
    hero={hero}
    intro={intro}
    sections={sections}
    faqs={faqs}
  />
);

export default WhatisSASOCertificateorSABERCertification;
