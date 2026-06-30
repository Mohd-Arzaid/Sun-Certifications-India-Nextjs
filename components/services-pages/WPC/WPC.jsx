import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const WPC_PRODUCTS = [
  "Wireless Hotspot Device",
  "Laptop",
  "Wireless Microphone",
  "RFID Reader",
  "Wireless Mouse",
  "WiFi Router",
  "Wireless Keyboard",
  "Wireless Music Player",
  "Wireless POS Terminal",
  "Wireless Speaker",
  "Wireless Terminal",
  "Wireless Transmitters",
  "Gigabit Dual Band Wireless Router",
  "Bluetooth Speaker",
  "Bluetooth Headphone",
  "Bluetooth Earphone",
  "Tablet",
  "RFID Reader",
  "RFID Antenna",
  "Wireless Transmitter And Receiver",
  "Smart Meter",
  "Smartwatch",
  "Digital Lock",
  "Water Meter",
  "True Wireless Earphones (TWS)",
  "Wireless Barcode Scanner",
  "Wireless Access Point",
  "LoRaWAN Gateway",
];

const hero = {
  heading: (
    <span className="relative">
      WPC Approval | WPC ETA Certification
      <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
    </span>
  ),
  headingAs: "h1",
  description:
    "Process, Cost, and Requirements for WPC ETA Certification in India – your trusted compliance partner!",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      WPC Approval | WPC ETA Certification
    </SectionHeadingTwo>

    <ServiceParagraph>
      Modern communication has widely relied on wireless technologies. Many
      electronics such as mobile phones, Bluetooth headsets, Wi-Fi routers,
      smartwatches, IoT devices, RFID tags, and even wireless medical devices
      rely on radio frequency (RF) communication. The Government of India has
      made WPC approval devices mandatory to ensure the safe and
      interference-free use of the radio spectrum.
    </ServiceParagraph>

    <ServiceParagraph>
      As a manufacturer, importer, trader, or startup, knowledge over WPC
      Approval or WPC ETA Certification is vital in order to be compliant to
      the Indian wireless market regulations.
    </ServiceParagraph>

    <ServiceParagraph>
      The following guide covers WPC ETA Certification thoroughly including
      its definition, importance, types, eligibility, steps, documents, costs,
      benefits, and the entire process to obtaining WPC ETA Certification in
      India.
    </ServiceParagraph>
  </>
);

const WPCApprovalSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is WPC Approval in India?</SectionHeadingTwo>

    <ServiceParagraph>
      WPC Approval in India is defined as the approval given by the Wireless
      Planning and Coordination (WPC) Wing of the Department of
      Telecommunications (DoT), Government of India. WPC approval is a
      requisite approval for every device that operates on Bluetooth, WiFi,
      RFID, Zigbee, NFC or any other wireless technology spectrum.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      The WPC Wing is tasked with the following responsibilities:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Management of radio frequency spectrum in India",
        "Licensing of wireless and issuing ETA certificates",
        "Certification of devices to ensure operations within allocated frequency bands",
        "Mitigation of radio interference",
        "Safeguarding the interests of national security",
        "No wireless product can be imported, sold, or used in India without the approval of WPC",
      ]}
    />
  </>
);

const ETASection = () => (
  <>
    <SectionHeadingTwo as="h2">What is WPC ETA Certification?</SectionHeadingTwo>

    <ServiceParagraph>
      ETA certification (Equipment Type Approval certification) is a WPC
      approval needed for wireless equipment that operates within de-licensed
      frequency bands.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      The de-licensed frequency bands are:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "2.4 GHz (Bluetooth, Wi-Fi)",
        "5 GHz (Wi-Fi)",
        "865-867 MHz (RFID)",
        "NFC",
        "Zigbee",
      ]}
    />

    <ServiceParagraph>
      ETA certification is a mandatory certification for all wireless devices
      sold in India, and certifies that the device is compliant with
      India&apos;s RF standards and operates within the allowed frequency
      bands.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      What is the necessity of WPC Approval in India?
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      The following are the reasons for WPC approval:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Legal Requirement: WPC approval is a legal requirement under Indian telecom laws to import or sell wireless devices.",
        "Spectrum Management: The radio frequency spectrum is finite; WPC approval ensures optimal utilization.",
        "Interference Mitigation: Unauthorized wireless devices can cause interference to aviation, defense, and emergency services.",
        "National Security: Unregulated wireless devices can pose security threats.",
        "Market Access: Customs clearance will be denied in the absence of WPC ETA certification.",
      ]}
    />
  </>
);

const CategoriesSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Various Categories of WPC Certification in India
    </SectionHeadingTwo>

    <ServiceParagraph>
      WPC Certification in India is not a singular certification. It is divided
      into different categories according to the kind of device and its
      purpose. It is important to understand each of them in depth.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      1. WPC ETA Certificate (Equipment Type Approval)
    </SectionHeadingThree>

    <ServiceParagraph>
      For the largest portion of consumer and wireless products, WPC ETA
      certification is required. ETA stands for Equipment Type Approval and is
      to be obtained by any device that works within the so-called
      &apos;de-licensed&apos; frequency bands or ranges.
    </ServiceParagraph>

    <ServiceParagraph>
      De-licensed frequency bands are ranges that do not require individual
      users to hold a spectrum license, prejudicing the equipment&apos;s
      approval. Examples of such technologies are Bluetooth, Wi-Fi, RFID, and
      other similar technologies.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      The ETA certificate signifies that the device:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Functions within the permissible frequency within the Indian Territory",
        "Power transmission is within the approved limits",
        "Does not cause harmful interference",
      ]}
    />

    <ServiceParagraph>
      Therefore, WPC ETA approval is required for the importation of Bluetooth
      speakers and Wi-Fi routers.
    </ServiceParagraph>

    <ServiceParagraph>
      Approval for ETA is usually given based on RF test reports from accredited
      laboratories. There is no need for spectrum auctions or individual
      frequency assignments as the product is operating in de-licensed bands.
      Products using a pre-approved RF module, manufactured in India, may not
      need separate ETA approvals; however, fully imported finished products
      usually require approvals.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2. Non-Network WPC License</SectionHeadingThree>

    <ServiceParagraph>
      The Non-Network WPC License is for a business that works in wireless
      equipment but does not provide telecom or communication services to the
      public. This license category fits companies that import, trade,
      distribute, or own wireless devices.
    </ServiceParagraph>

    <ServiceParagraph>
      In contrast to ETA, which is product-specific, a Non-Network License may
      cover wider business activities with respect to the controlled wireless
      devices.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      This category consists of three sub-types:
    </SectionHeadingThree>

    <SectionHeadingThree as="h4">Import License</SectionHeadingThree>
    <ServiceParagraph>
      This is needed for businesses that import wireless equipment that is
      outside the scope of ETA or is subject to regulation. It allows the
      import of certain equipment to India.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Dealer Possession License</SectionHeadingThree>
    <ServiceParagraph>
      This license is necessary for businesses that deal in the sale of wireless
      devices. It allows the possession and sale of licensed wireless devices.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Non-Dealer Possession License</SectionHeadingThree>
    <ServiceParagraph>
      This applies to certain businesses that need to use wireless devices
      internally but do not sell them. Institutions that use certain types of
      special communication devices may need to obtain this type of license.
    </ServiceParagraph>

    <ServiceParagraph>
      In order to qualify for a Non-Network License, the applicant must be a
      company that has been incorporated legally, and may be required to have
      personnel with technical qualifications.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Network License</SectionHeadingThree>

    <ServiceParagraph>
      Network Licenses are for businesses offering communication services
      using a part of the radio frequency spectrum that has been licensed for
      that purpose. Network licenses are for the use of the licensed spectrum,
      unlike ETA approvals that are for the use of consumer devices in
      de-licensed bands.
    </ServiceParagraph>

    <ServiceParagraph>
      This type of license applies to telecom service providers, internet
      service providers, and broadcasting service providers.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">A couple of examples are as follows:</SectionHeadingThree>

    <SectionHeadingThree as="h4">
      Internet Service Provider (ISP) License
    </SectionHeadingThree>
    <ServiceParagraph>
      An Internet Service Provider license authorizes a company to provide
      internet services in India. The ISP license is issued by the Department of
      Telecommunications, and WPC governs the spectrum usage.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">Experimental License</SectionHeadingThree>
    <ServiceParagraph>
      An Experimental License authorizes temporary use of a portion of the
      spectrum for research, testing, or demonstration. This license is often
      used for technology trials or pilot wireless systems.
    </ServiceParagraph>

    <ServiceParagraph>
      Network Licenses have more compliance obligations because they are for the
      use of regulated and licensed frequency bands.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Products under WPC</SectionHeadingThree>

    <ServiceParagraph>
      Wireless devices that typically require WPC ETA certification include the
      following:
    </ServiceParagraph>

    <ServiceList points={WPC_PRODUCTS} />
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo as="h2">Eligibility for WPC Approvals</SectionHeadingTwo>

    <ServiceParagraph>
      When applying for WPC ETA certification, applicants must meet the
      following criteria:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Legally registered company",
        "Product must function within non-licensed frequency bands",
        "RF test report from a recognized accredited laboratory",
        "Technical specifications must be submitted by the applicant",
        "For importers, the Import Export Code (IEC) is necessary",
        "Foreign manufacturers must have an Indian representative",
      ]}
    />

    <SectionHeadingThree as="h3">WPC ETA Certification Requirements</SectionHeadingThree>

    <SectionHeadingThree as="h4">
      The following documentation is necessary:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Company Documentation",
        "Company Incorporation Certificate",
        "GST Certificate",
        "Import Export Code (IEC) + PAN Card",
        "Documentation for the Product",
        "Technical specifications",
        "RF test report",
        "Product data sheet",
        "Product label + user manual",
        "Authorization Documentation",
        "Authorization Letter + Letter from the Authorized Indian Representative (for foreign firms)",
        "Additional Documentation",
        "ID proof of the authorized individual + Address proof + Fee payment receipt",
      ]}
    />

    <SectionHeadingThree as="h3">RF Test Report Prerequisite</SectionHeadingThree>

    <ServiceParagraph>
      The WPC approval requirement is strongly dominated by the RF test report.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">
      The RF report must contain data regarding:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Frequency range",
        "Bandwidth",
        "Power output",
        "Modulation type",
        "RF exposure",
      ]}
    />

    <ServiceParagraph>
      The laboratory that performs the testing must be certified.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">Process of WPC ETA Certification</SectionHeadingTwo>

    <ServiceParagraph>Here is the procedure.</ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 1. Create an account on the Saral Sanchar portal.
    </SectionHeadingThree>
    <ServiceParagraph>
      All applicants must register on the Saral Sanchar portal of the Department
      of Telecommunications. After registration, an Import ID is created.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 2: Determine Exemption Status
    </SectionHeadingThree>
    <ServiceParagraph>
      Applicants need to determine whether the product is exempt or requires
      the ETA.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 3: Acquire RF Test Report</SectionHeadingThree>
    <ServiceParagraph>
      An accredited lab must demonstrate that the product complies with:
    </ServiceParagraph>
    <ServiceList
      points={["Indian frequency bands", "Allowed power levels"]}
    />

    <SectionHeadingThree as="h3">
      Step 4: Submit New ETA Application
    </SectionHeadingThree>
    <ServiceParagraph>
      The New ETA Application must be completed online with the following:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Technical Papers",
        "RF test report",
        "Company documents",
      ]}
    />

    <SectionHeadingThree as="h3">Step 5: Government Fees Payment</SectionHeadingThree>
    <ServiceParagraph>
      Applicable government fees must be paid online.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Step 6: Documents Review</SectionHeadingThree>
    <ServiceParagraph>WPC Reviewers will examine the:</ServiceParagraph>
    <ServiceList
      points={[
        "RF parameters",
        "Technical compliance",
        "Frequency band compliance",
      ]}
    />
    <ServiceParagraph>
      If further explanation is needed, they may request more documents.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Step 7: Receiving WPC ETA Certificate
    </SectionHeadingThree>
    <ServiceParagraph>
      WPC will issue an ETA certificate after successful review. The product
      becomes eligible for importation and sale in India once the certificate
      is issued.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Timeline to Get WPC ETA Certification
    </SectionHeadingThree>
    <ServiceParagraph>
      Typical time to complete each step is shown below:
    </ServiceParagraph>

    <ServiceTable
      headers={["Process Step", "Duration"]}
      rows={[
        ["RF testing", "5-10 days"],
        ["Application submission", "1-2 days"],
        ["WPC review", "10-20 days"],
        ["ETA certificate issuance", "15-30 days"],
      ]}
    />

    <ServiceParagraph className="font-semibold">
      Total time: 2 to 4 weeks
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Costs of WPC ETA Certification in India
    </SectionHeadingThree>
    <ServiceParagraph>Costs can vary based on:</ServiceParagraph>
    <ServiceList
      points={[
        "Product type",
        "Testing needed",
        "Consultant costs",
      ]}
    />

    <SectionHeadingThree as="h3">Validity of WPC ETA Certificate</SectionHeadingThree>
    <ServiceParagraph>
      ETA certificate has lifetime validity. No renewal required unless:
    </ServiceParagraph>
    <ServiceList
      points={[
        "Product design changes",
        "RF module changes",
        "Frequency changes",
      ]}
    />

    <SectionHeadingThree as="h3">Conclusion</SectionHeadingThree>

    <ServiceParagraph>
      WPC Approval is a regulatory necessity for all wireless products in India.
      This includes products such as Bluetooth speakers, IoT devices, Wi-Fi-enabled
      devices, and other devices. WPC ETA Compliance is important for regulatory
      requirements.
    </ServiceParagraph>

    <ServiceParagraph>
      The Wireless Planning and Coordination (WPC) keeps an eye on the use of the
      Indian radio frequency spectrum and manages interference. As technology
      advances and the use of wireless technology in devices, WPC compliance is
      critical for businesses that want to conduct wireless operations in India.
    </ServiceParagraph>

    <ServiceParagraph>
      Manufacturers and importers of wireless devices should begin the WPC ETA
      certification process as soon as possible to ensure compliance. This
      includes document preparation, RF testing, and other regulatory compliance
      to ensure a smooth market entry. WPC Compliance is the ticket to
      responsible and hassle-free use of wireless technology in India.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  {
    id: "wpc-approval",
    label: "WPC Approval",
    section: <WPCApprovalSection />,
  },
  { id: "eta", label: "ETA", section: <ETASection /> },
  { id: "categories", label: "Categories", section: <CategoriesSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
];

