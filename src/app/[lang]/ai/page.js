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
      {
        title: aiPage.contentTitle4,
        text: aiPage.contentText4,
      },
      {
        title: aiPage.contentTitle5,
        text: aiPage.contentText5,
      },
      {
        title: aiPage.contentTitle6,
        text: aiPage.contentText6,
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
          <p className="">{aiPage.text1}</p>
        </div>
        <div className="flex flex-col w-full items-center pt-14 md:pt-20">
          {" "}
          {/* flowboxes */}
          <h2 className="mb-7">{aiPage.processTitle}</h2>
          <ArrowBlocks lang={lang} content={content} className=""/>
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
