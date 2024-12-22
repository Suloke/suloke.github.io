import Image from "next/image";
import { generateMetaData } from "@/utils/metaData";

export async function generateMetadata() {
    return generateMetaData('/contact');
  }
  

const Page = () => {

    return (
        <div className="flex flex-col gap-y-14 md:gap-y-20 items-center">
            <h1 className="pt-28 pb-8">
            CONTACT INFO
            </h1>
            <div className="flex flex-row gap-x-8 justify-center items-center">
                <div className="flex w-11 h-11">
                <Image
                            src={'/phone-icon.svg'}
                            height={44}
                            width={44}
                            alt="phone-icon"
                        />
                    </div>
                    <h2>
                        +358 44 99 99 618
                    </h2>
            </div>

            <div className="flex flex-row gap-x-8 justify-center items-center">

                <div className="flex w-11 h-11">
                        <Image
                            src={'/email-icon.svg'}
                            height={44}
                            width={44}
                            alt="email-icon"
                        />
                </div>
                <h2>
                    contact@suloke.com
                </h2>
            </div>
        </div>

    )

}

export default Page;