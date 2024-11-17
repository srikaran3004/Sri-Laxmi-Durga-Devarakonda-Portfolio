import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoArrowRedo } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    setError("");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sri Laxmi Durga Devarakonda",
          from_email: form.email,
          to_email: "srilaxmidurga4110@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message! 😃");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. 😢 Please try again.");
        }
      );
  };

  // Animation variants for form fields
  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Container variants for the main form container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="border border-gray-300 rounded-lg p-8 w-3/5 bg-transparent"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Title with slide-down animation */}
        <motion.h2
          className="tracking-tight my-8 text-center text-4xl lg:text-6xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent font-sans"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-center text-white mb-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Feel free to reach out for collaborations, feedback, suggestions, or to connect. I&apos;m excited to hear from you!
        </motion.p>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
        >
          {/* Name Field */}
          <motion.div
            variants={formFieldVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="Enter your full name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={formFieldVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="Enter your email address"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={formFieldVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="Write your message here..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md transition-all disabled:opacity-50"
            variants={formFieldVariants}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Submit"}
            <IoArrowRedo className="ml-2" />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;