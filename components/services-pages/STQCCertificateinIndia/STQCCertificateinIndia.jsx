import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: (
    <>
      <span className="relative">
        STQC
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certificate
    </>
  ),
  headingAs: "h1",
  description:
    "STQC Certificate under MeitY ensures IT and electronic products meet quality, safety, and security standards—essential for government projects and regulated digital systems in India.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      STQC Certificate in India: Complete Information
    </SectionHeadingTwo>

    <ServiceParagraph>
      Standardisation Testing and Quality Certification Directorate (STQC) operates
      under the Ministry of Electronics and Information Technology (MeitY).
    </ServiceParagraph>

    <ServiceParagraph>
      STQC Certification Services took lead and became the first Third Party
      Certification Agency of Indian origin in India in 1991 to offer QMS
      certification. Since then STQC Certification Services has broaden its scope
      of certification and is now providing Certification Service in QMS Product
      Certification/ISMS/ITSM/Website quality / smart card / Biometric
      devices/eProcurement along with a host of other schemes for the benefit of
      the industry. It caters to the need of third party certification for the
      products in line with National and International standards and schemes.
    </ServiceParagraph>
  </>
);

const FEATURES_TABLE_ROWS = [
  [
    "Standard Compliance",
    "Ensures products meet Indian and international quality standards",
  ],
  [
    "Product Testing",
    "Involves detailed testing of software, hardware, and IT systems",
  ],
  [
    "Security Assurance",
    "Focuses on cybersecurity and data protection requirements",
  ],
  [
    "Recognition in India",
    "Accepted and often required for government and regulated sectors",
  ],
  [
    "Third-Party Certification",
    "Provides independent and unbiased verification",
  ],
  ["Wide Coverage", "Covers IT products, electronics, and e-governance systems"],
  [
    "Market Acceptance",
    "Builds trust and helps foreign products enter the Indian market easily",
  ],
];

const COST_TABLE_ROWS = [
  [
    "Application Fees",
    "₹5,000 – ₹20,000",
    "Charges for submitting and processing the application",
  ],
  [
    "Testing Charges",
    "₹50,000 – ₹5,00,000+",
    "Depends on product type (software, hardware, cybersecurity testing)",
  ],
  [
    "STQC Audit / Inspection Fees",
    "₹20,000 – ₹1,00,000",
    "Cost of on-site audits or inspections (if required)",
  ],
  [
    "Consultancy Fees",
    "₹25,000 – ₹2,00,000 (optional)",
    "Fees for hiring experts STQC Certificate Consultant to handle documentation and process",
  ],
  [
    "STQC Certification Fees",
    "₹10,000 – ₹50,000",
    "Charges for issuing the final certificate",
  ],
  [
    "Renewal & Surveillance",
    "₹10,000 – ₹1,00,000 (periodic)",
    "Fees for renewal and follow-up audits",
  ],
];

const CONSULTANT_TABLE_ROWS = [
  [
    "Expert Guidance",
    "Provides in-depth knowledge of STQC rules and requirements",
  ],
  ["Faster Process", "Helps speed up STQC certification by avoiding delays"],
  [
    "Documentation Support",
    "Assists in preparing accurate and complete documents",
  ],
  ["Error Reduction", "Minimizes chances of rejection due to mistakes"],
  [
    "Coordination with Authorities",
    "Handles communication with Standardisation Testing and Quality Certification Directorate",
  ],
  [
    "Technical Assistance",
    "Supports in testing, compliance, and technical requirements",
  ],
  ["Time & Cost Saving", "Reduces overall effort and unnecessary expenses"],
  ["Better Approval Chances", "Increases success rate of STQC certification"],
];

