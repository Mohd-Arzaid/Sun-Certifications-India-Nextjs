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
        APEDA
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>{" "}
      Registration
    </>
  ),
  headingAs: "h1",
  description:
    "APEDA Registration is essential for exporters of agricultural and processed food products seeking APEDA RCMC, global market access, and government export benefits.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is APEDA Registration</SectionHeadingTwo>

    <ServiceParagraph>
      APEDA Full Form is Agricultural and Processed Food Products Export
      Development Authority. The Agricultural and Processed Food Products Export
      Development Authority (APEDA) is a government organization established under
      the Ministry of Commerce and Industry. It plays a significant role in
      promoting the export of agricultural and processed food products from India
      to international markets. The formation of APEDA was necessary because India
      produces a large variety of agricultural goods, but without proper regulation
      and export support, these products cannot reach global consumers efficiently.
    </ServiceParagraph>

    <ServiceParagraph>
      APEDA helps exporters by guiding them through the APEDA Registration
      Process, providing them with an official APEDA License, and ensuring product
      quality.
    </ServiceParagraph>

    <ServiceParagraph>
      In today&apos;s digital era, the introduction of Online APEDA Registration
      through the APEDA Website has simplified the APEDA process significantly.
      Exporters can now complete their registration, upload APEDA Registration
      Documents, pay the APEDA Registration Fee, and track their application
      without visiting any office physically.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">Importance of APEDA Registration</SectionHeadingTwo>

    <ServiceParagraph>
      APEDA plays a crucial role in strengthening India&apos;s position in the
      global agricultural market. It not only regulates exports but also supports
      exporters in improving quality, packaging, and marketing strategies.
    </ServiceParagraph>

    <ServiceParagraph>
      One of the most important functions of APEDA is to ensure that exporters
      complete their APEDA Registration and obtain the APEDA RCMC
      (Registration-Cum-Membership Certificate). Without the APEDA RCMC,
      exporters cannot avail benefits such as government schemes, subsidies, and
      export assistance.
    </ServiceParagraph>

    <ServiceParagraph>
      Additionally, APEDA ensures that exporters follow international standards
      by providing APEDA Certification. This certification increases the trust of
      foreign buyers and enhances the reputation of Indian products. The
      availability of the APEDA Certificate for Export ensures that goods meet
      global quality standards.
    </ServiceParagraph>

    <ServiceParagraph>
      The organization also manages activities such as APEDA Return Filing, which
      helps maintain proper export records and ensures compliance with government
      regulations. Exporters are also required to complete APEDA Renewal from time
      to time to keep their registration active.
    </ServiceParagraph>
  </>
);

const RcmcSection = () => (
  <>
    <SectionHeadingTwo as="h2">APEDA RCMC or APEDA Membership</SectionHeadingTwo>

    <ServiceParagraph>
      The APEDA RCMC is issued after successful APEDA Registration. It serves as
      proof that the exporter is a registered member of APEDA.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">RCMC Fees</SectionHeadingThree>
    <ServiceParagraph>
      The RCMC Fees are included in the registration process. Payment of these
      fees grants exporters access to various benefits such as financial assistance
      and export promotion schemes.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">APEDA Membership</SectionHeadingThree>
    <ServiceParagraph>
      Once registered, exporters receive APEDA Membership, which provides
      opportunities to participate in international trade fairs, training
      programs, and export promotion activities.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">APEDA Website and Digital Services</SectionHeadingThree>

    <ServiceParagraph>
      The APEDA Website is an essential platform for exporters. It provides access
      to all services related to APEDA Registration Online, APEDA Renewal, and
      APEDA Return Filing.
    </ServiceParagraph>

    <ServiceParagraph>Through the APEDA Website, exporters can:</ServiceParagraph>

    <ServiceList
      points={[
        "Apply for APEDA Registration Online",
        "Upload APEDA Registration Documents",
        "Pay the APEDA Registration Fee",
        "Download the APEDA Certificate",
        "Track application status",
      ]}
    />

    <ServiceParagraph>
      The digitalization of services has made the APEDA Registration Process
      faster and more efficient.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">APEDA Renewal and Return Filing</SectionHeadingThree>

    <SectionHeadingThree as="h4">APEDA Renewal</SectionHeadingThree>
    <ServiceParagraph>
      The APEDA Renewal process ensures that the exporter&apos;s registration
      remains valid. Exporters must complete APEDA Renewal periodically to
      continue their operations.
    </ServiceParagraph>

    <SectionHeadingThree as="h4">APEDA Return Filing</SectionHeadingThree>
    <ServiceParagraph>
      APEDA Return Filing is required to maintain records of exports. It helps
      the government track export activities and ensures transparency.
    </ServiceParagraph>
  </>
);

