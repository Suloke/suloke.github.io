import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../App.css";

const BookButton = () => {

  return (
    <a href="https://calendly.com/samulikujala/30min" target="_blank" rel="noopener noreferrer">
      <button className="bookbutton">BOOK</button>
    </a>
  );
};

export default BookButton;
