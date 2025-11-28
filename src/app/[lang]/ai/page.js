import TechStack from "@/components/techStack";
import { generateMetaData } from "@/utils/metaData";
import ContactCard from "@/components/contactCard";
import ArrowBlocks from "@/components/arrowBlocks";
import { getDictionary } from "@/get-dictionary";

export async function generateMetadata() {
  return generateMetaData("/web");
}

const page = async (props) => {
  const { lang } = await props.params;

  const { aiPage, contactCard } = await getDictionary(lang);

  const logos = [
    {
      src: "/logos/N8N.svg",
      alt: "Dart",
      width: 140,
      height: 94,
      url: "https://n8n.io/",
    },
    {
      src: "/logos/python.svg",
      alt: "Python",
      width: 60,
      height: 60,
      url: "https://www.python.org",
    },
    {
      src: "/logos/javascript.svg",
      alt: "Javascript",
      width: 70,
      height: 60,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      src: "/logos/typescript.svg",
      alt: "Typescript",
      width: 180,
      height: 64,
      url: "https://www.typescriptlang.org",
    },
    { src: "/logos/c.svg", alt: "C", width: 50, height: 50, url: "" },
    { src: "/logos/cplus.svg", alt: "C plus", width: 50, height: 50, url: "" },
    {
      src: "/logos/aws.svg",
      alt: "AWS",
      width: 100,
      height: 64,
      url: "https://aws.amazon.com",
    },
    {
      src: "/logos/nodejs.svg",
      alt: "NodeJs",
      width: 150,
      height: 64,
      url: "https://aws.amazon.com",
    },
    
  ];

  const content = {
    settings: {
      color: "bg-suloke-orangelight",
    //   src: "/flowboxarrowmobile.svg",
    },
    text: [
      {
        title: aiPage.contentTitleCAI,
        text: aiPage.contentTextCAI,
      },
      {
        title: aiPage.contentTitleWA,
        text: aiPage.contentTextWA,
      },
      {
        title: aiPage.contentTitleRAG,
        text: aiPage.contentTextRAG,
      },
      {
        title: aiPage.contentTitleCRM,
        text: aiPage.contentTextCRM,
      },
      
    ],
  };

  return (
    <div className="flex flex-col bg-suloke-orange w-full gap-y-14 px-5 pt-32 pb-14 items-center">
      <div className="md:w-4/5 lg:w-1/2 gap-y-14 md:gap-y-20 lg:gap-y-24">
        <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mb-8">
          {" "}
          {/* Intro */}
          <h1 className="pb-6 lg:mb-8">{aiPage.title}</h1>
          <p className="whitespace-pre-line">{aiPage.text1}</p>
          <p className="whitespace-pre-line">{aiPage.text2}</p>
        </div>
        <div className="flex flex-col w-full items-center pt-14 md:pt-20">
          {" "}
          {/* flowboxes */}
          <h2 className="mb-7">{aiPage.processTitle}</h2>
          <ArrowBlocks lang={lang} content={content} showImmediately={true}/>
        </div>
        <h2 className="mb-8 pt-14 md:pt-20">{aiPage.h2WeAreFluentIn}</h2>
        <div>
          <TechStack logos={logos} />
        </div>
        <div className="flex flex-col gap-y-10 pt-14 md:pt-20 pb-10">
          {" "}
          {/* Contact */}
          <ContactCard
            color={"bg-suloke-orangelight"}
            dict={contactCard}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
