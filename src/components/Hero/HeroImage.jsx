import profile from "../../assets/images/Shahin pc.jpg";
import { motion } from "framer-motion";
import hero from "../../data/hero";
import heroIcons from "../../data/heroIcons";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-500/30 blur-3xl z-0"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <img
        src={profile}
        alt={hero.name}
        className="relative z-10 w-80 md:w-96 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
      />
      {heroIcons.map(({ id, icon: Icon, position, color }) => (
        <motion.div
          key={id}
          className={`absolute ${position} hidden md:block`}
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: id * 0.3,
          }}
        >
          <Icon className={`${color} text-4xl md:text-5xl drop-shadow-lg`} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroImage;
