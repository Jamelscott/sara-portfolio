import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Instructional Designer — Interactive Learning & Assessment Design",
      company: "Vretta (Provincial Digital Assessments)",
      location: "Remote / Ontario",
      period: "2023 - Present",
      type: "Contract",
      description:
        "Design interactive digital assessments and learning activities used at scale across provincial programs.",
      responsibilities: [
        "Design and prototype item interactions and assessment flows for digital platforms",
        "Collaborate with psychometricians and SMEs to align items to standards",
        "Create accessible, responsive assessment content compatible with multiple devices",
        "Develop scoring rubrics and QA checklists to ensure reliability of automated scoring",
      ],
    },

    {
      id: 2,
      role: "Curriculum Designer — Additional Qualification Programs",
      company: "Laurentian University",
      location: "Sudbury, Ontario",
      period: "2021 - 2023",
      type: "Part-time / Contract",
      description:
        "Developed curriculum and resources for Additional Qualification (AQ) programs focused on pedagogy and assessment.",
      responsibilities: [
        "Design course outlines, learning objectives, and assessment strategies for AQ cohorts",
        "Produce instructor guides and learner-facing materials in English and French",
        "Deliver workshops and synchronous sessions for teacher candidates",
        "Coordinate peer review cycles and incorporate educator feedback into course revisions",
      ],
    },
    {
      id: 3,
      role: "Founder — Bilingual Learning Platform & Tutoring Initiative",
      company: "Apprendre Franco-Fun!",
      location: "Ontario / Remote",
      period: "2019 - Present",
      type: "Founder",
      description:
        "Built a bilingual (English/French) learning and tutoring platform focused on early literacy and engagement through play.",
      responsibilities: [
        "Lead product design and curriculum strategy for bilingual offerings",
        "Develop tutoring resources, lesson plans, and play-based literacy activities",
        "Manage community outreach, partnerships, and tutor training",
        "Monitor learner progress and iterate content based on outcomes and feedback",
      ],
    },
    {
      id: 4,
      role: "Curriculum & Resource Developer — French Language & Early Years",
      company: "Conseil scolaire catholique Providence (CSC Providence)",
      location: "Ontario",
      period: "2017 - 2020",
      type: "Contract / Project",
      description:
        "Developed curriculum resources and early years materials to support French-language instruction across the board.",
      responsibilities: [
        "Create play-based literacy resources and thematic units for early years classrooms",
        "Align materials to provincial curricular expectations and language outcomes",
        "Work with teachers to pilot resources and refine based on classroom data",
        "Provide localized adaptations and bilingual teacher notes",
      ],
    },
    {
      id: 5,
      role: "Contract Instructional Designer — Coding & STEM curriculum for girls",
      company: "Hackergal",
      location: "Toronto / Remote",
      period: "2016 - 2018",
      type: "Contract",
      description:
        "Designed inclusive coding and STEM curriculum to engage girls and underrepresented learners in technology.",
      responsibilities: [
        "Develop age-appropriate coding modules and hands-on activities",
        "Ensure materials are inclusive and culturally-responsive",
        "Train instructors and volunteers on facilitation and classroom management",
        "Measure engagement and learning gains to iterate on program design",
      ],
    },
    {
      id: 6,
      role: "Learning Materials Developer — Articulate 360 & LMS Builds",
      company: "College / University & Corporate Client Projects",
      location: "Contract / Remote",
      period: "2014 - Present",
      type: "Freelance / Contract",
      description:
        "Produce e-learning modules, Storyline/Rise content, and LMS integrations for higher education and corporate clients.",
      responsibilities: [
        "Design and build Articulate Storyline and Rise courses with interactive elements",
        "Package content for SCORM/xAPI and deploy to multiple LMS platforms",
        "Perform content migrations and maintain versioned course assets",
        "Collaborate with SMEs to turn learning outcomes into assessment and activities",
      ],
    },
    {
      id: 7,
      role: "Content Creator — K–12 Literacy & French Immersion",
      company: "K–12 Literacy & French Immersion",
      location: "Ontario / Remote",
      period: "2012 - Present",
      type: "Freelance",
      description:
        "Create play-based literacy materials and resources to support French immersion and early years learning.",
      responsibilities: [
        "Author play-based lesson plans and literacy centers for early years",
        "Develop bilingual flashcards, decodable readers, and activity packs",
        "Test resources in classrooms and iterate on pacing and scaffolding",
        "Provide teacher-facing differentiation strategies and assessment tools",
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
          viewport={{ once: true, margin: "-100px" }}
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
            Over the years, I've had the privilege of working with diverse
            organizations to create meaningful learning experiences that make a
            difference.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
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
                      <span className="text-blue-600 shrink-0">•</span>
                      <span className="mt-0.5 text-sm leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
