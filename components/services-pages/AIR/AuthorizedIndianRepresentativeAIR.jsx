import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "Authorized Indian Representative (AIR) for BIS Certification",
  description:
    "Every foreign manufacturer seeking BIS certification in India must appoint an AIR. Sun Certifications India offers a structured, legally accountable AIR service — not a casual third-party arrangement, but an institutional commitment backed by dedicated compliance officers and clear legal frameworks.",
};

const intro = (
  <>
    <SectionHeadingTwo as="h1">
      Authorized Indian Representative (AIR) for BIS Certification
    </SectionHeadingTwo>

    <ServiceParagraph>
      Every foreign manufacturer seeking BIS certification in India must appoint
      an AIR. Sun Certifications India offers a structured, legally accountable
      AIR service — not a casual third-party arrangement, but an institutional
      commitment backed by dedicated compliance officers and clear legal
      frameworks.
    </ServiceParagraph>
  </>
);

const OverviewSection = () => (
  <>
    <SectionHeadingTwo>
      What is an Authorized Indian Representative — and Why It Matters
    </SectionHeadingTwo>

    <ServiceParagraph>
      Under the Bureau of Indian Standards Act and the Foreign Manufacturers
      Certification Scheme (FMCS), every overseas manufacturer who wishes to
      obtain BIS certification for products sold in India must designate a legal
      entity based in India as their Authorized Indian Representative. This
      entity — commonly referred to as the AIR — acts as the official point of
      contact between the foreign manufacturer and BIS throughout the
      certification process and beyond.
    </ServiceParagraph>

    <ServiceParagraph>
      The AIR is responsible for submitting and managing the BIS application,
      coordinating factory audits, liaising with BIS officials, ensuring ongoing
      compliance after certification is granted, and responding to any regulatory
      actions — including market surveillance, product complaints, or
      enforcement inquiries — on behalf of the foreign manufacturer.
    </ServiceParagraph>
  </>
);

const RisksSection = () => (
  <>
    <SectionHeadingTwo>
      Why Most AIR Appointments Are Riskier Than They Appear
    </SectionHeadingTwo>

    <ServiceParagraph>
      When foreign companies first begin the BIS certification process, they are
      often advised to simply &quot;find someone in India&quot; to act as their
      AIR — a local contact, a freight forwarder, a trading partner, or an
      individual consultant willing to sign the forms. On the surface, this seems
      straightforward. In practice, it creates a fragile foundation for
      everything that follows.
    </ServiceParagraph>

    <ServiceParagraph>
      Informal AIR arrangements typically have no structured compliance oversight
      after the certificate is issued. There is no dedicated officer monitoring
      product standards, tracking BIS circulars for regulatory updates, or
      managing responses to BIS surveillance notices. When a product complaint
      arises or BIS initiates a market check, the foreign manufacturer discovers
      that their Indian representative has neither the legal infrastructure nor
      the operational capacity to handle it properly.
    </ServiceParagraph>

    <ServiceParagraph>
      Beyond ongoing compliance, informal AIR setups also struggle during the
      certification process itself — with inconsistent communication to BIS,
      mismanaged document submissions, and audit coordination gaps that delay or
      derail the entire application.
    </ServiceParagraph>
  </>
);

const RequirementsSection = () => (
  <>
    <SectionHeadingTwo>
      Requirements of Authorized Indian Representative
    </SectionHeadingTwo>

    <ServiceList
      points={[
        "Must be atleast graduate by qualification.",
        "Must have knowledge about the product and process of BIS Certification",
        "Should be resident of India.",
        "Must have all the statutory documents.",
        "AIR shall ensure compliance of terms and conditions of the agreement signed by them, provisions of the Bureau of Indian Standards Act 2016, and rules and regulations framed there under and applicable Indian laws.",
        "The Bureau may ask its authorized representative to appear before it for personal representation as and when required.",
        "He shall not engage in any unethical practices such as communicating with lab with regard to testing of BIS samples (except for deposition of sample and payment of testing charges), tampering of documents, misrepresentation of facts, etc.",
        "He shall maintain the confidentiality of all the information.",
        "He shall facilitate and ensure drawl of Market Sample from the consignments being imported to India bearing standard mark.",
      ]}
    />
  </>
);

