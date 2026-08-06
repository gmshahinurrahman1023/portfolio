import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-slate-400 mt-4">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-bold">Let's Talk 👋</h3>

            <p className="text-slate-400 mt-6 leading-8">
              Feel free to contact me anytime. I'm always open to discussing new
              ideas, freelance projects and collaborations.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />

                <span>nasrin@example.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500 text-2xl" />

                <span>+8801XXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />

                <span>Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold duration-300">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