const BenefitsSection = () => (
  <>
    <SectionHeadingTwo as="h2">Benefits of APEDA Registration</SectionHeadingTwo>

    <ServiceParagraph>
      APEDA provides several important benefits to exporters, helping them grow in
      both domestic and international markets. These benefits become available
      after completing the APEDA Registration Process, obtaining the APEDA
      License, and receiving the APEDA RCMC.
    </ServiceParagraph>

    <ServiceList
      points={[
        "Legal Recognition: APEDA Registration or APEDA License give exporters legal permission to export agricultural products without any issues.",
        "Access to Global Markets: With APEDA Certificate for Export, products meet international standards and can be sold worldwide.",
        "Financial Assistance: Exporters with APEDA RCMC can get subsidies and financial support for export-related activities.",
        "Quality Assurance: The APEDA Certificate ensures that products are safe, hygienic, and of high quality, increasing buyer trust.",
        "Easy Online Process: The APEDA Website allows easy APEDA Registration Online, submission of APEDA Registration Documents, and payment of APEDA Registration Fee.",
        "Business Growth: With proper APEDA Return Filing and timely APEDA Renewal, exporters can run their business smoothly and expand globally.",
      ]}
    />

    <SectionHeadingThree as="h3">
      Financial Assistance Provided by APEDA
    </SectionHeadingThree>

    <ServiceParagraph>
      One of the most important roles of the Agricultural and Processed Food
      Products Export Development Authority is to provide financial assistance to
      exporters. After completing APEDA Registration and obtaining the APEDA
      License, exporters become eligible for various subsidy schemes.
    </ServiceParagraph>

    <ServiceParagraph>
      These schemes support activities such as infrastructure development,
      packaging improvement, cold storage facilities, and transportation.
      Exporters who hold an APEDA RCMC and maintain proper APEDA Return Filing
      records can easily apply for these benefits.
    </ServiceParagraph>

    <ServiceParagraph>
      Financial support reduces the burden on exporters and encourages them to
      expand their business globally. It also motivates new businesses to complete
      the APEDA Registration Process and enter the export market.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Quality Control and Standards of APEDA
    </SectionHeadingThree>

    <ServiceParagraph>
      Maintaining quality is one of the main responsibilities of APEDA. Through
      APEDA Certification, exporters are required to meet strict international
      standards.
    </ServiceParagraph>

    <ServiceParagraph>
      The APEDA Certificate ensures that the products are safe, hygienic, and
      suitable for export. Exporters must follow guidelines even after obtaining
      the APEDA License, as failure to comply may lead to cancellation or issues
      during APEDA Renewal.
    </ServiceParagraph>

    <ServiceParagraph>
      Quality control also affects the APEDA Certificate Cost, as higher standards
      may require additional testing and certification procedures.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      APEDA&apos;s Role in Export Promotion
    </SectionHeadingThree>

    <ServiceParagraph>
      APEDA actively promotes Indian agricultural products in international
      markets. It organizes trade fairs, exhibitions, and buyer-seller meets.
    </ServiceParagraph>

    <ServiceParagraph>
      Exporters who have completed APEDA Registration and hold APEDA Membership
      are given opportunities to participate in these events. This helps them find
      global buyers and increase their exports.
    </ServiceParagraph>

    <ServiceParagraph>
      The presence of an APEDA Certificate for Export and a valid APEDA License
      increases the credibility of exporters during such promotional activities.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Role of APEDA in Traceability Systems
    </SectionHeadingThree>

    <ServiceParagraph>
      Traceability is an important concept in international trade. APEDA has
      introduced systems that allow tracking of products from farm to export.
    </ServiceParagraph>

    <ServiceParagraph>
      Exporters who complete APEDA Registration Online and obtain the APEDA
      Certificate must follow traceability guidelines. This ensures transparency
      and builds trust among international buyers.
    </ServiceParagraph>

    <ServiceParagraph>
      The traceability system is linked with the APEDA Website, where exporters
      update data as part of APEDA Return Filing.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Role of APEDA in Boosting Farmer Income
    </SectionHeadingThree>

    <ServiceParagraph>
      APEDA indirectly helps farmers by connecting them with global markets.
      Exporters who complete APEDA Registration and obtain the APEDA Certificate
      purchase products from farmers for export.
    </ServiceParagraph>

    <ServiceParagraph>
      Through APEDA Certification, farmers are encouraged to maintain quality
      standards, which increases the value of their produce.
    </ServiceParagraph>

    <ServiceParagraph>
      As exports increase, farmers receive better prices, which improves their
      income and standard of living.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">APEDA Registration Process</SectionHeadingTwo>

    <ServiceParagraph>
      The process of APEDA Registration is the first and most important step for
      any exporter dealing with agricultural products. It provides legal
      recognition and allows exporters to operate in international markets.
    </ServiceParagraph>

    <ServiceList
      points={[
        "The APEDA Registration Process is designed to be simple yet effective. Exporters must first visit the APEDA Website, where they can begin their APEDA Registration Online. The process involves filling out an application form, uploading necessary APEDA Registration Documents, and paying the APEDA Registration Fee.",
        "Once the application is submitted, APEDA verifies the details and issues the APEDA RCMC, which confirms that the exporter is officially registered.",
      ]}
    />

    <SectionHeadingThree as="h3">APEDA Registration Documents</SectionHeadingThree>

    <ServiceParagraph>
      The submission of proper APEDA Registration Documents is crucial for
      successful registration. These documents include:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Import Export Code (IEC)",
        "PAN card",
        "Bank certificate",
        "Business registration proof",
      ]}
    />

    <ServiceParagraph>
      If the APEDA Registration Documents are incomplete or incorrect, the
      application may be delayed or rejected. Therefore, exporters must ensure
      accuracy while uploading documents during APEDA Registration.
    </ServiceParagraph>
  </>
);

