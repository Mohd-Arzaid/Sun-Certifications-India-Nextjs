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
        ICAT
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certificate
    </>
  ),
  headingAs: "h1",
  description:
    "ICAT Certificate validates automotive products for safety, emission, and performance compliance—essential for manufacturers, importers, and OEMs entering the Indian market.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      ICAT Certificate in India: Complete Information
    </SectionHeadingTwo>

    <ServiceParagraph>
      If you&apos;re involved in manufacturing, importing, or selling automotive
      products in India, compliance is not optional—it&apos;s mandatory. One of
      the most critical yet often misunderstood requirements is the ICAT
      Certificate.
    </ServiceParagraph>

    <ServiceParagraph>Many businesses struggle with questions like:</ServiceParagraph>

    <ServiceList
      points={[
        "What is ICAT Certificate?",
        "Do I need ICAT Certification?",
        "What is the ICAT Certificate process?",
        "How much does ICAT Certification cost?",
        "Is ICAT approval mandatory for my product?",
      ]}
    />

    <ServiceParagraph>
      This confusion can delay product launches, increase compliance risks, and
      even lead to regulatory penalties.
    </ServiceParagraph>

    <ServiceParagraph>
      This comprehensive guide solves all your concerns. It explains everything
      about ICAT Certification in India, including its meaning, scope, services,
      process, cost, and the role of ICAT consultants—so you can confidently
      navigate the certification process and ensure full regulatory compliance.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is ICAT Certificate?</SectionHeadingTwo>

    <ServiceParagraph>
      The ICAT Certificate is an official approval issued by the International
      Centre for Automotive Technology (ICAT), which validates that a vehicle or
      automotive component complies with Indian regulatory standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">ICAT Full Form</SectionHeadingThree>
    <ServiceParagraph>
      ICAT – International Centre for Automotive Technology
    </ServiceParagraph>
    <ServiceParagraph>
      ICAT is one of India&apos;s premier automotive testing and certification
      bodies, operating under the National Automotive Testing and R&amp;D
      Infrastructure Project (NATRiP), governed by the Ministry of Heavy
      Industries.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key Highlights of ICAT Certification</SectionHeadingThree>
    <ServiceList
      points={[
        "Ensures compliance with Automotive Industry Standards (AIS) and Central Motor Vehicle Rules (CMVR)",
        "Mandatory for certain automotive products before entering the Indian market",
        "Applicable to manufacturers, importers, and OEMs",
        "Covers testing, validation, and certification",
      ]}
    />

    <SectionHeadingThree as="h3">What Does ICAT Certification Cover?</SectionHeadingThree>
    <ServiceList
      points={[
        "Vehicle homologation",
        "Component testing",
        "Emission compliance",
        "Safety validation",
        "Performance testing",
      ]}
    />

    <ServiceParagraph>
      In simple terms, the ICAT Certificate acts as a quality and safety assurance
      document for automotive products in India.
    </ServiceParagraph>
  </>
);

const ImportanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Why ICAT Certification is Important in India
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Indian automotive industry is heavily regulated to ensure road safety,
      environmental protection, and product reliability. This makes ICAT
      Certification crucial for businesses.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Legal Compliance</SectionHeadingThree>
    <ServiceParagraph>
      Without proper ICAT Approval, many automotive products cannot be legally
      sold or registered in India. It ensures compliance with CMVR and AIS norms.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Market Entry Requirement</SectionHeadingThree>
    <ServiceParagraph>
      If you&apos;re launching a new vehicle or component, ICAT Registration is
      often a prerequisite for entering the Indian market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Safety Assurance</SectionHeadingThree>
    <ServiceParagraph>ICAT testing verifies:</ServiceParagraph>
    <ServiceList
      points={[
        "Structural integrity",
        "Brake performance",
        "Crash safety",
        "Emission levels",
      ]}
    />
    <ServiceParagraph>
      This ensures public safety and reduces liability risks.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Builds Brand Credibility</SectionHeadingThree>
    <ServiceParagraph>
      An ICAT License enhances your brand image by demonstrating compliance with
      national standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">5. Facilitates OEM Partnerships</SectionHeadingThree>
    <ServiceParagraph>
      Automotive OEMs prefer suppliers with valid ICAT Certification, making it
      easier to secure business deals.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">6. Smooth Product Approval Process</SectionHeadingThree>
    <ServiceParagraph>
      Having an ICAT certificate simplifies approvals from government authorities
      and RTOs.
    </ServiceParagraph>
  </>
);

