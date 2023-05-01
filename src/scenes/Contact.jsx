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
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  

  return (
    <section id="contact" className="pt-48">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="basis-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <form
            className="max-w-[700px]"
            onSubmit={onSubmit}
            action="/submit-form"
            method="POST"
            target="_blank"
            rel="noreferrer"
          >
            
            <input
              {...register("name", {
                required: false,
                maxLength: 100,
              })}
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red mt-1 ">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              {...register("email", {
                required: false,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3 mt-5"
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              {...register("message", {
                required: false,
                maxLength: 2000,
              })}
              className="w-full bg-dark font-semibold text-white placeholder-opaque-white p-3 mt-5"
              name="message"
              placeholder="Message"
              rows="4"
              cols="50"
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
              className="bg-blue text-deep-blue rounded-sm py-2 my-3 px-5 font-light text-xl hover:text-slate-100 hover:scale-105 hover:shadow-2xl transition duration-500"
              type="submit"
            >
              Submit
            </button>

            <button
              className="bg-slate-700 text-white rounded-sm py-2 my-3 px-5 mx-2 font-light text-xl hover:text-slate-800 hover:bg-slate-400 hover:scale-105 hover:shadow-2xl transition duration-500"
              type="reset"
            >
              Reset
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="basis-1/2 flex justify-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
