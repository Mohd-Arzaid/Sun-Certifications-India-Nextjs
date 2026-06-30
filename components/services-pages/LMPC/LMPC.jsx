import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const LMPC_IMAGE = "/services-images/lmpc-img.jpg";

const emphasisClassName =
  "font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]";

const hero = {
  heading: (
    <>
      <span className="relative">
        LMPC Certificate Guide for
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Importers and Manufacturers
    </>
  ),
  headingAs: "h1",
  description:
    "Regulates pre-packaged goods for importers, manufacturers, and packers under Legal Metrology Act.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      What is LMPC Certification? A Complete Overview
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">Mandatory for labeling &amp; fair trade.</SectionHeadingThree>

    <ServiceParagraph>
      In India, the import, sale, and distribution of pre-packaged goods are
      all governed by the Legal Metrology Act 2009 and{" "}
      <span className={emphasisClassName}>
        Legal Metrology Packaged Commodities (LMPC) Rules
      </span>{" "}
      , 2011 or LMPC certificate. A pre-packaged product is any item assembled
      in advance and packaged without any customization. LMPC certification
      guidelines regulates the exchange of items distributed or sold by
      weight, measure, or number. The Act aims to encourage fair trade
      practices and safeguard consumer rights by establishing stringent rules
      and regulations, notably for pre-packaged goods.{" "}
      <span className={emphasisClassName}>
        LMPC certificate&apos;s full form is Legal Metrology Packaged Commodities.
      </span>{" "}
      Which clearly indicates that LMPC license is applicable on all types of
      packed items sold in the market and regulates the details mentioned on
      prouduct&apos;s MRP Label.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={emphasisClassName}>LMPC product list:</span>{" "}
      Pre-packaged products include, for instance, baby food, gasoline, food
      items, paint, bagged cement, cables, wires, chemicals, wool, electrical
      and electronic products, etc.
    </ServiceParagraph>

    <ServiceParagraph>
      Trade conflicts are eliminated when the measurement is subject to
      regulatory monitoring. For instance, if a customer purchases 1 kilogram
      of lentils, they should receive exactly that amount and nothing less.{" "}
      <span className={emphasisClassName}>
        Legal metrology or a product containing LMPC certificate
      </span>{" "}
      also ensures catering to international standards using fundamental
      measuring tools.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className={emphasisClassName}>
        LMPC certificate registration is generated under rule 27
      </span>{" "}
      of the Legal Metrology Packed Commodities ( LMPC ) Rules,2011.It ensures
      that the product has adequate details on its MRP label to educate the
      consumers about the product they are willing to purchase.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      It is granted in three categories, namely:
    </SectionHeadingThree>

    <ServiceList
      points={["Importers", "Manufacturer and Packer", "Packer"]}
    />

    <ServiceImage
      src={LMPC_IMAGE}
      alt="LMPC certification process and documentation requirements for importers and manufacturers"
      title="LMPC certification process and documentation requirements for importers and manufacturers"
      className="w-full md:max-w-[400px]"
    />
  </>
);

