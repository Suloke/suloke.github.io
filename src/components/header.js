import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";

const Header = ({ lang }) => {
  return (
    <div className="flex flex-row fixed w-full max-w-[2000px] top-0 justify-between px-4 items-center bg-suloke-black z-[100]">
      <div className="py-2">
        <Link href={`/${lang}`}>
          <Image
            src={"/suloke-logo.png"}
            width={84}
            height={28}
            alt="suloke-logo"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-x-6 items-center md:px-4 ">
        <Link className="py-2" href={`/${lang}/contact`}>
          <h3 className="leading-4 hover:text-suloke-cyan hover transition duration-300 ease-in-out">
            CONTACT
          </h3>
        </Link>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
