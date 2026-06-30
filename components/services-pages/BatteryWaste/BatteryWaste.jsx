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
        EPR Registration for
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Battery Waste Management
    </>
  ),
  headingAs: "h1",
  description:
    "Get EPR registration for battery waste management. Expert assistance for EPR authorization for battery waste, battery waste EPR compliance, and CPCB portal registration for all battery types",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      EPR Registration for Battery Waste Management in India
    </SectionHeadingTwo>

    <ServiceParagraph>
      With the recent focus on digitalization, clean energy, and electric
      mobility, the demand for batteries in every sector has skyrocketed.
      Batteries are now everywhere, found in mobile phones, laptops, electric
      vehicles, solar energy storage systems, industrial apparatus, and even
      medical devices. While this transition is supportive of underlying
      sustainability and reduces dependency on fossil fuels, it also poses a
      significant environmental hazard in the form of battery waste.
    </ServiceParagraph>

    <ServiceParagraph>
      A waste battery is composed of highly toxic and environmentally harmful
      decomposition products. These include lead, lithium, cadmium, mercury,
      and nickel, among others. These materials, if untreated, threaten to
      poison the soil, water, and the air we breathe, and therefore, endanger
      our lives and the lives of all living beings on the planet. Given the
      exponential expansion of battery consumption in India, the waste
      counterpart of discarded batteries will also increase significantly in
      the future.
    </ServiceParagraph>

    <ServiceParagraph>
      India&apos;s government replaced the earlier Battery (Management &amp;
      Handling) Rules, 2001 with the new Battery Waste Management Rules, 2022,
      acknowledging the importance of effective regulation. These new rules
      focus on Extended Producer Responsibility (EPR), which means producers
      must take responsibility for the proper disposal and management of
      battery waste.
    </ServiceParagraph>

    <ServiceParagraph>
      This article is meant to guide readers through the complexities of EPR
      registration for battery waste management to the extent that it is
      comprehensible and straightforward. This article will also cover the
      legal scope, applicability, registration steps, documents required,
      compliance, benefits, and the functions of the EPR portal for battery
      waste management.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      What is Battery Waste and Why is it Harmful?
    </SectionHeadingTwo>

    <ServiceParagraph>
      Battery waste is a term that describes used, discarded, or abandoned
      batteries. Batteries may contain a variety of chemicals that are
      extremely hazardous. Batteries that are discarded and leak chemicals
      into the environment can cause detrimental changes to ecosystems and
      can cause environmental problems that can last for generations.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Major Environmental Concerns Related to Battery Waste
    </SectionHeadingTwo>

    <ServiceList
      points={[
        "Heavy Metal Leakage - Contamination of soils.",
        "Groundwater Contamination - Polluted water sources become water for consumption.",
        "Improper disassembly or open incineration - Activated Air Pollution",
        "Neurological issues, breathing difficulties, and organ failure - Hazards Health",
        "Especially with lithium-ion batteries - Battery Explosions and Fire",
      ]}
    />

    <ServiceParagraph>
      Without proper monitoring and recycling systems, battery debris can be
      an underestimated but serious environmental risk. This is the reason
      battery waste EPR as a concept has gained importance in India&apos;s waste
      management policy.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      What are the Battery Waste Management Rules, 2022?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The rules in the Battery Waste Management Rules 2022 were published by
      the Ministry of Environment, Forest and Climate Change (MoEF&amp;CC) on
      August 22, 2022. Each of these rules focuses on the management of
      waste batteries in a manner that is environmentally sound, focused on
      accountability, and incorporates the principles of traceability and
      circular economy.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Goals of the Rules</SectionHeadingThree>

    <ServiceList
      points={[
        "Encourage the safe collection, recycling, and refurbishing of used batteries",
        "Minimize the negative effects of battery waste on the environment and human health.",
        "Implement digital tracking via the EPR portal for battery waste management",
        "Build upon the principle of Extended Producer Responsibility.",
        "Foster the recovery and recycling of valuable materials in spent batteries",
      ]}
    />

    <ServiceParagraph>
      These rules are applicable to all of India and cover all primary types
      of batteries in the commercial, industrial, and consumer sectors.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Types of Batteries Covered Under the Rules
    </SectionHeadingTwo>

    <ServiceParagraph>
      The Battery Waste Management Rules, 2022 cover all types of batteries,
      including:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Portable Batteries: batteries used in mobile devices, laptops, remotes, toys, and power banks.",
        "Automotive Batteries: batteries for ignition and power in conventional vehicles.",
        "Electric Vehicle (EV) Batteries: batteries used in electric cars, two-wheelers, buses, and commercial electric vehicles.",
        "Industrial Batteries: batteries found in telecom towers, data centers, solar energy systems, and industrial equipment.",
      ]}
    />

    <SectionHeadingThree as="h3">Exempted Batteries</SectionHeadingThree>

    <ServiceParagraph>
      The rules do not apply to batteries used in:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Equipment relating to important security interests",
        "Arms, ammunition, and other wartime materials",
        "Equipment manufactured exclusively for military applications",
        "Space craft designed to go beyond the Earth's atmosphere",
      ]}
    />

    <SectionHeadingTwo as="h2">
      What is Extended Producer Responsibility (EPR) with regard to Battery
      Waste?
    </SectionHeadingTwo>

    <ServiceParagraph>
      With Extended Producer Responsibility (EPR), producers are assigned
      responsibility for the entire lifecycle of their products,
      specifically after the consumer is done with the products.
    </ServiceParagraph>

    <ServiceParagraph>
      According to the Battery Waste Management Rules, EPR in relation to
      battery waste means that the battery producers are liable for the
      collection, recycling, refurbishment, and safe disposal of any used
      batteries that are the result of, or are the waste from their
      products.
    </ServiceParagraph>

    <ServiceParagraph>
      Put simply, if a company sells batteries in the Indian market, it is
      obligated to deal with the consequences of the batteries when they are
      disposed of as waste.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Who is Considered a Producer in the Battery Waste EPR?
    </SectionHeadingTwo>

    <ServiceParagraph>
      According to the law, a producer can mean any entity that:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Produces and retails batteries under their own label",
        "Distributes batteries produced by other manufacturers under their label",
        "Sells batteries or battery-containing devices from other manufacturers",
        "Engages in the sale of refurbished batteries",
      ]}
    />

    <ServiceParagraph>
      With this definition, battery EPR applies to the respective
      manufacturers, brand owners, and importers.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Significance of EPR Registration on Battery Waste Management
    </SectionHeadingTwo>

    <ServiceParagraph>
      EPR registration for battery waste management is a necessity, and
      legally so. It is a necessity for producers based in India.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Why Is EPR Registration So Important?
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Legislative approval to manufacture, distribute, or import batteries",
        "Adherence to set standards in the protection of the environment",
        "The avoidance of potential penalties or disruptions in business operations",
        "Participation in the Circular Economy and sustainability objectives",
        "Improved brand image and taking social responsibility.",
      ]}
    />

    <ServiceParagraph>
      For the absence of EPR authorization for battery waste management,
      producers could be subjected to legal action and be penalized, or they
      could directly be limited in operations.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Battery Waste EPR Explained</SectionHeadingTwo>

    <ServiceParagraph>
      EPR on battery waste consists of a more or less structured
      relationship between producers, recyclers, refurbishers, and the
      regulators.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Important Features of the EPR Framework
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Battery waste management has to be EPR portal bound",
        "Collection and recycling targets for each EPR cycle",
        "Interactions with recyclers and refurbishers",
        "Preparation and submission of compliance and reporting returns",
        "Batteries waste tracking movement",
      ]}
    />

    <ServiceParagraph>
      This framework achieves transparency, accountability, and tracking.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      EPR Portal for Battery Waste Management
    </SectionHeadingThree>

    <ServiceParagraph>
      The EPR portal for battery waste management is a simplified system
      created by the Central Pollution Control Board (CPCB) where each
      participant can register without any complications. Reporting and
      compliance can be tracked for each participant.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">EPR Portal Features</SectionHeadingThree>

    <ServiceList
      points={[
        "Producers, recyclers, and refurbishers can register online",
        "EPR plans and targets can be submitted",
        "Quarterly and yearly returns can be filed",
        "EPR certificates can be issued",
        "Battery waste can be monitored",
      ]}
    />

    <ServiceParagraph>
      Although the portal was initially under development, it is designed to
      bring complete digital transparency to battery waste EPR compliance.
    </ServiceParagraph>
  </>
);

const ScopeSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Registration of Producers Under Battery Waste Management Rules
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">Who Needs to Register?</SectionHeadingThree>

    <ServiceParagraph>
      Any producer engaged in the manufacture, sale, or import of batteries
      must obtain EPR registration for battery waste management from CPCB.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Legal Basis</SectionHeadingThree>

    <ServiceParagraph>
      Registration via the CPCB-managed centralized system is compulsory per
      the Battery Waste Management Rules, 2022, Rule 4.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Documents for EPR Battery Waste Registration:
    </SectionHeadingTwo>

    <ServiceList
      points={[
        "GST Registration Certificate (Self-attested)",
        "Company PAN Card",
        "Company's CIN number",
        "Company TIN number (if applicable)",
        "Authorized signatory's Aadhaar Card",
        "Authorization letter",
        "Information about batteries sold in the market",
      ]}
    />

    <SectionHeadingTwo as="h2">
      Recyclers and Refurbishers Registration
    </SectionHeadingTwo>

    <ServiceParagraph>
      Battery recyclers and refurbishers, in particular, must register with
      the SPCB (State Pollution Control Board) via the centralized portal.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Main Points</SectionHeadingThree>

    <ServiceList
      points={[
        "Registration only once",
        "Meets the specified environmental standards",
        "Adherence to the quarterly return policy in Form 4",
      ]}
    />

    <ServiceParagraph>
      The returns must provide information about:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Collected batteries (used) (in quantity)",
        "Recycled or refurbished (in quantity)",
        "Generated and disposed (in quantity) hazardous waste",
      ]}
    />
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      EPR Registration for Battery Waste Management: Application Process
    </SectionHeadingTwo>

    <ServiceParagraph>
      Prior to the complete functionality of the centralized portal, the
      CPCB accepted offline registrations. The procedure is typically as
      follows:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 1: Preparation of Documents</SectionHeadingThree>

    <ServiceParagraph>
      All business details and documents are prepared as directed by the CPCB.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 2: Submission of Application</SectionHeadingThree>

    <ServiceParagraph>
      The application is sent to CPCB by email and in a hard copy. The application form is Form1(A).
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 3: Review of Application</SectionHeadingThree>

    <ServiceParagraph>
      CPCB will assess the application and may reach out for some questions or to obtain further documents.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 4: Registration Approval</SectionHeadingThree>

    <ServiceParagraph>
      Registration is approved for the first time for a period of 6 months, and this is extendable via the online portal.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      EPR Compliance Obligations and Targets
    </SectionHeadingTwo>

    <ServiceParagraph>
      Based on the number of batteries placed in the market, producers must
      comply with specific EPR targets.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Compliance includes</SectionHeadingThree>

    <ServiceList
      points={[
        "Waste batteries collection",
        "Recycling with registered recyclers",
        "Recovered materials use",
        "Periodic Compliance Reporting",
      ]}
    />

    <ServiceParagraph>
      Targets that aren&apos;t achieved in time lead to penalties or restrictions
      in place.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Penalties for Non-Compliance</SectionHeadingTwo>

    <ServiceParagraph>
      If you do not follow the battery waste EPR regulations, you might face
      the following penalties:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Payment of environmental compensation",
        "EPR authorizations are suspended or canceled",
        "Environmental laws are enforced",
        "Restriction of business activities",
      ]}
    />

    <SectionHeadingTwo as="h2">
      Benefits of Battery Waste EPR Registration
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">Environmental gains</SectionHeadingThree>

    <ServiceList
      points={[
        "Handles waste and pollution less",
        "Handles waste but no pollution",
        "Handles hazardous waste, and encourages recycling and reuse",
      ]}
    />

    <SectionHeadingThree as="h3">Business gains</SectionHeadingThree>

    <ServiceList
      points={[
        "Legal risk and no compliance",
        "Corporate reputation is enhanced",
        "Sustainability-oriented markets provide increased business",
      ]}
    />

    <SectionHeadingTwo as="h2">
      Role of Professional Consultants in Battery EPR Compliance
    </SectionHeadingTwo>

    <ServiceParagraph>
      The process of EPR registration for Waste Management Business
      Batteries is complicated because of the numerous rules, documents, and
      reports that need to be maintained and submitted. Compliance
      consultants offer to manage the following:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Documentation and submission",
        "Communications with the CPCB and SPCBs",
        "Compliance reports and renewals within deadlines",
        "Compliance risks management",
      ]}
    />

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The use of batteries in India is currently skyrocketing, and that
      makes the need for effective management of battery waste a crucial
      social and environmental responsibility. The Battery Waste Management
      Rules, 2022 is a robust regulation based on Extended Producer
      Responsibility that holds producers accountable for the waste that
      their products create.
    </ServiceParagraph>

    <ServiceParagraph>
      It&apos;s super important for all battery makers, importers, and brand
      owners to get proper registration and get EPR authorization for
      battery waste management. Following battery EPR guidelines helps
      safeguard the environment, aids in resource recovery, and facilitates
      India&apos;s journey to a circular economy.
    </ServiceParagraph>

    <ServiceParagraph>
      With well-defined policies, the EPR system for battery waste
      management is central, and professional compliance assistance, your
      business can fulfill its obligations and help create a cleaner,
      sustainable environment.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "scope", label: "Scope", section: <ScopeSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
];

