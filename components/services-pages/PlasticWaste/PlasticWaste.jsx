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
        Plastic Waste
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Certification and Compliance
    </>
  ),
  headingAs: "h1",
  description:
    "Required for plastic producers, recyclers & raw material manufacturers to ensure eco-friendly disposal. Valid for 5 years, processed in 6-8 weeks.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      EPR Registration for Plastic Packaging Waste in India
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">What is EPR Registration?</SectionHeadingThree>

    <ServiceParagraph>
      EPR stands for Extended Producers Responsibility. Extended Producer
      Responsibility (EPR) is a significant environmental policy introduced under
      the Plastic Waste Management Rules, 2016, by the Ministry of Environment,
      Forest and Climate Change (MoEFCC). It aims to make manufacturers,
      importers, and brand owners accountable for the management of plastic
      waste, especially from packaging materials.
    </ServiceParagraph>

    <ServiceParagraph>
      The entities who introduce plastic waste in India have to apply for EPR
      registration. These entities have to register themselves with the Central
      Pollution Control Board (CPCB) and provide accurate information about the
      generation and consumption of plastic packaging. Additionally the registered
      entities will be given targets for recycling of plastic packaging
      introduced and also ensuring its safe disposal.
    </ServiceParagraph>
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo as="h2">Why is EPR Crucial for India?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Addressing plastic pollution through producer accountability.
    </SectionHeadingThree>

    <ServiceParagraph>
      The mass production of plastic that began six decades ago has created a
      plastic generation of around 8.3 billion metric tons and most of it ends
      up as plastic waste. Around 79% of the plastic waste that is generated
      settles in the land fills of our planet which eventually ends up in the
      ocean. If this situation is not handled responsibly then by 2050 there will
      be more plastic in the ocean than fishes. Plastic packaging is a significant
      chunk of the plastic waste generated because it is often designed for single
      use and then discarded. Once plastic packaging is discarded it takes around
      400 years to degrade. Most of the plastic packaging generated decades ago
      still exists on our planet and has now become a global priority to
      drastically minimize the use of it.
    </ServiceParagraph>

    <ServiceParagraph>
      Considering the facts discussed, it is very important for each country to
      make laws towards limiting the use of plastic, recycling the plastic waste
      and ensuring its safe disposal. Therefore the government introduced Extended
      Producers Responsibility (EPR) as a part of Plastic Waste Management Rules,
      2016.
    </ServiceParagraph>
  </>
);

