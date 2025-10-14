'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

// Define project type properly instead of using "any"
type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

const ProjectsSection = () => {
  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-gray-700/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600 hover:border-purple-500/50 transition-all duration-500"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-1 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          <Star className="w-3 h-3 fill-current" />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image/Emoji */}
      <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {project.id === 'shipping-management' ? '🚢' :
              project.id === 'ecommerce-platform' ? '🛒' :
                project.id === 'ai-chatbot' ? '🤖' : '📋'}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center space-x-4"
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center pt-4 border-t border-gray-600">
          <motion.a
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Get Started</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;ve mastered
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white">
              Want to see more?
            </h3>
            <p className="text-gray-300 max-w-md">
              These are just a few highlights. I&apos;m always working on new projects and exploring innovative solutions.
            </p>
            <motion.a
              href="https://github.com/SHAYA9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