const FeesSection = () => (
  <>
    <SectionHeadingTwo as="h2">APEDA Registration Fees Structure</SectionHeadingTwo>

    <ServiceParagraph>
      The cost of APEDA registration in India depends on the type of enterprise
      applying for the certificate. Below is a detailed breakdown of the applicable
      fees:
    </ServiceParagraph>

    <ServiceTable
      headers={[
        "Category",
        "Registration Fees (₹)",
        "Total (Including 18% GST)",
        "Remarks",
      ]}
      rows={[
        [
          "Micro, Small & Medium Enterprises (MSME)",
          "₹5,000 + GST",
          "₹5,900",
          "Applicable for MSME exporters",
        ],
        [
          "Large Enterprises",
          "₹10,000 + GST",
          "₹11,800",
          "Applicable for large-scale exporters",
        ],
        [
          "APEDA Renewal Fees",
          "₹5,000 – ₹10,000 + GST",
          "Varies",
          "Depends on business size",
        ],
      ]}
    />

    <ServiceParagraph>
      APEDA registration involves a one-time fee, making it a cost-effective
      certification for exporters. However, businesses must ensure timely renewal
      to continue availing export-related benefits and compliance support.
    </ServiceParagraph>

    <ServiceParagraph>
      For instance, a small-scale tea exporter in Assam would typically pay ₹5,900
      for initial registration, whereas a large company exporting processed
      agricultural products may incur a cost of ₹11,800.
    </ServiceParagraph>

    <ServiceParagraph>
      In addition to registration, APEDA-certified exporters can access various
      government incentives, including financial assistance for export promotion,
      freight subsidies, and participation in international market development
      programs, helping businesses expand globally.
    </ServiceParagraph>
  </>
);