const LABS_TABLE_ROWS = [
  [
    "1.",
    "M/s. Precise Testing Solution Pvt. Ltd.",
    "E-81, Second Floor, Sector 63, Noida (U.P.) www.precisetestingsolution.com",
    "STQC-SAB-SETL-3",
    "10/12/2027",
    "Certificate",
  ],
  [
    "2.",
    "M/s. AQM Technologies Pvt. Ltd.",
    "4th Floor, A Wing, 401 Raheja Plaza, LBS Road, Ghatkopar(W), Mumbai – 400086 www.aqmtechnologies.com",
    "STQC-SAB-SETL-10",
    "19/10/2026",
    "Certificate",
  ],
  [
    "3.",
    "M/s. AKS Information Technology Services Pvt. Ltd.",
    "B - 21, Sector 59, Noida – 201309 (UP) https://www.aksitservices.co.in/",
    "STQC-SAB-SETL-9",
    "05/09/2026",
    "Certificate",
  ],
  [
    "4.",
    "M/s. Information Technology Quality Certification and Research (ITQCR)",
    "C-202, Infotech Park, Tower No-8 CBD Belapur, Navi Mumbai – 400614 (Maharastra), India www.itqcr.com",
    "STQC-SAB-SETL-1",
    "11/09/2027",
    "Certificate",
  ],
  [
    "5.",
    "M/s. Quality Kiosk Technologies Pvt. Ltd.",
    "419 A, Rupa Solitaire, Sector 1, Millenium Business Park, Mahape, Navi Mumbai – 4000710, India https://qualitykiosk.com/",
    "STQC-SAB-SETL-4",
    "19/12/2027",
    "Certificate",
  ],
  [
    "6.",
    "M/s. Suma Soft Pvt. Ltd.",
    "Suma Centre, 2nd Floor, Opp. Himali Society, near Mangeshkar Hospital, Erandwane, Pune 411004 https://www.sumasoft.com/",
    "STQC-SAB-SETL-7",
    "25/12/2025",
    "Certificate",
  ],
  [
    "7.",
    "M/s Innovador Infotech Pvt. Ltd.",
    "Ahmamau, Amar Shaheed Path, Arjunganj, Lucknow, Uttar Pradesh, 226002 www.innovadorinfotech.com",
    "STQC-SAB-SETL-8",
    "12/04/2026",
    "Certificate",
  ],
  [
    "8.",
    "M/s Maverick Quality Advisory Services Private Limited",
    "123 Radhey Shyam Park, PO Sahibabad, District Ghaziabad, 201005, Uttar Pradesh, India www.mqasglobal.com",
    "STQC-SAB-SETL-11",
    "28/07/2027",
    "Certificate",
  ],
  [
    "9.",
    "M/s. Redinent Innovations Private Ltd.",
    "18, Novel MSR Park, Sy. No. 93/9, K. No. 731-2389, Varthur Main Road, Munnekolalu, Marathahalli, Bengaluru, Karnataka-560037 www.redinent.com",
    "STQC-SAB-SETL-12",
    "05/08/2027",
    "Certificate",
  ],
  [
    "10.",
    "M/s. Levithan Technologies Private Limited",
    "Shop No.374A, Bhoor Colony, Old Faridabad, Haryana, 121002 https://levithan.tech/",
    "STQC-SAB-SETL-13",
    "05/08/2027",
    "Certificate",
  ],
  [
    "11.",
    "M/s. CyberSRC Consultancy Pvt. Ltd.",
    "Unit 605, 6th Floor, World Trade Tower, Sector 16, Noida-201301 https://cybersrcc.com/",
    "STQC-SAB-SETL-14",
    "18-08-2028",
    "Certificate",
  ],
  [
    "12.",
    "M/s. ITOrizin Technology Solution Private Limited",
    "8/14, Sahid Nagar, Ground Floor, P.O.- Haltu, PS- Garfa, Kolkata- 700078, West Bengal. https://www.itorizin.com/",
    "STQC-SAB-SETL-15",
    "23-11-2028",
    "Certificate",
  ],
  [
    "13.",
    "M/s Terasoft Technologies Pvt. Ltd.",
    "Shivanand Vedantnagar Savedi Road, Ahmed Nagar, Maharastra 414003",
    "STQC-SAB-SETL-6",
    "04-08-2025",
    "",
  ],
];

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is Indian STQC Certificate?</SectionHeadingTwo>

    <ServiceParagraph>
      The STQC full form is Standardisation Testing and Quality Certification.
      Indian STQC is a certification system under the Ministry of Electronics and
      Information Technology, plays a crucial role in ensuring that electronic and
      IT products used in India are safe, reliable, and secure. It tests and
      certifies systems such as software, hardware, and e-governance platforms to
      make sure they meet required quality standards. This is important for
      protecting users from risks like data breaches, system failures, and fraud,
      especially as India is rapidly moving towards digital services.
    </ServiceParagraph>

    <ServiceParagraph>
      STQC Certificate is issued after a strict STQC Audit and testing procedure.
      It is also important for both Indian and foreign companies. For Indian
      businesses, its STQC certification builds trust and improves their
      competitiveness in national and international markets. For foreign
      companies, meeting STQC standards is often necessary to enter and operate
      in the Indian market, particularly in government projects. Overall, STQC
      Certification helps maintain quality, promotes fair competition, and ensures
      that technology used in India is dependable and secure.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Why is STQC certificate is Crucial?</SectionHeadingTwo>

    <ServiceParagraph>
      The STQC certificate, issued by the Standardisation Testing and Quality
      Certification Directorate under the Ministry of Electronics and Information
      Technology, is crucial because it ensures that electronic and IT products
      meet high standards of quality, safety, and security. In today&apos;s digital
      world, where systems handle sensitive data and essential services, this STQC
      certification helps reduce risks such as data breaches, cyber threats, and
      system failures. It builds trust among users by assuring them that the
      technology they are using is reliable and properly tested.
    </ServiceParagraph>

    <ServiceParagraph>
      It is also very important for organizations and businesses, especially those
      involved in government or large-scale digital projects. The STQC certificate
      not only improves credibility but also helps companies meet regulatory STQC
      requirements and compete in both domestic and international markets.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Key Importance:</SectionHeadingThree>
    <ServiceList
      points={[
        "Ensures quality, safety, and security of IT and electronic products",
        "Protects users from data breaches and cyber risks",
        "Builds trust and reliability in digital systems",
        "Often mandatory for government projects",
        "Enhances credibility of companies",
        "Helps in market expansion (India & abroad)",
      ]}
    />

    <ServiceParagraph>
      Overall, the STQC certificate plays a vital role in maintaining standards,
      protecting users, and supporting a secure digital ecosystem in India. It is
      often mandatory for government tenders, where STQC Approval is required.
    </ServiceParagraph>
  </>
);

