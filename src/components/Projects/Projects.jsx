import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
