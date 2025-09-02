import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaGraduationCap,
} from "react-icons/fa";

interface MenuItemType {
  name: string;
  path: string;
  dropdown?: MenuItemType[];
}

const menuItems: MenuItemType[] = [
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "About GVR&S", path: "/about" },
      { name: "Legacy", path: "/about/legacy" },
      { name: "Leadership & Governance", path: "/about/leadership" },
      { name: "Strategic Plan", path: "/about/strategic-plan" },
      { name: "Organogram", path: "/about/organogram" },
      {
        name: "Academic & Administrative Committees",
        path: "/about/committees",
      },
      { name: "Awards & Recognitions", path: "/about/awards" },
      { name: "Accreditations", path: "/about/accreditations" },
      { name: "Why GVR&S", path: "/about/why-gnits" },
      { name: "Governance", path: "/about/governance" },
      { name: "Policies", path: "/about/policies" },
      { name: "Annual Reports", path: "/about/annual-reports" },
      { name: "Audit Reports", path: "/about/audit-reports" },
      { name: "Mandatory Disclosures", path: "/about/disclosures" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    dropdown: [
      { name: "Bachelors Programs", path: "/academics/bachelors" },
      { name: "Masters Programs", path: "/academics/masters" },
      { name: "Auxiliary Departments", path: "/academics/departments" },
      { name: "Syllabus", path: "/academics/syllabus" },
      { name: "Academic Timetables", path: "/academics/timetables" },
      { name: "Extended Learning", path: "/academics/extended-learning" },
      { name: "Academic Calendar", path: "/academics/calendar" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
    dropdown: [
      { name: "How to Apply", path: "/admissions/apply" },
      { name: "International Admissions", path: "/admissions/international" },
      { name: "Admission Policy", path: "/admissions/policy" },
      { name: "Fee Structure", path: "/admissions/fees" },
      { name: "Life at GVR&S", path: "/admissions/life" },
      { name: "Facilities", path: "/admissions/facilities" },
      { name: "IIRS ISRO Outreach Program", path: "/admissions/iirs-isro" },
      { name: "Grievance Redressal", path: "/admissions/grievance" },
      { name: "Skill Enhancement", path: "/admissions/skills" },
      { name: "Sports", path: "/admissions/sports" },
      { name: "Alumnae", path: "/admissions/alumnae" },
    ],
  },
  {
    name: "Research",
    path: "/research",
    dropdown: [
      { name: "Overview", path: "/research/overview" },
      { name: "Academic Research", path: "/research/academic" },
      { name: "Funded Research Projects", path: "/research/projects" },
      { name: "Research Centers", path: "/research/centers" },
      { name: "Policies", path: "/research/policies" },
      { name: "Patents", path: "/research/patents" },
      { name: "IRINS", path: "/research/irins" },
      {
        name: "International Conference Organized",
        path: "/research/conferences",
      },
    ],
  },
  {
    name: "Placements",
    path: "/placements",
  },
  {
    name: "Students Corner",
    path: "/students-corner"
   
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 relative">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <FaGraduationCap />
          <span className="font-bold text-xl">GVR&S</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredDropdown(index)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path) ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-500 flex items-center gap-1`}
              >
                {item.name}
                {item.dropdown && <FaChevronDown className="text-xs" />}
              </Link>

              {item.dropdown && hoveredDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded shadow-lg z-10">
                  {item.dropdown.map((subItem, subIndex) =>
                    subItem.dropdown ? (
                      <div
                        key={subIndex}
                        className="relative group"
                        onMouseEnter={() => setHoveredDropdown(subIndex)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                      >
                        <span className="block px-4 py-2 cursor-pointer hover:text-blue-500 flex justify-between items-center">
                          {subItem.name} <FaChevronDown className="text-xs" />
                        </span>
                        <div className="absolute top-0 left-full mt-0 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                          {subItem.dropdown.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-4 py-2 hover:text-blue-500"
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 hover:text-blue-500"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b">
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:text-blue-500"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 hover:text-blue-500"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