const ImportersSection = () => (
  <>
    <SectionHeadingTwo as="h2">LMPC Certificate for Importers</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Required for importers, manufacturers &amp; packers, issued via NSWS, valid
      PAN India.
    </SectionHeadingThree>

    <ServiceParagraph>
      LMPC registration is applicable to traders who intend to import,{" "}
      <span className={emphasisClassName}>
        manufacturer and re-packers of pre-packaged goods
      </span>{" "}
      for sale or distribution. They have to apply for LMPC certificate online
      at the National Single Window System or NSWS.If the application for LMPC
      registration is approved, the director/controller of legal metrology
      (the registering authority) will register the importer/manufacturer and
      packer/packer&apos;s name and address and issue a LMPC certificate.
    </ServiceParagraph>

    <ServiceParagraph>
      LMPC certificate validity is perpetual i.e. it does not have any end
      date and it is neither mentioned on the certificate received.
    </ServiceParagraph>

    <ServiceParagraph>
      Earlier the application was to be submitted to the{" "}
      <span className={emphasisClassName}>
        state legal metrology department,
      </span>{" "}
      now the same has to be applied through LMPC registration online portal
      named NSWS, and the LMPC certificate issued is valid for sales PAN
      India.
    </ServiceParagraph>

    <ServiceParagraph>
      This transition to an online process for obtaining LMPC certificate has
      made it more efficient and transparent, reducing the turnaround time to
      for the LMPC licence .{" "}
      <span className={emphasisClassName}>
        The above details are the same for importers/ manufacturers
      </span>{" "}
      and packers too. Once the LMPC registration is completed and LMPC
      certificate is released businesses are free to import, manufacture, or pack their pre-packaged goods without
      facing any legal obstacles in the Indian market from Legal Metrology
      Department.
    </ServiceParagraph>
  </>
);

const LabelingSection = () => (
  <>
    <SectionHeadingTwo as="h2">Legal Metrology Labeling Requirements</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Requires manufacturer details, MRP, weight, origin &amp; contact info for
      compliance.
    </SectionHeadingThree>

    <ServiceParagraph>
      To ensure that the supplier has enough details on MRP label that is
      required to educate the consumer about the product, Legal metrology
      guidelines helps maintain transparency and trust between the supplier
      and the consumer. Proper labelling is also essential for meeting the
      requirements of the LMPC certificate, ensuring that the product complies
      with all legal metrology regulations, below are the guidelines on
      details to be mentioned after the manufacturer/importer/packer obtains
      their respective LMPC certificate:
    </ServiceParagraph>

    <ServiceParagraph>
      1.Name and address of the manufacturer / importer / packer: This ensures
      traceability and accountability of the product&apos;s origin and responsible
      party. Including this information is mandatory under the LMPC
      registration guidelines.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Mandatory Details for LMPC Product Labeling
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Name and address of the manufacturer/importer/packer: Ensures traceability and accountability of the product's origin and responsible party. Mandatory under LMPC registration guidelines.",
        "Name of goods in the package.",
        "Country of import (in case of importer): Required as per LMPC license rules to provide transparency about the product's origin.",
        "Total quantity with respect to standard units of weight or measurement (e.g., Kg, meters): Helps avoid quantity-related disputes and ensures compliance with the Legal Metrology Act.",
        "Date of import (in case of importer).",
        "Manufacturing date.",
        "Maximum Retail Price (MRP): Rounded-up decimals, inclusive of all taxes.",
        "Dimension of goods (if applicable).",
        "Email ID and phone number of a concerned person or office for consumer complaints.",
      ]}
    />

    <ServiceParagraph>
      The declaration must adhere to a predetermined structure in order to be
      presented on the box, whether it is printed in Hindi or English.
    </ServiceParagraph>

    <ServiceParagraph>
      The Legal Metrology Packaged Commodity Rules include fines of up to Rs.
      25,000 for violations depending upon the nature of the product and the
      firm committing the violation of law. Additionally, a late fee will be
      imposed if an importer requests for an LMPC certificate more than 90
      days after beginning imports.
    </ServiceParagraph>
  </>
);

const ApplicationSection = () => (
  <>
    <SectionHeadingTwo as="h2">How to apply for LMPC certificate?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Apply via NSWS with required documents &amp; fees.
    </SectionHeadingThree>

    <ServiceParagraph>
      To obtain an LMPC certificate online, the application has to be
      submitted on the National Single Window System ( NSWS ) with the
      requisite fee and the documents related to the products and the firm
      importing / manufacturing / packing those products.
    </ServiceParagraph>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo as="h2">Required Documents for LMPC Certification</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Requires IEC, GST, ID proof, Aadhaar, label sample &amp; digital signature.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">
      Key Documents Required for LMPC Certification
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Importer Exporter Code (IEC) (for importers only)",
        "GST Registration Certificate",
        "Proof of Identity & Address",
        "Aadhaar Number of applicant/authorized signatory",
        "Sample of declaration (label) to be placed on the commodity",
        "Registered partnership deed (for partnership firm) / Memorandum of Articles (for company)",
        "Digital signature of the applicant",
      ]}
    />

    <ServiceParagraph>
      To get the exact details , kindly contact our experts on the details as
      below:
    </ServiceParagraph>

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Email
      </span>
      info@sunconsultants.co.in
    </ServiceParagraph>

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Phone
      </span>
      +91-8010505057
    </ServiceParagraph>
  </>
);

