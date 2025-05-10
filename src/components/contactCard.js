"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const ContactCard = ({ color, dict, lang }) => {
  const [showEmailCopied, setShowEmailCopied] = useState(false);
  const [showWhatsAppCopied, setShowWhatsAppCopied] = useState(false);

  return (
    <div className={`flex rounded-lg border-box w-auto ${color} relative`}>
      <div className="w-48">
        <Image
          className="h-full rounded-l-lg border-box"
          src={"/Photos/samuli-478-882.png"}
          width={400}
          height={400}
          alt={"Samuli Kujala"}
          style={{
            objectFit: "cover",
            objectPosition: "left",
          }}
        />
      </div>
      <div className="flex flex-col justify-center py-3 px-4">
        <div>
          <h2 className="pb-2">{"Samuli Kujala"}</h2>
          <h3 className="pb-4">{"CEO"}</h3>
          <p className="pb-4">{dict.text}</p>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText("+358 44 99 99 618");
            setShowWhatsAppCopied(true);
            setTimeout(() => {
              setShowWhatsAppCopied(false);
            }, 1000);
          }}
          className="flex flex-row gap-x-2 items-center pb-4 relative"
        >
          <div>
            <Image
              src={"/phone-icon.svg"}
              height={28}
              width={28}
              alt="phone-icon"
            />
          </div>
          <h3 className="relative">
            +358 44 99 99 618
            {showWhatsAppCopied && (
              <div className="absolute bottom-1/3 left-full bg-suloke-grey p-2 rounded-lg">
                <p className="text-xs">{dict.copied}</p>
              </div>
            )}
          </h3>
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText("contact@suloke.com");
            setShowEmailCopied(true);
            setTimeout(() => {
              setShowEmailCopied(false);
            }, 1000);
          }}
          className="flex flex-row gap-x-2 items-center pb-4 relative"
        >
          <div>
            <Image
              src={"/email-icon.svg"}
              height={28}
              width={28}
              alt="email-icon"
            />
          </div>
          <h3 className="relative">
            contact@suloke.com
            {showEmailCopied && (
              <div className="absolute bottom-1/3 left-full bg-suloke-grey p-2 rounded-lg">
                <p className="text-xs">{dict.copied}</p>
              </div>
            )}
          </h3>
        </button>
      </div>
      <Link
        className="absolute bottom-4 right-4 flex flex-row items-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        href={`/${lang}/contact`}
      >
        <Image
          src={"/right-arrow.svg"}
          height={32}
          width={32}
          alt="arrow-right"
        />
      </Link>
    </div>
  );
};

export default ContactCard;
