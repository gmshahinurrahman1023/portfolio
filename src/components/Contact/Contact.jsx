import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import contact from "../../data/contact";

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
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-500/20 p-4 rounded-full">
                  <FaEnvelope className="text-blue-400 text-2xl" />
                </div>

                <span>{contact.email}</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <FaPhoneAlt className="text-blue-500 text-2xl" />

                <span>{contact.phone}</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />

                <span>{contact.location}</span>
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
              className="
w-full
bg-slate-900
border
border-slate-700
rounded-xl
px-5
py-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20
"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
w-full
bg-slate-900
border
border-slate-700
rounded-xl
px-5
py-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20
"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
w-full
bg-slate-900
border
border-slate-700
rounded-xl
px-5
py-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20
"
            />

            <button
              className="
w-full
bg-blue-600
hover:bg-blue-700
hover:-translate-y-1
transition-all
duration-300
rounded-xl
py-4
font-semibold
shadow-lg
hover:shadow-blue-500/40
"
            >
              Send Message 🚀
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
