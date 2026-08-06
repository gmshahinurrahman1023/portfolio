import profile from "../../assets/images/nas.jpg";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
  ];
  const stats = [
    {
      number: "10+",
      title: "Projects",
    },
    {
      number: "1+",
      title: "Years Learning",
    },
    {
      number: "100%",
      title: "Passion",
    },
  ];

  return (
    <section  id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">About Me</h2>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          Get to know a little more about me, my journey, and the technologies I
          enjoy working with.
        </p>

        {/* Content */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="relative">
            <img
              src={profile}
              alt="Nasrin Akhter"
              className="relative w-80 rounded-full border-4 border-blue-500 shadow-2xl"
            />
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold">Hi, I'm Nasrin Rahman 👋</h3>

            <p className="mt-6 text-slate-400 leading-8">
              I'm a passionate Frontend Developer currently learning React,
              Tailwind CSS, and modern web development. I enjoy building clean,
              responsive, and user-friendly websites while continuously
              improving my programming skills.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 duration-300"
                >
                  ✅ {skill}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-10">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-slate-800 px-6 py-4 rounded-xl hover:bg-blue-600 duration-300"
                  >
                    <h2 className="text-3xl font-bold text-blue-400">
                      {stat.number}
                    </h2>

                    <p className="text-slate-300">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
