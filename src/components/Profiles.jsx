import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const toggleAccordion = (event) => {
  event.preventDefault();
  setIsOpen(!isOpen);
}
const Profiles = () => {
    const { t } = useTranslation();
    return (
      <div>
        <div className="accordion">
          <ul>
            <li tabIndex="1" className="accordion ul li"
        onClick={toggleAccordion}>
              <div>
                <a href="#">
                  <h2 className="ac">Samuli</h2><h2 className="h22">Kujala</h2>
                  <h3 className="title">Manager - CEO</h3>
                  <div className="profcontent">
                    <p className="profiletext">{t("The general manager at Suloke, Samuli also takes the lead in all things design. With background in graphic design and marketing, he will guide you through the user-side considerations of your business.")}</p>
                      <div className="techs">
                        <div>React</div>
                        <div>CSS</div>
                        <div>NEXT.JS</div>
                        <div>Python</div>
                        <div>Figma</div>
                        <div>UX-Design</div>
                        <div>UI-Design</div>
                        <div>Marketing</div>
                        <div>Graphic design</div>
                      </div>
                  </div>
                </a>
              </div>
            </li>
            <li tabIndex="2" className="accordion ul li"
        onClick={toggleAccordion}>
              <div>
                <a href="#">
                  <h2 className="ac">Sowrov</h2><h2 className="h22">Doha</h2>
                  <h3 className="title">Frontend lead - CIO</h3>
                  <div className="profcontent">
                    <p className="profiletext">
                      {t("9-years of industry experience with Mobile development. He is working with all aspects of Frontend development from multi-platform mobile applications to web applications.")}</p>
                      <div class="techs">
                        <div>Native dev</div>
                        <div>Dart</div>
                        <div>C/C++</div>
                        <div>Kotlin</div>
                        <div>CI/CD</div>
                        <div>Clean Architecture</div>
                        <div>Swift</div>     
                        <div>Android Jetpack</div>  
                        <div>Room</div>  
                        <div>Flutter</div>
                        <div>React Native</div>  
                        <div>Bloc</div>  
                        <div>Mapbox</div>  
                        <div>MapLibre</div>  
                        <div>Google Maps</div>
                      </div>
                  </div>
                </a>
              </div>
            </li>
            <li tabIndex="3" className="accordion ul li"
        onClick={toggleAccordion}>
              <div>
                <a href="#">
                  <h2 className="ac">Ahmed</h2><h2 className="h22">Al-Shaibani</h2>
                  <h3 className="title">Backend lead - CTO</h3>
                  <div className="profcontent">
                      <p className="profiletext">{t("Ahmed handles Backend development at Suloke, as well as database management, AI and big data analytics. Within his 7-years of demanding industry experience, he worked on various projects with the World Bank, including the ProACT-platform")}
                      </p>  
                      <div className="techs">
                        <div>Python</div>
                        <div>SQL</div>
                        <div>NEXT.JS</div>
                        <div>AWS</div>
                        <div>R</div>
                        <div>Machine Learning</div>
                        <div>Big data</div>
                        <div>Javascript</div>
                        <div>SciKit learn</div>
                        <div>Docker</div>
                        <div>linux</div>
                        <div>Stata</div>
                        <div>tableau</div>
                      </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Profiles;
  
