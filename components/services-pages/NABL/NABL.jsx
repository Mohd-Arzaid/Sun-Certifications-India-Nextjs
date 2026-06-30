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
        NABL Lab
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Accreditation Made Easy
    </>
  ),
  headingAs: "h1",
  description:
    "A complete yet concise guide to NABL accreditation for testing, calibration, and medical labs in India.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">NABL Accreditation</SectionHeadingTwo>

    <ServiceParagraph>
      The National Accreditation Board for Testing and Calibration Laboratories
      (NABL) is an autonomous body that provides formal recognition of the
      technical competence of laboratories in the fields of testing,
      calibration, medical diagnostics, and proficiency testing providers
      (PTPs) as per internationally accepted standards.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      National Accreditation Board for Testing and Calibration Laboratories
      (NABL)
    </SectionHeadingTwo>

    <ServiceParagraph>
      The National Accreditation Board for Testing and Calibration Laboratories
      (NABL) is an autonomous body under the Department of Science and
      Technology, Government of India, responsible for providing accreditation
      to laboratories that demonstrate technical competence in accordance with
      internationally recognized standards.
    </ServiceParagraph>

    <ServiceParagraph>
      NABL accredits Testing Laboratories, Calibration Laboratories, Medical
      Laboratories, Proficiency Testing Providers (PTPs), and Reference
      Material Producers (RMPs) across a defined scope of activities.
    </ServiceParagraph>

    <ServiceParagraph>
      Registered under the Societies Act, NABL facilitates third-party
      assessments for laboratories to verify their quality systems and technical
      capabilities, thereby supporting government bodies, industries, and
      associations in ensuring reliable testing and calibration outcomes.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      NABL holds Mutual Recognition Arrangements (MRAs) with global bodies such
      as:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "APLAC (Asia Pacific Laboratory Accreditation Cooperation)",
        "ILAC (International Laboratory Accreditation Cooperation)",
      ]}
    />

    <ServiceParagraph>
      These MRAs enable international acceptance of accredited laboratory
      results, enhancing global trade and compliance.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      NABL Accreditation: Ensuring Technical Competence Through Global Standards
    </SectionHeadingThree>

    <ServiceParagraph>
      Accreditation is the formal attestation by a third-party authority that a
      Conformity Assessment Body (CAB)—such as a testing laboratory, medical
      lab, Proficiency Testing Provider (PTP), or Reference Material Producer
      (RMP)—is technically competent to perform specific tests, calibrations,
      or assessments.
    </ServiceParagraph>

    <ServiceParagraph>
      As India&apos;s trade and industrial sectors become increasingly
      globalized, the Government of India&apos;s liberalized policies have led
      to a growing demand for internationally accepted quality assurance.
      Laboratories and testing facilities are now required to demonstrate
      technical capabilities that align with global standards of competence.
    </ServiceParagraph>

    <ServiceParagraph>
      The National Accreditation Board for Testing and Calibration Laboratories
      (NABL) plays a key role in this framework. It provides third-party
      accreditation to CABs, affirming their compliance with international
      standards and their ability to deliver reliable, high-quality results.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">This includes:</SectionHeadingThree>

    <ServiceList
      points={[
        "Testing and Medical Laboratories: Assessed for specific testing capabilities.",
        "Proficiency Testing Providers (PTPs): Recognized for their ability to evaluate the performance of other labs through inter-lab comparisons.",
        "Reference Material Producers (RMPs): Accredited to produce materials with known properties, which are used to validate test results and calibrate instruments.",
      ]}
    />

    <ServiceParagraph>
      In all cases, accreditation is based on rigorous evaluation by independent
      experts and follows globally recognized protocols such as ISO/IEC 17025,
      ISO 15189, ISO/IEC 17043, and ISO 17034.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Scope of NABL Accreditation</SectionHeadingThree>

    <ServiceParagraph>
      The National Accreditation Board for Testing and Calibration Laboratories
      (NABL) offers accreditation across a wide range of scientific, technical,
      and medical disciplines. Conformity Assessment Bodies (CABs) must apply
      for accreditation under the specific discipline relevant to their
      operations. For detailed eligibility and requirements, applicants should
      refer to the applicable NABL-specific criteria documents.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      NABL currently provides accreditation in the following domains:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Testing Laboratories",
        "Calibration Laboratories",
        "Biological Testing",
        "Chemical Testing",
        "Radiological Testing",
        "Mechanical Testing",
        "Thermal Testing",
        "Optical Testing",
        "Fluid-Flow Testing",
        "Photometry Testing",
        "Electro-Technical Testing",
        "Electrical Testing",
        "Electronics Testing",
      ]}
    />

    <SectionHeadingThree as="h3">Benefits of NABL Accreditation</SectionHeadingThree>

    <ServiceParagraph>
      Obtaining NABL accreditation provides formal recognition of a
      laboratory&apos;s technical competence based on internationally accepted
      standards. This recognition delivers a wide range of benefits to
      laboratories, clients, and end-users alike:
    </ServiceParagraph>

    <ServiceTable
      headers={["Benefit", "Description"]}
      rows={[
        [
          "Enhanced Credibility",
          "Accreditation assures stakeholders of the lab's technical proficiency, leading to greater confidence in test, calibration, or diagnostic reports.",
        ],
        [
          "Improved Operational Efficiency",
          "Encourages better quality management systems, helping laboratories evaluate and enhance their processes and competencies.",
        ],
        [
          "Increased Customer Confidence",
          "Accreditation signals reliability, leading to greater customer trust and satisfaction—potentially attracting more business.",
        ],
        [
          "Wider Market Access",
          "NABL-accredited labs are searchable through the official NABL Directory, making them more discoverable to businesses and regulatory bodies.",
        ],
        [
          "Boosted Domestic & International Acceptance",
          "Accredited lab results are more likely to be accepted globally, reducing the need for duplicate testing.",
        ],
        [
          "Cost & Time Savings",
          "With fewer re-tests required, both clients and laboratories save on time and financial resources.",
        ],
      ]}
    />
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Eligibility Criteria for NABL Accreditation
    </SectionHeadingTwo>

    <ServiceParagraph>
      To be eligible for accreditation from the National Accreditation Board for
      Testing and Calibration Laboratories (NABL), an institution must fulfill
      specific technical and procedural requirements. These ensure that the
      Conformity Assessment Body (CAB) operates with internationally recognized
      quality and competency standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Basic Eligibility Requirements:</SectionHeadingThree>

    <SectionHeadingThree as="h4">1. CAB Status:</SectionHeadingThree>
    <ServiceParagraph>
      The applicant must be a functioning Conformity Assessment Body (CAB)
      actively engaged in relevant services such as:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Laboratory Testing",
        "Calibration",
        "Food Testing",
        "Research & Development",
      ]}
    />

    <SectionHeadingThree as="h4">2. Designated Representative:</SectionHeadingThree>
    <ServiceParagraph>
      A qualified representative must be formally appointed to coordinate the
      NABL application process. This person should be well-versed in the
      CAB&apos;s existing quality systems.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">3. Quality Management System:</SectionHeadingThree>
    <ServiceParagraph>
      The CAB must have a documented Quality Manual that complies with one of
      the following international standards:
    </ServiceParagraph>
    <ServiceList
      points={[
        "ISO/IEC 17025:2017 (for testing & calibration labs)",
        "ISO 15189:2012 (for medical laboratories)",
        "ISO/IEC 17043:2010 (for Proficiency Testing Providers)",
      ]}
    />

    <SectionHeadingThree as="h4">4. Trained Personnel:</SectionHeadingThree>
    <ServiceParagraph>
      The CAB must appoint a Quality/Technical Manager who has undergone a
      minimum of 4 days of formal training in:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Internal Audit Procedures",
        "Quality Management System Requirements",
      ]}
    />

    <SectionHeadingThree as="h4">5. Quality Implementation:</SectionHeadingThree>
    <ServiceParagraph>
      The quality system described in the manual must be fully implemented
      within the organization prior to applying.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">6. On-Site Testing/Calibration:</SectionHeadingThree>
    <ServiceParagraph>
      For on-site testing and calibration labs, the CAB must meet additional
      requirements as defined in NABL 130.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">
      7. Proficiency Testing (PT) Participation:
    </SectionHeadingThree>
    <ServiceParagraph>
      The CAB must demonstrate participation in at least one of the following:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Proficiency Testing Program (PTP) conducted by NABL or an approved international body",
        "Inter-Laboratory Comparison (ILC) if no PTP is available, with a minimum of one test parameter included",
      ]}
    />

    <SectionHeadingThree as="h4">
      8. Internal Audit & Management Review:
    </SectionHeadingThree>
    <ServiceParagraph>The CAB must conduct at least:</ServiceParagraph>
    <ServiceList
      points={["One Internal Audit", "One Management Review"]}
    />
    <ServiceParagraph>before submitting the NABL application</ServiceParagraph>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Essential Documents Required for NABL Accreditation
    </SectionHeadingTwo>

    <ServiceParagraph>
      To initiate and complete the NABL accreditation process, laboratories and
      Conformity Assessment Bodies (CABs) must prepare and submit a series of
      specific documents aligned with the type of service they provide. Below is
      a categorized list of all key NABL documents:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">For Medical Laboratories</SectionHeadingThree>
    <ServiceList
      points={[
        "NABL 112 – Criteria for Accreditation of Medical Laboratories",
        "NABL 153 – Specific Requirements for Medical Laboratories",
        "NABL 155 – Application Form and Checklist for Medical Laboratories",
      ]}
    />

    <SectionHeadingThree as="h3">For Calibration Laboratories</SectionHeadingThree>
    <ServiceList
      points={[
        "NABL 126 – Specific Criteria for Medical Device Calibration",
        "NABL 152 – Guidelines for Calibration Laboratories",
      ]}
    />

    <SectionHeadingThree as="h3">For Testing Laboratories</SectionHeadingThree>
    <ServiceList
      points={[
        "NABL 151 – Requirements and Criteria for Testing Laboratories",
      ]}
    />

    <SectionHeadingThree as="h3">For PTPs and RMPs</SectionHeadingThree>
    <ServiceList
      points={[
        "NABL 180 – Accreditation Criteria for Proficiency Testing Providers (PTPs)",
        "NABL 190 – Accreditation Criteria for Reference Material Producers (RMPs)",
      ]}
    />

    <SectionHeadingThree as="h3">General and Supporting Documents</SectionHeadingThree>
    <ServiceList
      points={[
        "NABL 100 – General Information Brochure about NABL",
        "NABL 160 – Guidelines for Managing the Laboratory Quality System Manual",
        "NABL 219 – Assessment Forms and Checklist for ISO/IEC 17025:2017 Accredited Labs",
      ]}
    />
  </>
);

const ProcedureSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Step-by-Step Methodology to Implement ISO/IEC 17025 for NABL
      Accreditation
    </SectionHeadingTwo>

    <ServiceParagraph>
      Implementing ISO/IEC 17025, or other applicable international standards,
      is a crucial step in achieving NABL accreditation for your laboratory or
      Conformity Assessment Body (CAB). Below is a streamlined guide to the
      entire process:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Submit the Application</SectionHeadingThree>
    <ServiceParagraph>
      The CAB must submit an application to NABL in triplicate (3 copies). Two
      of these copies must include the Quality Manual, which should be prepared
      in accordance with one of the following standards, depending on the
      CAB&apos;s function:
    </ServiceParagraph>
    <ServiceList
      points={[
        "ISO/IEC 17025:2017 (Testing & Calibration Labs)",
        "ISO 15189:2012 (Medical Labs)",
        "ISO/IEC 17043:2010 (Proficiency Testing Providers)",
        "ISO 17034:2016 (Reference Material Producers)",
      ]}
    />

    <SectionHeadingThree as="h3">Step 2: Pay the Applicable Fees</SectionHeadingThree>
    <ServiceParagraph>
      The required fees are outlined in NABL 100. If the CAB prefers not to
      disclose certain information, valid reasons must be submitted in writing
      along with the application.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 3: Acknowledgement & UIN Issuance
    </SectionHeadingThree>
    <ServiceParagraph>
      Upon receiving the application and fee, the NABL Secretariat issues a
      Unique Identification Number (UIN). This number must be used in all
      future communication with NABL.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 4: Pre-Assessment Visit</SectionHeadingThree>
    <ServiceParagraph>
      If the application is in order, a Lead Assessor is appointed to conduct a
      Pre-Assessment Visit to the CAB&apos;s premises. This visit:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Evaluates readiness and quality system implementation",
        "Identifies any discrepancies",
        "Determines the need for further assessments",
      ]}
    />

    <SectionHeadingThree as="h3">
      Step 5: Submission of Pre-Assessment Report
    </SectionHeadingThree>
    <ServiceParagraph>
      The Lead Assessor submits a comprehensive Pre-Assessment Report to the
      NABL Secretariat. A copy is maintained in the official document management
      system, and another is sent to the CAB.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 6: Full Assessment by NABL Team</SectionHeadingThree>
    <ServiceParagraph>
      Once initial issues are resolved, NABL forms an Assessment Team,
      comprising:
    </ServiceParagraph>
    <ServiceList
      points={[
        "The Lead Assessor",
        "Subject-specific Technical Experts",
        "Relevant domain professionals",
      ]}
    />
  </>
);

const ConsultingSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Why Choose Sun Certifications India for NABL Accreditation Services?
    </SectionHeadingTwo>

    <ServiceParagraph>
      At Sun Certifications India, we specialize in providing end-to-end support
      for NABL accreditation through a streamlined and expert-driven approach.
      Our comprehensive consulting services ensure your organization meets
      international quality and technical standards with ease.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Our NABL Consulting Includes:</SectionHeadingThree>

    <SectionHeadingThree as="h4">Training & Awareness-</SectionHeadingThree>
    <ServiceParagraph>
      Empowering your team with in-depth knowledge of ISO/IEC standards and
      quality protocols
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Documentation Support-</SectionHeadingThree>
    <ServiceParagraph>
      Assisting in preparing quality manuals, SOPs, and compliance
      documentation
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Implementation Assistance-</SectionHeadingThree>
    <ServiceParagraph>
      Guiding you through the practical application of quality systems
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Internal Audit Preparation-</SectionHeadingThree>
    <ServiceParagraph>
      Helping you conduct internal audits aligned with NABL requirements
    </ServiceParagraph>

    <SectionHeadingThree as="h4">
      Accreditation Process Management-
    </SectionHeadingThree>
    <ServiceParagraph>
      Full support during the application, assessment, and follow-up phases
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Documentation Support Under Quality Management System (QMS)-
    </SectionHeadingThree>

    <ServiceParagraph>
      As part of our QMS implementation assistance, we help organizations prepare
      and structure essential documentation required for NABL accreditation. Our
      support includes:
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Quality Manual-</SectionHeadingThree>
    <ServiceParagraph>
      Comprehensive documentation outlining your organization&apos;s quality
      policies, objectives, and system structure in alignment with ISO/IEC
      standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">
      Procedures & Functional Formats
    </SectionHeadingThree>
    <ServiceParagraph>
      Detailed Standard Operating Procedures (SOPs), test methods, system
      workflows, and format templates necessary for consistent and compliant
      operations.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Work/Test Instructions</SectionHeadingThree>
    <ServiceParagraph>
      Clear and practical instructions for performing routine tests or operational
      tasks to ensure accuracy, repeatability, and staff consistency.
    </ServiceParagraph>

    <ServiceParagraph>
      Our expert team ensures that all documentation meets NABL requirements and
      international standards, providing you with a solid foundation for successful
      accreditation and ongoing compliance.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  { id: "procedure", label: "Procedure", section: <ProcedureSection /> },
  { id: "consulting", label: "Consulting", section: <ConsultingSection /> },
];

