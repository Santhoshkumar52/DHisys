// src/components/navbar/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import clsx from "clsx";

const Navbar = () => {
  const theme = useTheme(); // "themeMaroon" or "themeBlue"
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
    <nav
      className={clsx(
        " fixed top-0 left-0 right-0 z-50 md:border-t-17 md:border-b-20 border-white px-20 py-3 transition duration-300 ",
        {
          "bg-[#7D0C1C]": theme === "themeMaroon",
          "bg-[#0A2240]": theme === "themeBlue",
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap">
        {/* <div className="flex items-center space-x-2"> */}
          <img src="../../assets/Common/Dhisys_logo.png" alt="Logo" className="h-10 " />
          {/* <span className="text-white font-semibold text-lg">DH-AI Systems</span> */}
        {/* </div> */}

        <button onClick={toggleMenu} className="text-white md:hidden cursor-pointer focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={clsx(
            "md:flex md:items-center md:space-x-6 w-full md:w-auto overflow-hidden transition-all duration-500 ease-in-out",
            {
              "max-h-[300px] opacity-100 scale-100": menuOpen,
              "max-h-0 opacity-0 scale-y-90": !menuOpen,
              "md:opacity-100 md:scale-100 md:max-h-full": true,
            }
          )}
        >
          <div className="flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 md:text-end text-center">
            <NavLink to="/" onClick={handleLinkClick} className="block text-white font-medium px-3 py-1 hover:underline">Home</NavLink>
            <NavLink to="/about" onClick={handleLinkClick} className="block text-white font-medium px-3 py-1 hover:underline">About</NavLink>
            <NavLink to="/services" onClick={handleLinkClick} className="block text-white font-medium px-3 py-1 hover:underline">Services</NavLink>
            <NavLink to="/contact" onClick={handleLinkClick} className="block text-white font-medium px-3 py-1 hover:underline">Contact</NavLink>
            <NavLink
              to="/start"
              onClick={handleLinkClick}
              className={clsx(
                "mt-2 md:mt-0 inline-block bg-white font-semibold px-4 py-1 md:ml-5 rounded-full transition hover:bg-gray-100",
                {
                  "text-[#7D0C1C]": theme === "themeMaroon",
                  "text-[#0A2240]": theme === "themeBlue",
                }
              )}
            >
              Begin Your AI Journey
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
