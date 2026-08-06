import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">Nasrin Rahman</h2>

            <p className="text-slate-400 mt-3 max-w-md">
              Passionate Frontend Developer who loves building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Middle */}
          <ul className="flex flex-wrap gap-6 text-slate-300 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-400 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-400 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-400 duration-300">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400 duration-300">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400 duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Right */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-blue-600 duration-300 p-3 rounded-full"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-blue-600 duration-300 p-3 rounded-full"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-blue-600 duration-300 p-3 rounded-full"
            >
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-center">
            © {year} Nasrin Rahman. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-blue-600 hover:bg-blue-700 duration-300 p-3 rounded-full"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
