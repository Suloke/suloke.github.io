import Image from "next/image";

const TeamCard = ({
  imageSrc,
  fullName,
  position,
  description,
  skills,
  isLastCard,
  isExpanded,
  onExpand,
  expandedIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [firstName, lastName] = fullName.split(" ");
  const skillsArray = skills.split("  ");

  return (
    <div
      onClick={onExpand}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      className={`
        w-full lg:h-full cursor-pointer relative bg-suloke-grey transition-all duration-300 overflow-hidden
        ${
          isLastCard
            ? ""
            : "border-b lg:border-b-0 lg:border-r border-suloke-white/20 lg:border-suloke-black/20"
        }
        ${
          isExpanded
            ? "h-[500px] lg:w-[50%]"
            : expandedIndex === null
            ? "h-[244px]"
            : "h-[116px] lg:w-[25%]"
        }`}
    >
      <div className="absolute right-0 top-0 z-0 overflow-hidden">
        <Image
          className={`
            h-[200px] w-auto object-cover transition-height duration-300
            ${
              isExpanded
                ? "h-[650px] lg:h-[732px] xl:h-[795px] 2xl:h-[945px]"
                : expandedIndex === null
                ? "h-[488px] lg:h-[732px] xl:h-[795px] 2xl:h-[945px]"
                : "h-[232px] lg:h-[732px] xl:h-[795px] 2xl:h-[945px]"
            }`}
          src={imageSrc}
          width={400}
          height={400}
          alt={imageSrc}
          priority
        />
      </div>
      <div className="relative flex flex-col py-4 px-2 z-10 max-w-[55%] h-full lg:max-w-full lg:justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2 pl-3">
            <h2 className="text-3xl">{firstName}</h2>
            <h2
              className={`text-3xl transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              {lastName}
            </h2>
          </div>
          <h3
            className={`text-xl text-suloke-white/50 pl-5 transition-all duration-300
        ${isExpanded ? "opacity-100" : "lg:opacity-0"}
        `}
          >
            {position}
          </h3>
        </div>
        <div
          className={`transition-[opacity,background-color] rounded-lg duration-300 overflow-hidden p-5 mt-4
              ${
                isExpanded
                  ? "opacity-100 overflow-y-auto no-scrollbar lg:delay-200 bg-suloke-black/70"
                  : "opacity-10 lg:opacity-0 lg:delay-0 lg:duration-0 bg-suloke-black/0"
              }`}
        >
          <p className="text-suloke-white/80 mb-4">{description}</p>
          <div
            className={`flex flex-wrap gap-2 transition-all duration-300 ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {skillsArray.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-suloke-white/10 uppercase rounded-full text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

// import Image from "next/image";

// const TeamCard = ({ imageSrc, fullName, position, description, skills }) => {
//   return (
//     <div className="flex flex-cols bg-suloke-grey rounded-lg border-box w-auto">
//       <div className="pt-3 pl-3">
//         <div className="h2 pb-3 pl-3">{fullName}</div>
//         <div className="h4 pb-4">{position}</div>
//         <div className="p pb-4 pl-3">{description}</div>
//         <div className="h4 pb-2 uppercase pl-3">{skills}</div>
//       </div>
//       <Image
//         className="w-32 rounded-r-lg border-box"
//         src={imageSrc}
//         width={400}
//         height={400}
//         alt={fullName}
//         style={{
//           objectFit: 'cover',
//         }}
//       />
//     </div>
//   );
// };

// export default TeamCard;
