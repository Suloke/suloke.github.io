import TechStack from "@/components/techStack";
import { generateMetaData } from "@/utils/metaData";
import ContactCard from "@/components/contactCard";
import CollabQuote from "@/components/collabQuote";
import ArrowBlocks from "@/components/arrowBlocks";
import { getDictionary } from "@/get-dictionary";

export async function generateMetadata() {
  return generateMetaData("/web");
}

const page = async (props) => {
  const { lang } = await props.params;

  const { mobilePage, contactCard } = await getDictionary(lang);

  const logos = [
    {
      src: "/logos/figma.svg",
      alt: "Figma",
      width: 130,
      height: 29,
      url: "https://www.figma.com",
    },
    {
      src: "/logos/swift.svg",
      alt: "Swift",
      width: 142,
      height: 50,
      url: "https://developer.apple.com/swift/",
    },
    {
      src: "/logos/kotlin.svg",
      alt: "Kotlin",
      width: 148,
      height: 50,
      url: "https://kotlinlang.org",
    },
    { src: "/logos/c.svg", alt: "C", width: 50, height: 50, url: "" },
    { src: "/logos/cplus.svg", alt: "C plus", width: 50, height: 50, url: "" },
    {
      src: "/logos/ios.svg",
      alt: "IOS",
      width: 60,
      height: 49,
      url: "https://developer.apple.com/swift/",
    },
    {
      src: "/logos/dart.svg",
      alt: "Dart",
      width: 140,
      height: 94,
      url: "https://dart.dev",
    },
    {
      src: "/logos/reactnative.svg",
      alt: "ReactNative",
      width: 90,
      height: 60,
      url: "https://developer.apple.com/swift/",
    },
    {
      src: "/logos/flutter.svg",
      alt: "Flutter",
      width: 142,
      height: 50,
      url: "https://flutter.dev",
    },
    {
      src: "/logos/typescript.svg",
      alt: "Typescript",
      width: 180,
      height: 64,
      url: "https://www.typescriptlang.org",
    },
    {
      src: "/logos/mapbox.svg",
      alt: "Mapbox",
      width: 180,
      height: 40,
      url: "https://www.mapbox.com",
    },
    {
      src: "/logos/javascript.svg",
      alt: "Javascript",
      width: 70,
      height: 60,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ];
  const references = [
    {
      quote: mobilePage.quote,
      author: "Tuomo Kauranne",
      level: "CEO",
      useLogo: true,
      logoSrc: "/logos/arbonaut.png",
    },
  ];

  const content = {
    settings: {
      color: "bg-suloke-cyanlight",
      src: "/flowboxarrowmobile.svg",
    },
    text: [
      {
        title: mobilePage.contentTitle1,
        text: mobilePage.contentText1,
      },
      {
        title: mobilePage.contentTitle2,
        text: mobilePage.contentText2,
      },
      {
        title: mobilePage.contentTitle3,
        text: mobilePage.contentText3,
      },
      {
        title: mobilePage.contentTitle4,
        text: mobilePage.contentText4,
      },
      {
        title: mobilePage.contentTitle5,
        text: mobilePage.contentText5,
      },
      {
        title: mobilePage.contentTitle6,
        text: mobilePage.contentText6,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-suloke-cyan w-full gap-y-14 px-5 pt-32 pb-14 items-center">
      <div className="md:w-4/5 lg:w-1/2 gap-y-14 md:gap-y-20 lg:gap-y-24">
        <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mb-8">
          {" "}
          {/* Intro */}
          <h1 className="text-center pb-6 lg:mb-8">{mobilePage.title}</h1>
          <p className="">{mobilePage.text1}</p>
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          {" "}
          {/* Reference */}
          <div className="flex flex-col gap-y-10 pt-14 md:pt-20  md:w-2/3 lg:w-2/3">
            <CollabQuote references={references} />
          </div>
        </div>
        <div className="flex flex-col w-full items-center pt-14 md:pt-20">
          {" "}
          {/* flowboxes */}
          <h2 className="mb-7">{mobilePage.processTitle}</h2>
          <ArrowBlocks lang={lang} content={content} />
        </div>
        <h2 className="mb-8 pt-14 md:pt-20">{mobilePage.h2WeAreFluentIn}</h2>
        <div>
          <TechStack logos={logos} />
        </div>
        <div className="flex flex-col gap-y-10 pt-14 md:pt-20 pb-10">
          {" "}
          {/* Contact */}
          <ContactCard
            color={"bg-suloke-cyanlight"}
            dict={contactCard}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