const ConsultantSection = () => (
  <>
    <SectionHeadingTwo as="h2">
      Role of APEDA Registration Consultant
    </SectionHeadingTwo>

    <ServiceParagraph>
      An APEDA Registration Consultant plays a crucial role in simplifying the
      registration process for exporters dealing in agricultural and processed
      food products. Since the procedure involves documentation, compliance, and
      coordination with authorities, professional guidance helps businesses avoid
      delays and errors.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      1) Expert Guidance on Eligibility &amp; Documentation
    </SectionHeadingThree>
    <ServiceParagraph>
      A consultant first evaluates whether your business requires APEDA
      registration and identifies the applicable category. They assist in
      preparing accurate documentation such as IEC, bank certificates, and
      business details, ensuring everything is aligned with APEDA requirements.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">2) Hassle-Free Application Process</SectionHeadingThree>
    <ServiceParagraph>
      From filling out the online application to submitting required documents,
      the consultant manages the complete registration process. This minimizes
      the chances of rejection due to incorrect or incomplete information.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3) Compliance &amp; Regulatory Support</SectionHeadingThree>
    <ServiceParagraph>
      APEDA registration is not just about obtaining the certificate—it also
      involves ongoing compliance. Consultants ensure that exporters adhere to
      APEDA guidelines, helping them stay updated with policy changes and export
      regulations.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4) Faster Approval &amp; Error Reduction</SectionHeadingThree>
    <ServiceParagraph>
      With industry experience, consultants understand common mistakes and
      technical requirements. This results in quicker approvals and reduces the
      risk of application delays or rejections.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      5) Assistance in Availing APEDA Benefits
    </SectionHeadingThree>
    <ServiceParagraph>
      Registered exporters can access various government schemes, including
      financial assistance, export promotion programs, and subsidies. Consultants
      guide businesses on how to claim these benefits effectively and maximize
      returns.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      6) Renewal &amp; Post-Registration Support
    </SectionHeadingThree>
    <ServiceParagraph>
      Consultants also handle renewal processes and provide continuous support for
      maintaining APEDA compliance. They ensure that businesses do not face
      interruptions in export activities due to expired registration.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Conclusion</SectionHeadingThree>

    <ServiceParagraph>
      India&apos;s agricultural export sector is on a strong growth trajectory,
      with an expected annual increase of 7–8%, driven by rising global demand for
      products such as Basmati rice, organic food, dairy items, processed
      products, and cereals. For businesses aiming to capitalize on these expanding
      international opportunities, obtaining agricultural export registration is
      essential—and securing an APEDA certificate is the first and most important
      step.
    </ServiceParagraph>

    <ServiceParagraph>
      While the APEDA registration fees typically range between ₹5,900 and ₹11,800
      depending on the size of the enterprise, this cost should be viewed as a
      strategic investment rather than an expense. The certification unlocks access
      to global markets, government-backed incentives, financial assistance
      schemes, and smoother export procedures. In addition, APEDA registration
      enhances credibility, ensures regulatory compliance, and provides exporters
      with tools such as quality certification support, training programs, and
      export promotion benefits.
    </ServiceParagraph>

    <ServiceParagraph>
      For new and growing exporters, understanding the documentation, compliance
      requirements, and application procedures can be challenging. Any errors or
      delays in the process may impact business operations and export timelines.
    </ServiceParagraph>

    <ServiceParagraph>
      Ultimately, obtaining an APEDA certificate not only enables businesses to
      participate in international trade but also strengthens their long-term
      growth potential. With the right approach and support, exporters can fully
      leverage APEDA benefits to scale their operations, improve competitiveness,
      and establish a strong presence in global markets.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "rcmc", label: "RCMC & Digital", section: <RcmcSection /> },
  { id: "benefits", label: "Benefits", section: <BenefitsSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "fees", label: "Fees", section: <FeesSection /> },
  { id: "consultant", label: "Consultant", section: <ConsultantSection /> },
];

