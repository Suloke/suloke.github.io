import React from "react";
import { useSelector } from "react-redux";
import LogoImageDark from "../assets/logo-dark.png";
import LogoImageLight from "../assets/logo-light.png";
import ArboLogoDark from "../assets/arbonaut-dark.png";
import ArboLogoLight from "../assets/arbonaut.png";
import TuomoK from "../assets/Tuomo_Kauranne.png";


const Logo = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <img
        src={theme === "dark" ? LogoImageDark : LogoImageLight}
        style={{
          width: "8vw",
          height: "auto",
          display: "flex",
        }}
        alt="Logo"
      />
    </div>
  );
};



const MobileLogo = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <img
        src={theme === "dark" ? LogoImageDark : LogoImageLight}
        style={{
          width: "12vw",
          height: "auto",
          display: "block",
        }}
        alt="MobileLogo"
      />
    </div>
  );
};
const ArboLogo = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <img
        src={theme === "dark" ? ArboLogoDark : ArboLogoLight}
        style={{
          width: "22vw",

          height: "auto",
        }}
        alt="ArboLogo"
      />
    </div>
  );
};
const WBLogo = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <img
        src={theme === "dark" ? WBLogoDark : WBLogoLight}
        style={{
          width: "20vw",
          margin: "2vw",
          height: "auto",
        }}
        alt="WBLogo"
      />
    </div>
  );
};
const Tuomo = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <img
        src={theme === "dark" ? TuomoK : TuomoK}
        style={{
          height: "18vh",
          display: "flex",
          
        }}
        alt="Tuomo"
      />
    </div>
  );
};
export { Logo, MobileLogo, ArboLogo, WBLogo, Tuomo };
