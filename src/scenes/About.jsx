import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const About2 = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="about" className="py-48">
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
                className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
                {/* IMAGE SECTION */}
                <a href="https://unsplash.com/photos/c8Q4BtMZgqM" target="_blank" rel="noreferrer">
                    <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                        {isAboveLarge ? (
                            <img
                                alt="profile"
                                className="hover:filter hover:saturate-150 hover:shadow-2xl shadow-m transition duration-500 z-10 w-full max-w-[500px] rounded-sm"
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laborum nemo voluptatem, suscipit hic adipisci unde temporibus incidunt consequatur fuga laboriosam a ratione inventore tenetur odit eligendi illum nisi numquam.
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
                                Officia dolorum eos dolor reprehenderit labore eveniet odio amet eius deleniti quos omnis possimus, nulla sequi nostrum vitae harum velit corporis libero?

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
                                Doloribus eligendi saepe perspiciatis corporis. Assumenda repudiandae nemo, at numquam libero facere. Deserunt rerum consectetur exercitationem minus nobis voluptas incidunt illum quidem. Id laborum nemo voluptatem, suscipit hic adipisci unde temporibus incidunt consequatur fuga laboriosam a ratione inventore tenetur odit eligendi illum nisi numquam.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2