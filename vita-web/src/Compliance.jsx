import { useState } from "react";
import ArrowRight from "./assets/right-arrow.png";

const complianceItems = [
  {
    title: "Information Security Policy",
    details: (
      <>
        <p>
          Our Information Security Policy establishes a comprehensive framework
          for protecting the confidentiality, integrity, and availability of
          data, systems, and networks across the organization. It sets clear
          security objectives, compliance requirements, and operational
          practices designed to safeguard organizational information from
          internal and external threats, while ensuring regulatory and
          contractual obligations are met. The policy emphasizes the protection
          of sensitive information, including personally identifiable
          information (PII), financial records, intellectual property, and other
          critical business data, against unauthorized access, disclosure,
          modification, or destruction.
        </p>
        <a
          href="https://vita.spsnet.com/compliance/information-security-policy/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "Roles and Responsibilities",
    details: (
      <>
        <p>
          Clear roles and responsibilities are fundamental to maintaining an
          effective and accountable information security program. Every member
          of the organization, from executive leadership to operational staff,
          has a distinct responsibility in protecting information assets,
          ensuring compliance, and mitigating risks. Employees are expected to
          follow established security policies, participate in mandatory
          training programs, report any suspicious activities, and protect
          sensitive data in all daily operations. Managers and supervisors are
          responsible for enforcing security procedures within their teams,
          monitoring adherence to policies, and escalating issues to higher
          management or the Information Security Officer (ISO) as necessary.
        </p>
        <a
          href="https://vita.spsnet.com/compliance/roles-and-responsibilities/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "Business Impact Analysis",
    details: (
      <>
        <p>
          The Business Impact Analysis (BIA) is a critical component of our
          organization's information security and continuity planning efforts.
          It systematically identifies and evaluates essential business
          functions, determining the potential impact of disruptions on these
          operations. By assessing the financial, operational, and reputational
          consequences of various threats—such as cyberattacks, natural
          disasters, or system failures—the BIA enables us to prioritize
          recovery strategies effectively.
        </p>
        <a
          href="https://vita.spsnet.com/compliance/business-impact-analysis/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "IT System and Data Sensitivity Classification",
    details: (
      <>
        <p>
          We classify IT systems and data based on their sensitivity to ensure
          the right level of protection. Classification categories typically
          include:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Public: Information intended for general access without restrictions.</li>
          <li>Internal: Business-use information not for public disclosure.</li>
          <li>Confidential: Sensitive data requiring controlled access.</li>
          <li>
            Restricted: Highly sensitive systems/data with strict protection
            measures.
          </li>
        </ul>
        <a
          href="https://vita.spsnet.com/compliance/it-system-data/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "Sensitive IT System Inventory and Definition",
    details: (
      <>
        <p>
          An inventory of sensitive IT systems helps maintain visibility and
          proper protection. Each system is defined by:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>System Name & Owner: Identification and accountability.</li>
          <li>Data Handled: Type of sensitive or regulated information processed.</li>
          <li>Criticality: Impact of downtime or data loss on business operations.</li>
          <li>
            Controls Applied: Security measures in place for protection.
          </li>
        </ul>
        <a
          href="https://vita.spsnet.com/compliance/sensitive-it-inventory/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "Risk Assessment",
    details: (
      <>
        <p>
          Risk assessments evaluate potential threats and vulnerabilities to IT
          systems and data. The process typically includes:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Identify Assets: Catalog critical systems, data, and processes.</li>
          <li>
            Analyze Threats & Vulnerabilities: Assess possible risks and
            weaknesses.
          </li>
          <li>
            Evaluate Impact & Likelihood: Measure business impact if risks
            materialize.
          </li>
          <li>
            Mitigation Plans: Recommend controls and prioritize risk treatments.
          </li>
        </ul>
        <a
          href="https://vita.spsnet.com/compliance/risk-assessment/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "IT Security Audits",
    details: (
      <>
        <p>
          IT security audits are conducted to evaluate the effectiveness of
          security measures, compliance with policies, and adherence to
          regulatory standards. These audits help identify gaps and strengthen
          the overall security posture.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Compliance Review: Ensures alignment with industry standards (e.g.,
            ISO, NIST, GDPR).
          </li>
          <li>
            Vulnerability Assessment: Identifies weaknesses in systems, networks,
            and processes.
          </li>
          <li>
            Control Effectiveness: Tests whether implemented safeguards are
            working as intended.
          </li>
          <li>
            Continuous Improvement: Provides recommendations to reduce risks and
            enhance resilience.
          </li>
        </ul>
        <a
          href="https://vita.spsnet.com/compliance/it-security-audits/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
  {
    title: "Security Controls Catalog",
    details: (
      <>
        <p>
          The Security Controls Catalog provides a comprehensive list of
          technical and organizational measures used to safeguard systems and
          data. These controls are aligned with best practices and regulatory
          requirements.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Access Controls: Role-based access, authentication, and authorization
            policies.
          </li>
          <li>
            Network Security: Firewalls, intrusion detection/prevention, and
            segmentation.
          </li>
          <li>
            Data Protection: Encryption, backup, and secure data handling
            processes.
          </li>
          <li>
            Monitoring & Logging: Continuous monitoring of systems for anomalies
            and threats.
          </li>
          <li>
            Incident Response: Defined processes to detect, respond, and recover
            from security incidents.
          </li>
        </ul>
        <a
          href="https://vita.spsnet.com/compliance/security-controls-catalog/"
          className="text-blue-700 font-semibold hover:underline block mt-3"
        >
          Learn More &gt;
        </a>
      </>
    ),
  },
];

function Compliance() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="m-5 flex flex-col lg:flex-row gap-6">
      {/* Left side: card list */}
      <div className="flex flex-col w-full lg:w-1/2">
        {complianceItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-row items-center gap-2 w-full p-3 mb-4 bg-white shadow-md shadow-blue-300 hover:bg-blue-800 cursor-pointer rounded-md transition"
            onClick={() => setActiveIndex(index)}
          >
            <img src={ArrowRight} className="w-5 h-5" alt="arrow right" />
            <span className="text-base md:text-lg lg:text-xl text-blue-800 group-hover:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Right side: detail panel */}
      <div className="relative w-full lg:w-1/2">
        {/* Desktop Backdrop */}
        {activeIndex !== null && (
          <div
            className="hidden lg:block fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setActiveIndex(null)}
          ></div>
        )}

        {/* Desktop: Slide-in panel */}
        <div
          className={`hidden lg:block fixed top-0 right-0 w-full max-w-xl h-full bg-white p-6 shadow-lg rounded-l-md z-50 transition-transform duration-500 ease-in-out ${
            activeIndex !== null ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {activeIndex !== null && (
            <>
              <h4 className="text-2xl font-bold mb-3">
                {complianceItems[activeIndex].title}
              </h4>
              <div className="text-gray-700 text-base">
                {complianceItems[activeIndex].details}
              </div>
              <button
                onClick={() => setActiveIndex(null)}
                className="mt-6 px-5 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </>
          )}
        </div>

        {/* Mobile/Tablet: Show details inline */}
        {activeIndex !== null && (
          <div className="block lg:hidden w-full bg-white p-6 shadow-lg rounded-md mt-4">
            <h4 className="text-xl md:text-2xl font-bold mb-3">
              {complianceItems[activeIndex].title}
            </h4>
            <div className="text-gray-700 text-sm md:text-base">
              {complianceItems[activeIndex].details}
            </div>
            <button
              onClick={() => setActiveIndex(null)}
              className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compliance;
