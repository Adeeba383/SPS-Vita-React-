import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "https://vita.spsnet.com/" },
    {
      name: "Compliance",
      dropdown: [
        { name: "Information Security Policy", href: "https://vita.spsnet.com/compliance/information-security-policy/" },
        { name: "Roles and Responsibilities", href: "https://vita.spsnet.com/compliance/roles-and-responsibilities/" },
        { name: "Business Impact", href: "https://vita.spsnet.com/compliance/business-impact/" },
        { name: "IT System and Data Sensitivity", href: "https://vita.spsnet.com/compliance/it-system-data/" },
        { name: "Sensitive IT Inventory", href: "https://vita.spsnet.com/compliance/sensitive-it-inventory/" },
        { name: "Risk Assessment", href: "https://vita.spsnet.com/compliance/risk-assessment/" },
        { name: "IT Security Audits", href: "https://vita.spsnet.com/compliance/it-security-audits/" },
        { name: "Security Controls Catalogs", href: "https://vita.spsnet.com/compliance/security-controls-catalog/" }
      ]
    },
    {
      name: "Pricing",
      dropdown: [
        { name: "Basic Plan", href: "https://vita.spsnet.com/plans/?plan=basic" },
        { name: "Standard Plan", href: "https://vita.spsnet.com/plans/?plan=standard" },
        { name: "Premium Plan", href: "https://vita.spsnet.com/plans/?plan=premium" }
      ]
    },
    {
      name: "About Us",
      dropdown: [{ name: "Contact Us", href: "https://vita.spsnet.com/contact-us/" }]
    }
  ];

  const Dropdown = ({ items, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li className="relative md:static w-full md:w-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
          onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
          className="flex items-center justify-between w-full md:w-auto hover:underline decoration-blue-600 decoration-[3px] underline-offset-4 py-2 md:py-0"
        >
          {title}
          <svg
            className={`ml-1 w-4 h-4 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <ul
          className={`overflow-hidden transition-all duration-300 md:absolute md:left-0 md:mt-2 md:w-60 md:bg-white md:text-black md:shadow-lg md:rounded-md md:py-2 md:z-50 ${
            isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible md:max-h-none md:opacity-0"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="https://vita.spsnet.com/" className="flex items-center space-x-2">
          <img
            src="https://vita.spsnet.com/assets/images/logo-white.png"
            alt="sps-logo"
            className="h-10"
          />
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </>
          )}
        </button>

        {/* Nav Items */}
        <ul
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 absolute md:static left-0 top-full w-full md:w-auto bg-blue-950 md:bg-transparent transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          }`}
        >
          {navItems.map((item, index) =>
            item.dropdown ? (
              <Dropdown key={index} title={item.name} items={item.dropdown} />
            ) : (
              <li
                key={index}
                className="hover:underline decoration-blue-600 decoration-[3px] underline-offset-4 px-6 md:px-0 py-2 md:py-0"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            )
          )}
          {/* Mobile Login Button */}
          <li className="md:hidden px-6 py-3">
            <a
              href="https://vita.spsnet.com/csm/"
              className="block text-center text-white border-white border-2 px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
            >
              Login to CSM
            </a>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <button className="hidden md:block text-white border-white border-2 px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
          <a href="https://vita.spsnet.com/csm/">Login to CSM</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
