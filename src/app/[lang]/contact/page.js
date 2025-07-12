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

  const contactData = {
    phone: "+358449999618",
    weChatId: "wxid_sl24l0twv23l12",
    weChatQR: "/wechat-qr.jpg",
    weChatLink: "https://u.wechat.com/kKWx6fzss6pBd-E48xusFxg?s=2",
    email: "contact@suloke.com",
    emailLink: "mailto:contact@suloke.com",
    whatsAppLink: "https://wa.me/+358449999618",
    linkedInLink: "https://www.linkedin.com/in/samuli-kujala-66a60922a/",
    vcfLink: "/Samuli_Kujala.vcf",
    vcfFileName: "Samuli_Kujala.vcf",
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-y-6 px-5 py-20 items-center w-fit justify-self-center">
        <div className="flex rounded-lg border-box w-auto bg-suloke-grey">
          <div className="w-32 h-48">
            <Image
              className="h-full ltr:rounded-l-lg rtl:rounded-r-lg border-box"
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
