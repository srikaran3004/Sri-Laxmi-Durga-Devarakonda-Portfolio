import profilePic from '../assets/sriLaxmiProfile.jpg';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, staggerChildren: 0.5 } }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Sri Laxmi Durga Devarakonda"
                            className="border border-stone-900 rounded-3xl"
                            style={{ width: '350px', height: '550px' }}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent pb-2 text-4xl tracking-tighter lg:text-7xl"
                        >
                            Sri Laxmi Durga
                        </motion.h2>
                        <motion.h2
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent pb-2 text-4xl tracking-tighter lg:text-7xl"
                        >
                            Devarakonda
                        </motion.h2>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-[#F4C4F3] to-[#FC67F0] bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            "Transform Learning Through
                        </motion.span>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-[#F4C4F3] to-[#FC67F0] bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            Innovative Design :
                        </motion.span>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-[#FFC0CB] to-[#800080] bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            Senior Instructional Designer"
                        </motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="relative bg-white rounded-full p-4 text-sm text-stone-800 mb-10 transition-all duration-[1200ms] ease-in-out hover:bg-white hover:text-stone-800 before:absolute before:-inset-1 before:rounded-full before:bg-gradient-to-b before:from-indigo-400 before:via-purple-300 before:to-pink-500 before:opacity-0 before:transition-opacity before:duration-[1200ms] hover:before:opacity-100 hover:before:blur-md before:z-[-1]"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 10, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.5 }}
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