const faqs = [
  {
    question: "What is APEDA Registration?",
    answer:
      "Agricultural and Processed Food Products Export Development Authority (APEDA) Registration is a mandatory process for exporters dealing in agricultural and processed food products. It provides legal authorization to export goods from India and ensures compliance with international standards. After registration, exporters receive the APEDA RCMC (Registration-Cum-Membership Certificate), which allows them to access government benefits, subsidies, and export promotion schemes. It also enhances credibility in global markets and ensures that products meet quality and safety requirements.",
  },
  {
    question: "Who needs APEDA Registration in India?",
    answer:
      "APEDA Registration is required for businesses exporting scheduled agricultural and processed food products such as fruits, vegetables, meat, dairy products, cereals, and processed foods. Any exporter involved in these categories must obtain APEDA RCMC to legally operate in international markets. Without registration, exporters cannot avail government incentives or participate in export promotion programs. It is essential for manufacturers, merchants, and exporters who want to expand their business globally.",
  },
  {
    question: "What is APEDA RCMC Certificate?",
    answer:
      "APEDA RCMC (Registration-Cum-Membership Certificate) is issued after successful APEDA Registration. It acts as proof that the exporter is a registered member of APEDA. This certificate is essential to claim export benefits, subsidies, and financial assistance schemes. It also allows exporters to participate in international trade fairs and buyer-seller meets. Having a valid RCMC ensures compliance with export regulations and helps build trust with international buyers.",
  },
  {
    question: "What documents are required for APEDA Registration?",
    answer:
      "To complete APEDA Registration, exporters must submit key documents such as Import Export Code (IEC), PAN card, bank certificate, and business registration proof. These documents are required to verify the authenticity of the exporter and ensure compliance with regulations. Accurate and complete documentation is crucial, as any errors or missing details may lead to delays or rejection of the application.",
  },
  {
    question: "What is the APEDA Registration process?",
    answer:
      "The APEDA Registration process is conducted online through the official APEDA website. Exporters need to fill out the application form, upload required documents, and pay the registration fee. After submission, APEDA verifies the details and issues the RCMC certificate. The digital process has made registration faster, more transparent, and convenient, eliminating the need for physical visits.",
  },
  {
    question: "What are the fees for APEDA Registration?",
    answer:
      "The APEDA Registration fee depends on the type of enterprise. MSMEs typically pay ₹5,000 plus GST (₹5,900 total), while large enterprises pay ₹10,000 plus GST (₹11,800 total). It is a one-time registration fee, making it a cost-effective certification. However, exporters must renew their registration periodically to continue enjoying benefits such as subsidies and export support.",
  },
  {
    question: "What are the benefits of APEDA Registration?",
    answer:
      "APEDA Registration offers multiple benefits, including legal recognition, access to global markets, financial assistance, and quality assurance. Exporters can avail subsidies, participate in international trade fairs, and receive support for packaging and infrastructure. It also enhances credibility and ensures compliance with international standards, helping businesses grow globally.",
  },
  {
    question: "Is APEDA Registration mandatory for exporters?",
    answer:
      "Yes, APEDA Registration is mandatory for exporters dealing in scheduled agricultural and processed food products. Without it, exporters cannot legally export such goods or avail government incentives. It is a crucial requirement for entering international markets and maintaining compliance with export regulations.",
  },
  {
    question: "How long is APEDA Registration valid?",
    answer:
      "APEDA Registration is generally valid for a lifetime; however, exporters must comply with renewal requirements and maintain proper records through APEDA return filing. Regular updates and compliance ensure that the registration remains active and benefits are not interrupted.",
  },
  {
    question: "What is APEDA Renewal and why is it important?",
    answer:
      "APEDA Renewal ensures that the exporter's registration remains active and compliant with current regulations. It is important for continuing export operations without interruption. Failure to renew on time may result in loss of benefits, penalties, or suspension of export activities.",
  },
  {
    question: "What is APEDA Return Filing?",
    answer:
      "APEDA Return Filing is the process of submitting export data and records to maintain transparency and compliance. It helps the government track export activities and ensures that exporters follow guidelines. Regular return filing is essential for maintaining APEDA registration and eligibility for benefits.",
  },
  {
    question: "What financial assistance does APEDA provide?",
    answer:
      "APEDA provides financial assistance for infrastructure development, packaging improvement, cold storage, and transportation. Exporters can also receive subsidies for export promotion activities and market development. These schemes help reduce costs and encourage businesses to expand globally.",
  },
  {
    question: "How does APEDA ensure product quality?",
    answer:
      "APEDA ensures product quality through strict certification and compliance standards. Exporters must follow hygiene, safety, and international quality guidelines. The APEDA Certificate confirms that products meet global standards, increasing trust among international buyers and reducing the risk of rejection.",
  },
  {
    question: "What is the role of APEDA in export promotion?",
    answer:
      "APEDA actively promotes Indian agricultural products by organizing trade fairs, exhibitions, and buyer-seller meets. Registered exporters can participate in these events to connect with global buyers. This helps increase exports, improve market reach, and boost business growth.",
  },
  {
    question: "Can I apply for APEDA Registration online?",
    answer:
      "Yes, APEDA Registration can be completed online through the official website. Exporters can fill out the application, upload documents, pay fees, and track their application status digitally. The online system has simplified the process, making it faster and more efficient.",
  },
];

const APEDARegistration = () => (
  <ServicePageLayout
    breadcrumbLabel="APEDA Registration"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default APEDARegistration;