const faqs = [
  {
    question: "What is NABL Accreditation?",
    answer:
      "NABL Accreditation is a formal recognition provided by the National Accreditation Board for Testing and Calibration Laboratories to laboratories that demonstrate technical competence and adherence to international standards like ISO/IEC 17025.",
  },
  {
    question: "Who needs NABL Accreditation?",
    answer:
      "Any testing, calibration, medical laboratory, or proficiency testing provider (PTP) seeking national and international credibility, compliance, and recognition should pursue NABL accreditation.",
  },
  {
    question: "What are the main standards under NABL?",
    answerHtml:
      "• ISO/IEC 17025:2017 (Testing & Calibration Labs)<br />• ISO 15189:2012 (Medical Labs)<br />• ISO/IEC 17043:2010 (PTPs)<br />• ISO 17034:2016 (RMPs)",
  },
  {
    question: "Is NABL accreditation mandatory in India?",
    answer:
      "While not legally mandatory, many regulatory authorities and clients require NABL accreditation for compliance and reliability in test results.",
  },
  {
    question: "What is the validity of NABL accreditation?",
    answer:
      "NABL accreditation is typically valid for two years, subject to periodic surveillance assessments and continuous compliance.",
  },
  {
    question: "How long does it take to get NABL accredited?",
    answer:
      "The process usually takes between 6 to 12 months, depending on readiness, documentation, corrective actions, and audit timelines.",
  },
  {
    question: "What is a Conformity Assessment Body (CAB)?",
    answer:
      "A CAB is an organization performing testing, calibration, medical diagnostics, or producing reference materials or proficiency testing programs.",
  },
  {
    question: "What is the role of ISO/IEC 17025 in NABL?",
    answer:
      "ISO/IEC 17025 is the primary international standard used to assess the technical competence of testing and calibration labs under NABL.",
  },
  {
    question: "What are the key documents needed for NABL application?",
    answerHtml:
      "Important documents include:<br />• NABL 100 (General Info)<br />• NABL 151, 152, 153 (Lab-specific criteria)<br />• NABL 155 (Application)<br />• NABL 160 (Quality system guidelines)<br />• NABL 219 (Assessment forms)",
  },
  {
    question: "What is a Quality Manual?",
    answer:
      "A Quality Manual outlines the lab's commitment to quality, structure, documented procedures, and compliance with ISO standards.",
  },
  {
    question: "What is a shadow audit?",
    answer:
      "A shadow audit (or pre-certification audit) is a mock assessment conducted to identify gaps and non-conformities before the final NABL audit.",
  },
  {
    question: "What is method validation in ISO/IEC 17025?",
    answer:
      "Method validation ensures that testing methods used by the lab are accurate, reliable, and suitable for the intended purpose.",
  },
  {
    question: "What is UOM and why is it important?",
    answer:
      "Unit of Measurement (UOM) standardizes how measurements are expressed and ensures consistency and traceability across labs.",
  },
  {
    question: "What is a management review meeting (MRM)?",
    answer:
      "MRM is a formal meeting required under ISO standards to evaluate the effectiveness of the quality system and plan for continual improvement.",
  },
  {
    question: "What is internal audit under NABL?",
    answer:
      "An internal audit is a self-assessment process where the lab checks its own compliance with NABL standards before the external audit.",
  },
  {
    question:
      "What happens if non-conformities (NCs) are found during the audit?",
    answer:
      "The CAB must take corrective actions within 60 days and provide evidence to the NABL to proceed toward accreditation.",
  },
  {
    question: "How often is surveillance conducted after accreditation?",
    answer:
      "Surveillance is typically conducted annually or as scheduled by NABL to ensure continued compliance with the accreditation standards.",
  },
  {
    question: "Can I appeal a decision if NABL rejects my application?",
    answer:
      "Yes, decisions can be appealed to the Director of NABL, and you may be given a chance to reapply or address discrepancies.",
  },
  {
    question: "Will my lab be listed publicly once accredited?",
    answer:
      "Yes, accredited labs are listed in the NABL online directory, which improves visibility and trust among clients and regulators.",
  },
];

const NABL = () => (
  <ServicePageLayout
    breadcrumbLabel="NABL Lab Accreditation"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default NABL;
