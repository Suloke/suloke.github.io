import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { ArboLogo, Tuomo } from "./Logo";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';



const References = () => {
    const { t } = useTranslation();
    return (
      <div>
        <div className="offers">
            <div className="reftext">
            <h2 className="ac">WEB</h2>
              <p className="ac">{t("A website is often the first and defining impression of a company, a calling card forming the expectations for the quality of the service. An intently designed, fast and intuitive website creates an impression that defines the brand. It communicates that the organization is established and capable. Our team can create the impression, and the functionality you need.")}</p>
            </div>
            <div className="reftechs">
            <p className="ac">next.js</p>
            <p className="ac">react</p>
            <p className="ac">strapi</p>
            <p className="ac">tailwind</p>
            <p className="ac">figma</p>
            <p className="ac">ui/ux-design</p>
            <p className="ac">graphic design</p>

            </div>
            <div className="reftext">
            <h2 className="ac">MOBILE</h2>
              <p className="ac">{t("Suloke offers a wealth of experience in mobile development, with a special emphasis on crowdsourcing and map-integration. Understanding the customers needs is key to succesful app development; we work by collaborative design, integrating stakeholders in to the planning process from the get-go. And whatever the plan, our experienced project management can weave the technology in to the shape you need.")}</p>
            </div>
            <div className="reftechs">
              <p className="ac">flutter</p>
              <p className="ac">swift</p> 
              <p className="ac">kotlin</p>
              <p className="ac">typescript</p>
              <p className="ac">map-integration</p>
              <p className="ac">firebase</p>
              <p className="ac">react native</p>
            </div>
            <div className="reftext">
            <h2 className="ac">BACKEND</h2>
              <p className="ac">{t("Be it AI-integration, big data analytics, a lasting API-solution or simply a helping hand to lift you over the treshold, our scalable talent pool is capable of providing the muscle you need for your enterprise.")}</p>
            </div>
            <div className="reftechs">
              <p className="ac">python</p> 
              <p className="ac">databases</p>
              <p className="ac">yolo</p>
              <p className="ac">docker</p>
              <p className="ac">ai-integration</p>
              <p className="ac">big data</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default References;