const ScopeSection = () => (
  <>
    <SectionHeadingTwo as="h2">Scope of ICAT Certification in India</SectionHeadingTwo>

    <ServiceParagraph>
      The scope of ICAT Certification in India is broad and covers multiple
      automotive segments.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Vehicles</SectionHeadingThree>
    <ServiceList
      points={[
        "Passenger vehicles",
        "Commercial vehicles",
        "Two-wheelers and three-wheelers",
        "Electric vehicles (EVs)",
      ]}
    />

    <SectionHeadingThree as="h3">2. Automotive Components</SectionHeadingThree>
    <ServiceList
      points={[
        "Tyres",
        "Batteries",
        "Lighting systems",
        "Braking systems",
        "Engine parts",
      ]}
    />

    <SectionHeadingThree as="h3">3. EV Components</SectionHeadingThree>
    <ServiceList points={["Battery packs", "Charging systems", "Controllers"]} />

    <SectionHeadingThree as="h3">4. Import Certification</SectionHeadingThree>
    <ServiceParagraph>
      Imported automotive products must undergo ICAT Registration to ensure
      compliance with Indian regulations.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">5. Homologation Services</SectionHeadingThree>
    <ServiceParagraph>
      Homologation is the process of certifying that a vehicle model meets all
      regulatory standards. ICAT plays a major role in this process.
    </ServiceParagraph>
  </>
);

const ServicesSection = () => (
  <>
    <SectionHeadingTwo as="h2">Types of ICAT Services</SectionHeadingTwo>

    <ServiceParagraph>
      ICAT offers a wide range of services beyond just certification.
      Understanding these services helps businesses choose the right compliance
      pathway.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. Homologation Services</SectionHeadingThree>
    <ServiceParagraph>
      This is the most critical service under ICAT Certification.
    </ServiceParagraph>
    <ServiceList
      points={[
        "Type approval for vehicles",
        "CMVR compliance testing",
        "Certification for production models",
      ]}
    />

    <SectionHeadingThree as="h3">2. Component Testing</SectionHeadingThree>
    <ServiceParagraph>ICAT tests automotive components for:</ServiceParagraph>
    <ServiceList
      points={["Durability", "Performance", "Safety compliance"]}
    />
    <ServiceParagraph>
      This is essential for obtaining an ICAT Certificate for Automotive
      Manufacturers.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Emission Testing</SectionHeadingThree>
    <ServiceParagraph>
      Ensures compliance with Bharat Stage (BS) emission norms.
    </ServiceParagraph>
    <ServiceList
      points={[
        "Exhaust emission testing",
        "Fuel efficiency analysis",
        "EV emission equivalence checks",
      ]}
    />

    <SectionHeadingThree as="h3">4. Noise & Vibration Testing</SectionHeadingThree>
    <ServiceList
      points={[
        "Noise pollution measurement",
        "Vibration analysis for safety and comfort",
      ]}
    />

    <SectionHeadingThree as="h3">5. Electric Vehicle Testing</SectionHeadingThree>
    <ServiceParagraph>With the rise of EVs, ICAT provides:</ServiceParagraph>
    <ServiceList
      points={[
        "Battery testing",
        "Thermal runaway analysis",
        "Charging system validation",
      ]}
    />

    <SectionHeadingThree as="h3">6. Material Testing</SectionHeadingThree>
    <ServiceList
      points={[
        "Strength and durability checks",
        "Environmental resistance testing",
      ]}
    />

    <SectionHeadingThree as="h3">7. Calibration Services</SectionHeadingThree>
    <ServiceParagraph>
      Ensures testing equipment accuracy for manufacturers.
    </ServiceParagraph>
  </>
);

