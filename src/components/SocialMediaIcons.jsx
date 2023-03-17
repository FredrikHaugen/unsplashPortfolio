import { FaUnsplash } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';


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
        href="https://unsplash.com/@kazuo513?modal=%5B%22SendMessage%22%2C%7B%22userId%22%3A%22hFTBXQH1_Ug%22%2C%22subject%22%3A%22default%22%7D%5D"
        target="_blank"
        rel="noreferrer"
      >
        <IoMdMail size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
