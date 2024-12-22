import Link from "next/link";
import { generateMetaData } from "@/utils/metaData";
import { getDictionary } from "@/get-dictionary";

export async function generateMetadata() {
  return generateMetaData("/privacy-policy");
}

const Page = async (props) => {
  const { lang } = await props.params;

  const { privacyPolicy } = await getDictionary(lang);

  return (
    <article
      className="prose prose-suloke dark:prose-invert
        mx-auto lg:prose-lg max-md:px-[5%] my-12 max-w-11/12"
    >
      <h1>{privacyPolicy.title1}</h1>
      <p>
        {privacyPolicy.text1}
        <Link href={"http://www.suloke.com"}>http://www.suloke.com</Link>
        {privacyPolicy.text2}
      </p>
      <h2>{privacyPolicy.title2}</h2>
      <p>{privacyPolicy.text3}</p>

      <h2>{privacyPolicy.title3}</h2>
      <p>{privacyPolicy.text4}</p>

      <h2>{privacyPolicy.title4}</h2>
      <p>{privacyPolicy.text5}</p>
      <ol>
        <li>{privacyPolicy.li1}</li>
        <li>{privacyPolicy.li2}</li>
        <li>{privacyPolicy.li3}</li>
        <li>{privacyPolicy.li4}</li>
        <li>{privacyPolicy.li5}</li>
        <li>{privacyPolicy.li6}</li>
        <li>{privacyPolicy.li7}</li>
      </ol>

      <h2>{privacyPolicy.title5}</h2>
      <p>
        <Link href={"http://www.suloke.com"}>Suloke.com</Link>
        {privacyPolicy.text6}
      </p>

      <h2>{privacyPolicy.title6}</h2>
      <p>
        {privacyPolicy.text7}
        <Link href={"http://www.suloke.com"}>suloke.com</Link>
        {privacyPolicy.text8}
      </p>

      <h2>{privacyPolicy.title7}</h2>
      <p>
        <Link href={"http://www.suloke.com"}>Suloke.com</Link>
        {privacyPolicy.text9}
      </p>

      <p>{privacyPolicy.text10}</p>

      <h2>{privacyPolicy.title8}</h2>
      <p>{privacyPolicy.text11}</p>
      <ol>
        <li>{privacyPolicy.li11}</li>
        <li>{privacyPolicy.li12}</li>
        <li>{privacyPolicy.li13}</li>
        <li>{privacyPolicy.li14}</li>
      </ol>

      <h2>{privacyPolicy.title9}</h2>
      <p>{privacyPolicy.text12}</p>
      <ol>
        <li>{privacyPolicy.li15}</li>
        <li>{privacyPolicy.li16}</li>
        <li>{privacyPolicy.li17}</li>
        <li>{privacyPolicy.li18}</li>
        <li>{privacyPolicy.li19}</li>
        <li>{privacyPolicy.li20}</li>
        <li>{privacyPolicy.li21}</li>
      </ol>

      <h2>{privacyPolicy.title10}</h2>
      <p>{privacyPolicy.text13}</p>

      <h2>{privacyPolicy.title11}</h2>
      <p>{privacyPolicy.text14}</p>

      <h2>{privacyPolicy.title12}</h2>
      <p>{privacyPolicy.text15}</p>
    </article>
  );
};

export default Page;
