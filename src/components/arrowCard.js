import Link from "next/link";

const isValidUrl = urlString=> {
      var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}

const ArrowCard = ({
  text,
  target,
  setCardHoveredIndex,
  index,
  color,
  lang,
}) => {

  let url
  if (isValidUrl(target) === true){
      url = target
  } else {
    url = `/${lang}/${target}`
  }

  return (
    <Link
      className={`min-w-[200px] w-full max-w-[300px] rounded-lg`}
      href={url}
      onMouseEnter={() => setCardHoveredIndex(index)}
      onMouseLeave={() => setCardHoveredIndex(null)}
    >
      <div
        style={{ backgroundColor: color }}
        className={`relative opacity-90 h-[67px] w-full hover:opacity-100 hover rounded-lg transition duration-300 ease-in-out z-10`}
      >
        <div
          style={{ backgroundColor: color }}
          className={`absolute rotate-45 w-[51px] h-[51px] top-2 right-[-20px] rounded-lg`}
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
          {text}
        </h1>
      </div>
    </Link>
  );
};

export default ArrowCard;