const ConsultantSection = () => (
  <>
    <SectionHeadingTwo as="h2">Role of ICAT Consultants</SectionHeadingTwo>

    <ServiceParagraph>
      Navigating the ICAT Certificate process can be complex, especially for new
      manufacturers or importers. This is where ICAT Consultants in India play a
      vital role.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Why You Need an ICAT Consultant</SectionHeadingThree>
    <ServiceList
      points={[
        "Regulatory requirements are technical and evolving",
        "Documentation can be extensive",
        "Testing procedures require precision",
      ]}
    />

    <SectionHeadingThree as="h3">Key Services Offered by ICAT Consultants</SectionHeadingThree>

    <SectionHeadingThree as="h3">1. Documentation Support</SectionHeadingThree>
    <ServiceList
      points={[
        "Application filing",
        "Technical document preparation",
        "Compliance mapping",
      ]}
    />

    <SectionHeadingThree as="h3">2. Product Assessment</SectionHeadingThree>
    <ServiceParagraph>
      Consultants evaluate your product before submission to identify compliance
      gaps.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Liaison with ICAT Authorities</SectionHeadingThree>
    <ServiceParagraph>
      They act as a bridge between your company and ICAT for faster approvals.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Testing Coordination</SectionHeadingThree>
    <ServiceList
      points={[
        "Scheduling tests",
        "Monitoring results",
        "Managing retesting if required",
      ]}
    />

    <SectionHeadingThree as="h3">5. Cost Optimization</SectionHeadingThree>
    <ServiceParagraph>
      Experienced consultants help reduce the ICAT Certification cost by avoiding
      delays and errors.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">6. End-to-End Certification Support</SectionHeadingThree>
    <ServiceParagraph>
      From application to final ICAT License, consultants handle everything.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">ICAT Certification Process</SectionHeadingTwo>

    <ServiceParagraph>
      Understanding the ICAT Certificate process is essential for smooth approval.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Application Submission</SectionHeadingThree>
    <ServiceParagraph>Submit an application with:</ServiceParagraph>
    <ServiceList
      points={[
        "Product details",
        "Technical specifications",
        "Manufacturer information",
      ]}
    />

    <SectionHeadingThree as="h3">Step 2: Document Verification</SectionHeadingThree>
    <ServiceParagraph>
      ICAT reviews all submitted documents for completeness and compliance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 3: Sample Testing</SectionHeadingThree>
    <ServiceParagraph>Products are tested in ICAT labs for:</ServiceParagraph>
    <ServiceList points={["Safety", "Performance", "Emissions"]} />

    <SectionHeadingThree as="h3">Step 4: Evaluation & Compliance Check</SectionHeadingThree>
    <ServiceParagraph>
      Test results are analyzed against regulatory standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 5: Grant of ICAT Certificate</SectionHeadingThree>
    <ServiceParagraph>
      Upon successful evaluation, the ICAT Certificate is issued.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">ICAT Certification Cost in India</SectionHeadingTwo>

    <ServiceParagraph>
      The ICAT Certification cost depends on several factors.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key Cost Factors</SectionHeadingThree>
    <ServiceList
      points={[
        "Type of product (vehicle/component)",
        "Number of variants",
        "Testing complexity",
        "Number of tests required",
        "Retesting (if applicable)",
      ]}
    />

    <SectionHeadingThree as="h3">Additional Costs</SectionHeadingThree>
    <ServiceList
      points={[
        "Documentation fees",
        "Consultant charges",
        "Sample transportation",
        "Retesting fees",
      ]}
    />

    <ServiceParagraph>
      Working with experienced ICAT Consultants in India can help optimize the
      ICAT Certification fee.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The ICAT Certificate is not just a regulatory requirement—it&apos;s a
      critical gateway to entering and succeeding in India&apos;s automotive
      market. Whether you are a manufacturer, importer, or supplier, obtaining
      ICAT Certification ensures compliance, safety, and credibility.
    </ServiceParagraph>

    <ServiceParagraph>
      However, the process can be complex and time-consuming without the right
      expertise. By understanding the ICAT Certificate process, cost structure,
      and scope—and by working with experienced ICAT Consultants in India—you
      can streamline approvals and accelerate your market entry.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "importance", label: "Importance", section: <ImportanceSection /> },
  { id: "scope", label: "Scope", section: <ScopeSection /> },
  {
    id: "icat-services",
    label: "Services",
    section: <ServicesSection />,
  },
  { id: "consultant", label: "Consultant", section: <ConsultantSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
];