const faqs = [
  {
    question: "What are the radio frequency bands?",
    answer:
      "A radio frequency band is a part of the radio frequency spectrum that is allocated for a specific type of wireless communication. There are several different communications that use different bands for wireless communication including mobile communications, WiFi, Bluetooth, satellite communication, broadcasting, etc. Each band is allocated limits technically, to eliminate interference and to allow for proper functioning of different devices and services.",
  },
  {
    question: "What is a WPC certificate?",
    answer:
      "A WPC certificate is a type of compliance certificate that is required for the import, sale, and usage of wireless products within the geographical boundary of India. This includes all devices that are radio frequency signal emitters such as bluetooth devices, wi fi devices, wi fi routers, and other such devices like smart speakers. A WPC certified device cannot be marketed or operated in India.",
  },
  {
    question: "What is WPC Certification in India?",
    answer:
      "WPC certification is to ensure that a wireless device is operating according to the compliance of India's spectrum control and wireless devices regulations. It is an approval that is given to a product for operating within the limits of frequency bands that are assigned for a particular domain of usage to ensure that there is no jamming of other communication systems. Any wireless device manufacturer in India is required to have an approval from the Wireless Planning and Coordination Wing before entering the Indian market.",
  },
  {
    question: "Who is the issuer of WPC certificates in India?",
    answer:
      "The WPC certificate is provided by the Wireless Planning and Coordination Wing, which is a part of the Department of Telecommunications. This body oversees the management of radio frequencies and provides Equipment Type Approval for wireless devices.",
  },
  {
    question: "What is WPC ETA approval?",
    answer:
      "WPC ETA refers to Equipment Type Approval. This is mandatory for wireless devices that function in the de-licensed frequency ranges, i.e. the ranges which include Bluetooth and Wi-Fi. Thus, for the import of these devices into India, ETA approval is necessary. Also, in many instances, even wireless devices manufactured in India using wireless modules might require ETA certification, depending upon the configurations.",
  },
  {
    question: "Can WPC ETA certification be obtained by a foreign manufacturer?",
    answer:
      "Yes, WPC ETA Certification can be obtained by a foreign manufacturer. An Authorized Indian Representative has to be appointed for the application. The representative is in charge of submitting the documentation, liaising with the concerned authorities, and completing the approval process on behalf of the foreign entity.",
  },
  {
    question: "What is the period of validity of a WPC License?",
    answer:
      "A WPC License is valid for the lifetime of the approved model of the product. However, if the wireless specifications of the product change, e.g. frequency range or transmission power, etc., new approval will be required.",
  },
  {
    question: "Who needs WPC certification in India?",
    answer:
      "WPC certification is a must for all persons or companies in the business of manufacturing, importing, distributing, or selling wireless devices in India. This also includes businesses in the trade of Bluetooth, Wi-Fi, RFID, or any other products using radio frequency.",
  },
  {
    question: "How much are the government charges for WPC ETA approval?",
    answer:
      "The government charges for WPC ETA approval are around ₹10,000 for each product. This is for each finished product or each separate RF module, and payment of this fee is mandatory for submission of the application.",
  },
  {
    question: "Is the application fee refunded if the application is withdrawn?",
    answer:
      "No, in case of application withdrawal or rejection, the application fee is forfeited. It is advisable for applicants to cross-check all technical and application information to eliminate any mistakes.",
  },
];

const WPC = () => (
  <ServicePageLayout
    breadcrumbLabel="WPC Approval | WPC ETA Certification"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default WPC;
