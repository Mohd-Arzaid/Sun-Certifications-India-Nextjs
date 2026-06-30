import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceCallout,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const CRS_OVERVIEW_IMAGE = "/services-main-images/CRSRegistration.webp";

const hero = {
  heading: "BIS CRS Registration",
  headingAs: "h1",
  description:
    "Mandatory for electronic products to ensure safety & quality. Get BIS approval with expert assistance!",
};

const intro = (
  <>
    <ServiceImage
      src={CRS_OVERVIEW_IMAGE}
      alt="CRS Registration"
      title="CRS Registration"
    />

    <SectionHeadingTwo as="h2">What is BIS Registration?</SectionHeadingTwo>

    <ServiceParagraph>
      BIS Registration is a quality certification granted by the Bureau of
      Indian Standards (BIS), the national standards body of India. It serves as
      an assurance that a product complies with the applicable Indian Standards
      relating to quality, safety, and performance before it is introduced into
      the Indian market.
    </ServiceParagraph>

    <ServiceParagraph>
      The Bureau of Indian Standards (BIS) is the national standardization body
      in India and works under the Ministry of Consumer Affairs, Food and Public
      Distribution Government of India. BIS is responsible for maintaining the
      quality, safety, and performance benchmarks for various products and
      services in India as per the relevant Indian Standards (IS).
    </ServiceParagraph>

    <ServiceParagraph>
      BIS is responsible for supervising and implementing various schemes in
      India. The Compulsory Registration Scheme (CRS) is a very prominent and
      mandatory certification scheme of BIS covering various categories of
      electronic and IT products.
    </ServiceParagraph>

    <ServiceParagraph>
      The performance and safety of Indian products is an important issue for
      India. BIS CRS Certification guarantees that electronics and IT products
      are compliant with Indian standards, and helps safeguard consumers against
      non-compliant and substandard products.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo>
      What is a Compulsory Registration Scheme (CRS)?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Compulsory Registration Scheme (CRS) is a BIS product registration
      scheme that was launched in 2012 and was primarily focused on electronic
      products. Over the years, as more products have been released CRS has been
      expanded to include a wider range of product categories, which include
      electrical products such as appliances, solar equipment, batteries and
      more. CRS registration is mandatory for products specified under Quality
      Control Orders (QCOs) issued by different ministries.
    </ServiceParagraph>

    <ServiceParagraph>
      Any product that falls under the mandatory CRS scheme has to be sold,
      imported, or distributed in India only after obtaining registration with
      BIS.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      History of CRS Certification in India
    </SectionHeadingThree>

    <ServiceParagraph>
      In 2012, the first QCO under the CRS scheme was released and focused on
      electronic and IT equipment. Since then, additional QCOs have been issued
      in the following sectors:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Consumer Electronics",
        "Lightings & LEDs",
        "Batteries & Cells",
        "Wireless Communication Devices",
        "Solar Panels and Components",
        "Electrical Appliances for Households",
      ]}
    />

    <ServiceParagraph>
      The list for CRS Certification is rapidly expanding, so it is very
      important for manufacturers to be proactive and aware of recent updates.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      CRS Registration vs ISI Mark: What&apos;s the Difference?
    </SectionHeadingTwo>

    <ServiceTable
      className="mt-2"
      headers={["Feature", "CRS Registration", "ISI Mark"]}
      rows={[
        [
          "Nature",
          "Compulsory (only for QCO-listed products)",
          "Voluntary or Compulsory (based on product)",
        ],
        [
          "Product Scope",
          "Electronics, IT, Electrical, Batteries, etc.",
          "Food, cement, steel, electricals, etc.",
        ],
        [
          "Application",
          "Online, BIS CRS portal",
          "Manual + Online, BIS ISI system",
        ],
        [
          "Flexibility",
          "Only for QCO-covered goods",
          "Can be voluntary for non-QCO goods",
        ],
        [
          "Labelling",
          "Requires BIS CRS logo and registration number",
          "Requires ISI logo with standard code",
        ],
      ]}
    />

    <SectionHeadingThree as="h3">
      Why You Need to Know the BIS CRS Framework
    </SectionHeadingThree>

    <ServiceParagraph>
      If you are a producer in India, or a foreign company trying to enter the
      Indian market, knowing the BIS CRS steps is a must. It helps you to:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Avoid penalties for non-compliance.",
        "Prepare production schedules (considering lab testing time).",
        "Facilitate easier customs processing.",
        "Earn the Indian customer's long-term brand trust.",
      ]}
    />

    <ServiceCallout
      about="BIS Certification Schemes in India"
      linkText="BIS Certification Schemes in India"
      href="/what-is-bis-certificate-indian-bis"
    />
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo>
      Eligibility Criteria for BIS CRS Registration
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Who Can Apply for BIS Registration Under CRS?
    </SectionHeadingThree>

    <ServiceParagraph>
      In India, a BIS Licence under the Compulsory Registration Scheme (CRS) can
      only be granted to manufacturers who meet the requirements set out by the
      Bureau of Indian Standards. This is to ensure only authentic
      manufacturers gain the privilege of being able to Register as well as
      affix the BIS CRS logo on their products.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Eligibility Criteria Checklist
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Requirement", "Description"]}
      rows={[
        [
          "Applicant must be a Manufacturer",
          "Only the original manufacturer (not trader or reseller) of the product is eligible to apply.",
        ],
        [
          "Location Can Be Indian or Foreign",
          "Both Indian manufacturers and international brands can apply.",
        ],
        [
          "AIR (Authorized Indian Representative)",
          "Foreign manufacturers must appoint an AIR — either their Indian branch or a formally authorized third party.",
        ],
        [
          "Test Reports from BIS-Approved Labs",
          "The product must be tested at a BIS-recognized lab and meet the Indian Standard (IS) applicable.",
        ],
        [
          "Proper Documentation",
          "All required documents must be submitted in prescribed formats (details in next section).",
        ],
        [
          "One Registration Per Brand & Location",
          "A separate application must be filed for each product type, manufacturing location, and brand name.",
        ],
      ]}
    />

    <SectionHeadingTwo as="h2">
      Who is an Authorized Indian Representative (AIR)?
    </SectionHeadingTwo>

    <ServiceParagraph>
      For foreign manufacturers, one of the obligations is to appoint an
      Authorized Indian Representative (AIR) for communication and
      representation in India.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Responsibilities of the AIR:</SectionHeadingThree>

    <ServiceList
      points={[
        "Acts as the legal representative for the foreign applicant",
        "Communicates and manages all obligations with BIS on behalf of the manufacturer",
        "Legally liable for all compliance and documentation",
        "Cannot be an agent or distributor unless clearly authorized by the manufacturer",
      ]}
    />

    <ServiceParagraph>
      As part of the agreement, the AIR must submit a signed agreement from both
      sides along with a proof of Indian address.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Real life Scenario:</SectionHeadingThree>

    <ServiceParagraph>
      Company ABC is planning to introduce a new model of a power bank in India.
    </ServiceParagraph>

    <ServiceList
      points={[
        "Company ABC is the manufacturer.",
        "They have the product tested in one of the BIS accredited labs in India.",
        "Their branch office in Delhi serves as the registered AIR.",
        "They upload the application to the BIS portal along with the required documentation.",
      ]}
    />

    <ServiceParagraph>
      The outcome is a BIS certificate is issued under CRS.
    </ServiceParagraph>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo>
      Documents Required for BIS CRS Registration
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      List of documents required to obtain BIS registration under CRS scheme.
    </SectionHeadingThree>

    <ServiceParagraph>
      Filling out the BIS CRS application for registration is entirely digital,
      however, it still requires fully completed documents to obtain approval.
      Every minute mistake and a failure to adhere to any aspect, such as the
      document type, improper formats, or wrong file types can cause the
      application to get rejected or delayed.
    </ServiceParagraph>

    <ServiceParagraph>
      For proper and faster processing of the BIS documents, it is necessary to
      have the proper documents with you each step of the way. Having the proper
      documents ready ensures that your bis certificate gets processed on time
      and stays legally clear from any compliance audits, customs inspections,
      or marketplace approvals.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Documents Checklist for BIS CRS Registration
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Document", "Who Submits?", "Notes"]}
      rows={[
        [
          "Manufacturer's Address Proof",
          "Manufacturer",
          "Factory lease, utility bill, or license",
        ],
        [
          "Test Report from BIS-Approved Lab",
          "Manufacturer/Lab",
          "Must be recent (within 90 days) and reference IS code",
        ],
        [
          "Undertakings (as per BIS Format)",
          "Applicant",
          "Includes liability, compliance, and product responsibility",
        ],
        [
          "Trademark Certificate",
          "Manufacturer",
          "Required if brand is registered",
        ],
        [
          "AIR Agreement (For foreign applicants)",
          "Foreign Manufacturer & AIR",
          "Signed and notarized",
        ],
        [
          "Affidavit",
          "Manufacturer or AIR",
          "Format downloadable from BIS portal",
        ],
        [
          "Fee Receipt",
          "Applicant",
          "Payment proof of government fee",
        ],
        [
          "Authorization Letter",
          "Manufacturer",
          "Authorizes AIR to act on their behalf",
        ],
        [
          "Company Registration Certificate",
          "Manufacturer",
          "Proof of business registration (GST, ROC, etc.)",
        ],
        [
          "Product Labels/Markings",
          "Manufacturer",
          "Must show BIS logo, IS standard, and registration space",
        ],
      ]}
    />
  </>
);

