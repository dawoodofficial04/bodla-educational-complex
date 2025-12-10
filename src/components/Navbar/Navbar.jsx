import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/BodlaEducationalComplex.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { title: "Home", link: "/" },
  {
    title: "About",
    children: [
      { title: "About College", link: "#" },
      { title: "Mission & Vision", link: "#" },
    ],
  },
  {
    title: "Admission",
    children: [
      { title: "MBBS", link: "#" },
      { title: "BDS", link: "#" },
    ],
  },
  {
    title: "Departments",
    children: [
      { title: "Basic Sciences", link: "#" },
      { title: "Clinical Sciences", link: "#" },
    ],
  },
  { title: "Alumni", link: "#" },
  {
    title: "Institutes",
    children: [
      { title: "Punjab Group of Colleges", link: "#" },
      { title: "Regional Institute of Allied Health Sciences", link: "#" },
      { title: "Nexskill", link: "#" },
      { title: "Bodla Eye Care", link: "#" },
    ],
  },
  {
    title: "Campus Life",
    children: [
      { title: "Societies", link: "#" },
      { title: "Events", link: "#" },
    ],
  },
  { title: "Contact", link: "#" },
  { title: "Careers", link: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  return (
    <nav className="w-full">
      {/* =================== HEADER (Logo + Title) =================== */}
      <div className="w-full flex items-center justify-center">
        <Link
          to="/"
          className="flex flex-col md:flex-row items-center text-center md:text-left"
        >
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            className="h-25 w-auto object-cover px-2 py-2"
          />

          {/* Title + Subtitle */}
          <div className="leading-tighter">
            <h1 className="text-2xl md:text-3xl font-bold text-[#233D63] hover:text-[#5e7faa]">
              Bodla Educational Complex
            </h1>
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              A project of Pir Sanaullah Bodla Memorial Trust
            </p>
          </div>
        </Link>
      </div>

      {/* =================== ANNOUNCEMENT BAR =================== */}
      <div className="w-full bg-white border-y py-2">
        <div className="max-w-[80%] mx-auto overflow-hidden px-6">
          <div className="marquee flex min-w-max">
            <p className="text-sm text-[#7E3F9E] font-bold mx-8">
              Bodla Educational Complex - 'Largest Educational Complex in Mian
              Channu', running under the supervision of 'Prof. Dr. M Afzal
              Bodla' with four registered institutions while providing quality
              education.
            </p>
            <p className="text-sm text-[#7E3F9E] font-bold mx-8">
              Bodla Educational Complex - 'Largest Educational Complex in Mian
              Channu', running under the supervision of 'Prof. Dr. M Afzal
              Bodla' with four registered institutions while providing quality
              education.
            </p>
            <p className="text-sm text-[#7E3F9E] font-bold mx-8">
              Bodla Educational Complex - 'Largest Educational Complex in Mian
              Channu', running under the supervision of 'Prof. Dr. M Afzal
              Bodla' with four registered institutions while providing quality
              education.
            </p>
          </div>
        </div>
      </div>

      {/* =================== DESKTOP NAVBAR =================== */}
      <div className="bg-[#233D63] border-b-4 border-[#8A5DA1] shadow-md overflow-visible">
        <div className="max-w-7xl mx-auto px-4 py-3 w-full">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap items-center justify-center gap-4 text-white font-medium max-w-full">
            {navItems.map((item, i) => (
              <li key={i} className="relative group">
                <button
                  onClick={() =>
                    setDesktopDropdown(desktopDropdown === i ? null : i)
                  }
                  className={`flex items-center gap-1 px-4 py-2 rounded-md transition ${
                    item.title === "Home"
                      ? "bg-[#8A5DA1] text-white"
                      : "hover:bg-[#324f7c]"
                  }`}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        desktopDropdown === i
                          ? "rotate-180"
                          : "group-hover:rotate-180"
                      }`}
                    />
                  )}
                </button>
                {/* Desktop Dropdown */}
                {item.children && (
                  <div
                    className={`navbar-dropdown absolute left-0 mt-2 bg-white text-black 
                w-48 rounded-lg shadow-lg animate-fadeIn
                ${desktopDropdown === i ? "block" : "hidden"} 
                group-hover:block`}
                  >
                    {item.children.map((c, idx) => (
                      <Link
                        key={idx}
                        to={c.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex justify-center md:hidden">
            <button onClick={() => setMobileOpen(true)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* =================== MOBILE OVERLAY =================== */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* =================== MOBILE SIDEBAR =================== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#233D63] text-white z-50 transform transition-transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="p-2">
          {navItems.map((item, i) => (
            <li key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                className="w-full flex justify-between items-center py-3 px-3"
              >
                {item.title}
                {item.children && (
                  <ChevronDown
                    className={`transition ${
                      openDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.children && (
                <div
                  className={`overflow-hidden transition-all ${
                    openDropdown === i ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.children.map((c, idx) => (
                    <Link
                      key={idx}
                      href={c.link}
                      className="block pl-6 py-2 text-sm bg-[#1E3555] hover:bg-[#2b4a78]"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
