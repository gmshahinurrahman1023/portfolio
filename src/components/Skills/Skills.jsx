import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      percentage: 95,
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    },
    {
      name: "CSS",
      percentage: 90,
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    },
    {
      name: "JavaScript",
      percentage: 80,
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    },
    {
      name: "React",
      percentage: 75,
      icon: <FaReact className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    },
    {
      name: "Git & GitHub",
      percentage: 70,
      icon: <FaGitAlt className="text-orange-600 text-3xl" />,
    },
  ];

  return (
    <section  id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-white font-bold text-center"
        >
          
Skills & Technologies
        </motion.h2>

        <p className="text-center text-green-400 mt-4">
          The magical tools I use to bring ideas to life
        </p>

        <div className="mt-16 space-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-slate-900 p-5 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  {skill.icon}

                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <span className="text-blue-400 font-bold">
                  {skill.percentage}%
                </span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
