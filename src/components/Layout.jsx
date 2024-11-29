import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ThemeToggle from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";
import { Logo, MobileLogo } from "../components/Logo";
import Slide1 from "./slides/Slide1";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide2 from "./slides/Slide2";
import NavigationControls from "./NavigationControls";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { OpenPrivacyPolicy, ClosePrivacyPolicy } from "./ContactButton";


const Layout = () => {
  const sections = [Slide1,   Slide2, Slide3, Slide4, Slide5,  ];
  const theme = useSelector((state) => state.theme);

  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef(sections.map(() => React.createRef()));
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const scrollToSection = (index) => {
    sectionRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setCurrentSection(index);
  };

  const scrollToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      scrollToSection(nextSection);
    }
  };

  const scrollToPrevSection = () => {
    const prevSection = currentSection - 1;
    if (prevSection >= 0) {
      scrollToSection(prevSection);
    }
  };

  const scrollToTop = () => {
    scrollToSection(0);
  };

  const scrollToBottom = () => {
    scrollToSection(sections.length - 1);
  };  

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      const sectionIndex = sections.findIndex(
        (_, index) =>
          sectionRefs.current[index].current.offsetTop <= scrollPosition &&
          sectionRefs.current[index].current.offsetTop +
            sectionRefs.current[index].current.offsetHeight >
            scrollPosition
      );
      if (sectionIndex !== -1 && sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, sections]);



  return (
    <div className={`layout ${theme}`}>

      <header>
        <div className="logomobile">
          <MobileLogo />
        </div>
      </header>

      <div className="left-column">
        <Logo />
        <ThemeToggle />
      </div>

      <div className="center-column">
        {sections.map((Section, index) => (
          <div className="slide" key={index} ref={sectionRefs.current[index]}>
            <div className="slide-content">
              <Section scrollToBottom={scrollToBottom} scrollToNextSection={scrollToNextSection} togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy} />
              
            </div>
          </div>
        ))}
        {showPrivacyPolicy && (
          <div className="privacypolicy">
            <PrivacyPolicy onClose={togglePrivacyPolicy} />
          </div>
        )}
      </div>
      <div className="right-column">
        <NavigationControls
          scrollToTop={scrollToTop}
          scrollToBottom={scrollToBottom}
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
          activeIndex={currentSection}
          slidesLength={sections.length}
        />
      </div>

      <footer>  
        <ThemeToggle />        
        <NavigationControls
          scrollToTop={scrollToTop}
          scrollToBottom={scrollToBottom}
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
          activeIndex={currentSection}
          slidesLength={sections.length}
        />
      </footer>

    </div>
  );
};

export default Layout;