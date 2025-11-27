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
  ];

  const content = {
    settings: {
      color: "bg-suloke-orangelight",
    //   src: "/flowboxarrowmobile.svg",
    },
    text: [
      {
        title: aiPage.contentTitle1,
        text: aiPage.contentText1,
      },
      {
        title: aiPage.contentTitle2,
        text: aiPage.contentText2,
      },
      {
        title: aiPage.contentTitle3,
        text: aiPage.contentText3,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-suloke-orange w-full gap-y-14 px-5 pt-32 pb-14 items-center">
      <div className="md:w-4/5 lg:w-1/2 gap-y-14 md:gap-y-20 lg:gap-y-24">
        <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mb-8">
          {" "}
          {/* Intro */}
          <h1 className="text-center pb-6 lg:mb-8">{aiPage.title}</h1>
          <p className="whitespace-pre-line">{aiPage.text1}</p>
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
