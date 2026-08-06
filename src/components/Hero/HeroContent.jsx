import hero from "../../data/hero";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroSocial from "./HeroSocial";
function HeroContent() {
  return (
    
       <div className="max-w-xl">
          <p className="text-blue-400 text-xl">{hero.greeting}</p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mt-3 leading-tight"
          >
            {hero.name}
          </motion.h1>

          <TypeAnimation
            sequence={hero.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-5 text-3xl md:text-4xl font-semibold text-blue-400"
          />

          <p className="mt-6 leading-8 text-slate-400">{hero.description}</p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-7 py-3 rounded-lg font-medium"
            >
              Hire Me
            </a>

            <a
              href={hero.resume}
              download
              className="border border-blue-500 hover:bg-blue-500 transition-all duration-300 px-7 py-3 rounded-lg font-medium"
            >
              Download CV
            </a>
          </div>

         <HeroSocial />
        </div>
  );
}

export default HeroContent;