const OurServiceSection = () => (
  <>
    <SectionHeadingTwo>
      The Sun Certifications AIR Service — Structured, Accountable, End-to-End
    </SectionHeadingTwo>

    <ServiceParagraph>
      Sun Certifications India offers a corporate AIR service designed to meet
      the expectations of international legal and compliance teams — not just to
      satisfy a regulatory checkbox. When we act as your Authorized Indian
      Representative, we take on the role with the institutional seriousness it
      deserves.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Dedicated Compliance Officer</SectionHeadingThree>

    <ServiceParagraph>
      Each client is assigned a named compliance officer responsible for
      managing all BIS interactions, documentation, and regulatory
      correspondence on their behalf.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Legally Structured Framework</SectionHeadingThree>

    <ServiceParagraph>
      Our AIR engagements are governed by clear legal agreements that define the
      scope of liability, compliance obligations, and escalation procedures —
      documented and enforceable.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Post-Certification Monitoring</SectionHeadingThree>

    <ServiceParagraph>
      Our responsibility does not end at certificate issuance. We actively monitor
      BIS updates, manage renewal timelines, and respond to any market
      surveillance actions throughout the certificate&apos;s validity.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      International Communication Standards
    </SectionHeadingThree>

    <ServiceParagraph>
      All client communication is structured, transparent, and documented. We
      operate across time zones and maintain response standards that match
      international business expectations.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">No Subcontracting</SectionHeadingThree>

    <ServiceParagraph>
      We do not delegate the AIR role to third-party individuals or informal
      networks. Every AIR engagement is handled directly by our in-house team.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      Renewal &amp; Amendment Management
    </SectionHeadingThree>

    <ServiceParagraph>
      We manage BIS licence renewals, product amendments, factory change
      notifications, and any modifications to your certification — proactively,
      without waiting for the client to prompt us.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo>How Our AIR Appointment Process Works</SectionHeadingTwo>

    <ServiceParagraph>
      From the moment a foreign manufacturer engages Sun Certifications as their
      AIR, the process is structured, transparent, and actively managed. Here is
      how it works from start to finish.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      1 Initial Product &amp; Eligibility Assessment
    </SectionHeadingThree>

    <ServiceParagraph>
      We review your product category, target BIS scheme (FMCS, CRS, or ISI), and
      existing documentation to confirm eligibility and map the exact
      certification pathway before any formal engagement begins.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      2 AIR Agreement &amp; Legal Documentation
    </SectionHeadingThree>

    <ServiceParagraph>
      A formal AIR appointment agreement is executed between Sun Certifications
      India and the foreign manufacturer, defining roles, responsibilities,
      liability scope, and compliance obligations. This document is what your
      legal team needs to feel confident about the arrangement.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      3 BIS Application Preparation &amp; Submission
    </SectionHeadingThree>

    <ServiceParagraph>
      We prepare all BIS application documents — including the AIR appointment
      letter, product technical documentation, factory details, and test reports
      — and submit the application to BIS on your behalf through the official
      portal.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4 Factory Audit Coordination</SectionHeadingThree>

    <ServiceParagraph>
      For FMCS applications, we coordinate the BIS factory audit — scheduling
      the government inspector&apos;s visit, preparing your factory team, and
      conducting a pre-audit mock inspection at your overseas facility to ensure
      first-attempt success.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      5 Certificate Issuance &amp; Ongoing Compliance
    </SectionHeadingThree>

    <ServiceParagraph>
      Once BIS issues the licence, we take over ongoing AIR responsibilities —
      monitoring compliance, managing BIS correspondence, handling renewals, and
      responding to any regulatory queries or market surveillance actions for
      the duration of the licence.
    </ServiceParagraph>
  </>
);

const EligibilitySection = () => (
  <>
    <SectionHeadingTwo>Who Needs an AIR</SectionHeadingTwo>

    <ServiceParagraph>
      Any foreign manufacturer whose product falls under a mandatory BIS
      certification scheme — whether that is the Foreign Manufacturers
      Certification Scheme for industrial and consumer products, the Compulsory
      Registration Scheme for electronics, or any other BIS-notified category — is
      legally required to appoint an AIR before their application can be
      processed.
    </ServiceParagraph>

    <ServiceParagraph>
      Our AIR service is built specifically for companies that want more than a
      name on a government form. It is designed for international manufacturers,
      procurement heads, and legal teams who need a partner in India that
      operates with the same standard of accountability they expect from their
      own compliance infrastructure.
    </ServiceParagraph>
  </>
);

