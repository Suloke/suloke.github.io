import Image from "next/image";
import { generateMetaData } from "@/utils/metaData";
import { getDictionary } from "@/get-dictionary";
import LinksButtons from "@/components/linksButtons";

export async function generateMetadata() {
  return generateMetaData("/contact");
}

const Page = async (props) => {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-y-6 px-5 py-28 items-center w-fit justify-self-center">
      <div className="flex rounded-lg border-box w-auto bg-suloke-grey">
        <div className="w-32 h-48">
          <Image
            className="h-full rounded-l-lg border-box"
            src={"/Photos/samuli-478-882.png"}
            width={400}
            height={400}
            alt={"Samuli Kujala"}
            style={{
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
        <div className="flex flex-col justify-center py-3 px-4 h-48">
          <div>
            <h2 className="pb-2">{"Samuli Kujala"}</h2>
            <h3 className="pb-4">{"CEO"}</h3>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-md">Suloke OY</p>
            <p className="text-[10px]">Kursuntie 11, 37140 Nokia, Finland</p>
            <p className="text-[10px]">3276735-3</p>
          </div>
        </div>
      </div>
      <LinksButtons lang={lang} dict={dict.contactPage} />
    </div>
  );
};

export default Page;
