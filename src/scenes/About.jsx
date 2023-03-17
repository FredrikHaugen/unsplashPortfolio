import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const About2 = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="about" className="py-12">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-center w-full"
            >
                <div>
                    <p className="font-light text-4xl">
                        About<span className="text-blue"> Me</span>
                    </p>
                    <div className="flex md:justify-center my-5">
                        <LineGradient width="w-full" />
                    </div>
                </div>
            </motion.div>
            <div
                className="md:flex md:justify-between md:items-center gap-16 md:h-full pt-10">
                {/* IMAGE SECTION */}
                <a href="https://unsplash.com/photos/c8Q4BtMZgqM" target="_blank" rel="noreferrer">
                    <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                        {isAboveLarge ? (
                            <img
                                alt="profile"
                                className="hover:filter hover:saturate-150 hover:shadow-2xl shadow-m transition duration-500 z-10 w-full max-w-[500px] max-h-[60vh] rounded-sm"
                                src="../assets/profileImage.webp"
                            />
                        ) : (
                            <img
                                alt="profile"
                                className="z-10 shadow-2xl w-full max-w-[400px] md:max-w-[600px] rounded-sm hover:shadow-2xl shadow-m"
                                src="assets/profileImage.webp"
                            />
                        )}
                    </div>
                </a>
                <div className="md:max-w-[40vw]">
                    <div className="z-30 basis-2/5 mt-12">

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
                            <p className="mt-10 mb-7 text-center md:text-start">
                                As a dedicated photographer, my mission is to reveal the distinct beauty and character within each subject I photograph, from breathtaking landscapes to captivating portraits. My love for photography emerged early in life and has driven me to hone my skills and techniques, crafting visually striking images that narrate a story.
                            </p>
                        </motion.div>

                    </div>
                    <div className="z-30 basis-2/5 mt-12">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="mt-10 mb-7 text-center md:text-start">
                                My approach to photography revolves around harnessing natural light and meticulous composition to encapsulate the spirit of each moment. I firmly believe that forging a connection with my subjects is crucial for producing impactful and unforgettable images, as it allows their unique personalities and emotions to take center stage. With every shot, I strive to elicit a sense of wonder and spark the viewer's imagination, crafting photographs as exceptional and inspiring as the subjects themselves. Beyond my technical expertise, I place significant emphasis on comprehending and adapting to my clients' needs and preferences.
                            </p>
                        </motion.div>

                    </div>
                    <div className="z-30 basis-2/5 mt-12">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="mt-6 mb-7 text-center md:text-start">
                                Regardless of whether I'm working on a family portrait session, an event, or a landscape project, I tackle each endeavor with unwavering dedication and enthusiasm to deliver images that surpass expectations. Ultimately, my work seeks to create not just visually stunning photographs, but also enduring memories that can be treasured and passed down for generations.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2