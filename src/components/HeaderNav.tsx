import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaGraduationCap,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown: number) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      name: "About",
      dropdown: [
        "About GVR&S",
        "Legacy",
        "Leadership & Governance",
        "Strategic Plan",
        "Organogram",
        "Academic & Administrative Committees",
        "Awards & Recognitions",
        "Accreditations",
        "Why GVR&S",
        "Governance",
        "Policies",
        "Annual Reports",
        "Audit Reports",
        "Mandatory Disclosures",
      ],
    },
    {
      name: "Academics",
      dropdown: [
        "Bachelors Programs",
        "Masters Programs",
        "Auxiliary Departments",
        "Syllabus",
        "Academic Timetables",
        "Extended Learning",
        "Academic Calendar",
      ],
    },
    {
      name: "Admissions",
      dropdown: [
        "How to Apply",
        "International Admissions",
        "Admission Policy",
        "Fee Structure",
        "Life at GVR&S",
        "Facilities",
        "IIRS ISRO Outreach Program",
        "Grievance Redressal",
        "Skill Enhancement",
        "Sports",
        "Alumnae",
      ],
    },
    {
      name: "Research",
      dropdown: [
        "Overview",
        "Academic Research",
        "Funded Research Projects",
        "Research Centers",
        "Policies",
        "Patents",
        "IRINS",
        "International Conference Organized",
      ],
    },
    { name: "Placements" },
    {
      name: "Students Corner",
      dropdown: [
        "Timetable",
        "Latest News",
        "Student Counseling Centers",
        "Student Clubs",
        "GVR&S – Ek Bharat Shreshtha Bharath",
        "Blog",
        "ERP Login",
        "ECAP Login",
        "WES",
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="nav-brand">
          <button className="flex items-center gap-2">
            <FaGraduationCap />
            <span className="brand-text">GVR&S</span>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <div key={index} className="nav-item">
              {item.dropdown ? (
                <div className="dropdown">
                  <button onClick={() => toggleDropdown(index)}>
                    {item.name}
                    <FaChevronDown className="dropdown-icon" />
                  </button>
                  <div
                    className={`dropdown-menu ${
                      activeDropdown === index ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <button key={subIndex} className="dropdown-item">
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button>{item.name}</button>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Icon */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
