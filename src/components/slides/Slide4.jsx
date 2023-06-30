import React from "react";
import { useTranslation } from "react-i18next";
import References from "../References";
import Contact from "../Contact";


const Slide4 = ({ togglePrivacyPolicy, showPrivacyPolicy }) => {
  //const { t } = useTranslation();
  return (
    <div>
      <Contact togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy} />
    </div>
  );
};

export default Slide4;
