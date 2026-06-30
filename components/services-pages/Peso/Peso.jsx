import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const labelClassName =
  "font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3";

const hero = {
  heading: (
    <>
      <span className="relative">
        PESO Certification
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      for Hazardous Goods
    </>
  ),
  headingAs: "h1",
  description:
    "PESO certification ensures safety compliance for hazardous materials like petroleum, gas, and explosives.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">PESO Certification: Safety First</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      PESO ensures safety in handling petroleum, gases, and explosives.
    </SectionHeadingThree>

    <ServiceParagraph>
      The Petroleum and Explosives Safety Organization, abbreviated as PESO,
      is a mid-level Nodal organization founded in September 1898. This
      organization is mainly responsible for managing and administering risky
      substances such as bio-chemicals, gas cylinders, petroleum, and
      explosives that possess their own significance and risk to several human
      lives.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      PESO Divisions &amp; Safety Regulations
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Explosive Act 1884",
        "Petroleum Act 1934 & Rules 2002",
        "Cinematographic Film Rules 1948",
        "Inflammable Substance Act 1952",
        "Calcium Carbide Rules 1987",
        "Ammonium Nitrate Rules 1987",
        "Gas Cylinders Rules 2002",
      ]}
    />

    <ServiceParagraph>
      We are all aware of how dangerous petroleum and compressed gases are and
      how even a single ignite coming into contact with them can cause a
      catastrophe that puts human life in danger. Hazards associated with
      compressed gases are combustible, poisonous, oxidizing, and corrosive.
    </ServiceParagraph>

    <ServiceParagraph>
      For more than a century, the PESO has achieved a legendary grade as an
      organization of distinction in the regions connected to risky material
      safety in refining/ manufacturing, storage, handling, transportation,
      and usage. Today, the PESO organization works on various topics such as
      petroleum, compressed gases, explosives, gas cylinders, cross-country
      pipelines, Ammonium Nitrate, Flame Proof electric fittings, and others.
    </ServiceParagraph>
  </>
);

const ProductsSection = () => (
  <>
    <SectionHeadingTwo as="h2">Products Covered by PESO</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      PESO certification is required for hazardous equipment.
    </SectionHeadingThree>

    <ServiceParagraph>
      Here is a comprehensive list of the products that require certification.
      A PESO registration is necessary for electrical equipment that must
      endure extremely corrosive seawater or extremely hot situations in
      addition to the aforementioned products. Purely mechanical parts that
      are employed in hazardous regions in India must also get PESO
      certification.
    </ServiceParagraph>

    <ServiceParagraph>
      For explosion-proof products, one may often adhere to a pretty
      straightforward rule: PESO is required for all items that require either
      IECEx or ATEX certification.
    </ServiceParagraph>
  </>
);

const LicenseesSection = () => (
  <>
    <SectionHeadingTwo as="h2">Process of PESO Certification</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      PESO certifies products for three years through review and audits.
    </SectionHeadingThree>

    <ServiceParagraph>
      <span className={labelClassName}>Documentation</span>
      Prepare the application with the necessary paperwork, including the test
      results and ATEX/IECEx certificates. Test results must be at least two
      years old. Equipment that has undergone thorough testing and been given
      the all-clear to operate safely in an explosive or hazardous environment
      is given an ATEX certificate. IECEx is a certification to Standards for
      equipment used in explosive or dangerous environments.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Submission of Application</span>
      Submit your application to the PESO authorities together with the
      necessary business information, such as sales figures, client lists, and
      client testimonials.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Scrutiny</span>
      The paperwork and application are reviewed by PESO officials.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Audit</span>
      Only specific products, such as pressure vessels, are subject to factory
      audits.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>PESO Certification</span>
      he PESO Certificate will be issued if PESO personnel are satisfied with
      the supporting documentation and test results.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>
        Licence to Authorized Indian Representatives
      </span>
      Additionally, the Authorized Indian Representative receives a license.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Please Note</span>
      Once the PESO license has been approved, the product may be imported.
      The authorities typically accept test reports that have received
      international recognition, such as IECEx or ATEX. In any case, the
      products must be assessed in India if you don&apos;t have these test
      findings.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>TAT</span>
      90 - 100 Days
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>License Validity</span>
      After three years have passed, the license must be renewed. Static
      pressure vessel PESO licenses are only good for three years before they
      need to be renewed.
    </ServiceParagraph>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo as="h2">PESO License: Required Documents</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Required: Application, licenses, certificates, test reports, and sales
      data.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">
      PESO License Requirements: Essential Documents &amp; Certifications
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Application materials (application form, contract with AIR for min. 5 years, technical competence proof of AIR, etc.)",
        "Business licenses for plants, manufacturers, and AIR",
        "Global Organization Chart",
        "Certificates for ATEX/IECEx products",
        "Reports on Tests, QAR/QAN",
        "Profile of the manufacturer",
        "A list of testing and production equipment",
        "Certified by ISO",
        "Production facility video",
        "Commercial data containing sales data for the previous three years, a list of Indian clients, and installation details for hazardous areas, such as the equipment's intended use and installation location.",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      PESO Certification: Meaning &amp; Importance
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      PESO: Ensuring Explosives &amp; Petroleum Safety
    </SectionHeadingThree>

    <ServiceParagraph>
      The Chief Controller of Explosives (CCOE) is another name for the
      Petroleum and Explosive Safety Organization (PESO). The safety
      requirements for the manufacture, importers, exporters, sellers,
      storage, transit, and handling of explosives, combustible materials,
      pressure vessels, petroleum, and compressed gases are managed,
      controlled, and looked after by this organization. Additionally, it
      controls and manages Indian petrol stations. The Department for
      Promotion of Industry and Internal Trade and the Ministry of Commerce
      and Industry is in charge of PESO, an independent regulatory authority.
    </ServiceParagraph>

    <ServiceParagraph>
      The oil and gas industry&apos;s mandatory approval mechanism for products
      that deal with gases, are used in the oil industry, or must withstand
      severely corrosive environments is described in PESO Certification.
      Nagpur, Maharashtra, is home to PESO&apos;s headquarters.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Key SMPV (U) Rules, 1981 for PESO Certification
    </SectionHeadingThree>

    <ServiceList
      points={[
        "The Chief Controller must approve all 1981 drawings, designs, specifications, and codes. They are responsible for tests, examinations, inspections, and certifications of installations and transport vehicles.",
        "District authorities must issue no-objection certificates or notify applicants of refusal within two months, stating reasons as per Rule 47(7).",
        "General Exemptions - Vessels in processing facilities are exempt from regulations if they perform unit operations and contain compressed gas used within the same plant.",
        "Children aged under 18 and intoxicated persons is prohibited",
        "Fires, lights, and smoking, etc., at any time in proximity to the places are prohibited where any compressed gas is stored, transported or handled in a vessel.",
        "Person in charge of supervision and operation on the licensed property must be knowledgeable about the machinery and should be trained enough in handling hazardous materials.",
        "Vessels except when they are opened for the purposes of filling, cleaning, or making them gas-free, all empty vessels carrying combustible or toxic gases must be kept securely closed until they have been cleaned or released of the gas, as the case may be.",
        "Any alterations to machines or pressure vessels must be inspected before reuse.",
      ]}
    />

    <SectionHeadingThree as="h3">
      Limitation on Manufacturer, Filling and Import
    </SectionHeadingThree>

    <ServiceList
      points={[
        "No one is allowed to transport or fill a vessel with compressed gas unless it complies with the types, standards, or codes listed in Rule 12.",
        "No vessel permitted under sub-rule (1) may be produced without prior approval from the Chief Controller.",
        "No one may import a vessel without prior consent from the Chief Controller.",
      ]}
    />

    <SectionHeadingThree as="h3">
      Restraint on Delivery &amp; Dispatch
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Compressed gas loaded into a vessel may only be sent to the owner of a valid storage permit, a port administration, or a railroad administration.",
        "The quantity of compressed gas delivered must not exceed the amount allowed by the recipient's license.",
      ]}
    />
  </>
);