const ConclusionSection = () => (
  <>
    <SectionHeadingTwo>CONCLUSION</SectionHeadingTwo>

    <ServiceParagraph>
      Obtaining BIS certification is not a one-time transaction. It is the
      beginning of a long-term legal and operational relationship between your
      company and the Indian regulatory system. The product you certify today
      will face renewal requirements, market surveillance inspections, and
      potential amendments as Indian standards evolve. Every one of those touch
      points passes through your Authorized Indian Representative.
    </ServiceParagraph>

    <ServiceParagraph>
      This is why the AIR appointment — which many foreign manufacturers treat
      as a formality to be resolved quickly and cheaply — is actually the most
      consequential decision in the entire India market entry process. A poorly
      structured AIR arrangement does not just create inconvenience. It creates
      legal exposure, delays your certification, and leaves your product
      vulnerable to compliance lapses that can result in licence suspension or
      market withdrawal.
    </ServiceParagraph>

    <ServiceParagraph>
      At Sun Certifications India, we have spent nearly a decade working with
      manufacturers and importers who came to us after experiencing exactly
      these problems with previous arrangements. What we hear most often is not
      that their earlier AIR was dishonest — it is that the role was simply not
      taken seriously enough. No dedicated oversight. No proactive communication.
      No one watching what BIS was doing with their licence after the certificate
      was issued.
    </ServiceParagraph>

    <ServiceParagraph>
      We built our AIR service to be the opposite of that experience. When Sun
      Certifications India acts as your Authorized Indian Representative, you are
      not handing responsibility to a passive intermediary. You are engaging a
      compliance team that actively manages your BIS obligations, monitors your
      certification status, and treats your India market standing with the same
      seriousness you do.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "risks", label: "Risks", section: <RisksSection /> },
  {
    id: "requirements",
    label: "Requirements",
    section: <RequirementsSection />,
  },
  { id: "service", label: "Our Service", section: <OurServiceSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  { id: "eligibility", label: "Eligibility", section: <EligibilitySection /> },
  {
    id: "final-thoughts",
    label: "Final Thoughts",
    section: <ConclusionSection />,
  },
];

const faqs = [
  {
    question: "Can a foreign manufacturer act as their own AIR?",
    answer:
      "No. The AIR must be a legal entity registered and based in India. A foreign company cannot appoint itself or one of its overseas offices as the AIR. The representative must be an Indian company or individual with a valid Indian address and PAN.",
  },
  {
    question:
      "What happens if the AIR is non-compliant or unresponsive after certification?",
    answer:
      "BIS can cancel or suspend the licence if the AIR fails to respond to compliance notices, market surveillance actions, or renewal requirements. This is why the quality and reliability of your AIR directly affects the long-term validity of your BIS certificate in India.",
  },
  {
    question:
      "Can we change our AIR after the BIS licence has already been issued?",
    answer:
      "Yes, it is possible to change the AIR on an existing BIS licence, but it involves a formal amendment process with BIS. Sun Certifications India handles AIR transfer engagements for foreign manufacturers who are switching from a previous representative.",
  },
  {
    question:
      "Does the AIR need to be physically present during the factory audit?",
    answer:
      "The AIR is responsible for coordinating the factory audit and facilitating communication between BIS and the foreign manufacturer. In practice, having your AIR's technical representative present during the overseas factory inspection significantly improves the audit outcome — which is precisely why we deploy our own team to the factory before and during the audit.",
  },
  {
    question:
      "Is one AIR sufficient if we have multiple products under BIS certification?",
    answer:
      "Yes. A single AIR can manage multiple BIS licences for the same foreign manufacturer, across different product categories and BIS schemes. Sun Certifications India manages multi-product portfolios for several international clients under a unified AIR engagement.",
  },
];

const AuthorizedIndianRepresentativeAIR = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="Authorized Indian Representative (AIR) for BIS Certification"
      hero={hero}
      intro={intro}
      sections={sections}
      faqs={faqs}
    />
  );
};

export default AuthorizedIndianRepresentativeAIR;
