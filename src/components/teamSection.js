"use client";

import { useState, useEffect, useRef } from "react";
import TeamCard from "@/components/teamCard";

const TeamSection = ({ dictionary }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const teamMembers = [
    {
      // imageSrc: "/Photos/samuli-478-882.png",
      imageSrc: "/Photos/samuli-mobile.png",
      fullName: "Samuli Kujala",
      position: "CEO — Design lead",
      description: dictionary.samuliDesc,
      skills:
        "FIGMA  NEXT.JS  REACT  UI-DESIGN  UX-DESIGN  PYTHON  CSS  TAILWIND GRAPHIC-DESIGN",
    },
    {
      imageSrc: "/Photos/sowrov-478-882.png",
      fullName: "Sowrov Doha",
      position: "CIO — Frontend lead",
      description: dictionary.sowrovDesc,
      skills:
        "C/C++  flutter native development  kotlin  dart  swift  room  clean architecture  android jetpack  mapbox  maP libre  google maps  react native  bloc",
    },
    {
      imageSrc: "/Photos/ahmed-478-882.png",
      fullName: "Ahmed Shaibani",
      position: "CTO — Backend lead",
      description: dictionary.ahmedDesc,
      skills:
        "PYTHON  aws  Next.js  machine learning  javascript  docker  stata  sql  r  big data  scikit learn  tableu  linux",
    },
  ];

  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full pt-14 md:pt-20">
      <h2 className="mb-4">{dictionary.title}</h2>
      <div
        className="flex flex-col w-full max-w-5xl h-[732px] rounded-lg overflow-hidden lg:flex-row"
        ref={containerRef}
      >
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.fullName}
            imageSrc={member.imageSrc}
            fullName={member.fullName}
            position={member.position}
            description={member.description}
            skills={member.skills}
            isLastCard={index === teamMembers.length - 1}
            expandedIndex={expandedIndex}
            isExpanded={expandedIndex === index}
            onMouseLeave={() => setExpandedIndex(null)}
            onMouseEnter={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            onExpand={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
