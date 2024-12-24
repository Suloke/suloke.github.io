import Image from "next/image";
import Link from "next/link";
const TechStack = ({ logos }) => {
  return (
    <div className="grid grid-row-auto grid-cols-3 gap-5 items-center justify-center flex-wrap">
      {" "}
      {/* Techs */}
      {logos.map((logo, index) => (
        <Link
          key={index}
          href={`${logo.url}`}
          target="_blank"
          passHref
          className="flex items-center justify-center"
        >
          <Image
            className=" hover:scale-105 hover transition duration-300 ease-in-out"
            key={index}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        </Link>
      ))}
    </div>
  );
};

export default TechStack;
