import { motion } from "framer-motion";
import { CiLink } from "react-icons/ci";

const Publications = () => {
    // Journals list
    const journals = [
        {
            title:
                "Computer-Aided Modeling & Implementation of Assembled Disposing System for Food Waste",
            description:
                "Explored innovative solutions for efficient food waste management through advanced computer-aided modeling techniques, contributing to sustainable practices in waste disposal systems.",
            link: "https://ijaem.net/issue_dcp/Computer%20Aided%20Modeling%20and%20Implementation%20of%20Assembled%20Disposing%20System%20for%20Food%20Waste.pdf",
        },
        {
            title:
                "The Comprehensive Study of Lead Acid, Li-Manganese Oxide, and Aluminum Batteries along with Charging Facilities in Electric Vehicles",
            description:
                "Conducted an in-depth analysis of various battery technologies and their integration into electric vehicle charging infrastructure, providing insights for enhancing energy efficiency and sustainability in transportation.",
            link: "https://example.com/sae-journal-link",
        },
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
                Publications
            </motion.h2>

            {/* Journals Section */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-10"
            >
                <h3 className="text-2xl lg:text-3xl text-stone-300 font-semibold mb-4 ">
                    Journals
                </h3>
                <motion.ul>
                    {journals.map((journal, index) => (
                        <motion.li
                            key={index}
                            variants={listItemVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            className="list-disc pl-5 text-stone-300 text-lg space-y-2 mb-6"
                        >
                            {/* Journal Title */}
                            <span className="font-semibold">{journal.title}</span>
                            {/* Journal Description */}
                            <p className="mt-2">{journal.description}</p>
                            {/* Icon with Link */}
                            <a
                                href={journal.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mt-2 text-stone-300 hover:text-stone-100 text-sm group"
                            >
                                <span className="text-xs group-hover:underline">Link: </span>
                                <CiLink className="text-lg group-hover:scale-110 transition-transform mr-1 ml-1" />
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default Publications;
