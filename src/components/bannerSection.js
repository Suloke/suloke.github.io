"use client";

import { useState } from "react";
import ArrowCard from "@/components/arrowCard";
import Image from "next/image";

const BannerSection = ({ dictionary }) => {
  const [cardHoveredIndex, setCardHoveredIndex] = useState(null);

  const competencies = [
    {
      text: dictionary.web,
      imageSrc: "/web-dev-arrow.svg",
      altText: "Pink Arrow",
      target: "web",
      icon: "/website.svg",
      color: "#A3004C",
    },
    {
      text: dictionary.mobile,
      imageSrc: "/mobile-dev-arrow.svg",
      altText: "Green Arrow",
      target: "mobile",
      icon: "/phone.svg",
      color: "#095E5E",
    },
    // { text: dictionary.backend, imageSrc: "/more-arrow.svg", altText: "Yellow Arrow", target: "backend", icon: "/backend.svg", color: "#8C6C00" },
  ];

  return (
    <div className="flex flex-row w-full relative items-center justify-center gap-x-40 pr-20 pt-20 pb-64">
      <div className="flex w-full flex-col gap-y-5 items-center">
        {" "}
        {/* Banner */}
        {competencies.map((competency, index) => (
          <ArrowCard
            index={index}
            key={competency.imageSrc}
            text={competency.text}
            target={competency.target}
            setCardHoveredIndex={setCardHoveredIndex}
            color={competency.color}
          />
        ))}
      </div>
      {cardHoveredIndex !== null && (
        <Image
          // className="absolute top-[-40px] right-0 xl:right-20 2xl:right-40"
          className="absolute top-[-40px] right-0 xl:right-20 2xl:right-40 
            filter brightness-125 transition-all duration-300 ease-in-out
            hover:brightness-150"
          style={{
            filter: `drop-shadow(0 0 15px ${competencies[cardHoveredIndex].color}20)`,
          }}
          src={competencies[cardHoveredIndex].icon}
          alt={competencies[cardHoveredIndex].altText}
          width={150}
          height={150}
        />
      )}
    </div>
  );
};

export default BannerSection;
