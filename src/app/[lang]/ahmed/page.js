import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import LinksButtons from "@/components/linksButtons";
import { generateMetaData } from "@/utils/metaData";

export async function generateMetadata() {
  return generateMetaData("/ahmed");
}

const Page = async (props) => {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  const contactData = {
    phone: "+36301475605",
    weChatId: null,
    weChatQR: null,
    weChatLink: null,
    email: "ahmed.shaibani@suloke.com",
    emailLink: "mailto:ahmed.shaibani@suloke.com",
    whatsAppLink: "https://wa.me/+36301475605",
    linkedInLink: "https://www.linkedin.com/in/ahmedalshaibani/",
    vcfLink: "/Ahmed_Shaibani.vcf",
    vcfFileName: "Ahmed_Shaibani.vcf",
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-y-6 px-5 py-20 items-center w-fit justify-self-center">
        <div className="flex rounded-lg border-box w-auto bg-suloke-grey">
          <div className="w-32 h-48">
            <Image
              className="h-full rounded-l-lg border-box"
              src={"/Photos/ahmed-478-882.png"}
              width={400}
              height={400}
              alt={"Ahmed Shaibani"}
              style={{
                objectFit: "cover",
                objectPosition: "top right",
              }}
            />
          </div>
          <div className="flex flex-col justify-center py-3 px-4 h-48">
            <div>
              <h2 className="pb-2">{"Ahmed Shaibani"}</h2>
              <h3 className="pb-4">{"CTO"}</h3>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-md">Suloke OY</p>
              <p className="text-[10px]">Kursuntie 11, 37140 Nokia, Finland</p>
              <p className="text-[10px]">3276735-3</p>
            </div>
          </div>
        </div>
        <LinksButtons
          lang={lang}
          dict={dict.contactPage}
          contactData={contactData}
        />
      </div>
    </div>
  );
};

export default Page;
