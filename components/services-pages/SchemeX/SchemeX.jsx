import Link from "next/link";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";
import SchemeXDownloadPdf from "./scheme-x-download-pdf";
import { SCHEME_X_PRODUCT_ROWS } from "./scheme-x-product-rows";

const SCHEME_X_OVERVIEW_IMAGE = "/services-main-images/scheme-x-certification.webp";
const SCHEME_X_LOGO_IMAGE = "/services-images/scheme-x-logo.png";

const productLinkClassName =
  "text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200";

const ConclusionSection = () => (
  <>
    <SectionHeadingTwo>Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The BIS Scheme-X Certification remains vital in upholding the safety,
      reliability, and quality of Low-voltage switchgear and control gear,
      Machinery and electrical equipment. For the manufacturers of machine tools
      applicable to processing stone, ceramics, concrete, asphantic cement and
      mineral glass, BIS Scheme-X certification is compulsory.
    </ServiceParagraph>

    <ServiceParagraph>
      By fulfilling these obligations, manufacturers guarantee product
      conformity, enhance consumer confidence, as well as improve their
      credibility on the market. Scheme-X makes sure the production is as smooth
      as possible, safety standards around the world are met, and the recognized
      brands gain a positive reputation.
    </ServiceParagraph>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo>
      Key Documents Required for BIS Scheme X Certification
    </SectionHeadingTwo>

    <ServiceParagraph>
      To streamline the BIS certification process, manufacturers are required
      to gather and submit the following documents during the registration phase:
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={["Sl. No.", "Document Required", "Details"]}
      rows={[
        [
          "1.",
          "Name and Address (Factory & Office)",
          "Full legal name and physical addresses of the manufacturing site and office",
        ],
        [
          "2.",
          "PAN and GST Information",
          "Permanent Account Number (PAN) and GST registration details",
        ],
        [
          "3.",
          "Contact Details",
          "Email address, mobile number, and landline for official communications",
        ],
        [
          "4.",
          "Management Details",
          "Names, roles, and IDs of key executives and authorized signatory",
        ],
        [
          "5.",
          "Product Description",
          "Details of machinery and equipment covered under the First Schedule of the Omnibus Technical Regulation",
        ],
        [
          "6.",
          "Product Classification",
          "Specific type, model, and variety for which BIS license is being requested",
        ],
        [
          "7.",
          "Technical file",
          "All the technical details related to the product and details about the manufacturing unit.",
        ],
      ]}
    />

    <SectionHeadingThree as="h3">
      Validity and Renewal Process of Scheme-X Certificate:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Licence Validity and Renewal: BIS Licences under Scheme-X are issued for a period of 3 to 6 years for continuous production. Once the period has expired, the licence can be renewed for the same duration by the submission of a renewal application, the required fee, and compliance documents.",
        "Certificate of Conformity (CoC): A CoC is issued for One time production, and is applicable for domestic as well as overseas manufacturers. Since it applies only to a single batch, a CoC has no renewal option.",
        "Report of Product Tests: When test reports are prepared in the laboratory of the manufacturer, the BIS officials verify them during the factory inspection by conducting witness testing. If testing is done at subcontracted facilities, those facilities are also inspected and approved by BIS.",
        "Review of Application for Renewal: For uninterrupted validity, a manufacturer is required to continue to comply with the Scheme-X provisions. As per Regulation 8 of the BIS Conformity Assessment Regulations, the Bureau of Indian Standards processes the application for renewal in form VIII. Renewal is done only after satisfactory compliance is verified.",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo>Steps to Get Certified Under BIS Scheme-X</SectionHeadingTwo>

    <ServiceParagraph>
      Issuing BIS Certificate under Scheme-X is a systematic activity meant to
      ensure the manufacturer has the applicable safety, quality, and compliance
      standards fulfilled. The process is as follows:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Verify Scope: Determine whether your product is in the scope of Scheme-X and if it is with BIS safety requirements. Check the relevant Indian Standards and technical schedule to determine if you will be able to comply.",
        "Prepare The Required Documents: Manufacturers need to collect and arrange the following documents: Registered Business certificates, Basis of design documents, Factory and Process flow documents, Service Test Reports (if applicable), Quality assurance and Control Documents.",
        "Construct the Technical File: A technical file is an indispensable part for the claim for extension of a certificate. It should contain: Technical Specifications of the Product, Methods and Techniques Information, Compliance and Test Documents, Limitation and the Intended purpose of the product, Quality assurance documentation, Raw materials traceability, subcontract traceability, and the rest of the evidence, Conformance to the standards within the scope framed.",
        "The Application Form: The application form can be submitted electronically on the BIS Website for the designated place. Settlement of the application fee is a must. The rest of the documents verifying application should be included for proper assessment.",
        "Factory Inspection: For domestic manufacturers: Inspection is conducted over a period of a maximum of 2 days. For foreign manufacturers: Inspection is conducted over a period of a maximum of 3 days (additional days may accrue due to additional requests).",
        "Testing of Product Samples: Sample testing is either carried out at the manufacturers site or at outsourced BIS approved labs (outsource testing is allowed). The testing demonstrates the fulfillment of the relevant Indian standards.",
        "Issuance of Certification: If a product meets all the conditions, BIS grants every product a License or a Certificate of Conformity (CoC). The BIS Standard Mark may be used freely by the manufacturer on all certified products.",
      ]}
    />

    <ServiceParagraph>
      This file serves as the technical and statistical evidence of the product
      claim substantiating to safety trace standards.
    </ServiceParagraph>

    <ServiceParagraph>
      During the period of inspection, the BIS officials are expected to:
      Analyze the technical file, Evaluate the ways of manufacturing along with
      supporting quality assurance systems, Observe the testing of the product,
      Determine non-compliance (if any) and give remedial steps. A detailed
      report of the audit is provided to the applicant after the visit.
    </ServiceParagraph>

    <ServiceParagraph>
      This strategy maintains compliance with BIS Standard and is a recognition
      of Indian and international compliance, cornering the industry on
      consumer trust towards safety and quality.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      Procedure for Domestic Manufacturers
    </SectionHeadingThree>

    <ServiceParagraph>
      Domestic manufacturers follow a direct approach by obtaining the BIS License
      under Scheme-X. The direct steps to follow include:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Documentation: All documents pertaining to the scheme must be gathered and prepared.",
        "Execution of the Application: The application is to be presented alongside the relevant fees.",
        "Inquiry on the Application: any application submitted is subject to scrutiny and a subsequent set of questions is generated by BIS.",
        "Appointing Auditors: Auditors are appointed by BIS but the nominated individual is subject to the payment of the audit fees.",
        "Factory Audit: An examination and survey works audit is conducted onsite and relevant samples are collected.",
        "Sample Evaluation: The samples are evaluated in a BIS-recognized laboratory. The applicant pays all BIS-recognized laboratory testing fees.",
        "Payment of Licencing & Marking Fees: The requisite payments are accomplished to BIS.",
        "Grant of Licencing: The certificate granting permission to use the BIS Mark is awarded by BIS.",
      ]}
    />

    <ServiceParagraph>
      <strong>Typical Timeline:</strong> Close to 90 working days (as per BIS
      practice) are needed. This is provided there are no key non-conformities.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      Procedure for Foreign Manufacturers
    </SectionHeadingThree>

    <ServiceParagraph>
      Unlike domestic manufacturers, foreign manufacturers applying for a BIS
      certificate under Scheme-X are required to comply with a more stringent
      process and additional steps. The procedure is elaborated as follows.
    </ServiceParagraph>

    <ServiceList
      points={[
        "Preparation of Documentation: Business registered, the product and factory layout, test reports, and the associated quality management documents all must be in the configured folder to comply.",
        "Submission of The Application: The application, the requisite fee and all application materials be submitted through BIS online portal.",
        "Recording of Application and Scrutiny: The application is recorded by BIS and a check of the documents is conducted. Any issues that BIS may have must be resolved by the applicant in a timely manner.",
        "Auditor Assignment and Payment: BIS's auditors responsible for factory inspections are assigned to the applicant for the audit. The applicant must pay the set fees for the conducted audit, as determined by the applicable legislation.",
        "Audit Preparation: Foreign manufacturers are responsible for logistical arrangements for the audit such as Visa issuance, air tickets, and hotel reservations for BIS officials are arranged and paid.",
        "Factory Audit & Sample Selection: BIS officials conduct a factory audit spanning 3 days (more days can be added if more applications are needed).",
        "Product Testing: Selected samples are forwarded to a BIS accredited laboratory for testing. In some instances, testing is contracted to other testing laboratories and so the payment is settled through the principal testing laboratory.",
        "Payment of Marking & Licence Fees: After successful audit and test results, the manufacturer must pay the required marking fee and licence fee to BIS.",
        "Grant of Licence: BIS issues the Licensed/Certificate of Conformity (CoC) once all conditions have been followed in total. BIS then allows the manufacturer with a used BIS Standard Mark on other certified products, once compliance is confirmed.",
      ]}
    />

    <ServiceParagraph>
      The audit comprises: Evaluation of the quality assurance systems and the
      workflows in the manufacturing processes, Assessment of the compliance and
      the technical documentation, Independent testing sample selection.
    </ServiceParagraph>

    <ServiceParagraph>
      The entire process takes, based on the practices from BIS, roughly 6-7
      months.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Key Additional Pointers for Foreign Manufacturers:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Classification FMCS: All foreign manufacturers are classified as 'Large Scale' under the Foreign Manufacturers Certification Scheme. This classification is irrespective of the scale of operations being carried out.",
        "Authorized Indian Representative (AIR): Every foreign manufacturer is required to designate an Authorized Indian Representative (AIR). The AIR is the primary contact point for the foreign applicant and BIS, responsible for compliance, collaboration and the maintenance of the BIS licence.",
        "Factory Audits: Factory audits for foreign manufacturers are comprehensive and tend to last 3 days. Also, more days are required in the case of multiple product applications being filed.",
      ]}
    />
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo>Introduction to BIS Scheme X Certification</SectionHeadingTwo>

    <div className="flex justify-center mt-[20px] md:mt-[26px]">
      <ServiceImage
        src={SCHEME_X_OVERVIEW_IMAGE}
        alt="Scheme X Certification"
        title="Scheme X Certification"
      />
    </div>

    <ServiceParagraph>
      The Bureau of Indian Standards, or BIS for short, rolled out
      &ldquo;Scheme X&rdquo; on March 16, 2022, aimed at improving compliance on
      product safety and quality in India. Indian and foreign manufacturers can
      apply for BIS certification for Machine and Electrical equipment, components
      Like assemblies, sub-assemblies and, and Tools specified in Schedule-II of
      Scheme-X and take certification prior to exporting, selling, or distributing
      in India.
    </ServiceParagraph>

    <ServiceParagraph>
      Under Scheme X, the manufacturers can apply for a BIS License or a
      Certificate of Conformity (CoC) for low voltage switch gear and control
      gear, machinery, and electric equipment. Once the manufacturers are
      certified, they are allowed to use the BIS Standard mark, indicating that
      their products are in accordance with the standards laid down in India.
    </ServiceParagraph>

    <ServiceParagraph>
      The certification, while promoting the product and compliance with the
      Indian Standards and Government Regulations, helps develop trust and
      confidence of the consumers in the certified products.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">What is Scheme X Certification?</SectionHeadingThree>

    <ServiceParagraph>
      Scheme X is a product certification scheme developed under the BIS
      Conformity Assessment Regulations, 2018 and later on, simplified under the
      BIS Conformity Assessment (Amendment) Regulations, 2022.
    </ServiceParagraph>

    <ServiceParagraph>
      The main goal is to bring the Indian safety and quality standards to global
      standards, especially with regard to the industrial machinery and electrical
      equipment. The products manufactured in or imported to India under this
      scheme are subjected to rigorous scrutiny and assessment to prove technical,
      safety, as well as performance standards.
    </ServiceParagraph>

    <ServiceParagraph>
      Provisions under the original scope of Scheme X Certification have been
      revised for and expanded with the newly issued Machinery and Electrical
      Equipment Safety (Omnibus Technical Regulation) Order, 2024, which is under
      the jurisdiction of the Ministry of Heavy Industries and has been brought
      into force by the BIS. The order comes into effect on 1st September 2026,
      and covers a broad spectrum of machinery and electrical equipment such as
      pumps for handling liquids, compressors, cranes, rotary electrical
      machines, transformers, and switchgear and control gear.
    </ServiceParagraph>

    <ServiceParagraph>
      Assemblies, sub-assemblies and components of such machinery or equipment
      are also part of the certification scope as per Section 16 of the Bureau
      of Indian Standards Act, 2016.
    </ServiceParagraph>

    <ServiceParagraph>
      Moreover, under the 1989 CMVR Rules (Construction and Manufacture of Valve
      Regulation), Bowser and other types of construction equipment under the
      jurisdiction of Scheme X, are ensured that the market does not get exposed
      to the equipment which lacks the requisite of safety and technical
      standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      Omnibus Technical Regulation (OTR)
    </SectionHeadingThree>

    <ServiceParagraph>
      The Ministry of Heavy Industries released the &ldquo;Omnibus Technical
      Regulation on Safety Orders (Machinery and Electric equipment Safety)&rdquo;
      via E-Gazette notification of August 28, 2024. This innovative regulation
      intends to improve - safety, quality and compliance of machinery, electrical
      equipment and their assemblies, sub assemblies and components, under Scheme
      X of the BIS Regulation, 2016.
    </ServiceParagraph>

    <ServiceParagraph>
      Under the OTR, all categories of machinery and electrical equipment, and all
      their parts and components are included. However, a few categories are
      specifically excluded:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Any machinery and components that are a part of any other order under Section 16 which is issued under the Bureau of Indian Standards Act, 2016.",
        "Manufactured domestic goods and articles that are only intended for export.",
        "Construction machinery and equipment which are under the CMVR Rules, 1989, prescribed by the Ministry of Road Transport and Highways (MoRTH).",
      ]}
    />

    <ServiceParagraph>
      These exceptions are made to facilitate compliance and avoid unnecessary
      duplication of regulation in order to promote ease of doing business.
    </ServiceParagraph>

    <ServiceParagraph>
      The Omnibus Technical Regulation, 2024 covers all machinery and electrical
      equipment, including low voltage switchgear and control gear notified by the
      Ministry of Heavy Industries, will be treated under the Scheme X framework of
      BIS Certification. The Order will come into effect on the 1st of September
      2026 so that the manufacturers and importer have enough to modify their
      operations as per the Orders issued.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      BIS Certification under the Omnibus Technical Regulation
    </SectionHeadingThree>

    <ServiceParagraph>
      As per the OTR 2024, manufacturers, as well as importers, of machinery and
      electrical equipment which include pumps, pumps, compressors, centrifuges,
      cranes, transformers, and switchgears must apply for BIS Certification under
      Scheme X.
    </ServiceParagraph>

    <ServiceParagraph>Under Scheme X, manufacturers can opt to apply for:</ServiceParagraph>

    <ServiceList points={["A BIS Licence, or", "A Certificate of Conformity (CoC)"]} />

    <ServiceParagraph>
      Products bearing the BIS Standard Mark which is a Mark of Conformity which
      certifies and assures the users that the product is safe, reliable, and of
      good quality. It is also a mark of trust and really good performance.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">Special Note for MSMEs</SectionHeadingThree>

    <ServiceParagraph>
      As with many other sectors, Micro, Small, and Medium Enterprises (MSMEs)
      must also comply with Scheme X and obtain BIS Certification for their
      machinery and electrical equipment. While it may appear that compliance
      with the regulatory requirements may be challenging, the Scheme X
      certificate is a value addition and advantage to MSMEs for the following
      reasons:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Proves adherence to legal and other requisite obligations set by the government.",
        "Increase the product's reputation and consumer trust.",
        "Facilitates access to a larger domestic and overseas market.",
        "Improves the MSME's standing globally with respect to competitiveness, safety, and quality.",
      ]}
    />

    <SectionHeadingThree as="h2">BIS Scheme X Logo</SectionHeadingThree>

    <ServiceParagraph>
      The BIS standard mark of Scheme X forms a quality mark and a principle of
      trust. The Logo contains:
    </ServiceParagraph>

    <ServiceList
      points={[
        "the standard number is displayed in the top portion of the logo; and",
        "the license number displayed in the bottom portion of the Logo in the format: CM/L-XXXXXXXXXX",
      ]}
    />

    <ServiceParagraph>
      This mark signifies that a BIS Licence has been successfully issued to the
      manufacturer. It entitles the manufacturer to place the BIS Mark and assures
      the consumers that the product is authentic and safe.
    </ServiceParagraph>

    <div className="flex justify-center mt-[20px] md:mt-[26px]">
      <ServiceImage
        src={SCHEME_X_LOGO_IMAGE}
        alt="BIS Scheme X logo"
        title="BIS Scheme X logo"
      />
    </div>

    <SectionHeadingThree as="h2">Legal Implications</SectionHeadingThree>

    <ServiceParagraph>
      BIS Standard Mark is a mark of trust and quality. The mark is only
      available after a valid contract is in place. Only a valid contract allows
      the owner to use the mark. Using the mark without a valid contract is an
      offense under the Indian constitution and is equal to having a legal mark.
      The owner of the mark is placed under heavy restrictions for the use of the
      license CM/L-XXXXXXXXXX for products that have no BIS certification.
    </ServiceParagraph>

    <ServiceParagraph>It follows that every producer is obliged to:</ServiceParagraph>

    <ServiceList
      points={[
        "Acquire a valid BIS License under Scheme X.",
        "Satisfy the relevant requirements of Indian Standards; and",
        "Properly affix the products with the approved BIS Logo.",
      ]}
    />

    <ServiceParagraph>
      This regulatory framework is extended to protect the interests of consumers
      and business people, fostering a market that emphasizes safety, openness,
      and confidence.
    </ServiceParagraph>

    <SectionHeadingThree as="h2">
      Key Differences Between Scheme-I and Scheme-X
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">Scheme-I</SectionHeadingThree>

    <ServiceList
      points={[
        "Includes a wider category of consumer products such as electronics, home appliances, and even industrial products.",
        "Products issued a certificate under this scheme must have the Standard ISI Mark.",
        "Relates to both domestic and foreign manufacturers.",
        "Involves factory audits and sample testing to determine quality and compliance with Indian Standards.",
      ]}
    />

    <SectionHeadingThree as="h3">Scheme-X</SectionHeadingThree>

    <ServiceList
      points={[
        "Addresses high-risk industrial and safety critical engineering products, which include electrical equipment, machinery, and industrial systems of considerable duty.",
        "The certification is of greater rigor than Scheme-I. It involves advanced technical reporting, compliance checking, and extensive certification audits.",
        "Scheme-X tends to be more expensive than Scheme-I because of the extra compliance documentation.",
        "Any business that deals with electrical equipment or industrial machinery is mandated to obtain certification under Scheme-X.",
      ]}
    />

    <ServiceTable
      className="mt-2"
      headers={["Feature", "ISI Mark", "Scheme X"]}
      rows={[
        ["Managed by", "Indian BIS", "Indian BIS"],
        ["Certification Type", "BIS licence", "BIS certificate / BIS licence"],
        [
          "Target Products",
          "Consumer goods",
          "Machinery & electrical equipment",
        ],
        ["Mark Used", "ISI mark", "BIS standard mark (under Scheme X)"],
        [
          "Compliance Level",
          "Indian standard compliance",
          "High-end technical and safety compliance",
        ],
      ]}
    />

    <SectionHeadingThree as="h2">Products Covered by Scheme-X</SectionHeadingThree>

    <ServiceParagraph>
      Scheme-X covers products with the highest risk to safety and performance,
      including:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Electrical Equipment: Industrial transformers, power supply units, and the like, low-voltage switchgear and control gear, plus other high-voltage devices.",
        "Heavy Machinery: Hydraulic presses, industrial cranes, automated machine tools, and specialized equipment for large-scale industries.",
        "Life-Critical Equipment: Fire extinguishers, pressure vessels, emergency electrical systems, and other devices and systems for life safety.",
        "Specialized Consumer & Industrial Electronics: Medical grade electronic appliances and equipment incorporating advanced protective measures.",
      ]}
    />

    <ServiceTable
      className="mt-2"
      headers={[
        "Serial No.",
        "Description of Machinery and Electrical Equipment",
        "HS Code",
      ]}
      rows={SCHEME_X_PRODUCT_ROWS.map((row) => [
        row.serial,
        <Link key={row.serial} href={row.href} className={productLinkClassName}>
          {row.description}
        </Link>,
        row.hsCode,
      ])}
    />

    <SectionHeadingThree as="h2">Product wise Safety Standard</SectionHeadingThree>

    <ServiceParagraph>
      Description of Machinery and Electrical Equipment
    </ServiceParagraph>

    <SchemeXDownloadPdf />

    <SectionHeadingThree as="h2">
      Safety Standards Under BIS Scheme - X
    </SectionHeadingThree>

    <ServiceParagraph>
      More than simply a legal necessity, the BIS Scheme - X Certification offers
      a promise of safety, quality, and reliability. This Certification, which
      entails strict adherence to national and international norms, ensures that
      the machinery and electrical apparatus offered to users are safe,
      environmentally friendly, and technically sound.
    </ServiceParagraph>

    <ServiceParagraph>
      To certify under Scheme - X, manufacturers need to comply with the following
      major safety components:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Electrical Safety: Compliance with the applicable IEC and Indian Standards. Certification protects against short circuits, electric shocks, insulation breakdown, loss in protective earth, ignition of surrounding combustible material, and fire.",
        "Mechanical Safety: Assessment of the machinery's structural integrity and the integrity of moving parts and of new materials. Ensures that equipment is safely subjected to mechanical stress, wear, and operational hazards.",
        "Fire Safety: The use of materials that are designed and constructed with fire resistant material. Compliance with standards for flame propagation performance to control the risks associated with fire.",
        "Environmental Compliance: The use of controlled power and eco - friendly materials in the production of equipment. Encourages manufacturers to lessen the environmental impact of their equipment.",
        "Quality Management: Dominant and autonomous control on the production processes to maintain the pre-set standards and norms. Focus on regulation of factory conditions, including process audits, and continual adherence.",
      ]}
    />

    <SectionHeadingThree as="h2">
      Regulatory Standards Under Scheme-X
    </SectionHeadingThree>

    <ServiceParagraph>
      Manufacturers are required to comply with the Relevant Indian Standards which
      are aligned with the International Standards, including:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Type A Standards:</SectionHeadingThree>

    <ServiceList
      points={[
        "IS 16819:2018 / ISO 12100:2010 â€“ Safety of Machinery: General Principles for the Design, Risk Assessment, and Risk Reduction.",
      ]}
    />

    <SectionHeadingThree as="h3">Type B Standards:</SectionHeadingThree>

    <ServiceList
      points={[
        "Described in the Second Schedule of the Omnibus Technical Regulation (OTR) Order, 2024.",
      ]}
    />

    <SectionHeadingThree as="h3">Type C Standards:</SectionHeadingThree>

    <ServiceList
      points={["Described in the Third Schedule of the OTR Order, 2024."]}
    />

    <SectionHeadingThree as="h3">IS/IEC 60947 Series:</SectionHeadingThree>

    <ServiceList
      points={[
        "Cover low voltage switchgear and control gear in multiple parts and sections.",
      ]}
    />
  </>
);

