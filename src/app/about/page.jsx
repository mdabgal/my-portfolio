import Image from "next/image";
import profilePic from "../../images/Calm and composed in purple.png";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-30 rounded-full"></div>
          

            
           
          </div>

          <h1 className="text-5xl font-bold mb-2">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400">
            Frontend Developer | Programming Hero Learner
          </p>

        </div>

        {/* CARD SECTIONS */}
        <div className="space-y-10">

          {/* WHO I AM */}
          <section className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Who I Am
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I am a passionate Junior Frontend Developer from Bangladesh.
              I enjoy building modern, responsive and user-friendly websites.
              My journey started with curiosity about how websites work,
              and now I am focused on becoming a professional developer.
            </p>
          </section>

          {/* JOURNEY */}
          <section className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              My Journey
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              I started learning web development from Programming Hero,
              where I learned HTML, CSS, JavaScript, React and Next.js.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Through continuous practice and building projects, I improved
              my skills and gained confidence in real-world development.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Learning & Education
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I am currently learning Full Stack Web Development through Programming Hero.
              I regularly practice, build projects and explore new technologies
              to improve my skills and become a professional developer.
            </p>
          </section>

          {/* GOALS */}
          <section className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              My Goals
            </h2>

            <p className="text-gray-400 leading-relaxed">
              My goal is to become a professional Full Stack Developer and
              build scalable, high-performance web applications that solve real problems.
            </p>
          </section>

          {/* BEYOND CODING */}
          <section className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Beyond Coding
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Outside coding, I enjoy learning new technologies, exploring trends,
              and improving my problem-solving skills. I believe consistency is the key to success.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}