const ComplianceSection = () => (
  <>
    <SectionHeadingTwo as="h2">Who Needs EPR Registration?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Required for Producers, Importers, Brand Owners, and Plastic Waste
      Processors.
    </SectionHeadingThree>

    <ServiceParagraph>
      As per the EPR guidelines, it is necessary for all Producers, Importers and
      Brand Owners (PIBOs) to get EPR Registration. Additionally Plastic Waste
      Processors (PWPs) are also required to get EPR registration.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Producers (P):</SectionHeadingThree>
    <ServiceParagraph>
      As defined in the EPR guidelines, a producer is an entity that is involved
      in manufacturing of plastic packaging only.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Importers (I):</SectionHeadingThree>
    <ServiceParagraph>
      Importer is an entity that imports either plastic packaging or any product
      that is wrapped in plastic packaging.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Brand Owners (BO):</SectionHeadingThree>
    <ServiceParagraph>
      Brand Owner is an entity who sells any commodity wrapped in plastic
      packaging under any registered brand label or trademark.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Plastic Waste Processors (PWPs):</SectionHeadingThree>
    <ServiceParagraph>
      Plastic waste processor is an entity that recycles plastic waste and is
      engaged in safe disposal of plastic waste.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Types of Plastic Packaging Under EPR
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      CPCB classifies plastic packaging into four categories for EPR compliance.
    </SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={["Category", "Type", "Description"]}
      rows={[
        [
          "Category I",
          "Rigid Plastic Packaging",
          "Used for food, beverages, pharmaceuticals, cosmetics, etc.",
        ],
        [
          "Category II",
          "Flexible Plastic Packaging",
          "Includes carry bags, wraps, pouches; made of high-grade polymers",
        ],
        [
          "Category III",
          "Multi-layered Plastic (MLP)",
          "Combines multiple materials like PET, PE, foil, paper",
        ],
        [
          "Category IV",
          "Plastic Sheets & Films",
          "Used in bags, sashes, and customized plastic films",
        ],
      ]}
    />

    <SectionHeadingTwo as="h2">What Are EPR Targets?</SectionHeadingTwo>

    <ServiceParagraph>
      EPR targets are specific goals set by CPCB to ensure that producers,
      importers, and Brand Owners who manufacture, import or sell plastic
      packaging or products wrapped in plastic packaging take responsibility for
      recycling or its eco-friendly disposal. It basically gives an exact amount
      of plastic that an entity should recycle or dispose of in a particular
      financial year.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      EPR Target for Producer and Importers
    </SectionHeadingTwo>

    <ServiceParagraph>
      A producer is someone who manufactures plastic packaging and an importer is
      someone who imports plastic packaging or products that are wrapped in
      plastic packaging. EPR target is majorly dependent on Gross plastic waste
      generated by a producer or an importer.
    </ServiceParagraph>

    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 my-4">
      <ServiceParagraph>
        <strong>Gross Plastic Waste Generated =</strong>
      </ServiceParagraph>
      <ServiceList
        points={[
          "(Avg. weight of plastic packaging manufactured/imported in the last 2 FYs) +",
          "(Avg. pre-consumer plastic waste generated) -",
          "(Plastic packaging sold to other EPR-registered entities)",
        ]}
      />
    </div>

    <ServiceTable
      className="mt-2"
      headers={[
        "Financial Year",
        "EPR Targets for Producers and Importers",
      ]}
      rows={[
        ["FY 2021-22", "25% of Gross Plastic Waste Generated"],
        ["FY 2022-23", "70% of Gross Plastic Waste Generated"],
        ["FY 2023-24", "100% of Gross Plastic Waste Generated"],
      ]}
    />

    <ServiceParagraph>
      In the event that a Producer sells their manufactured plastic packaging
      materials to an EPR registered Brand Owner, the corresponding quantity of
      plastic packaging material sold will be reduced from the producer&apos;s target
      and transferred to the same EPR registered brand owner&apos;s target. This
      logic also holds true for Importers. If an importer sells plastic packaging
      or products that are wrapped in plastic packaging to an EPR registered brand
      owner, the equivalent target will likewise be transferred to the same brand
      owner and reduced from the target of the importer. But this logic does not
      apply to a brand owner. Brand owners can not pass on their target to any
      other registered entity.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">EPR Target for Brand Owners</SectionHeadingTwo>

    <ServiceParagraph>
      A brand owner is someone who buys plastic wrap products or plastic packaging
      locally and sells it domestically or exports it under a registered brand
      name. EPR target for a brand owner is majorly dependent on the Gross
      Plastic Waste Generated.
    </ServiceParagraph>

    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 my-4">
      <ServiceParagraph>
        <strong>Gross Plastic Waste Generated =</strong>
      </ServiceParagraph>
      <ServiceList
        points={[
          "(Avg. weight of plastic packaging manufactured/imported in the last 2 FYs) +",
          "(Avg. pre-consumer plastic waste generated)",
        ]}
      />
    </div>
  </>
);

