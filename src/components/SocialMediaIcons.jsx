import { FaUnsplash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 hover:scale-105"
        href="https://unsplash.com/@kazuo513"
        target="_blank"
        rel="noreferrer"
      >
        <FaUnsplash size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 hover:scale-105"
        href="mailto:contact@kazuophoto.com"
        target="_blank"
        rel="noreferrer"
      >
        <IoMdMail size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
