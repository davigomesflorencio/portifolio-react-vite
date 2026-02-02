import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export interface NavBarProps {
  active: string;
}

const NavBar = (props: NavBarProps) => {
  const { active } = props;
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center m-0">
        <nav className="flex justify-center items-center fixed top-[3vh] z-[999] max-sm:left-[10%] max-sm:w-[80%] max-sm:text-[80%]">
          <div className="flex items-center bg-white dark:bg-[#27272a] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[40px] px-2 transition-colors duration-300">
            <ul className="flex justify-between items-center list-none ml-[16px] mr-[20px] my-[10px] lg:gap-6 gap-2">
              <li
                className={`font-bold text-[110%] ${active === "home" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
              >
                <Link to="/">{t("nav.home")}</Link>
              </li>
              <li
                className={`font-bold text-[110%] ${active === "about" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
              >
                <Link to="/about">{t("nav.about")}</Link>
              </li>
              <li
                className={`font-bold text-[110%] ${active === "projects" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
              >
                <Link to="/projects">{t("nav.projects")}</Link>
              </li>
              <li
                className={`font-bold text-center text-[110%] ${active === "playstore" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
              >
                <Link to="/playstore">
                  {isLargeScreen ? t("nav.playstore") : "Apps"}
                </Link>
              </li>

              <li
                className={`font-bold text-[110%] ${active === "contact" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
              >
                <Link to="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
            <div className="flex gap-2">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f4f4f5] dark:bg-[#3f3f46] cursor-pointer hover:bg-quaternary dark:hover:bg-[#52525b] transition-all duration-300 "
                onClick={toggleLanguage}
                title={
                  i18n.language === "pt"
                    ? "Switch to English"
                    : "Mudar para Português"
                }
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-secondary dark:text-[#f4f4f5]"
                />
              </div>
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f4f4f5] dark:bg-[#3f3f46] cursor-pointer hover:bg-quaternary dark:hover:bg-[#52525b] transition-all duration-300 "
                onClick={toggleTheme}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faSun : faMoon}
                  className={`${isDarkMode ? "text-yellow-400" : "text-secondary"}`}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
