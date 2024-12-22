"use client";

import { i18n } from "@/i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  // Check if the cookie exists and is a valid locale
  const cookieLocale = getCookie("locale");
  if (cookieLocale && i18n.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const negotiatorHeaders = {};
  navigator.languages.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    navigator.languages
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export default getLocale;
