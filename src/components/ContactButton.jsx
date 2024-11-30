import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTranslation } from "react-i18next";
const { t } = useTranslation();
function ContactButton({ scrollToBottom }) {
  return (
    <button className="contactbutton" onClick={scrollToBottom}>
          {t(CONTACT)}
        </button>
  );
}

const EmailButton = () => {
  return (
      <div>
    <a href="mailto:contact@suloke.com">
      <button className="emailbutton">
            <EmailRoundedIcon />
      </button>
    </a>
    </div>
  );
}

const PhoneButton = () => {
  return (
      <div>
    <a href="tel:+358449999618">
      <button className="phonebutton">
            <LocalPhoneRoundedIcon />
      </button>
    </a>
    </div>
  );
}

function ClosePrivacyPolicy({ onClick }) {
  return (
    <button className="closebutton" onClick={onClick}>
      <CancelIcon />
    </button>
  );
}

function OpenPrivacyPolicy({ onClick }) {
  return (
    <button className="openprivacypolicy" onClick={onClick}>
      <p className="openprivacypolicy">Privacy policy</p>
    </button>
  );
}

export { EmailButton, PhoneButton, ContactButton, OpenPrivacyPolicy, ClosePrivacyPolicy };

