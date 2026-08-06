import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-lg"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 text-slate-400 leading-7">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-blue-500 px-5 py-2 hover:bg-blue-500 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
