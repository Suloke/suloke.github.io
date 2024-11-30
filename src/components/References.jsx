import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { ArboLogo, Tuomo, MoresLogo } from "../components/Logo";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';



const References = () => {
    const { t } = useTranslation();
    return (
      <div>
        <div className="references">
          <h2 className="ac">{t("IN COLLABORATION WITH")}</h2>
            <div className="reflogos">
              <a href="http://www.arbonaut.com" target="_blank" rel="noopener noreferrer">
                <div className="arboreflogo"><ArboLogo/></div>
              </a>
              <a href="http://mores-horizon.eu" target="_blank" rel="noopener noreferrer">
                <div className="moreslogo"><MoresLogo/></div>
              </a>
            </div>

                <a className="testimonial" href="http://www.arbonaut.com" target="_blank" rel="noopener noreferrer">
                    <div className="quotemark">
                      <FormatQuoteRoundedIcon fontSize="large" />
                    </div>
                    <p className="quote ac">                    
                      {t("Suloke was tasked by Arbonaut with a challenging full-stack development: an application integrating satellite and crowdsourced wildfire data, with mobile and web portals. Suloke's skilled experts undertook the task with vigour, skilfully and independently delivering a comprehensive app. I am highly impressed with the outcome and happily recommend Suloke for demanding development tasks!")}
                    </p>
                    <div className="signature ac">
                      <p className="tuomosign ac">
                        TUOMO KAURANNE, ceo of
                        <div className="arbologo">
                          <ArboLogo/>
                        </div>
                      </p>


                     

                    </div>

                </a>

        </div>
      </div>
    );
  };
  
  export default References;
