import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import hero from "../../data/hero";

const HeroSocial = () => {
  return (
    <div className="flex gap-6 mt-10 text-3xl">
      <a href={hero.social.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-blue-400 hover:scale-110 transition-all duration-300" />
      </a>

      <a href={hero.social.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition-all duration-300" />
      </a>

      <a href={hero.social.facebook} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-400 hover:scale-110 transition-all duration-300" />
      </a>
    </div>
  );
};

export default HeroSocial;
