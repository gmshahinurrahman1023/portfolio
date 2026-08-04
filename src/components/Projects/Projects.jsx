import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping website built with React and Tailwind CSS.",
      image: "https://placehold.co/600x400?text=Project+1",
      technologies: ["React", "Tailwind", "Firebase"],
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio with smooth animations.",
      image: "https://placehold.co/600x400?text=Project+2",
      technologies: ["React", "Framer Motion", "CSS"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Manager",
      description:
        "Task management application with CRUD functionality.",
      image: "https://placehold.co/600x400?text=Project+3",
      technologies: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-slate-400 mt-4">
          Some projects I've built while learning web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    <FiExternalLink />
                    Live
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 border border-slate-500 hover:border-white px-4 py-2 rounded-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;