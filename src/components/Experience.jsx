import { motion } from 'framer-motion';
import { EXPERIENCES, OTHER_EXPERIENCES } from '../constants/index';

const Experience = () => {
  // Variants for the motion to apply sliding from left or right
  const experienceVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100, // Slide left or right based on direction
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="pb-4">
      {/* Experience Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="tracking-tight my-20 text-center text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? 'left' : 'right'} // Alternate direction for each experience
            variants={experienceVariants}
            initial="hidden"
            whileInView="visible"
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400 font-bold">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              <div className="mt-4">
                <p className="text-sm font-bold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-stone-400">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold">Technical Expertise:</p>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add spacing between sections */}
      <div className="mb-50"></div> {/* Increased space between sections */}

      {/* Other Experiences Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans"
      >
        Other Experiences
      </motion.h2>
      <div>
        {OTHER_EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? 'left' : 'right'} // Alternate direction for each experience
            variants={experienceVariants}
            initial="hidden"
            whileInView="visible"
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400 font-bold">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.location}</p>
              <div className="mt-4">
                <p className="text-sm font-bold">Responsibilities:</p>
                <ul className="list-disc pl-5 text-stone-400">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
