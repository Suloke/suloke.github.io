import Image from "next/image";

const ContactCard = ({ color, dict }) => {
  return (
    <div className={`flex flex-cols rounded-lg border-box w-auto ${color}`}>
      <div className="w-48">
        <Image
          className="h-full rounded-l-lg border-box"
          src={"/Photos/samuli-478-882.png"}
          width={400}
          height={400}
          alt={"Samuli Kujala"}
          style={{
            objectFit: "cover",
            objectPosition: "left",
          }}
        />
      </div>
      <div className="flex flex-col justify-center py-3 px-4">
        <div>
          <h2 className="pb-2">{"Samuli Kujala"}</h2>
          <h3 className="pb-4">{"CEO"}</h3>
          <p className="pb-4">{dict.text}</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center pb-4">
          <div>
            <Image
              src={"/phone-icon.svg"}
              height={28}
              width={28}
              alt="phone-icon"
            />
          </div>
          <h3>+358 44 99 99 618</h3>
        </div>
        <div className="flex flex-row gap-x-2 items-center pb-4">
          <div>
            <Image
              src={"/email-icon.svg"}
              height={28}
              width={28}
              alt="email-icon"
            />
          </div>
          <h3>contact@suloke.com</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
