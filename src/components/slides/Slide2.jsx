import React from "react";
import { useTranslation } from "react-i18next";
import Offers from "../Offers";

const Slide2 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Offers />
    </div>
  );
};

export default Slide2;
