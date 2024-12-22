"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CollabQuote = ({ references }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prevIndexes) => [
              ...prevIndexes,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.8 }
    );

    references.forEach((_, index) => {
      const element = document.getElementById(`quote-${index}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      references.forEach((_, index) => {
        const element = document.getElementById(`quote-${index}`);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [references]);

  return (
    <div className="space-y-8">
      {references.map((ref, index) => (
        <div
          key={index}
          id={`quote-${index}`}
          data-index={index}
          className={`flex flex-col p-4 opacity-0 ${
            visibleIndexes.includes(index.toString())
              ? "animate-fade-in-and-move"
              : ""
          }`}
        >
          <div className="flex flex-row gap-x-4 pb-4 items-start">
            <Image
              src="/quote-icon.svg"
              width={28}
              height={28}
              alt="Quote Icon"
              className="mb-3"
            />
            <p className="italic pt-4 pr-3 md:pr-5 lg:pr-5">{ref.quote}</p>
          </div>
          <div className="flex flex-row justify-end items-center pl-11 gap-x-3">
            <h2 className="">-{ref.author}</h2>
            <p className="pt-1">{ref.level} of</p>
            {ref.useLogo ? (
              <Image
                src={ref.logoSrc}
                width={120}
                height={50}
                alt={`${ref.author} logo`}
                className=""
              />
            ) : (
              <p className="">{ref.textSrc || "No logo available"}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollabQuote;

// import Image from "next/image";

// const CollabQuote = ({ references }) => {
//   return (
//     <div className="space-y-8">
//       {references.map((ref, index) => (
//         <div key={index} className=" flex flex-col p-4">
//           <div className="flex flex-row gap-x-4 pb-4 items-start">
//           <Image
//             src="/quote-icon.svg"
//             width={28}
//             height={28}
//             alt="Quote Icon"
//             className="mb-3"
//           />
//           <p className="italic pt-4 pr-3 md:pr-5 lg:pr-5">{ref.quote}</p>
//           </div>
//           <div className="flex flex-row justify-end items-center pl-11 gap-x-3">
//             <h2 className="">-{ref.author}</h2>
//             <p className="pt-1">{ref.level} of</p>
//             {ref.useLogo ? (
//               <Image
//                 src={ref.logoSrc}
//                 width={120}
//                 height={50}
//                 alt={`${ref.author} logo`}
//                 className=""
//               />
//             ) : (

//               <p className="">{ref.textSrc || "No logo available"}</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CollabQuote;
