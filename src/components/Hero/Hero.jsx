import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profile from "../../assets/images/nas.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <p className="text-blue-400 text-xl">Hello, I'm 👋</p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mt-3"
          >
            Nasrin Rahman
          </motion.h1>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "MERN Stack Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-4xl text-blue-400 font-semibold mt-4 block"
          />

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            I build beautiful, responsive and user-friendly web applications
            using React, Tailwind CSS and JavaScript.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-lg font-medium">
              Hire Me
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-lg font-medium">
              Download CV
            </button>
          </div>
          <div className="flex gap-6 mt-10 text-3xl">
            <FaGithub className="hover:text-blue-400 cursor-pointer duration-300" />

            <FaLinkedin className="hover:text-blue-400 cursor-pointer duration-300" />

            <FaFacebook className="hover:text-blue-400 cursor-pointer duration-300" />
          </div>
        </div>

        <div className="relative">
          <img
            src={profile}
            alt="Nasrin Akhter"
            className="relative w-80 rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
