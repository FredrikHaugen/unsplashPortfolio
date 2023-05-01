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

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl">{label}</p>
      </div> 
      <img src={title} alt={label} className='h-[400px] w-[400px] object-cover' />
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
          Explore My Latest Portfolio: Showcasing Nature's Landscapes and Diverse Portraits in Vivid Detail
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
          <Project title="https://images.unsplash.com/photo-1663569486986-8fcc060f9da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2149&q=80" label="Mishakaike Pond, Nagano, Japan" />
          <Project title="https://images.unsplash.com/photo-1651807428952-5f0637a7b3c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" label="Ishigaki, Okinawa, Japan" />
          <Project title="https://images.unsplash.com/photo-1629807097065-79bd3273e656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" label="Karuizawa, Japan" />
          <Project title="https://images.unsplash.com/photo-1620747114477-fd47435323c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" label="Kyoto, Japan" />
          <Project title="https://images.unsplash.com/photo-1620647961024-d75451eee93a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" label="Kyoto, Japan" />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
