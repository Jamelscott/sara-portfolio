import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Learning Experience Designer',
      company: 'Educational Organization',
      location: 'Kitchener, Ontario',
      period: '2020 - Present',
      type: 'Full-time',
      description: 'Design and develop engaging learning experiences for K-12, higher education, and corporate training programs in both English and French.',
      responsibilities: [
        'Design curriculum and assessment frameworks aligned with learning objectives',
        'Develop accessible, engaging content for diverse learner populations',
        'Collaborate with subject matter experts and stakeholders',
        'Implement evidence-based instructional design principles',
      ],
    },
    {
      id: 2,
      role: 'Curriculum & Assessment Specialist',
      company: 'Previous Organization',
      location: 'Ontario',
      period: '2018 - 2020',
      type: 'Full-time',
      description: 'Specialized in curriculum development and assessment design for bilingual educational programs.',
      responsibilities: [
        'Created comprehensive assessment strategies for various learning contexts',
        'Ensured alignment between curriculum, instruction, and assessment',
        'Provided bilingual support for educational materials',
        'Conducted training sessions for educators and instructional staff',
      ],
    },
    {
      id: 3,
      role: 'Instructional Designer',
      company: 'Education Partner',
      location: 'Ontario',
      period: '2015 - 2018',
      type: 'Contract',
      description: 'Designed and implemented instructional materials for diverse learning environments.',
      responsibilities: [
        'Developed engaging learning activities and multimedia content',
        'Applied adult learning principles to professional development programs',
        'Evaluated program effectiveness and made data-driven improvements',
        'Collaborated with cross-functional teams on large-scale projects',
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-white"
      aria-label="Work experience section"
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
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Over the years, I've had the privilege of working with diverse organizations 
            to create meaningful learning experiences that make a difference.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {exp.location} • {exp.type}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 md:ml-4">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2" role="list">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
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
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus-outline"
            aria-label="Get in touch"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
