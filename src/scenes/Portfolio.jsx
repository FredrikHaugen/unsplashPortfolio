import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, label }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl">{label}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`assets/${projectTitle}.webp`} alt={label} className='h-[400px] w-[400px] object-cover' />
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-light text-4xl">
            <span className="text-blue">Port</span>folio
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid gap-2 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10
              max-w-[400px] max-h-[400px] bg-dark-grey hover:text-black hover:bg-grey transition duration-500 text-white text-2xl font-extralight"
          >
            Some of my work
          </div>
          <Project title="image 1" label="Vietnam, Hoi An" />
          <Project title="image 2" label="Japan, Shizuoka" />
          <Project title="image 3" label="Japan, Kyoto" />
          <Project title="image 4" label="Japan, Hakone" />
          <Project title="image 5" label="Water Lily" />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
