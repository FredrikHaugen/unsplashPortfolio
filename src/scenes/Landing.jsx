import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { SlArrowDown } from 'react-icons/sl';


const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
    >
      <div className="md:flex md:justify-between md:items-center gap-16 h-full md:h-full py-10">
        {/* IMAGE SECTION */}
        <a href="https://unsplash.com/photos/bkfXtFxjER0" target="_blank" rel="noreferrer">
          <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
            {isAboveLarge ? (
              <img
                alt="profile"
                className="hover:filter hover:saturate-150 shadow-2xl transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="../assets/heroImage.webp"
              />
            ) : (
              <img
                alt="profile"
                className="z-10 shadow-2xl w-full max-w-[400px] md:max-w-[600px]"
                src="assets/heroImage.webp"
              />
            )}
          </div>
        </a>

        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-5xl font-extralight z-10 text-center md:text-start">
              Your {""}
              <span
                className="xs:relative xs:text-blue xs:font-extralight z-20
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Name
              </span>
            </p>

            <p className="mt-10 mb-7 text-sm text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repudiandae enim voluptatibus impedit soluta incidunt animi perspiciatis vitae delectus voluptates, maxime saepe! Sed, optio repudiandae repellat excepturi amet necessitatibus sunt!
            </p>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-5 font-light text-xl
              hover:bg-blue hover:text-slate-700 hover:scale-105 hover:shadow-2xl transition duration-500"
              href="https://unsplash.com/@kazuo513"
              target='_blank'
              rel="noreferrer"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>

      </div>
      <div className="flex justify-center pt-96 align-bottom" style={{ paddingTop: '35rem' }}>
        <div className="animate-bounce-slow">
          <SlArrowDown size={50} />
        </div>
      </div>
    </section>
  );
};

export default Landing;