const DocumentsSection = () => (
  <>
    <SectionHeadingTwo as="h2">EPR Obligations Explained</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      EPR obligations represent distinct sub-targets within the broader framework
      of EPR targets.
    </SectionHeadingThree>

    <ServiceParagraph>
      There are four primary categories of EPR Obligations, each allocated to
      Producers, Importers, and Brand Owners following EPR Registration:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">1. End of Life Disposal</SectionHeadingThree>
    <ServiceParagraph>
      The plastic that cannot be recycled should be sent for end of life
      disposal. Currently the end of life of disposal of plastics can happen in
      the following ways: Usage in road construction, Waste to energy and Waste
      to oil as per relevant guidelines issued by CPCB from time to time.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      2. Minimum Level of Recycling Target
    </SectionHeadingThree>
    <ServiceParagraph>
      This target will be applicable to importers from financial year 2024-2025.
      The importer shall ensure minimum level of recycling excluding end of life
      disposal of plastic packaging waste collected under EPR target.
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={[
        "Plastic Packaging Category",
        "2024-25",
        "2025-26",
        "2026-27",
        "2027-28 and onwards",
      ]}
      rows={[
        ["Category I", "50%", "60%", "70%", "80%"],
        ["Category II", "30%", "40%", "50%", "60%"],
        ["Category III", "30%", "40%", "50%", "60%"],
        ["Category IV", "50%", "60%", "70%", "80%"],
      ]}
    />

    <SectionHeadingThree as="h3">
      3. Obligation for use of Recycled Content
    </SectionHeadingThree>
    <ServiceParagraph>
      This target will be applicable to importers from the financial year
      2025-26. The importer shall ensure use of recycled plastic in the imported
      plastic packaging categorywise as shown in the table.
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={[
        "Plastic Packaging Category",
        "2021-25",
        "2025-26",
        "2026-27",
        "2027-28 and onwards",
      ]}
      rows={[
        ["Category I", "30%", "40%", "50%", "60%"],
        ["Category II", "10%", "10%", "20%", "20%"],
        ["Category III", "5%", "5%", "10%", "10%"],
      ]}
    />

    <SectionHeadingThree as="h3">
      4. Obligation to reuse which only applies to brand owners
    </SectionHeadingThree>

    <SectionHeadingTwo as="h2">
      Environmental Compensation for Non-Compliance
    </SectionHeadingTwo>

    <ServiceParagraph>
      If an importer exceeds his target and recycles more than the given target
      then in this case the importer will get a surplus EPR certificate which he
      can transfer or sell it to another entity who has not met the target at the
      end of the financial year. Another way to meet the target is buying an EPR
      certificate of the value equivalent to the target from any other entity who
      has surplus.
    </ServiceParagraph>

    <ServiceParagraph>
      If an importer does not meet the target an environmental compensation (EC)
      will be imposed on the importer. Once the importer pays the EC, the
      unfulfilled target for that year will be carried forward to the next year
      for a period of three years. A certain amount of EC shall be returned or
      refunded depending on how early the pending target is met.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Environmental Compensation Return Schedule
    </SectionHeadingTwo>

    <ServiceParagraph>
      Partial refunds of EC are available if targets are later fulfilled:
    </ServiceParagraph>

    <ServiceTable
      className="mt-2"
      headers={["Time of Compliance", "EC Refund"]}
      rows={[
        ["Within 1 year", "75%"],
        ["Within 2 years", "60%"],
        ["Within 3 years", "40%"],
      ]}
    />
  </>
);

