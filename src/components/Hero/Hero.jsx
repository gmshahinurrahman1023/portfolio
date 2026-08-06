import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