const StakeholdersSection = () => (
  <>
    <SectionHeadingTwo as="h2">PESO Licensing &amp; Stakeholders</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      PESO certifies petroleum, gas, and explosives with one-day registration.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">
      PESO covers these licensed businesses:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Petroleum / Gas Cylinders / SMPV (U)",
        "Explosives / Ammonium Nitrate",
        "Degassing and Purging under SMPV (U)",
        "Gas Cylinder Testing Stations",
        "Fabrication Shops",
      ]}
    />

    <ServiceParagraph>
      <span className={labelClassName}>Timeline</span>
      PESO registration process will take 1 day after the documents are
      submitted to us.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Validity</span>
      Validity of PESO online registration is perpetual i.e. no end date and
      requires no renewal.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Note</span>
      After the registration is completed, a unique file number is generated,
      which has to be mentioned on the product / packaging, in case of
      registration there is no certificate
    </ServiceParagraph>
  </>
);

const RulesSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      SMPV (Unfired) Rules for PESO Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      SMPV PESO Certification: High-pressure storage, 6-8 weeks, 5-year
      validity.
    </SectionHeadingThree>

    <ServiceParagraph>
      The Static and Mobile Pressure Vessels are referred to as SMPVs. Static
      pressure containers are made to store linear loads with mass and volume
      variations that significantly exceed the features of the material&apos;s
      ambient pressure. This type of fabrication is justified by safety
      considerations, with the prevention of contaminating pure contents
      coming in second. The purpose of pressure vessels is to store liquids,
      gases, or vapors under high pressure.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Timeline</span>
      Approx 6-8 weeks after submission of application.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={labelClassName}>Validity</span>
      It is granted for 5 years initially and has to be renewed after that by
      paying the government fees.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Note:</SectionHeadingThree>

    <ServiceList
      points={[
        "In case of PESO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
        "License number mentioned on the CDSCO registration certificate has to be mentioned on the products/packaging.",
        "Test license is also required in case of Indian manufacturers.",
      ]}
    />
  </>
);

const ConsultancySection = () => (
  <>
    <SectionHeadingTwo as="h2">
      PESO License Experts - Sun certifications
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      We make PESO registration easy with expert support.
    </SectionHeadingThree>

    <ServiceParagraph>
      As PESO registration certifications, our job is to ensure that the
      tiring procedures that we have listed above become a cake-walk for you.
      Right from the beginning i.e. from the stage of collection of documents
      from the foreign manufacturers or preparation of documents for the
      Indian manufacturer and following up with the department for grant of
      license is under our scope.
    </ServiceParagraph>

    <ServiceParagraph>
      We are one of the most experienced PESO certifications in the field of
      medical products,we provide apex quality of services possible to all our
      national and international clients.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "products", label: "Products", section: <ProductsSection /> },
  { id: "licensees", label: "Licensees", section: <LicenseesSection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  {
    id: "stakeholders",
    label: "Stakeholders",
    section: <StakeholdersSection />,
  },
  { id: "rules", label: "Rules", section: <RulesSection /> },
  {
    id: "consultancy",
    label: "Consultancy",
    section: <ConsultancySection />,
  },
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

const Peso = () => (
  <ServicePageLayout
    breadcrumbLabel="PESO Certification for Hazardous Goods"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default Peso;
