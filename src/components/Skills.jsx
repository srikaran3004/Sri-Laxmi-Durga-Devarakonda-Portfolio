import PropTypes from 'prop-types';  // Import PropTypes for prop validation
import { motion } from 'framer-motion';  // Import motion for animations

// SkillList Component to display each list of skills with animations
const SkillList = ({ skills }) => {
  return (
    <ul className="list-disc pl-5 text-stone-300 text-xl space-y-2">
      {skills.map((skill, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}  // Initial animation state
          whileInView={{ opacity: 1, x: 0 }}  // Final animation state
          transition={{ delay: index * 0.1 }}  // Delay for sequential animation
          className="cursor-pointer"  // Make each skill a clickable item
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
};

// PropTypes for validating the skills prop
SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired, // Expecting an array of strings
};

// Skills Component that holds the two skill categories
const Skills = () => {
  // Technical skills array
  const technicalSkills = [
    "SAM & ADDIE model",
    "Storyboarding",
    "Articulate 360",
    "Vyond",
    "Moodle & Exper LMS",
    "Team management",
    "Client interaction (Indian, German, US, Canada)"
  ];

  // Other skills array
  const otherSkills = [
    "Apollo",
    "Autodesk",
    "Bamboo",
    "CATIA",
    "E-learning",
    "Fusion 360",
    "LMS",
    "Powerpoint"
  ];

  // Box slide-in variants
  const boxSlideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100, // Apply left or right based on the direction
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Heading slide-in variants
  const headingVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-4 max-w-7xl mx-auto px-4 mb-20">
      {/* Skills Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans tracking-tight my-20"
      >
        Skills
      </motion.h2>

      {/* Flexbox to align the two skill boxes side by side */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Technical Skills Box */}
        <motion.div
          variants={boxSlideVariants}
          initial="hidden"
          whileInView="visible"
          custom="left"  // Custom prop to pass 'left' direction for left box
          className="w-full lg:w-1/3 p-6 rounded-2xl bg-transparent border-2 border-stone-400 shadow-lg"
        >
          <motion.h3
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-center mb-4 text-3xl lg:text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-semibold"
          >
            Technical Skills
          </motion.h3>
          <div className="border-b-2 border-stone-600 mb-4"></div>
          <SkillList skills={technicalSkills} />
        </motion.div>

        {/* Other Skills Box */}
        <motion.div
          variants={boxSlideVariants}
          initial="hidden"
          whileInView="visible"
          custom="right"  // Custom prop to pass 'right' direction for right box
          className="w-full lg:w-1/3 p-6 rounded-2xl bg-transparent border-2 border-stone-400 shadow-lg"
        >
          <motion.h3
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-center mb-4 text-3xl lg:text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-semibold"
          >
            Other Skills
          </motion.h3>
          <div className="border-b-2 border-stone-600 mb-4"></div>
          <SkillList skills={otherSkills} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
