import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="pt-48">
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
            Contact<span className="text-blue"> Me</span>
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-full" />
          </div>
        </div>
      </motion.div>

      <div className=" md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <form className="max-w-[700px]"
            target="_blank"
            onSubmit={onSubmit}
            action="https://unsplash.com/@kazuo513?modal=%5B%22SendMessage%22%2C%7B%22userId%22%3A%22hFTBXQH1_Ug%22%2C%22subject%22%3A%22default%22%7D%5D"
            method="POST"
          >
            <input
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: false,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1 ">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3 mt-5"
              type="text"
              placeholder="Email"
              {...register("message", {
                required: false,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3 mt-5"
              name="message"
              placeholder="Message"
              rows="4"
              cols="50"
              {...register("message", {
                required: false,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="bg-blue text-deep-blue rounded-sm py-2 my-3 px-5 font-light text-xl
              hover:text-slate-100 hover:scale-105 hover:shadow-2xl transition duration-500"
              type="submit"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
