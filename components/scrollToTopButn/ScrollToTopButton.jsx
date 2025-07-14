import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import clsx from "clsx";


const ScrollToTopButton = () => {
  const theme=useTheme()  // theme color 
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {  // btn will be visible if the page is scrolled above 200
    setVisible(window.scrollY > 200);
  };

  const scrollToTop = () => { // for smooth scroll effect
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // adds the behavior when mounted and checks the scroll amount all time
    return () => window.removeEventListener("scroll", handleScroll); // removes the behvior when unmounted, resets the behavior when other pages mounted
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={clsx(`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white shadow-md transition duration-300 cursor-pointer ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      },`,{
          "bg-[#7D0C1C] && hover:bg-[#9e2b2b]": theme === "themeMaroon",
          "bg-[#0A2240] && hover:bg-[#122a47]": theme === "themeBlue",
        })}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
