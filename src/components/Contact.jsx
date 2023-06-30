import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import BookButton from "../components/BookButton";
import { EmailButton, PhoneButton, OpenPrivacyPolicy, ClosePrivacyPolicy } from "../components/ContactButton";
import PrivacyPolicy from "../components/PrivacyPolicy";




const Contact = ({ togglePrivacyPolicy, showPrivacyPolicy }) => {
    const { t } = useTranslation();




    return (
        <>
        <div className="contact">

            

                <div className="contactlinks">
                    <p className="email">
                        <EmailButton />
                        CONTACT@SULOKE.COM
                    </p>
                    <p className="phone">
                        <PhoneButton />
                        (+358)44 9999 618
                    </p>
                    <p className="contactinfo">
                    <p>&copy;SULOKE OY</p>
                    <p>FI32767353</p>
                    <p>KURSUNTIE 11 37140</p>
                    <p>NOKIA</p>
                    <p>FINLAND</p>
                        <div className="openprivacypolicy">
                            {showPrivacyPolicy ? (<ClosePrivacyPolicy onClick={togglePrivacyPolicy} />) : (<OpenPrivacyPolicy onClick={togglePrivacyPolicy} />)}
                        </div>
                    </p>
                </div>
                <div className="book">
                    <h3 className="contacttext">
                        {t("Book a chat with us! We can map out your needs and the ways we can deliver, together.")}
                    </h3>
                    <div className="bookbuttoncontainer">
                        <BookButton />
                    </div>
                </div>
        </div>

        </> 

        );
    };
    
    export default Contact;