const faqs = [
  {
    question: "What is ICAT Certification in India?",
    answer:
      "ICAT Certification in India is an approval issued by the International Centre for Automotive Technology to ensure that vehicles and automotive components comply with Indian safety, emission, and performance standards. It is mandatory for certain products before they can be sold or registered in India.",
  },
  {
    question: "Is ICAT Certificate mandatory for all automotive products?",
    answer:
      "No, the ICAT Certificate is not mandatory for all products, but it is required for many vehicles and components regulated under CMVR and AIS standards. Manufacturers and importers must verify whether their specific product category requires ICAT Certification.",
  },
  {
    question: "What is the ICAT Certificate process?",
    answer:
      "The ICAT Certificate process involves application submission, document verification, product testing, compliance evaluation, and final certification. Each step ensures that the product meets Indian automotive standards before approval is granted.",
  },
  {
    question: "How much does ICAT Certification cost in India?",
    answer:
      "The ICAT Certification cost varies depending on product type, testing requirements, and complexity. It can range from ₹50,000 for simple components to over ₹25 lakhs for full vehicle certification, including testing and documentation expenses.",
  },
  {
    question: "How long does it take to get ICAT Approval?",
    answer:
      "The timeline for ICAT Approval depends on product complexity and testing requirements. Typically, it takes 4 to 12 weeks, but complex vehicle certifications may take longer due to extensive testing and validation processes.",
  },
  {
    question: "Who needs ICAT Registration?",
    answer:
      "ICAT Registration is required for automotive manufacturers, importers, OEMs, and component suppliers who want to sell or distribute regulated automotive products in India. It ensures compliance with national safety and emission standards.",
  },
  {
    question: "What is the difference between ICAT Certificate and homologation?",
    answer:
      "The ICAT Certificate is a part of the homologation process. Homologation refers to the complete approval process of a vehicle, while the ICAT Certificate is the official document issued after successful testing and compliance verification.",
  },
  {
    question: "Can imported vehicles get ICAT Certification?",
    answer:
      "Yes, imported vehicles must undergo ICAT Certification to ensure they meet Indian regulatory standards. Without ICAT Approval, imported vehicles cannot be registered or legally sold in India.",
  },
  {
    question: "Why should I hire ICAT Consultants in India?",
    answer:
      "ICAT Consultants help simplify the certification process by managing documentation, coordinating testing, and ensuring compliance. They reduce delays, minimize errors, and help businesses obtain ICAT Approval faster and more efficiently.",
  },
  {
    question: "What documents are required for ICAT Certification?",
    answer:
      "Typical documents include technical specifications, product drawings, test reports, manufacturing details, and compliance declarations. The exact requirements vary based on the product type and certification scope.",
  },
];

const ICATCertificateinIndia = () => (
  <ServicePageLayout
    breadcrumbLabel="ICAT Certificate in India: Complete Information"
    hero={hero}
    intro={intro}
    sections={sections}
    faqs={faqs}
  />
);

export default ICATCertificateinIndia;
