function Footer() {
  return (
    <>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-blue-950 px-6 md:px-10 py-12">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <a href="https://vita.spsnet.com/" className="flex justify-center md:justify-start">
            <img
              src="https://vita.spsnet.com/assets/images/logo-white.png"
              alt="sps-logo"
              className="h-12 md:h-14 object-contain"
            />
          </a>
          <p className="text-white mt-6 text-sm md:text-base leading-relaxed">
            Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered
            industry solutions. With expertise across design, development, security, and
            operations, we build scalable, secure, and reliable systems. Our award-winning
            team includes IBM-certified inventors and global competition champions.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-white text-center md:text-left">
          <h1 className="font-bold text-lg md:text-xl">Compliance</h1>
          <div className="mt-4 space-y-2 text-sm md:text-base">
            <a
              href="https://vita.spsnet.com/compliance/information-security-policy/"
              className="block hover:text-blue-400"
            >
              &gt; Information Security Policy
            </a>
            <a
              href="https://vita.spsnet.com/compliance/roles-and-responsibilities/"
              className="block hover:text-blue-400"
            >
              &gt; Roles and Responsibilities
            </a>
            <a
              href="https://vita.spsnet.com/compliance/business-impact-analysis/"
              className="block hover:text-blue-400"
            >
              &gt; Business Impact Analysis
            </a>
            <a
              href="https://vita.spsnet.com/compliance/it-system-data/"
              className="block hover:text-blue-400"
            >
              &gt; IT System and Data Sensitivity Classification
            </a>
            <a
              href="https://vita.spsnet.com/compliance/sensitive-it-inventory/"
              className="block hover:text-blue-400"
            >
              &gt; Sensitive IT System Inventory and Definition
            </a>
            <a
              href="https://vita.spsnet.com/compliance/risk-assessment/"
              className="block hover:text-blue-400"
            >
              &gt; Risk Assessment
            </a>
            <a
              href="https://vita.spsnet.com/compliance/it-security-audits/"
              className="block hover:text-blue-400"
            >
              &gt; IT Security Audits
            </a>
            <a
              href="https://vita.spsnet.com/compliance/security-controls-catalog/"
              className="block hover:text-blue-400"
            >
              &gt; Security Controls Catalog
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/30" />

      {/* Bottom Footer */}
      <footer className="text-white text-sm md:text-base font-medium bg-blue-950 p-5 text-center">
        &copy; 2024 Software Productivity Strategists, Inc. All Rights Reserved.
      </footer>
    </>
  );
}

export default Footer;
