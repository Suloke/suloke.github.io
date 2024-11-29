import React from "react";
import { useTranslation } from "react-i18next";
import References from "../References";
import Contact from "../Contact";


const Slide5 = ({ togglePrivacyPolicy, showPrivacyPolicy }) => {
  //const { t } = useTranslation();
  return (
    <div>
      <Contact togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy} />
    </div>
  );
};

export default Slide5;