const RegistrationSection = () => (
  <>
    <SectionHeadingTwo>
      BIS Registration Process Under Compulsory Registration Scheme (CRS)
    </SectionHeadingTwo>

    <ServiceParagraph>
      BIS CRS Registration is a totally online process through the BIS
      Registration Portal. It does not solely procedures that include the
      uploading of documents. It also requires special attention of a technical
      nature, the understanding of the regulations, as well as total compliance
      with the Indian Standard (IS).
    </ServiceParagraph>

    <ServiceParagraph>
      Here is the step-by-step BIS registration process under Compulsory
      Registration Scheme (CRS) given below:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 1: Product Testing at BIS Authorized Lab
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Select a lab from the BIS approved list",
        "Submit a sample of the product for which the testing is to be performed for relevant IS",
        "Obtain the test report for the sample as per BIS test report format",
      ]}
    />

    <SectionHeadingThree as="h3">Step 2: Document Preparation</SectionHeadingThree>

    <ServiceList
      points={[
        "Collect the requisite documents, as already outlined",
        "Make sure the documents are properly named, formatted, signed and dated",
        "Develop a product label which is a mock sticker that contains a space for a BIS logo and space for IS standard",
      ]}
    />

    <SectionHeadingThree as="h3">
      Step 3: Filling the Online Application
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Go to the BIS CRS Portal (https://www.bis.org.in/) and login or register",
        "Complete the product, model number, brand, and manufacturing unit of the AIR, if necessary",
        "Follow the steps for the payment of the Government fee",
      ]}
    />

    <SectionHeadingThree as="h3">
      Step 4: BIS&apos;s Review of the Application
    </SectionHeadingThree>

    <ServiceList
      points={[
        "BIS checks the supporting documents and lab reports",
        "If needed, a clarification is raised through the portal",
        "Respond with the right documents or logical explanations",
      ]}
    />

    <ServiceParagraph>
      If it is a clarification query, it must be answered within 30 days, or the
      application goes to archive files, which means rejected.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 5: Grant of BIS Registration
    </SectionHeadingThree>

    <ServiceList
      points={[
        "BIS Certificate will be issued if BIS officials are satisfied with the results of the assessments they conducted",
      ]}
    />

    <ServiceParagraph>Your certificate will include:</ServiceParagraph>

    <ServiceList
      points={[
        "BIS registration number",
        "Brand name",
        "Model of the product",
        "IS Standard Code",
      ]}
    />

    <ServiceList
      points={[
        "Your product label must contain or have e-labelling of the certificate's details.",
      ]}
    />

    <SectionHeadingThree as="h3">Step 6: Labeling and Distribution</SectionHeadingThree>

    <ServiceList
      points={[
        "BIS certified products must carry:",
        "BIS CRS logo",
        "IS code that relates to the product",
        "BIS registration number",
        "The registration number and BIS logo must be printed or digitally embedded according to the BIS regulations.",
      ]}
    />

    <SectionHeadingThree as="h3">
      Approximate Timeline for CRS Registration
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Activity", "Estimated Time"]}
      rows={[
        ["Product Testing", "7-10 working days"],
        ["Document Collection", "2-3 days"],
        ["Application Submission", "1 day"],
        ["BIS Review + Query Resolution", "10-15 working days"],
        ["Final Certificate Issue", "2-4 working days"],
        ["TOTAL", "~4 weeks"],
      ]}
    />
  </>
);

