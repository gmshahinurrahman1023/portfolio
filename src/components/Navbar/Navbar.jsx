import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Nasrin Akhter</h1>

        <ul className="hidden md:flex gap-8">
          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-blue-400 duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
