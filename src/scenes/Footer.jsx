import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-slate-600 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-light text-2xl text-white">
            Kazuo <span className="text-blue">Ota</span>
          </p>
          <p className="text-md text-blue hover:text-white transition duration-500">
            <a href="http://www.haugendesign.net/" target="_blank" rel="noopener noreferrer" >
              ©2023 haugendesign. All Rights Reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
