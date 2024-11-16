import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const childVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center pb-10 text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans"
            >
                About Me
            </motion.h2>
            {isVisible && (
                <motion.p
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center text-lg lg:text-2xl max-w-4xl px-6 leading-relaxed mt-6 font-sans"
                >
                    <span className="font-bold text-shadow-glow">
                        Dynamic
                    </span>{' '}
                    and{' '}
                    <span className="font-bold text-shadow-glow">
                        Results-driven
                    </span>{' '}
                    Senior Instructional Designer with a passion for creating engaging, learner-focused experiences. Skilled in developing innovative{' '}
                    <span className="font-bold text-shadow-glow">
                        e-learning solutions
                    </span>{' '}
                    and instructional materials that enhance retention and engagement, I{' '}
                    <span className="font-bold text-shadow-glow">
                        Collaborate
                    </span>{' '}
                    effectively with stakeholders to deliver content aligned with organizational goals and diverse learner needs. Committed to continuous improvement, I excel in fast-paced environments, leveraging creativity and strategic thinking to design high-quality educational programs that{' '}
                    <span className="font-bold text-shadow-glow">
                        Empower learners
                    </span>{' '}
                    and support growth.
                </motion.p>
            )}
        </div>
    );
};

export default About;