const ProcedureSection = () => (
  <>
    <SectionHeadingTwo as="h2">How to Apply for an LMPC Certificate?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Apply via NSWS, submit documents, pay fees, clear queries &amp; get
      registration.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">
      Step-by-Step Process to Get LMPC Certification
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Preparation of documents as per the guidelines",
        "Making the label that has all the information as per the rules",
        "Creation of login credentials on NSWS portal",
        "Submission of the application",
        "Payment of government fees",
        "Clearing of queries (if any) raised by the department",
        "Grant of LMPC online registration",
      ]}
    />

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Note
      </span>
      1.) After the LMPC certification is complete, a registration number is
      generated which may also be mentioned on the product&apos;s MRP label or
      packaging.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Note
      </span>
      2.) In case of imports, the LMPC certificate also has to be submitted
      with the Bill of Entry ( BOE ) to custom officials.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Note
      </span>
      3.) Timeline : If you apply through us, we can get the registration done
      within 2 working days, irrespective of importer / manufacturer / packer.
    </ServiceParagraph>

    <ServiceParagraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Note
      </span>
      4.) No LMPC Mark is to be present on the product.
    </ServiceParagraph>
  </>
);

const ImportanceSection = () => (
  <>
    <SectionHeadingTwo as="h2">Why Importers Need an LMPC Certificate?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Without an LMPC certificate, customs may seize imports. Register to sell
      hassle-free in India.
    </SectionHeadingThree>

    <ServiceParagraph>
      If you don&apos;t have an LMPC certificate or don&apos;t follow the legal
      metrology guidelines, customs may hold your imported products or
      penalize the products manufacturer/packed in India. A customs seizure
      might cause delays, costs, and other problems, so be careful to register
      as an importer before your products arrive in India.
    </ServiceParagraph>

    <ServiceParagraph>
      After completion of LMPC registration and complying with the norms of
      MRP label, the importer / manufacturer / packer can sell the products in
      the Indian market without any hassle.
    </ServiceParagraph>
  </>
);

const PenaltiesSection = () => (
  <>
    <SectionHeadingTwo as="h2">Rule Violations &amp; Penalties</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Penalties range from ₹4,000 to ₹25,000; repeat violations may lead to
      jail.
    </SectionHeadingThree>

    <ServiceParagraph>
      Provisions of different combinations of penalties, depending upon the
      extent of violations have been laid down by the department, ranging from
      INR 4,000 - 25,000 or provisions of imprisonment are also present on
      subsequent violation.
    </ServiceParagraph>
  </>
);

const CertificationsSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      LMPC Certifications&apos;s Role in Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      An LMPC Certifications ensures quick and error-free registration.
    </SectionHeadingThree>

    <ServiceParagraph>
      To obtain LMPC registration services , the applicant can hire a LMPC
      agent to apply on the behalf of their company. LMPC Certifications help
      in getting the work done error-free, at a faster pace with more
      accuracy. At Sun Certifications, we provide LMPC certificate consultancy
      services to all importers/manufacturers/packers.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "importers", label: "Importers", section: <ImportersSection /> },
  { id: "labeling", label: "Labeling", section: <LabelingSection /> },
  { id: "application", label: "Application", section: <ApplicationSection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  { id: "procedure", label: "Procedure", section: <ProcedureSection /> },
  { id: "importance", label: "Importance", section: <ImportanceSection /> },
  { id: "penalties", label: "Penalties", section: <PenaltiesSection /> },
  {
    id: "certifications",
    label: "Certifications",
    section: <CertificationsSection />,
  },
];

