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

    // Anthologies list
    const anthologies = [
        {
            title: "Gratitude to God",
            link: "https://www.linkedin.com/in/devarakonda-sri-laxmi-durga/overlay/1635477703092/single-media-viewer?type=LINK&profileId=ACoAADOJ_EgBQtWQfBt2ZjPOU3Wm3mKD2GekFSc&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFUYg4JD%2FQnuxKRpfPAkzRg%3D%3D",
        },
        {
            title: "The Age Of Ash: Life of Teens",
            link: "https://www.linkedin.com/in/devarakonda-sri-laxmi-durga/overlay/1635477700109/single-media-viewer?type=LINK&profileId=ACoAADOJ_EgBQtWQfBt2ZjPOU3Wm3mKD2GekFSc&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFUYg4JD%2FQnuxKRpfPAkzRg%3D%3D",
        },
        {
            title: "Indian Emotions 2: Words Of Indian",
            link: "https://www.linkedin.com/in/devarakonda-sri-laxmi-durga/overlay/1635477703057/single-media-viewer?type=LINK&profileId=ACoAADOJ_EgBQtWQfBt2ZjPOU3Wm3mKD2GekFSc&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFUYg4JD%2FQnuxKRpfPAkzRg%3D%3D",
        },
        {
            title: "A Book Full Of Heart",
            link: "https://www.linkedin.com/in/devarakonda-sri-laxmi-durga/overlay/1635477702087/single-media-viewer?type=LINK&profileId=ACoAADOJ_EgBQtWQfBt2ZjPOU3Wm3mKD2GekFSc&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFUYg4JD%2FQnuxKRpfPAkzRg%3D%3D",
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
                <h3 className="text-2xl lg:text-3xl text-stone-300 font-semibold mb-6">
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
                            <span className="font-semibold">{journal.title}</span>
                            <p className="mt-2">{journal.description}</p>
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

            {/* Anthology Section */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-10"
            >
                <h3 className="text-2xl lg:text-3xl text-stone-300 font-semibold mb-6">
                    Anthologies
                </h3>
                <motion.ul className="list-disc pl-5 text-lg space-y-2 mb-6">
                    {anthologies.map((anthology, index) => (
                        <motion.li
                            key={index}
                            variants={listItemVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            className="text-stone-300 text-lg mb-4 cursor-pointer hover:underline pl-5" // Added pl-5 here for padding
                        >
                            <a
                                href={anthology.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-stone-100 transition-colors duration-200"
                            >
                                {anthology.title}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default Publications;
