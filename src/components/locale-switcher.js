"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div>
        <button
          type="button"
          id="menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          className="flex justify-center items-center"
        >
          <Image
            src={"/globe-icon.svg"}
            width={24}
            height={24}
            alt="suloke-logo"
          />
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 pt-2 w-24 origin-top-right focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onBlur={() => setIsDropdownOpen(false)}
        >
          <div
            className="overflow-hidden rounded-md bg-foreground focus:outline-none"
            role="none"
          >
            {i18n.locales.map((locale, index) => (
              <Link
                key={locale}
                href={redirectedPathname(locale)}
                onClick={() => handleLocaleChange(locale)}
                className="block px-4 py-2 text-sm text-suloke-black hover:bg-suloke-yellow hover:text-suloke-white hover transition duration-300 ease-in-out"
                role="menuitem"
                id={`menu-item-${index}`}
                tabIndex="-1"
              >
                <p>{localeList[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