const faqs = [
  {
    question: "What is LMPC Certification?",
    answer:
      "LMPC Certification implies the acceptance of Legal Metrology Packaged Commodities Rules, 2011 in India. It is applicable to companies that manufacture, pack, or import commodities that are pre-packed for sale and/or distribution. This certifies that a commodity meets the legal requirements in terms of its labeling, the accompanying declarations, and the measurement of the quantity of the commodity.",
  },
  {
    question: "Why is LMPC Certification Necessary?",
    answerHtml: `LMPC Certification is a necessity for the following reasons:<br /><br /><strong>Legal Compliance:</strong> It constitutes a legal requirement of the Legal Metrology Act, 2009 for any business that deals in pre-packed commodities.<br /><br /><strong>Consumer Protection:</strong> Guarantees the customer the right to obtain the full and comprehensive information concerning a commodity and eliminates the risks of less than full disclosure.<br /><br /><strong>Fair Competitive Environment:</strong> Equalizes the playing field for all businesses by harmonizing the standards for labeling and measurement.<br /><br /><strong>Uncomplicated Trade and/or Commerce:</strong> When LMPC rules are adhered to, trade is easily carried out and the LMPC rules are valuable in the reduction of time spent in customs control.`,
  },
  {
    question: "Who requires LMPC Certification?",
    answerHtml: `LMPC Certification is applicable to:<br /><br />• Manufacturers of completely pre-packed commodities<br />• Packers who pack products for sale or distribution<br />• Importers who bring into India pre-packed products`,
  },
  {
    question: "What Legislation Applies to LMPC Import License Certification?",
    answer:
      "LMPC Certification is regulated by the Legal Metrology Act of 2009, and the Legal Metrology (packaged commodities) Rule, 2011. A few states may have slight deviations in terms of the enactment of laws.",
  },
  {
    question:
      "At what time should I submit an LMPC Certificate application for imports?",
    answer:
      "You should submit an LMPC Import License application a minimum of 90 days before you plan to begin imports of pre-packaged products to India.",
  },
  {
    question: "What documents must be submitted to obtain an LMPC Certificate?",
    answerHtml: `Document requirements depend on a case's specifics, however, the most common include the following:<br /><br />• Business incorporation documents<br />• GST registration<br />• Import/Export Code (IEC) for the importing party<br />• Firm and promoter PAN cards<br />• Business location address proof<br />• Samples of product packaging or labels<br />• Any other documents required by the certifying authority`,
  },
  {
    question: "How long does an LMPC Import License remain valid?",
    answer:
      "An LMPC Import License is valid for a time period ranging from 1 to 5 years, based on what you select during the application process.",
  },
  {
    question: "What is a pre-packaged commodity?",
    answer:
      "A pre-packaged commodity is a product, regardless of whether it is sealed or unsealed, which is packaged without the buyer being present and includes a specific quantity of the commodity.",
  },
  {
    question: "Can unstamped weights or measuring instruments be used?",
    answer:
      "No. It is illegal to possess, sell, or use measuring devices and tools to which a Legal Metrology Officer hasn't attached a stamp and provided approval. These tools cannot be utilized for commercial purposes.",
  },
  {
    question: "What penalties might be incurred if I fail to comply with LMPC rules?",
    answerHtml: `Non-compliance with LMPC rules and regulations can result in:<br /><br />• Fines and other penalties<br />• Confiscation of merchandise<br />• Possible court actions and prosecution`,
  },
];

const LMPC = () => (
  <ServicePageLayout
    breadcrumbLabel="LMPC Certificate Guide for Importers and Manufacturers"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default LMPC;
