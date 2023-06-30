import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const NavigationControls = ({
  scrollToTop,
  scrollToBottom,
  scrollToPrevSection,
  scrollToNextSection,
  activeIndex,
  slidesLength,
}) => {
  const [isTopDisabled, setIsTopDisabled] = useState(true);

  useEffect(() => {
    console.log("activeIndex", activeIndex);
  }, [activeIndex]);
  return (
    <>
      {/* {activeIndex !== 0 && (
        <>
          <button onClick={handleTopSlide}>Top</button>
          <button onClick={handlePrevSlide}>Previous</button>
        </>
      )}
      {activeIndex !== slidesLength - 1 && (
        <>
          <button onClick={handleNextSlide}>Next</button>
          <button onClick={handleBottomSlide}>Bottom</button>
        </>
      )} */}

      <>
        <button
          onClick={scrollToTop}
          className="navbutton navtop"
          style={{ opacity: activeIndex === 0 ? 0.14 : 1 }}
        >
          <KeyboardDoubleArrowUpRoundedIcon />
        </button>
        <button
          onClick={scrollToPrevSection}
          className="navbutton navup"
          style={{ opacity: activeIndex === 0 ? 0.14 : 1 }}
        >
          <KeyboardArrowUpRoundedIcon />
        </button>
        <button
          onClick={scrollToNextSection}
          className="navbutton navdown"
          style={{ opacity: activeIndex === slidesLength - 1 ? 0.14 : 1 }}
        >
          <KeyboardArrowDownRoundedIcon />
        </button>
        <button
          onClick={scrollToBottom}
          className="navbutton navbottom"
          style={{ opacity: activeIndex === slidesLength - 1 ? 0.14 : 1 }}
        >
          <KeyboardDoubleArrowDownRoundedIcon />
        </button>
      </>
    </>
  );
};

export default NavigationControls;





/*import React from "react";


const NavigationControls = ({ activeIndex, setActiveIndex, slidesLength }) => {
  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < slidesLength - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleTopSlide = () => {
    setActiveIndex(0);
  };

  const handleBottomSlide = () => {
    setActiveIndex(slidesLength - 1);
  };

  return (
    // <>
    ////This is for making the inactive nav buttons dissapear

    //   {activeIndex !== 0 && (
    //     <>
    //       <button onClick={handleTopSlide}>Top</button>
    //       <button onClick={handlePrevSlide}>Previous</button>
    //     </>
    //   )}
    //   {activeIndex !== slidesLength - 1 && (
    //     <>
    //       <button onClick={handleNextSlide}>Next</button>
    //       <button onClick={handleBottomSlide}>Bottom</button>
    //     </>
    //   )}
    // </>
    <>
      {/* This is for making the inactive nav buttons disabled *//*}
      <button className="navbutton" onClick={handleTopSlide} disabled={activeIndex === 0}>
        Top
      </button>
      <button className="navbutton" onClick={handlePrevSlide} disabled={activeIndex === 0}>
        Previous
      </button>
      <button className="navbutton"
        onClick={handleNextSlide}
        disabled={activeIndex === slidesLength - 1}
      >
        A
      </button>
      <button className="navbutton"
        onClick={handleBottomSlide}
        disabled={activeIndex === slidesLength - 1}
      >
        B
      </button>
    </>
  );
};

export default NavigationControls; 
*/