const faqs = [
  {
    question: "What is Battery?",
    answer:
      "'Battery' means new or refurbished cell and/or Battery and/or their component, including accumulator, which is any source of electrical energy generated by direct conversion of chemical energy and includes disposable primary and/or secondary battery.",
  },
  {
    question: "What does 'Waste Battery' include?",
    answer:
      "Waste Battery includes: (i) Used and/or End of Life Battery and/or its components or spares or parts or consumables which may or may not be hazardous in nature; (ii) Pre-consumer Off-Spec Battery and its components or spares or parts or consumables; (iii) Battery whose date for appropriate use has expired; (iv) Battery which has been discarded by the user.",
  },
  {
    question: "What is the meaning of EPR?",
    answer:
      "EPR stands for 'Extended Producer Responsibility' which means responsibility of any Producer of Battery for Environmentally sound management of Waste Battery.",
  },
  {
    question: "What are EPR targets for Producers/Manufacturers?",
    answer:
      "EPR targets is the quantity of battery placed in the market by the Producer/Manufacturers. Details are given in Schedule II of the Battery Waste Management Rules, 2022.",
  },
  {
    question: "Who all comes under the definition of 'Producer'?",
    answer:
      "'Producer' means an entity who engages in: (i) manufacture and sale of Battery including refurbished Battery, including in equipment, under its own brand; or (ii) sale of Battery including refurbished Battery, including in equipment, under its own brand produced by other manufacturers or suppliers; (iii) import of Battery as well as equipment containing Battery",
  },
  {
    question:
      "Do manufacturers of batteries need to obtain registration from CPCB?",
    answer:
      "As per Rule 4 (4), The person or an entity involved in manufacturing of Battery shall have to register through the online centralised portal as Producer in Form 1(A). The certificate of registration shall be issued in Form 1(B).",
  },
  {
    question:
      "Does importer of batteries need to obtain registration from CPCB?",
    answer:
      "As per rule 3(1) (u), Importer of Battery as well as equipment containing Battery will be called 'Producer'. The importer has to obtain registration from CPCB to carry out import activities related to batteries.",
  },
  {
    question:
      "Which entities shall register on the online portal developed by CPCB?",
    answer:
      "The following entities shall register on the online portal developed by CPCB: (i) Producer (Importers comes under the definition of Producer as per Rules) (ii) Manufacturers of Battery (iii) Recyclers and Refurbishers",
  },
  {
    question:
      "What are the documents required for KYC for registration of Producers/Manufactures?",
    answer:
      "PDF copy of Company's PAN, CIN & GST of the Producer/Manufacturers.",
  },
  {
    question:
      "Which type of batteries are covered under The Battery Waste Management Rules, 2022?",
    answer:
      "All types of batteries regardless of chemistry, shape, volume, weight, material composition and use.",
  },
];

const BatteryWaste = () => (
  <ServicePageLayout
    breadcrumbLabel="EPR Registration for Battery Waste"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default BatteryWaste;
