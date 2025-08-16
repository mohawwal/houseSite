import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import LogoText from "../assets/images/BLIND1.png";
import useScrollNav from "../hooks/useScrollNav";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("MISSION");

  const menuItems = useMemo(
    () => [
      { label: "MISSION", path: "/", type: "route" },
      { label: "ABOUT", path: "/", sectionId: "about", type: "section" },
      { label: "WAITLIST", path: "/", sectionId: "waitList", type: "section" }, // Changed to section type
    ],
    []
  );

  const { isScrolled, isVisible } = useScrollNav(80);

  useEffect(() => {
    // Set active item based on current path
    if (location.pathname === "/") {
      setActiveItem("MISSION");
    }
    // Remove the Wait-list path check since waitlist is a section, not a separate page
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (item) => {
    setActiveItem(item.label);

    if (item.type === "section") {
      if (location.pathname === "/") {
        scrollToSection(item.sectionId);
      } else {
        navigate(item.path);
        setTimeout(() => {
          scrollToSection(item.sectionId);
        }, 100);
      }
    } else {
      navigate(item.path);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        const waitlistSection = document.getElementById("waitList");

        let currentSection = "MISSION";

        // Check waitlist section first (assuming it's lower on the page)
        if (waitlistSection) {
          const waitlistRect = waitlistSection.getBoundingClientRect();
          const isWaitlistInView =
            waitlistRect.top <= 100 && waitlistRect.bottom >= 100;

          if (isWaitlistInView) {
            currentSection = "WAITLIST";
          }
        }

        // Check about section
        if (aboutSection && currentSection === "MISSION") {
          const aboutRect = aboutSection.getBoundingClientRect();
          const isAboutInView = aboutRect.top <= 100 && aboutRect.bottom >= 100;

          if (isAboutInView) {
            currentSection = "ABOUT";
          }
        }

        // Default to mission if at top
        if (window.scrollY < 100) {
          currentSection = "MISSION";
        }

        setActiveItem(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  return (
    <div className="font-roboto">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-50 shadow-md" : "bg-transparent"
        } ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-[8vh]">
          <div className="w-[50%] md:w-[30%] flex items-center justify-start">
            <div className="w-[50px] h-[30px] bg-blue-500 flex items-center justify-center">
              <div className="w-[25px] h-[15px] bg-white"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center w-[40%] h-[46px]">
            <div className="bg-white text-xs flex flex-row gap-2 h-[38px] p-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer px-3 flex items-center justify-center transition-colors duration-300 ${
                    activeItem === item.label
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[50%] md:w-[30%] max-w-[400px] flex items-center justify-end">
            <div className="bg-white bg-opacity-80 hover:bg-orange-50 cursor-pointer hover:bg-opacity-50 flex flex-row items-center rounded-sm gap-4 px-2 h-[38px]">
              <p className="text-xs">000,10 JOINED WAITLIST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10vh]"></div>

      <div
        className={`fixed bottom-0 left-0 w-full flex justify-center md:hidden z-50 transition-all duration-300 ${
          isVisible ? "transform translate-y-0" : "transform translate-y-full"
        }`}
      >
        <div className="bg-white flex flex-row gap-2 h-[38px] p-1 mb-5">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer text-xs px-3 flex items-center justify-center transition-colors duration-300 ${
                activeItem === item.label
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
