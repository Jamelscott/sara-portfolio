import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Weather API', 'Mapbox', 'SCSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects with smooth animations and perfect accessibility scores.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
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
      id="projects"
      className="py-20 bg-gray-50"
      aria-label="My projects section"
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Here are some of the projects I've worked on recently. Each one represents 
            a unique challenge and showcases different aspects of my development skills.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-48 lg:h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className={`p-6 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors focus-outline"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors focus-outline"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors focus-outline"
            aria-label="View all projects on GitHub"
          >
            <Github size={20} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;