const ScopeSection = () => (
  <>
    <SectionHeadingTwo as="h2">Scope of STQC Certificate?</SectionHeadingTwo>

    <ServiceParagraph>
      The scope of products covered under the Standardisation Testing and Quality
      Certification Directorate is quite broad, mainly focusing on electronics and
      information technology systems. It includes products and services that
      require quality, safety, and security assurance, especially those used in
      government and large-scale digital applications.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">STQC Certified Products:</SectionHeadingThree>
    <ServiceList
      points={[
        "Software applications (websites, mobile apps, e-governance systems)",
        "Cybersecurity products (encryption tools, security systems)",
        "IT hardware (computers, servers, networking devices)",
        "Electronic devices (smart devices, embedded systems)",
        "E-Governance projects (Aadhaar-related systems, digital service)",
        "Biometric systems (fingerprint, iris devices)",
        "Quality management systems (process certification in organizations)",
      ]}
    />

    <ServiceParagraph>
      Overall, STQC covers a wide range of products to ensure they meet STQC
      required standards of performance, security, and reliability.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Objectives or benefits of STQC Certification for Foreign Manufacturers under
      MeitY?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The STQC certification, provided by the Standardisation Testing and Quality
      Certification Directorate under the Ministry of Electronics and Information
      Technology, offers several important benefits for foreign manufacturers who
      want to enter or expand in the Indian market. It ensures that their products
      meet Indian standards for quality, safety, and security, making it easier to
      gain STQC approval and acceptance.
    </ServiceParagraph>

    <ServiceList
      points={[
        "Provides easy access to the Indian market",
        "Ensures compliance with Indian regulations and standards",
        "Builds trust and credibility among Indian customers",
        "Required for participation in government and e-governance projects",
        "Enhances product quality and reliability",
        "Helps in fair competition with Indian companies",
        "Supports global recognition by aligning with international standards",
      ]}
    />

    <ServiceParagraph>
      Overall, STQC certification helps foreign manufacturers operate smoothly in
      India while ensuring their products are safe, secure, and trusted. Although
      the STQC Certification Cost may be high initially, it provides long-term
      business benefits.
    </ServiceParagraph>
  </>
);

const FeaturesSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Key Features of STQC Certificate for Foreign Manufacturers
    </SectionHeadingTwo>

    <ServiceTable headers={["Feature", "Description"]} rows={FEATURES_TABLE_ROWS} />

    <ServiceParagraph>
      These features make the Standardisation Testing and Quality Certification
      Directorate certification valuable for foreign manufacturers looking to
      operate in India.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Common documentation mistakes to avoid while applying for STQC certificate
    </SectionHeadingTwo>

    <ServiceParagraph>
      When applying for an STQC certificate from the Standardisation Testing and
      Quality Certification Directorate under the Ministry of Electronics and
      Information Technology, many applicants face delays due to common
      documentation errors. Avoiding these mistakes can make the STQC Certification
      process much smoother and faster.
    </ServiceParagraph>

    <ServiceList
      points={[
        "Incomplete Application Form → Missing details, signatures, or incorrect information",
        "Incorrect Product Details → Mismatch in model numbers, specifications, or features",
        "Outdated or Invalid Test Reports → Submitting expired or non-accredited lab reports",
        "Missing Security Documents → Not providing required cybersecurity or data protection details",
        "Improper Documentation Format → Submitting documents in wrong format or without proper labelling",
        "Lack of Authorization (AIR) → Foreign manufacturers not providing valid AIR authorization letter",
        "Inconsistent Information → Differences between documents (e.g., company name, product specs)",
        "Incomplete User Manuals → Missing installation, usage, or safety instructions",
        "No Supporting Certifications → Not attaching relevant ISO or previous certifications (if available)",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Step-by-Step STQC Certification Process Under MeitY
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">1. Application Submission</SectionHeadingThree>
    <ServiceList
      points={[
        "The applicant submits a duly filled application form along with all required documents such as product details, company information, and certifications.",
      ]}
    />

    <SectionHeadingThree as="h3">2. Document Review</SectionHeadingThree>
    <ServiceList
      points={[
        "STQC reviews the submitted documents to check completeness, accuracy, and eligibility for certification.",
      ]}
    />

    <SectionHeadingThree as="h3">3. Product Testing & Evaluation</SectionHeadingThree>
    <ServiceList
      points={[
        "The product/system is tested in STQC-approved labs",
        "Includes performance, functionality, and security testing",
        "For software, source code and cybersecurity checks may be done",
      ]}
    />

    <SectionHeadingThree as="h3">4. Audit / Inspection</SectionHeadingThree>
    <ServiceList
      points={[
        "STQC may conduct on-site audits of the manufacturing facility or development process to verify quality practices and compliance.",
      ]}
    />

    <SectionHeadingThree as="h3">5. Compliance Verification</SectionHeadingThree>
    <ServiceList
      points={[
        "All test results and STQC audit findings are evaluated to ensure the product meets required Indian and international standards.",
      ]}
    />

    <SectionHeadingThree as="h3">6. Certification Grant</SectionHeadingThree>
    <ServiceList
      points={[
        "If the product passes all checks, the STQC certificate is issued confirming compliance.",
      ]}
    />

    <SectionHeadingThree as="h3">7. Surveillance & Renewal</SectionHeadingThree>
    <ServiceList
      points={[
        "Periodic checks or audits may be conducted",
        "Certification may require renewal after a certain period",
      ]}
    />

    <ServiceParagraph>
      The process ensures that products are thoroughly tested, verified, and
      monitored, making them safe, secure, and reliable for use in India. Which
      makes the product STQC certified product.
    </ServiceParagraph>
  </>
);

const CostSection = () => (
  <>
    <SectionHeadingTwo as="h2">STQC Certification Cost Structure Explained</SectionHeadingTwo>

    <ServiceTable
      headers={["STQC Cost Component", "Approximate Amount (INR)", "Description"]}
      rows={COST_TABLE_ROWS}
    />

    <SectionHeadingTwo as="h2">Why Choose a STQC Certification Consultant?</SectionHeadingTwo>

    <ServiceParagraph>
      Navigating the STQC Certification process can be complex, which is why many
      businesses hire STQC Consultants. Choosing experienced STQC Certification
      consultants can save time, reduce errors, and improve approval success rates.
    </ServiceParagraph>

    <ServiceTable headers={["Reason", "Description"]} rows={CONSULTANT_TABLE_ROWS} />

    <ServiceParagraph>
      These benefits make consultants valuable for companies applying under the
      Ministry of Electronics and Information Technology for STQC certification.
    </ServiceParagraph>
  </>
);

const LabsSection = () => (
  <>
    <SectionHeadingTwo as="h2">STQC Approved Test Labs</SectionHeadingTwo>

    <ServiceTable
      headers={[
        "S no.",
        "Name of SETL",
        "Location of SETL",
        "Certificate No.",
        "Certificate Valid upto",
        "Certificate",
      ]}
      rows={LABS_TABLE_ROWS}
    />

    <SectionHeadingThree as="h3">Major Locations in India:</SectionHeadingThree>
    <ServiceList
      points={["New Delhi", "Bengaluru", "Hyderabad", "Kolkata", "Chennai"]}
    />

    <SectionHeadingThree as="h3">Important Points:</SectionHeadingThree>
    <ServiceList
      points={[
        "Only STQC-approved labs are accepted for certification",
        "In some cases, recognized third-party labs may be accepted (if approved by STQC)",
        "Testing type depends on product (software, hardware, cybersecurity, etc.)",
      ]}
    />

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The STQC Certificate is a critical compliance requirement for organizations
      operating in India&apos;s digital and IT ecosystem. From ensuring
      cybersecurity to enabling participation in government projects, STQC
      Certification plays a vital role in establishing trust and credibility.
    </ServiceParagraph>

    <ServiceParagraph>
      While the process may seem complex, understanding the STQC Certification
      process, preparing for the STQC Audit, and leveraging expert STQC consultants
      can make the journey smooth and efficient.
    </ServiceParagraph>

    <ServiceParagraph>
      If your business aims to scale in regulated sectors, investing in an STQC
      License or STQC Certificate is not just a compliance step—it&apos;s a
      strategic decision for long-term growth and success.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "scope", label: "Scope", section: <ScopeSection /> },
  { id: "features", label: "Features", section: <FeaturesSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "cost", label: "Cost", section: <CostSection /> },
  { id: "labs", label: "Labs", section: <LabsSection /> },
];

