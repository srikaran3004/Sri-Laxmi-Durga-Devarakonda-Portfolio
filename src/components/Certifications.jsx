import { motion } from "framer-motion";

const Certifications = () => {
  // Awards list
  const awards = [
    "Top 9 Finalist in L&T competition - Steel Composition reducing possible weight for optimizing the company turnover",
    "Acquired Second prize in Teaching Competition",
  ];

  // Professional Certifications list
  const professionalCertifications = [
    "‘Instructional Designer Course from Scratch’ Certification",
    "Certified Instruction Designer from TopUp Institute",
    "Learn Tube by CareerNinja Certifications (Project Management, Articulate Storyline, Instructional Design)",
    "Freelancing Writer for Technical Review Articles",
    "Teaching fish Certified trainee for personal development",
    "Autodesk certified design trainee in CATIA",
    "Autodesk certified design trainee in Fusion 360",
    "Member of Bamboo Society of India",
  ];

  // Animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  return (
    <div className="pb-12 max-w-5xl mx-auto px-4 mt-50">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans tracking-tight mb-8"
      >
        Certifications
      </motion.h2>

      {/* Awards Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-10"
      >
        <h3 className="text-2xl lg:text-3xl text-stone-300 font-semibold mb-4 mt-20 ">
          Awards
        </h3>
        <motion.ul>
          {awards.map((award, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              className="list-disc pl-5 text-stone-300 text-lg space-y-2"
            >
              {award}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Professional Certifications Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10"
      >
        <h3 className="text-2xl lg:text-3xl text-stone-300 font-semibold mb-4">
          Professional Certifications
        </h3>
        <motion.ul>
          {professionalCertifications.map((certification, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              className="list-disc pl-5 text-stone-300 text-lg space-y-2"
            >
              {certification}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Certifications;
