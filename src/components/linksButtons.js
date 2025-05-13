"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

export default function LinksButtons({ dict, lang, contactData }) {
  const [showModal, setShowModal] = useState(false);
  const [showWechatCopied, setShowWechatCopied] = useState(false);
  const [showEmailMenu, setShowEmailMenu] = useState(false);
  const [showEmailCopied, setShowEmailCopied] = useState(false);
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);
  const [showWhatsAppCopied, setShowWhatsAppCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const emailMenuRef = useRef(null);
  const emailButtonRef = useRef(null);
  const whatsAppMenuRef = useRef(null);
  const whatsAppButtonRef = useRef(null);

  const pathname = usePathname();

  const localeList = {
    en: "English",
    zh: "中文",
  };

  const redirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const handleLocaleChange = (locale) => {
    setCookie("locale", locale, 365);
  };

  const copyWechatId = () => {
    navigator.clipboard.writeText(contactData.weChatId);
    setShowWechatCopied(true);
    setTimeout(() => {
      setShowWechatCopied(false);
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setShowEmailCopied(true);
    setTimeout(() => {
      setShowEmailCopied(false);
    }, 1000);
  };

  const copyWhatsApp = () => {
    navigator.clipboard.writeText(contactData.phone);
    setShowWhatsAppCopied(true);
    setTimeout(() => {
      setShowWhatsAppCopied(false);
    }, 1000);
  };

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emailMenuRef.current &&
        !emailMenuRef.current.contains(event.target) &&
        !emailButtonRef.current.contains(event.target)
      ) {
        setShowEmailMenu(false);
      }
      if (
        whatsAppMenuRef.current &&
        !whatsAppMenuRef.current.contains(event.target) &&
        !whatsAppButtonRef.current.contains(event.target)
      ) {
        setShowWhatsAppMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const ModalWindow = () => {
    return (
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 p-8"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-h-[60vh] bg-white p-4 rounded-lg relative"
        >
          <div className="h-full w-full flex flex-col gap-y-2 items-center">
            <div className="max-h-[40vh] w-full flex items-center justify-center">
              <Image
                className="rounded-lg border-box"
                src={contactData.weChatQR}
                alt="WeChat QR Code"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "40vh",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col w-full justify-between gap-2 sm:flex-row 2xl:w-[80%]">
              <button
                onClick={copyWechatId}
                className="bg-suloke-cyan p-2 rounded-lg flex items-center justify-center relative"
              >
                <p className="text-sm">{dict.copyWechatId}</p>
                {showWechatCopied && (
                  <div className="absolute top-[-35px] right-0 bg-suloke-grey p-2 rounded-lg">
                    <p className="text-xs">{dict.copied}</p>
                  </div>
                )}
              </button>
              {isMobile ? (
                <a
                  href={`weixin://dl/business/?t=${contactData.weChatId}`}
                  className="bg-[#5CC928] p-2 rounded-lg flex items-center justify-center"
                >
                  <p className="text-sm text-center">{dict.goToWechat}</p>
                </a>
              ) : (
                <Link
                  href={contactData.weChatLink}
                  target="_blank"
                  className="bg-[#5CC928] p-2 rounded-lg flex items-center justify-center"
                >
                  <p className="text-sm text-center">{dict.goToWechat}</p>
                </Link>
              )}
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 bg-suloke-grey p-2 rounded-lg"
          >
            <p className="text-xs">{dict.close}</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex justify-center w-full max-w-md">
        <div className="flex rounded-full bg-suloke-grey mb-4 relative">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathname(locale)}
              onClick={() => handleLocaleChange(locale)}
              className={`rounded-full px-4 py-2 text-sm font-medium z-10 ${
                lang === locale && "bg-suloke-cyan"
              }`}
            >
              <p>{localeList[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full sm:flex-row">
        <div className="flex relative w-full sm:w-1/2">
          <button
            ref={whatsAppButtonRef}
            className="flex flex-row gap-x-2 rounded-lg border-box bg-suloke-grey p-2 items-center justify-center w-full h-[48px] hover:bg-suloke-magenta transition-bg duration-300 ease-in-out"
            onClick={() => setShowWhatsAppMenu(!showWhatsAppMenu)}
          >
            <Image
              src={"/wa.png"}
              height={20}
              width={20}
              style={{
                objectFit: "contain",
              }}
              alt="phone-icon"
            />
            <h3 className="text-lg">WhatsApp</h3>
          </button>
          <div
            ref={whatsAppMenuRef}
            className={`absolute top-full inset-x-0 bg-suloke-magenta rounded-lg shadow-lg overflow-hidden z-20 transition-all duration-200 ease-in-out ${
              showWhatsAppMenu
                ? "opacity-100 translate-y-2"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Link
              href={contactData.whatsAppLink}
              target="_blank"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-suloke-grey/20 transition-colors duration-200"
              onClick={() => setShowWhatsAppMenu(false)}
            >
              <span className="text-sm text-white">{dict.openWhatsApp}</span>
            </Link>
            <button
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-suloke-grey/20 transition-colors duration-200 w-full text-left relative"
              onClick={copyWhatsApp}
            >
              <span className="text-sm text-white">{dict.copyWhatsApp}</span>
              {showWhatsAppCopied && (
                <div className="absolute top-[-35px] right-0 bg-suloke-grey p-2 rounded-lg">
                  <p className="text-xs text-white">{dict.copied}</p>
                </div>
              )}
            </button>
          </div>
        </div>
        <Link
          className="flex flex-row gap-x-2 rounded-lg border-box bg-suloke-grey p-2 items-center justify-center w-full sm:w-1/2 h-[48px] hover:bg-suloke-magenta transition-bg duration-300 ease-in-out"
          href={contactData.linkedInLink}
          target="_blank"
        >
          <Image
            src={"/linkedIn.png"}
            height={20}
            width={20}
            alt="phone-icon"
            style={{
              objectFit: "contain",
            }}
          />
          <h3 className="text-lg">{dict.linkedin}</h3>
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full sm:flex-row">
        {contactData?.weChatId && (
          <button
            className="flex flex-row gap-x-2 rounded-lg border-box bg-suloke-grey p-2 items-center justify-center w-full sm:w-1/2 h-[48px] hover:bg-suloke-magenta transition-bg duration-300 ease-in-out"
            onClick={() => setShowModal(true)}
          >
            <Image
              src={"/wechat.png"}
              height={20}
              width={20}
              style={{
                objectFit: "contain",
              }}
              alt="phone-icon"
            />
            <h3 className="text-lg">{dict.wechat}</h3>
          </button>
        )}
        <div
          className={`flex relative w-full ${
            !contactData?.weChatId ? "sm:w-full" : "sm:w-1/2"
          }`}
        >
          <button
            ref={emailButtonRef}
            className="flex flex-row gap-x-2 rounded-lg border-box bg-suloke-grey p-2 items-center justify-center w-full h-[48px] hover:bg-suloke-magenta transition-bg duration-300 ease-in-out"
            onClick={() => setShowEmailMenu(!showEmailMenu)}
          >
            <Image
              src={"/email-icon.svg"}
              height={15}
              width={20}
              style={{
                objectFit: "contain",
              }}
              alt="phone-icon"
            />
            <h3 className="text-lg">{dict.email}</h3>
          </button>
          <div
            ref={emailMenuRef}
            className={`absolute top-full inset-x-0 bg-suloke-magenta rounded-lg shadow-lg overflow-hidden z-20 transition-all duration-200 ease-in-out ${
              showEmailMenu
                ? "opacity-100 translate-y-2"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Link
              href={contactData.emailLink}
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-suloke-grey/20 transition-colors duration-200"
              onClick={() => setShowEmailMenu(false)}
            >
              <span className="text-sm text-white">{dict.sendEmail}</span>
            </Link>
            <button
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-suloke-grey/20 transition-colors duration-200 w-full text-left relative"
              onClick={copyEmail}
            >
              <span className="text-sm text-white">{dict.copyEmail}</span>
              {showEmailCopied && (
                <div className="absolute top-[-35px] right-0 bg-suloke-grey p-2 rounded-lg">
                  <p className="text-xs text-white">{dict.copied}</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobile && (
        <Link
          href={contactData.vcfLink}
          download={contactData.vcfFileName}
          className="flex flex-row gap-x-2 rounded-lg border-box bg-suloke-grey p-2 items-center justify-center w-full h-[48px] hover:bg-suloke-magenta transition-bg duration-300 ease-in-out"
        >
          <Image
            className="h-full"
            src={"/phone-book.png"}
            height={32}
            width={20}
            style={{
              objectFit: "contain",
            }}
            alt="phone-icon"
          />
          <h3 className="text-lg">{dict.addContact}</h3>
        </Link>
      )}
      {showModal && <ModalWindow />}
    </div>
  );
}
