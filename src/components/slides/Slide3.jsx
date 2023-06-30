import React from "react";
import { useTranslation } from "react-i18next";
import Profiles from "../Profiles";
const Slide2 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Profiles />
    </div>
  );
};

export default Slide2;
