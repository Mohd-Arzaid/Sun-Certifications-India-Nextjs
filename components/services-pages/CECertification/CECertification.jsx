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
        CE Mark
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certification
    </>
  ),
  headingAs: "h1",
  description:
    "CE Marking certifies product safety, quality, and compliance for goods sold in the European Economic Area (EEA).",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo>CE Marking Certification Overview</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CE marking shows a product meets basic EU safety and quality standards.
    </SectionHeadingThree>

    <ServiceParagraph>
      Getting a certified product or safe product is a right and wish of every
      customer around the world. CE is kind of certification mark on the
      products that are related to health, safety, and environment. It is
      originated in Europe. In Europe, there is a regulating authority called
      the EEA that means the European Economic Area. The EEA authenticates the
      quality of their listed products. Products located within the European
      Economic Area have to mandatorily obtain CE marking certification.
      Importers, as well as the manufacturer of the goods, need to ascertain
      that EC marked goods are up to the standards. Today, in this article we
      will tell you about the basic of CE Marking Certification, How to get CE
      marking Certification, and the kinds of the CE Marking Certification.
      The EEA is bundled with European Countries like Iceland, Liechtenstein,
      and Norway. It is also considered as the EEA single market. CE stands
      for the &quot;Conformite Europeenne.&quot; The literal meaning of the CE is the
      European Conformity but later it changed it to CE mark in 1993. The
      products which are exported to EEA by the other countries can also have
      the CE marking as the EEA standards is a sign of guarantee.
    </ServiceParagraph>
  </>
);

const ServicesSection = () => (
  <>
    <SectionHeadingTwo>
      Services Provided Under CE Mark Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CE marking ensures trusted, globally accepted product standards.
    </SectionHeadingThree>

    <ServiceParagraph>
      The Logo has a substantial value of a standard on which people trusts
      and to make that trust more strong the CE technical experts is matching
      step by step with the changing trends of different products and making
      it more competitive to pass the level. They also act as an advisory to
      the manufacturers. CE is a standard of the international standard
      because many products are sold outside the EEA.
    </ServiceParagraph>
  </>
);

const ClassificationSection = () => (
  <>
    <SectionHeadingTwo>CE Marking and ISO Certification Service</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CE and ISO marks boost product trust and quality.
    </SectionHeadingThree>

    <ServiceParagraph>
      The CE Marking is one of the finest and most acknowledged standards that
      is brought forth by EEA and permits the manufacturer to use the mark to
      lighten the standard. Now, ISO Certification is an International non-
      government organization that independently controls or manages the
      quality management system with some standard. The ISO mark silently
      changes the mind of the customer from not trusting a product to trust
      the product after the ISO mark. It also increases the value and trust in
      the product. There is no mandatory or necessary rope attached to the
      product to get this certification but it just makes a product of minimum
      standard to a high standard after theISO mark
    </ServiceParagraph>
  </>
);

const RegistrationSection = () => (
  <>
    <SectionHeadingTwo>CDSCO Device Classification</SectionHeadingTwo>

    <ServiceParagraph>
      The CE Marking is one of the finest and most acknowledged standards that
      is brought forth by EEA and permits the manufacturer to use the mark to
      lighten the standard. Now, ISO Certification is an International non-
      government organization that independently controls or manages the
      quality management system with some standard. The ISO mark silently
      changes the mind of the customer from not trusting a product to trust
      the product after the ISO mark. It also increases the value and trust in
      the product. There is no mandatory or necessary rope attached to the
      product to get this certification but it just makes a product of minimum
      standard to a high standard after theISO mark
    </ServiceParagraph>
  </>
);

const NecessitySection = () => (
  <>
    <SectionHeadingTwo>Why CE Rating is Required?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CE certificate proves product energy efficiency and boosts trust.
    </SectionHeadingThree>

    <ServiceParagraph>
      The European Commission lifts the curtain from the harmonized conformity
      with the EU EMC that puts all their attention in checking the quality,
      safety and non- health hazardous substance in the products. The EC made
      CE marking mandatory stamp for the production of electronic and
      electrical equipment that is sold in EEA. This made a particular
      standard of the above equipment safe and ready to use and make the
      product less harmful to the mankind of the users.
    </ServiceParagraph>
  </>
);

const ComplianceSection = () => (
  <>
    <SectionHeadingTwo>Why CE Rating is Required?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CE certificate proves product energy efficiency and boosts trust.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3" className="mt-2">
      Mandatory CE-Labeled Products
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Energy Compliance",
        "Efficiency Rating",
        "Power Certification",
        "Star Labeling",
        "Energy Approval",
        "Eco Compliance",
        "Performance Rating",
        "Sustainability Mark",
        "Green Certification",
        "Energy Validation",
      ]}
    />

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
        Validity
      </span>
      Validity of CDSCO online registration is perpetual i.e. no end date and
      requires no renewal.
      <br />
      <br />
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
        Note
      </span>
      After the registration is completed, a unique file number is generated,
      which has to be mentioned on the product / packaging, in case of
      registration there is no certificate
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "services", label: "Services", section: <ServicesSection /> },
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

const CECertification = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="CE Mark Certification"
      hero={hero}
      sections={sections}
      faqs={faqs}
    />
  );
};

export default CECertification;