const FeesSection = () => (
  <>
    <SectionHeadingTwo>
      BIS CRS Registration Fees, Validity & Renewal Guidelines
    </SectionHeadingTwo>

    <ServiceParagraph>
      Getting a BIS certificate under the CRS, the applicant is required to pay
      the government charges as well as the payment for the product to be
      tested. Even though the process is online and the interface is
      streamlined, many applicants face delays on their requests and rejections
      due to underpayment and applications misfiled.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Fee Structure for BIS Registration (Compulsory Registration Scheme)
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Fee Type", "Amount"]}
      rows={[
        ["Government Fee", "₹53,000 + 18% GST per test report"],
        [
          "Testing Charges",
          "₹10,000 – ₹20,000 + 18% GST (varies by product/lab)",
        ],
        ["Additional Report in Same App", "₹20,000 + 18% GST per report"],
        ["Renewal Fee", "₹53,000 + 18% GST"],
      ]}
    />

    <ServiceParagraph className="italic text-center">
      <em>
        Prices subject to update — confirm on the BIS portal or with your
        consultant.
      </em>
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      CRS Certificate Validity & Renewal
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Parameter", "Details"]}
      rows={[
        ["Initial Validity", "2 Years"],
        ["Renewal Duration", "Upto 5 Years (if no product changes)"],
        ["Renewal Process", "Online, based on new affidavit + renewal fee"],
        [
          "Re-testing Required?",
          "Not unless product specs/IS standard changes",
        ],
      ]}
    />
  </>
);