const faqs = [
  {
    question: "What is STQC certificate under MeitY?",
    answer:
      "The STQC Certificate under the Ministry of Electronics and Information Technology is an official quality certification issued by the Standardisation Testing and Quality Certification Directorate. It confirms that a product, system, or service—especially in electronics and IT—has been tested and meets required quality, safety, and security standards set by the government. This STQC certification is commonly used for software applications, hardware devices, cybersecurity systems, and e-governance projects. The STQC certificate is not just a document—it is legal compliance proof. It is important because it ensures that technology is reliable and secure for users. It is often mandatory for government-related digital projects and helps organizations prove their credibility. For companies, having this certificate increases trust among customers and improves their chances of working with government and large organizations, while also helping them meet both national and international quality standards. The STQC Certification Requirements differ depending on the product category.",
  },
  {
    question: "What Is Indian STQC Certificate and Why It Matters?",
    answer:
      "The Indian STQC, officially known as the Standardisation Testing and Quality Certification Directorate, is a government body under the Ministry of Electronics and Information Technology. It is responsible for testing, certifying, and ensuring the quality and security of electronic and IT products in India. STQC checks whether software, hardware, and digital systems meet required national and international standards. STQC Certificate matters because it helps ensure that technology used in India is safe, reliable, and secure. It protects users from risks like data breaches and system failures while building trust in digital services. For businesses, it improves credibility and is often required for government projects. A STQC Certified Product assures users of quality, reliability, and compliance. It also helps both Indian and foreign companies meet standards and compete effectively in the market, supporting a strong and secure digital ecosystem in the country.",
  },
  {
    question: "Is STQC certification or STQC license mandatory for import to India?",
    answer:
      "The Standardisation Testing and Quality Certification Directorate (STQC certification), under the Ministry of Electronics and Information Technology, is not generally mandatory for all imports into India. Unlike certifications such as BIS Certificate, STQC Certificate does not focus on regulating imports of products. Instead, it is mainly concerned with ensuring the quality, security, and performance of IT systems, especially those used in government and e-governance projects. STQC certification becomes important only in specific cases, such as when imported products or systems are intended for government use, public digital services, or cybersecurity-sensitive applications. A STQC certificate is required to clear customs and demonstrate compliance. Without STQC Approval, imported products may be rejected. The STQC audit process ensures that imported goods meet Indian safety and quality standards. It applies equally to both Indian and foreign companies, depending on how and where the product is used. In simple terms, STQC certification is not required just for importing a product, but it may be necessary if the product is used in regulated or high-security environments in India.",
  },
  {
    question: "Is STQC Certification required only for Imports?",
    answer:
      "No, STQC certification is not required only for imports. The Standardisation Testing and Quality Certification Directorate (STQC), under the Ministry of Electronics and Information Technology, applies to both domestic (Indian) and foreign products and systems. STQC certification is mainly required for e-Governance projects (government software, portals, digital services), IT systems and applications used in public services, and cybersecurity and data-sensitive systems.",
  },
  {
    question: "Role of Authorized Indian Representative (AIR) in STQC Certification.",
    answer:
      "The Authorized Indian Representative (AIR) acts as a local contact person between STQC and the foreign manufacturer, handles application submission and documentation in India, coordinates product testing, audits, and the certification process, ensures compliance with Indian standards and regulations, is responsible for communication, updates, and issue resolution, and may be legally accountable for compliance and post-certification matters.",
  },
  {
    question: "Post STQC Certification Surveillance and Compliance Requirements.",
    answer:
      "Organizations are also required to maintain consistent quality, keep proper records, and inform STQC about any changes in product design, software, or processes. They must address customer complaints and ensure timely renewal of certification before expiry. Failure to comply with these STQC requirements can lead to suspension or cancellation of the certificate, along with loss of credibility and restrictions in the market.",
  },
  {
    question: "Who needs STQC Certification?",
    answer:
      "Government project vendors working on e-Governance or public sector IT systems, software developers especially those building secure or large-scale applications, IT service providers offering digital platforms or system integration, cybersecurity product providers dealing with data protection and security tools, electronics and hardware manufacturers for specific regulated devices, and foreign manufacturers entering Indian government or regulated IT sectors. Any company (Indian or foreign) whose products or services are used in government, digital infrastructure, or require high security and quality standards may need STQC certification.",
  },
  {
    question: "How much does STQC Certification cost?",
    answer:
      "STQC Certification cost depends on factors like system complexity, testing scope, and audit requirements. Application fees typically range from ₹5,000 to ₹20,000, testing charges from ₹50,000 to ₹5,00,000+, STQC audit or inspection fees from ₹20,000 to ₹1,00,000, certification fees from ₹10,000 to ₹50,000, and renewal and surveillance fees from ₹10,000 to ₹1,00,000 periodically. Optional consultancy fees may range from ₹25,000 to ₹2,00,000. There is no fixed price, and costs vary based on project size, security testing needs, and number of audit cycles.",
  },
  {
    question: "What is the STQC Certification process?",
    answer:
      "The STQC Certification process includes application submission with product and company details, document review by STQC for completeness and eligibility, product testing and evaluation at STQC-approved labs including performance and security testing, on-site audit or inspection if required, compliance verification against Indian and international standards, certification grant upon successful evaluation, and periodic surveillance and renewal to maintain certification validity.",
  },
  {
    question: "What is STQC Approval meaning?",
    answer:
      "STQC Approval means that a product or system has been tested and validated by STQC authorities and meets required quality, security, and performance standards, making it eligible for government and regulated use. It serves as official confirmation that the technology is reliable, secure, and compliant with MeitY requirements.",
  },
];

const STQCCertificateinIndia = () => (
  <ServicePageLayout
    breadcrumbLabel="STQC Certificate in India: Complete Information"
    hero={hero}
    intro={intro}
    sections={sections}
    faqs={faqs}
  />
);

export default STQCCertificateinIndia;
