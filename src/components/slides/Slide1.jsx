import React from "react";
import { useTranslation } from "react-i18next";
import { ContactButton } from "../ContactButton";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Slide1 = ({ scrollToBottom, scrollToNextSection }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="intro">
        <div className="introtitle">               
          <h1 className="ac mobilehi">{t("Moi.")}</h1>
        </div>
        <div className="introtext">
              <p className="ac mobilehi">{t("Welcome to Suloke, your partner for navigating the evolving landscape of digital transformation.")}</p> 
              <p className="ac mobilehi">{t("Our experienced core team offers exceptional quality in IT-development, integrating technology seamlessly into your business. And making it easy. Suloke is about open and honest communication; we work collaboratively with you to ensure effective solutions tailored to your specific requirements.")}</p> 
              <p className="ac mobilehi">{t("Continue to learn more about our team or reach out now to start a conversation!")}</p> 
        </div>
        <div className="contactbuttoncontainer">
          <button onClick={scrollToNextSection} className="navbuttoncta navdown">
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 90 }} />
          </button>
          <div className="contactbutton">
            <ContactButton scrollToBottom={scrollToBottom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;

