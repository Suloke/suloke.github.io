import Image from "next/image";
import Link from "next/link";
const CollabCard = ({ logos }) => {
    return (

    
    <div className="flex items-end justify-around flex-wrap"> {/* Techs */}

    {logos.map((logo, index) => (
        <Link 
        key={index}
        href={`${logo.target}`}>
      <Image
        key={index}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
      />
        </Link>
    ))}
  </div>
    )
}

export default CollabCard;