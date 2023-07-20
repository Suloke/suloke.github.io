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
      <>
        <button
          onClick={scrollToTop}
          className={`navbutton navtop ${activeIndex === 0 ? 'pause-animation' : 'move-icon2'}`}
          style={{ opacity: activeIndex === 0 ? 0.14 : 1 }}
        >
          <KeyboardDoubleArrowUpRoundedIcon />
        </button>
        <button
          onClick={scrollToPrevSection}
          className={`navbutton navup ${activeIndex === 0 ? 'pause-animation' : 'move-icon2'}`}
          style={{ opacity: activeIndex === 0 ? 0.14 : 1 }}
        >
          <KeyboardArrowUpRoundedIcon />
        </button>
        <button
          onClick={scrollToNextSection}
          className={`navbutton navdown ${activeIndex === slidesLength - 1 ? 'pause-animation' : 'move-icon'}`}
          style={{ opacity: activeIndex === slidesLength - 1 ? 0.14 : 1 }}
        >
          <KeyboardArrowDownRoundedIcon />
        </button>
        <button
          onClick={scrollToBottom}
          className={`navbutton navbottom ${activeIndex === slidesLength - 1 ? 'pause-animation' : 'move-icon2'}`}
          style={{ opacity: activeIndex === slidesLength - 1 ? 0.14 : 1}}

        >
          <KeyboardDoubleArrowDownRoundedIcon />
        </button>
      </>
    </>
  );
};

export default NavigationControls;



