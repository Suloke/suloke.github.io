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
      src: "/logos/flutter.svg",
      alt: "Flutter",
      width: 64,
      height: 64,
      url: "https://flutter.dev",
    },
    {
      src: "/logos/swift.svg",
      alt: "Swift",
      width: 142,
      height: 94,
      url: "https://developer.apple.com/swift/",
    },
    { src: "/logos/c.svg", alt: "C", width: 50, height: 50, url: "" },
    { src: "/logos/cplus.svg", alt: "C plus", width: 50, height: 50, url: "" },
    {
      src: "/logos/dart.svg",
      alt: "Dart",
      width: 144,
      height: 144,
      url: "https://dart.dev",
    },
    {
      src: "/logos/kotlin.svg",
      alt: "Kotlin",
      width: 119,
      height: 84,
      url: "https://kotlinlang.org",
    },
    {
      src: "/logos/figma.svg",
      alt: "Figma",
      width: 106,
      height: 29,
      url: "https://www.figma.com",
    },
    {
      src: "/logos/mapbox.svg",
      alt: "Mapbox",
      width: 168,
      height: 38,
      url: "https://www.mapbox.com",
    },
    {
      src: "/logos/typescript.svg",
      alt: "Typescript",
      width: 200,
      height: 64,
      url: "https://www.typescriptlang.org",
    },
    {
      src: "/logos/ios.svg",
      alt: "IOS",
      width: 78,
      height: 49,
      url: "https://developer.apple.com/swift/",
    },
    {
      src: "/logos/reactnative.svg",
      alt: "ReactNative",
      width: 69,
      height: 75,
      url: "https://developer.apple.com/swift/",
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
          <ArrowBlocks content={content} />
          {/* <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">DISCOVERY</h3>
            <p className="px-2 pt-2">
              We start by mapping out your business needs, target audience and
              goals for the project. We go through the options; best practices
              and integrations of technologies for your individual business
              case. An important goal of discovery is creating a working
              relationship with you, and to find out what we can do for you. The
              result of discovery is a mutually created set of requirements,
              that paints a clear picture of what we are building.
            </p>
          </div>
          <div className="pl-2 w-full">
            <Image
              src={"/flowboxarrowmobile.svg"}
              height={50}
              width={100}
              alt="flowboxarrow"
            />
          </div>
          <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">PLANNING</h3>
            <p className="px-2 pt-2">
              Once requirements are clear, the next step is to map out the
              required features for MVP (minimum viable product), as well as the
              technologies to be used. This tech stack might be between native
              solutions, cross-platform solutions or PWA-type web applications.
              During planning we outline major UI-components and integrations,
              as well as necessary compliance- and security guidelines.
            </p>
          </div>
          <div className="flex w-2/3">
            <Image
              src={"/flowboxarrowmobile.svg"}
              height={50}
              width={100}
              alt="flowboxarrow"
            />
          </div>
          <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">DESIGN</h3>
            <p className="px-2 pt-2">
              Once required features, workflows and the tech stack are
              identified, we create an interactive prototype in collaboration
              with you. With it, we are able to visualize and test the User
              Interface with you and all relevant stakeholders; we introduce
              Usability Testing for more personalized UI-solutions. During this
              process we will use platform-specific guidelines: Material Design
              for Android and Human Interface Guidelines for iOS. These
              guidelines offload developer time and allow the UI and UX that
              users are accustomed to.
            </p>
          </div>
          <div className="flex items-end w-full justify-center">
            <Image
              src={"/flowboxarrowmobile.svg"}
              height={50}
              width={100}
              alt="flowboxarrow"
            />
          </div>
          <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">IMPLEMENTATION</h3>
            <p className="px-2 pt-2">
              With a ready and tested prototype of the application as the guide,
              we begin development. We use Swift for iOS, Kotlin for Android,
              React Native and Flutter for cross-platform. For testing we use
              Appium and Espresson for the User Interface; Github Actions for
              CI/CD pipelines. The app will be constructed using Clean
              Architecture, ensuring ease of maintenance and further development
              down the line.
            </p>
          </div>
          <div className="flex items-end w-2/3 justify-end align-end">
            <Image
              src={"/flowboxarrowmobile.svg"}
              height={50}
              width={100}
              alt="flowboxarrow"
            />
          </div>
          <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">DEPLOYMENT</h3>
            <p className="px-2 pt-2">
              The ready app will be subjected to User Acceptance Testing, making
              sure the site adheres to the requirements set with the customer
              during Discovery and Design. Deployment of the ready, tested and
              approved app will go through Google Play Store for Android; Apple
              Store for iOS; Appcenter or similar for internal artefact
              distribution. Other avenues of deployment are possible.
            </p>
          </div>
          <div className="flex items-end w-full justify-end align-end pr-2">
            <Image
              src={"/flowboxarrowmobile.svg"}
              height={100}
              width={200}
              alt="flowboxarrow"
            />
          </div>
          <div className="flex flex-col bg-suloke-cyanlight w-full h-auto rounded-lg p-6 box-border">
            <h3 className="text-xl">MAINTENANCE</h3>
            <p className="px-2 pt-2">
              During post-deployment, we can use tools like Firebase Crashlytics
              to overview any issues such as crashes and receive - Plan
              additional needs based on usage data
            </p>
          </div> */}
        </div>

        <div className="flex flex-row pt-14 md:pt-20 justify-center">
          <TechStack logos={logos} />
        </div>
        <div className="flex flex-col gap-y-10 pt-14 md:pt-20 pb-10">
          {" "}
          {/* Contact */}
          <ContactCard color={"bg-suloke-cyanlight"} dict={contactCard} />
        </div>
      </div>
    </div>
  );
};

export default page;
