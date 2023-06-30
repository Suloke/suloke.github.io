import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { ArboLogo, Tuomo } from "../components/Logo";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';



const References = () => {
    const { t } = useTranslation();
    return (
      <div>
        <div className="references">
            <div className="reftext">
              <h2 className="ac">{t("Why")}<br></br>{t("us")}<br></br>{t("?")}</h2>
              <p className="ac">{t("Be it a beautifully designed UI, a lasting backend solution or simply a helping hand to lift you over the treshold, our scalable talent pool is capable of providing the muscle you need for your enterprise.")}</p>
              <h2 className="ac">AGILE &<br></br>SAFe</h2>
            </div>

                <a className="testimonial" href="http://www.arbonaut.com" target="_blank" rel="noopener noreferrer">
                    <div className="quotemark">
                      <FormatQuoteRoundedIcon fontSize="large" />
                    </div>
                    <p className="quote">                    
                      {t("Suloke was tasked by Arbonaut with a challenging full-stack development: an application integrating satellite and crowdsourced wildfire data, with mobile and web portals. Suloke's skilled experts undertook the task with vigour, skilfully and independently delivering a comprehensive app. I am highly impressed with the outcome and happily recommend Suloke for demanding development tasks!")}
                    </p>
                    <div className="signature">
                      <div className="tuomopic">
                          <Tuomo />
                      </div>
                      <p className="tuomosign">
                        Tuomo Kauranne<br></br>
                        -CEO-
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