const ElabellingSection = () => (
  <>
    <SectionHeadingTwo>
      E-Labelling Guidelines for CRS Certified Products
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">What is E-Labelling?</SectionHeadingThree>

    <ServiceParagraph>
      E-labelling is the practice of showing regulatory information within a
      device electronically instead of printing and affixing it to the device.
      Under the Compulsory Registration Scheme (CRS) of BIS, specified
      products, especially compact or digital devices, are able to display the
      BIS certificate details, standard mark and IS code through the software
      interface or digital packaging.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Requirements for E-Labelling:
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Rule", "Description"]}
      rows={[
        [
          "Physical Label on Packaging",
          "Product box or external packaging must display the BIS CRS logo and registration details.",
        ],
        [
          "Removable Labels for Bulk Packaging",
          "If products are shipped in bulk, a removable adhesive label on the outer package is acceptable.",
        ],
        [
          "No Tools Needed for Access",
          "Users must be able to access the e-label info without needing tools or accessories (e.g., SIM card removal not allowed).",
        ],
        [
          "Secure Programming",
          "E-label info must be embedded in firmware/software, locked from modification by any third party.",
        ],
        [
          "Menu-Based Access",
          "Users must access the info in no more than 4 steps through the device's menu interface.",
        ],
        [
          "Instructions Required",
          "Instructions on how to access e-label details must be provided.",
        ],
      ]}
    />

    <ServiceParagraph>
      How Sun Certifications India Can Help You with BIS Registration under CRS
      Scheme
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Why Choose Sun Certifications India?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The entire BIS CRS registration is very technical and exhaustive with
      regard to rules and the volume of documentation. In the absence of a
      thorough understanding of the Indian Standards, recent QCOs, the structure
      of the test report, and the workflows in the portal interface, applicants
      stand to lose substantially in terms of the subsequent actions of delays,
      rejection, or long-standing active non-compliance. This is where Sun
      Certifications India comes in with a reputable and reliable associate to
      assist the applicant in every detail of the compulsory certification
      scheme.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  {
    id: "registration",
    label: "Registration",
    section: <RegistrationSection />,
  },
  {
    id: "fees",
    label: "Registration Fees",
    section: <FeesSection />,
  },
  { id: "elabelling", label: "E-Labelling", section: <ElabellingSection /> },
];