const ConsultancySection = () => (
  <>
    <SectionHeadingTwo as="h2">EPR Registration Process</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Step-by-step procedure for EPR registration and compliance.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">Step-by-Step Procedure</SectionHeadingThree>

    <ServiceList
      points={[
        "Prepare Documents",
        "Submit Initial Application & KYC on EPR Portal",
        "Pay Application Fee",
        "Address Deficiencies (within 15 days)",
        "Receive Approval & Assigned Targets",
        "Start Complying & Receive EPR Certificate",
      ]}
    />

    <SectionHeadingThree as="h3">Fee Structure</SectionHeadingThree>

    <ServiceTable
      className="mt-2"
      headers={[
        "Sr. No.",
        "Plastic Waste Generation in Tonnes per annum",
        "Application Fees (INR)",
      ]}
      rows={[
        ["1", "Less than 1,000", "10,000"],
        ["2", "Between 1,000 - 10,000", "20,000"],
        ["3", "Greater than 10,000", "50,000"],
      ]}
    />

    <SectionHeadingTwo as="h2">
      Documents Required for EPR Registration
    </SectionHeadingTwo>

    <ServiceList
      points={[
        "Company PAN Card",
        "Company CIN",
        "Company GST Certificate",
        "Company IEC",
        "Authorized Person's PAN Card",
        "Authorized Person's Aadhaar",
        "Details (Type & Quantity) of products Imported",
        "Picture of packaged covering",
        "Industrial Registration Certificate i.e. (IEM) or MSME Certificate",
        "Total Capital Invested Amount in Crores (Format will be shared)",
        "Total Quantity of Plastic Packaging Imported in the preceding two financial years",
        "Thickness (in microns) of the plastic packaging imported",
        "Invoice details of the Imported products for the preceding two financial years",
        "Invoice details of local sales of the preceding two financial years",
      ]}
    />

    <SectionHeadingTwo as="h2">Submitting Annual Returns</SectionHeadingTwo>

    <ServiceParagraph>
      Submitting Annual Returns plays a major part in EPR Compliance and
      basically involves three activities: 1. Fulfilling the EPR Target: Recycling
      the plastic waste equivalent to the target or Buy the certificates or credit
      points equivalent to the target, 2. Updating Procurement and Sales Data, 3.
      Payment of Annual Processing Fee which is 25% of the application fees paid
      during EPR registration.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      One of the key aspects of plastic waste management in India is incorporating
      the Extended Producer Responsibility (EPR) System into the plastic waste
      management framework. EPR covers a wide range of mechanisms that integrate the
      &apos;polluter pays&apos; principle and business liability in the management of
      plastic waste produced by their products. This is a key step in transitioning
      to a circular economy. In the CPCB EPR Portal, the CPCB has designed an EPR
      framework that assists in the identification of various stakeholders and
      offers modules for enhancing transparency, accountability, and compliance for
      each of the waste management stakeholders. India is still in the early phases
      of implementing the EPR framework; still, it has the ability to greatly
      improve the sustainability of India&apos;s plastic waste management in the
      coming years.
    </ServiceParagraph>

    <ServiceParagraph>
      Sun Certifications is a pioneer in the Indian market for assisting businesses
      in obtaining Extended Producer Responsibility (EPR) registration and for
      guiding businesses in meeting the various legal requirements associated with
      the management of plastic waste in India. As one of the industry leaders in
      assisting with the management of EPR compliance, Sun Certifications aids
      producers, importers, and brand owners (PIBOs) in obtaining EPR registration
      in compliance with the Indian country&apos;s Plastic Waste Management Rules. In
      addition, Sun Certifications offers entities assistance with registration,
      compliance management, and responsible waste management to help improve the
      environment.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  { id: "compliance", label: "Compliance", section: <ComplianceSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "documents", label: "Documents", section: <DocumentsSection /> },
  {
    id: "consultancy",
    label: "Consultancy",
    section: <ConsultancySection />,
  },
];

