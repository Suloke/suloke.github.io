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

  const { webPage, contactCard } = await getDictionary(lang);

  const logos = [
    {
      src: "/logos/nextjs.svg",
      alt: "Next.js",
      width: 100,
      height: 29,
      url: "https://nextjs.org",
    },
    {
      src: "/logos/strapi.svg",
      alt: "Strapi",
      width: 120,
      height: 38,
      url: "https://strapi.io",
    },
    {
      src: "/logos/figma.svg",
      alt: "Figma",
      width: 100,
      height: 29,
      url: "https://www.figma.com",
    },
    {
      src: "/logos/tailwindcss.svg",
      alt: "Tailwind",
      width: 190,
      height: 50,
      url: "https://tailwindcss.com",
    },
    {
      src: "/logos/reactnative.svg",
      alt: "React Native",
      width: 90,
      height: 60,
      url: "https://reactnative.dev",
    },
    {
      src: "/logos/mapbox.svg",
      alt: "Mapbox",
      width: 150,
      height: 40,
      url: "https://www.mapbox.com",
    },
    {
      src: "/logos/mablibre.svg",
      alt: "Maplibre",
      width: 150,
      height: 38,
      url: "https://maplibre.org",
    },
  ];

  const content = {
    settings: {
      color: "bg-suloke-magentalight",
      src: "/flowboxarrowweb.svg",
    },
    text: [
      {
        title: webPage.contentTitle1,
        text: webPage.contentText1,
      },
      {
        title: webPage.contentTitle2,
        text: webPage.contentText2,
      },
      {
        title: webPage.contentTitle3,
        text: webPage.contentText3,
      },
      {
        title: webPage.contentTitle4,
        text: webPage.contentText4,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-suloke-magenta w-full gap-y-14 px-5 pt-32 pb-14 items-center">
      <div className="md:w-4/5 lg:w-1/2 gap-y-14 md:gap-y-20 lg:gap-y-24">
        <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mb-8">
          {" "}
          {/* Intro */}
          <h1 className="text-center pb-6 lg:mb-8">{webPage.title}</h1>
          <p className="">{webPage.text1}</p>
          <p className="">{webPage.text2}</p>
          <p className="lg:mb-8">{webPage.text3}</p>
          <h3 className="pl-3 pt-6 text-xl">{webPage.h3Easy}</h3>
          <p className="pl-6">{webPage.text4}</p>
          <h3 className="pl-3 pt-6 text-xl">{webPage.h3Impressive}</h3>
          <p className="pl-6">{webPage.text5}</p>
          <h3 className="pl-3 pt-6 text-xl">{webPage.h3Flexible}</h3>
          <p className="pl-6 lg:mb-8">{webPage.text6}</p>
        </div>

        <div className="flex flex-col gap-y-10 pt-14 md:pt-20">
          {" "}
          {/* Reference */}
        </div>

        <div className="flex flex-col w-full">
          {" "}
          {/* flowboxes */}
          <h2 className="mb-7">{webPage.h2OurProcess}</h2>
          <ArrowBlocks content={content} />
          {/* <div className="flex flex-col bg-suloke-magentalight w-full h-auto rounded-lg p-6 box-border">
                        <h3 className="text-xl">DISCOVERY</h3>
                        <p className="px-2 pt-2">
                            We start by mapping out your business needs, target audience and goals for the project. We go through the options; best practices and integrations of technologies for your individual business case. An important goal of discovery is creating a working relationship with you, and to find out what we can do for you. The result of discovery is a mutually created set of requirements that paints a clear picture of what we are building.
                        </p>
                    </div>
                    <div className="pl-2">
                        <Image 
                                src={'/flowboxarrowweb.svg'}
                                height={50}
                                width={100}
                                alt="flowboxarrow"
                            />
                    </div>
                    <div className="flex flex-col bg-suloke-magentalight w-full h-auto rounded-lg p-6 box-border">
                        <h3 className="text-xl">DESIGN</h3>
                        <p className="px-2 pt-2">
                            Once the requirements are clear, we collaboratively design an interactive prototype with you, using Figma. Thus we are able to visualize and test the User Interface with you and all relevant stakeholders; we introduce Usability Testing for more personalized UI-solutions.
                        </p>
                    </div>
                    <div className="flex items-end w-full justify-center">
                        <Image 
                                src={'/flowboxarrowweb.svg'}
                                height={50}
                                width={100}
                                alt="flowboxarrow"
                            />
                    </div>
                    <div className="flex flex-col bg-suloke-magentalight w-full h-auto rounded-lg p-6 box-border">
                        <h3 className="text-xl">DEVELOPMENT</h3>
                        <p className="px-2 pt-2">
                            With a ready and tested prototype of the site as the guide, we begin development. We use Next.Js; a cutting edge development framework for designing fast and sleek web-applications. Next.Js incorporates Server-Side Rendering(SSR) and Static Site Generation(SSG), making the site fast and easily discoverable for search engines. The open source Strapi is used for the customized Content Management System. The site will be implemented using Clean Architecture, ensuring ease of maintenance and further development down the line. 
                        </p>
                    </div>
                    <div className="flex items-end w-full justify-end align-end pr-2">
                        <Image 
                                src={'/flowboxarrowweb.svg'}
                                height={50}
                                width={100}
                                alt="flowboxarrow"
                            />
                    </div>
                    <div className="flex flex-col bg-suloke-magentalight w-full h-auto rounded-lg p-6 box-border">
                        <h3 className="text-xl">SUPPORT</h3>
                        <p className="px-2 pt-2">
                            The ready site will be subjected to User Acceptance Testing, masking sure the site adheres to the requirements set with the customer during Discovery and Design. Once the web-application has been launched, our team provides you with guidance and support in using the site, as well as a period of guarantee for the proper functioning of your new site. 
                        </p>
                    </div> */}
        </div>
        <div>
          <h2 className="mb-8 pt-14 md:pt-20">{webPage.h2WeAreFluentIn}</h2>
          {/*
                    <h3 className="grid grid-cols-2 md:grid-cols-4 text-2xl uppercase tracking-wider items-center w-full my-8">
                        <div>next.js</div>
                        <div>strapi</div>
                        <div>tailwind</div>
                        <div>react native</div>
                        <div>figma</div>
                        <div>mablibre</div>
                        <div>mapbox</div>
                        <div>google maps</div>
                        <div>javascript</div>
                        <div>UX/ui-design</div>
                        <div>graphic design</div>
                    </h3>   
                    */}
          <TechStack logos={logos} />
        </div>
        <div className="flex flex-col gap-y-10 pt-14 md:pt-20 pb-10">
          {" "}
          {/* Contact */}
          <ContactCard color={"bg-suloke-magentalight"} dict={contactCard} />
        </div>
      </div>
    </div>
  );
};

export default page;
