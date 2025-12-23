'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

// ✅ Define the Skill type
type Skill = {
  name: string;
  icon: string;
  level: number;
  category: string;
};

const SkillsSection = () => {
  const skillCategories = {
    languages: portfolioData.skills.filter((skill: Skill) => skill.category === 'languages'),
    frontend: portfolioData.skills.filter((skill: Skill) => skill.category === 'frontend'),
    backend: portfolioData.skills.filter((skill: Skill) => skill.category === 'backend'),
    database: portfolioData.skills.filter((skill: Skill) => skill.category === 'database'),
    ai: portfolioData.skills.filter((skill: Skill) => skill.category === 'ai'),
    tools: portfolioData.skills.filter((skill: Skill) => skill.category === 'tools'),
    seo: portfolioData.skills.filter((skill: Skill) => skill.category === 'seo'),
    it: portfolioData.skills.filter((skill: Skill) => skill.category === 'it'),
  };

  const categoryTitles = {
    languages: 'Programming Languages',
    frontend: 'Frontend Technologies',
    backend: 'Backend Technologies',
    database: 'Databases',
    ai: 'AI & Machine Learning',
    tools: 'Tools & Others',
    seo: 'Social Media Managment',
    it: 'IT & Networking',
  };

  // ✅ Use the Skill type instead of any
  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );

  // ✅ Use Skill[] instead of any[]
  const CategorySection = ({ category, skills, index }: { category: string; skills: Skill[]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
        {categoryTitles[category as keyof typeof categoryTitles]}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Full Stack Development
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in building end-to-end web applications using modern technologies.
            From crafting responsive user interfaces to designing robust backend systems,
            I enjoy working across the entire development stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            skills.length > 0 && (
              <CategorySection
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
            )
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
            <span className="text-purple-400 font-semibold">Always Learning</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Currently exploring AI/ML integration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
