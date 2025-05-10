import Image from "next/image";
import Link from "next/link";

const Footer = ({ lang }) => {
  return (
    <div className="flex flex-row items-center justify-between px-5 py-4 w-full">
      <div className="pr-2">
        <Link href={`/${lang}`}>
          <Image
            src={"/suloke-logo.png"}
            width={84}
            height={28}
            alt="suloke-logo"
          />
        </Link>
      </div>
      <div className="flex md:flex-row flex-col gap-x-4">
        <h4>Suloke OY</h4>
        <h4>Kursuntie 11, 37140 Nokia, Finland</h4>
        <h4>3276735-3</h4>
        <Link href={`/${lang}/privacy-policy`}>
          <h4 className="hover:text-suloke-cyan transition duration-300 ease-in-out">
            PRIVACY POLICY
          </h4>
        </Link>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row gap-x-2 justify-center">
          <div className="flex w-4 h-4">
            <Image
              src={"/phone-icon.svg"}
              height={18}
              width={18}
              alt="phone-icon"
            />
          </div>
          <h4>+358 44 99 99 618</h4>
        </div>

        <div className="flex flex-row gap-x-2 justify-center">
          <div className="flex w-4 h-4">
            <Image
              src={"/email-icon.svg"}
              height={18}
              width={18}
              alt="email-icon"
            />
          </div>
          <h4>contact@suloke.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