const hero = {
  heading: (
    <>
      <span className="relative">
        BIS Scheme X Certification
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>
    </>
  ),
  headingAs: "h1",
  description:
    "BIS Scheme X Certification covers Machinery, Electrical Equipment, and Components Assemblies, and Sub-assemblies under the Omnibus Technical Regulation (OTR).",
};

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  { id: "conclusion", label: "Conclusion", section: <ConclusionSection /> },
];

const faqs = [
  {
    question: "1. What is Scheme X under BIS certification?",
    answer:
      "Scheme X is a conformity assessment scheme introduced by the Indian BIS for machinery and electrical equipment. It ensures compliance with stringent safety and technical standards as specified in the Omnibus Technical Regulation.",
  },
  {
    question: "2. Is Scheme X different from the ISI mark certification?",
    answer:
      "Yes. The ISI mark is generally for consumer goods and basic product compliance, while Scheme X applies to complex and industrial-grade products that require advanced testing and certification through a BIS certificate or BIS license.",
  },
  {
    question: "3. Who needs to apply for Scheme X certification?",
    answer:
      "Manufacturers and importers of machinery and electrical equipment listed under the Omnibus Technical Regulation must apply for Scheme X and obtain a valid BIS certification to legally sell or distribute their products in India. Global manufacturers or foreign manufacturers intending to sell product in India must also comply with these regulations.",
  },
  {
    question: "4. What is the cost of BIS Scheme X certification?",
    answer:
      "The cost of Scheme X includes application fees, certification fees, technical file review charges, factory inspection costs, and product testing charges. On average, it starts at ₹2,000 for application and can go up depending on product complexity. For more details contact us at info@sunconsultants.co.in.",
  },
  {
    question: "5. How long does it take to get a BIS licence under Scheme X?",
    answer:
      "The timeline varies depending on documentation, testing requirements, and factory inspections. Typically, it takes 4–6 weeks from the date of successful BIS registration and application submission for Indian manufacturers and 60-90 days for foreign manufacturers.",
  },
  {
    question: "6. Can MSMEs also apply for BIS certification under Scheme X?",
    answer:
      "Absolutely. In fact, the Indian BIS encourages MSMEs to apply for a BIS licence or certificate of conformity under Scheme X to boost quality, compliance, and competitiveness in the industrial sector.",
  },
  {
    question: "7. Is BIS certification under Scheme X mandatory for exports?",
    answer:
      "No. Products manufactured exclusively for export are exempt under the Omnibus Technical Regulation. However, products meant for Indian markets must be certified under Scheme X.",
  },
  {
    question: "8. What is the validity of the BIS license under Scheme X?",
    answer:
      "A BIS licence under Scheme X is generally valid for 3-6 years and must be renewed accordingly. Renewal involves payment of the annual BIS certification fee and may require re-evaluation depending on changes in product scope or standards.",
  },
  {
    question: "9. Can foreign manufacturers apply for Scheme X certification?",
    answer:
      "Yes, foreign manufacturers can apply for Scheme X certification through an authorized Indian representative. The Indian BIS requires a factory inspection, which may take 3 days for foreign applicants, along with standard BIS registration and testing processes.",
  },
  {
    question: "10. What is a Technical File and why is it required?",
    answer:
      "A Technical File is a detailed compliance dossier required under Scheme X. It includes manufacturing processes, product details, test reports, and quality control documents. It supports the product's conformity to relevant Indian Standards during the BIS certification process.",
  },
  {
    question: "11. How is Scheme X related to the Omnibus Technical Regulation?",
    answer:
      "The Omnibus Technical Regulation mandates the use of Scheme X for specific categories of machinery and electrical equipment in India. Products listed under the regulation must be certified under Scheme X to obtain a valid BIS certificate or BIS licence.",
  },
  {
    question: "12. Can a BIS certificate under Scheme X be revoked?",
    answer:
      "Yes. The Indian BIS can suspend or cancel a BIS licence or certificate under Scheme X if non-compliance is found during surveillance or if the product fails to meet required Indian Standards.",
  },
  {
    question:
      "13. What is the difference between BIS license and BIS certificate under Scheme X?",
    answer:
      "A BIS license is typically issued to Indian manufacturers, while a BIS certificate of conformity (CoC) is often issued to foreign manufacturers or for specific cases. Both serve the same purpose—ensuring product compliance under Scheme X.",
  },
  {
    question: "14. Is the ISI mark allowed for products certified under Scheme X?",
    answer:
      "No. Products under Scheme X do not carry the ISI mark. Instead, they display the BIS standard mark relevant to the certification scheme, as governed by the Indian BIS.",
  },
  {
    question: "How do I know if my machinery requires Scheme X certification?",
    answer:
      "Check the official list in the Omnibus Technical Regulation or consult with a BIS consultant to verify if your machinery falls under mandatory Scheme X certification requirements.",
  },
];

const SchemeX = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="Indian Bis Certification Under Scheme-X"
      hero={hero}
      sections={sections}
      faqs={faqs}
    />
  );
};

export default SchemeX;