const faqs = [
  {
    question: "What is Extended Producer Responsibility (EPR)?",
    answer:
      "Extended Producer Responsibility (EPR) is a type of policy in which producers take on responsibility of managing environmental impact of their products, including disposal and management of product after the consumer is done using it.",
  },
  {
    question: "Which entities are required to register on CPCB EPR Portal?",
    answerHtml: `The following entities must register on the CPCB EPR portal and obtain EPR certificates:<br /><br /><strong>1. Producers</strong><br /><strong>2. Importers</strong><br /><strong>3. Brand Owners</strong><br /><strong>4. Plastic Waste Processors</strong> involved in:<ul class="ml-4 mt-2 space-y-1"><li>• Recycling</li><li>• Waste to Energy</li><li>• Waste to Oil</li><li>• Industrial Composting</li></ul>`,
  },
  {
    question: "Who is required to register with CPCB / SPCB / PCC?",
    answerHtml: `<strong>• PIBOs operating in one or two States/UTs</strong> are required to register with State Pollution Control Board (SPCB) or Pollution Control Committee (PCC).<br /><br /><strong>• PIBOs in more than two States/UTs</strong> are required to register with the Central Pollution Control Board (CPCB).`,
  },
  {
    question: "What are documents required for KYC for registration of PIBOs?",
    answerHtml: `The following documentation is necessary for KYC while registering:<br /><br /><strong>1. PDF versions of company's PAN, CIN, and GST certificates</strong><ul class="ml-4 mt-2 space-y-1"><li>• GST invoices covering all States/UTs that PIBO service are to be added.</li></ul><br /><strong>2. A PDF version of Authorized Person's PAN and Aadhaar.</strong>`,
  },
  {
    question: "Which are plastic packaging categories covered under EPR?",
    answerHtml: `The following plastic packaging categories fall under EPR:<br /><br /><strong>1. Category I:</strong> Rigid plastic packaging.<br /><br /><strong>2. Category II:</strong> Flexible plastic packaging, including:<ul class="ml-4 mt-2 space-y-1"><li>• Individual or composite multi-layer plastics (of varying plastic types)</li><li>• Plastic sheets, covers, carry bags, sachets, and pouches</li></ul><br /><strong>3. Category III:</strong> Multilayer plastic packaging that contains:<ul class="ml-4 mt-2 space-y-1"><li>• At least one layer of plastic, and</li><li>• At least one layer of material that is not plastic</li></ul><br /><strong>4. Category IV:</strong> Compostable plastic packaging that includes:<ul class="ml-4 mt-2 space-y-1"><li>• Compostable plastic sheets, and carry bags.</li></ul>`,
  },
  {
    question: "What is Pre-consumer Plastic Packaging Waste?",
    answerHtml: `Pre-consumer plastic packaging waste is defined as plastic waste that occurs before reaching the end-use consumer. This includes:<ul class="ml-4 mt-2 space-y-1"><li>• Rejected or discarded plastic packaging materials made during manufacturing.</li><li>• Lost or discarded packaging materials created during the packaging of products.</li></ul>`,
  },
  {
    question: "What is Meaning of Post-consumer Plastic Packaging Waste?",
    answer:
      "Post-consumer plastic packaging waste is waste created after a customer has used packaging for its intended use and does not have any further need for the packaging.",
  },
  {
    question: "What are EPR Targets for Producers and Importers?",
    answer:
      "The EPR target relates to the volume of plastic packaging placed onto the market by PIBO. Targets and obligations are detailed in Section 7 of the EPR Guidelines.",
  },
  {
    question: "What if a PIBO has an in-house recycling unit?",
    answerHtml: `If a PIBO has its own recycling unit:<ul class="ml-4 mt-2 space-y-1"><li>• The entity will have to register separately as a PIBO and as a Recycler</li><li>• Both registrations will require relevant supporting documents</li><li>• EPR credits are only able to be given to recyclers</li><li>• There has to be a record of credit transfer from recycler to PIBO</li></ul>`,
  },
  {
    question: "What documents are needed if an entity falls under multiple categories?",
    answerHtml: `If an entity falls under multiple sub-categories:<ul class="ml-4 mt-2 space-y-1"><li>• It will be necessary to have a separate email ID for each category during registration</li><li>• The same Company KYC documents (PAN, GST, CIN) will apply to all categories</li></ul>`,
  },
];

const PlasticWaste = () => (
  <ServicePageLayout
    breadcrumbLabel="Plastic Waste Certification and Compliance"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default PlasticWaste;
