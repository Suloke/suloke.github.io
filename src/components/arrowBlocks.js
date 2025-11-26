"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";


const ArrowBlocks = ({ lang, content }) => {
  const blockRefs = useRef([]);
  const arrowRefs = useRef([]);
const hasSrc =
  content.settings.src && content.settings.src.trim() !== "";

  useEffect(() => {
    const handleScroll = () => {
      arrowRefs.current.forEach((arrow, index) => {
        if (arrow) {
          const block = blockRefs.current[index];
          const rect = block.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            const visibleRatio = Math.min(
              1,
              Math.max(0, (windowHeight - rect.top) / windowHeight)
            );

            const isRTL = lang === "ar";
            const translateX = isRTL ? -(visibleRatio * 70) : visibleRatio * 70;

            arrow.style.transform = `translate3d(${translateX}%, 0, 0)`;
          }
        }
      });
    };

    // function debounce(func, wait) {
    //   let timeout;
    //   return function (...args) {
    //     const later = () => {
    //       clearTimeout(timeout);
    //       func(...args);
    //     };
    //     clearTimeout(timeout);
    //     timeout = setTimeout(later, wait);
    //   };
    // }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            // window.addEventListener("scroll", debounce(handleScroll, 10));
            window.addEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.8 }
    );

    blockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      blockRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {content.text.map((item, index) => (
        <div
          key={index}
          ref={(el) => (blockRefs.current[index] = el)}
          className="opacity-0 transition-opacity duration-500 overflow-hidden"
        >
          <div
            className={`flex flex-col ${content.settings.color} w-full h-auto rounded-lg p-6 box-border`}
          >
            <h3 className="text-xl">{item.title}</h3>
            <p className="px-2 pt-2">{item.text}</p>
          </div>
          {index < content.text.length - 1 && (
            <div
              ref={(el) => (arrowRefs.current[index] = el)}
              className="flex items-end justify-start ltr:ml-2 rtl:mr-2 mb-2 arrow will-change-transform"
            >
  {hasSrc ? (
    <Image
      src={content.settings.src}
      height={50}
      width={100}
      alt="flowboxarrow"
    />
  ) : (
    // Spacer with same vertical size/padding as the arrow image
    <div style={{ height: 50 /* or paddingBottom: 50 */ }} />
  )}

            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ArrowBlocks;
