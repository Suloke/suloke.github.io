import BannerSection from "@/components/bannerSection";
import CollabCard from "@/components/collabCard";
import CollabQuote from "@/components/collabQuote";
import TeamSection from "@/components/teamSection";
import { getDictionary } from "@/get-dictionary";

import { generateMetaData } from "@/utils/metaData";

export async function generateMetadata() {
  return generateMetaData("/");
}

const Home = async (props) => {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  const logos = [
    {
      src: "/logos/arbonaut.png",
      alt: "Arbonaut",
      width: 200,
      height: 100,
      target: "https://www.arbonaut.com/en/",
    },
    {
      src: "/logos/mores.svg",
      alt: "Mores",
      width: 200,
      height: 60,
      target: "https://mores-horizon.eu",
    },
  ];

  const references = [
    {
      quote: dictionary.home.quote,
      author: "Tuomo Kauranne",
      level: "CEO",
      useLogo: true,
      logoSrc: "/logos/arbonaut.png",
    },
  ];

  return (
    <section>
      <div className="flex flex-col w-full px-5 pt-48 pb-14 items-center content-center align-center">
        <div className="md:w-4/5 lg:w-3/5 gap-y-14 md:gap-y-20 lg:gap-y-20">
          <h1 className="text-center pb-24">
            SULOKE — {dictionary.home.title}
          </h1>
          <BannerSection dictionary={dictionary.bannerSection} />
          <div className="flex flex-col gap-y-10 px-20">
            {" "}
            {/* Who we are */}
            <h2 className="px-2">{dictionary.home.headerWhoWeAre}</h2>
            <p className="px-4">
              {dictionary.home.textWhoWeAre1}
              <br></br>
              <br></br>
              {dictionary.home.textWhoWeAre2}
            </p>
          </div>
          <TeamSection dictionary={dictionary.teamSection} />
          <div className="flex flex-col gap-y-14 md:px-20 pt-14 md:pt-20 pb-10">
            {" "}
            {/* Collaborators */}
            <h2>{dictionary.home.headerCollaboration}</h2>
            <CollabCard logos={logos} /> {/* Set of logo-links */}
            <div className="flex flex-row w-full items-center justify-center">
              {" "}
              {/* Reference */}
              <div className="flex flex-col gap-y-10 pt-14 md:pt-20  md:w-2/3 lg:w-2/3">
                <CollabQuote references={references} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
