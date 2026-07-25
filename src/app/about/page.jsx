import Image from "next/image";
import profilePic from "../../images/Calm and composed in purple.png";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-cyan-400 relative z-10"
            />
          </div>

          <h1 className="text-5xl font-bold mb-3">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 text-lg">
            MERN Stack Developer | Programming Hero Learner
          </p>

        </div>

        {/* CONTENT */}
        <div className="space-y-8">

          {/* WHO I AM */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Who I Am
            </h2>

            <p className="text-gray-300 leading-8">
              Hello! I'm a passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> from Bangladesh. I enjoy building modern, responsive, and scalable web applications using MongoDB, Express.js, React, Next.js, Node.js, Tailwind CSS, and JavaScript. I love turning ideas into real-world applications with clean UI and efficient backend architecture.
            </p>
          </section>

          {/* MY JOURNEY */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              My Programming Journey
            </h2>

            <p className="text-gray-300 leading-8 mb-4">
              My web development journey began with HTML, CSS, and JavaScript through Programming Hero. As I continued learning, I explored React, Next.js, Node.js, Express.js, MongoDB, and REST APIs.
            </p>

            <p className="text-gray-300 leading-8">
              By building full-stack projects, I gained practical experience in authentication, database management, API integration, responsive design, deployment, and creating scalable web applications.
            </p>
          </section>

          {/* WHAT I ENJOY */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              What I Enjoy
            </h2>

            <p className="text-gray-300 leading-8">
              I enjoy developing full-stack web applications, designing responsive user interfaces, building secure REST APIs, integrating databases, implementing authentication systems, and solving real-world programming challenges. I always focus on writing clean, reusable, and maintainable code.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Learning & Education
            </h2>

            <p className="text-gray-300 leading-8">
              I am currently pursuing a Bachelor's degree under the National University of Bangladesh while continuously improving my MERN Stack development skills through Programming Hero and hands-on project development. I believe practical experience is the best way to grow as a developer.
            </p>
          </section>

          {/* HOBBIES */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Beyond Coding
            </h2>

            <p className="text-gray-300 leading-8">
              Outside of programming, I enjoy learning about new technologies, watching tech videos, reading development blogs, listening to music, and exploring modern UI/UX design trends. These activities help me stay creative and continuously improve my skills.
            </p>
          </section>

          {/* GOALS */}
          <section className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Career Goal
            </h2>

            <p className="text-gray-300 leading-8">
              My goal is to become a professional MERN Stack Developer, contribute to impactful software products, collaborate with talented teams, and continue learning modern technologies while building scalable, secure, and high-quality web applications that solve real-world problems.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}