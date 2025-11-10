import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js'],
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful designs that provide excellent user experiences.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and search engine performance.',
      technologies: ['Lighthouse', 'Web Vitals', 'Webpack', 'Vite'],
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts clearly.',
      technologies: ['Git', 'Agile', 'Code Reviews', 'Documentation'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-label="About me section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Bilingual senior instructional designer and curriculum strategist with 10+ years of experience. Based in Ontario. Available for remote-friendly freelance and contract work.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Whether you have a specific idea in mind or just want to explore possibilities, 
              I'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus-outline"
              aria-label="Contact me for collaboration"
            >
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;