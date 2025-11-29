"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const ArrowBlocks = ({ lang, content, showImmediately = false }) => {
  const blockRefs = useRef([]);
  const arrowRefs = useRef([]);

  const hasSrc =
    content.settings.src && content.settings.src.trim() !== "";

  useEffect(() => {
    // If we show everything immediately, no need for scroll / observer
    if (showImmediately) {
      blockRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.remove("opacity-0");
          ref.classList.add("opacity-100");
        }
      });
      return;
    }

    const handleScroll = () => {
      arrowRefs.current.forEach((arrow, index) => {
        if (!arrow) return;
        const block = blockRefs.current[index];
        if (!block) return;

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
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
            window.addEventListener("scroll", handleScroll, { passive: true });
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
  }, [lang, showImmediately]);

  return (
    <>
      {content.text.map((item, index) => (
        <div
          key={index}
          ref={(el) => (blockRefs.current[index] = el)}
          className={`transition-opacity duration-500 overflow-hidden ${
            showImmediately ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`flex flex-col ${content.settings.color} w-full h-auto rounded-lg p-6 box-border`}
          >
            <h3 className="text-xl">{item.title}</h3>
            <p className="px-2 pt-2 whitespace-pre-line">{item.text}</p>
            <p className="px-2 pt-6 whitespace-pre-line">{item.text2}</p>
            <p className="px-2 pt-6 pb-8 whitespace-pre-line">{item.text3}</p>
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
                <div style={{ height: 50 }} />
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ArrowBlocks;