const faqs = [
  {
    question: "What is BIS registration?",
    answer:
      "BIS certification is a compliance process governed by the Bureau of Indian Standards, which verifies that a product meets the applicable Indian Standards (IS) for quality, safety, and reliability.",
  },
  {
    question: "What is CRS registration under BIS?",
    answer:
      "CRS stands for Compulsory Registration Scheme. It is a mandatory registration process for specific product categories such as electronics, electricals, batteries, and solar items. Products under CRS must be tested and registered with BIS before they can be sold in India.",
  },
  {
    question: "Is BIS certification mandatory in India?",
    answer:
      "Yes. For all products listed under the CRS product list (currently 80+ items), BIS registration is mandatory for manufacturing, importing, or selling in India.",
  },
  {
    question: "What is the difference between BIS CRS and ISI mark?",
    answerHtml:
      "BIS CRS: For electronics and IT goods, only for mandatory products notified under QCO. <br />ISI mark: Used for a broader range of products, may be voluntary or mandatory depending on the product category.",
  },
  {
    question: "Who can apply for BIS CRS registration?",
    answer:
      "Only manufacturers can apply. This includes both Indian and foreign manufacturers. Foreign brands must appoint an Authorized Indian Representative (AIR).",
  },
  {
    question: "What is the role of an AIR?",
    answer:
      "An Authorized Indian Representative (AIR) is legally responsible for filing the BIS application on behalf of a foreign manufacturer. They act as the official liaison between BIS and the overseas applicant.",
  },
  {
    question: "How long does BIS CRS registration take?",
    answer:
      "The process typically takes 3–4 weeks, assuming all documents and test reports are submitted correctly and no objections are raised by BIS.",
  },
  {
    question: "How much does BIS CRS certificate cost?",
    answerHtml:
      "Costs include: <br />Testing Charges: ₹10,000–₹20,000 + GST <br />Government Fee: ₹53,000 + GST per test report <br />Additional Charges: Affidavit, courier, AIR documentation, etc. <br />Discount applicable for Indian MSME registered manufacturers",
  },
  {
    question: "What is the validity of BIS CRS certificates?",
    answer:
      "The initial BIS license is valid for 2 years. It can be renewed for up to 5 years if the product and manufacturing details remain unchanged.",
  },
  {
    question: "Can BIS certification be obtained voluntarily?",
    answer:
      "No. Under CRS, you cannot apply voluntarily for products that are not listed under QCOs. Voluntary certification is only applicable for non-CRS products via the ISI scheme.",
  },
  {
    question: "Where can I find the BIS CRS product list?",
    answerHtml:
      'You can visit the official BIS website <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" class="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> and navigate to the "Products under CRS" section to view the complete list of covered products.',
  },
  {
    question: "Can the BIS mark be displayed electronically?",
    answerHtml:
      "Yes, through e-labelling, but it must meet strict BIS rules: Label info must be embedded in firmware <br />Easy access within 4 steps in device menu <br />Physical packaging must still carry regulatory info",
  },
  {
    question:
      "What happens if I don't get BIS registration for a mandatory product?",
    answerHtml:
      "Severe penalties, including: <br />Product seizure <br />Customs rejections <br />Legal fines <br />Delisting from e-commerce portals <br />Permanent ban from Indian market",
  },
  {
    question: "Can one BIS certificate cover multiple models or brands?",
    answer:
      "No. Each brand, and factory location must be certified separately. Multiple models may be added using additional reports, but only under the same application and brand.",
  },
  {
    question: "How can Sun Certifications India help me?",
    answerHtml:
      "We offer: <br />Full documentation support <br />Lab coordination <br />BIS portal application handling <br />Query resolution and BIS follow-ups <br />Renewal and labeling guidance <br />Compliance assurance for foreign brands via AIR services",
  },
];

const CRSRegistration = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS CRS Registration"
      hero={hero}
      intro={intro}
      sections={sections}
      faqs={faqs}
    />
  );
};

export default CRSRegistration;
