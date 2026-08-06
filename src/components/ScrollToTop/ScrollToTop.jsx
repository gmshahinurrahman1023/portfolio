import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollTop}
          className="
fixed
bottom-8
right-8
z-50

w-14
h-14

rounded-full

bg-gradient-to-r
from-blue-500
to-cyan-500

shadow-lg

hover:shadow-cyan-500/50

hover:scale-110

transition-all

duration-300

flex
items-center
justify-center
"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
