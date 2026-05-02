import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className=" min-h-[80vh] flex items-center justify-center px-6  text-center">

        <div className="max-w-4xl">

          <Image
            src={profilePic}
            width={130}
            height={130}
            alt="profile"
            className="mx-auto rounded-full border-4 border-blue-500 mb-6"
          />

          <p className="text-blue-500 tracking-widest mb-3">
            FRONTEND WEB DEVELOPER
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Jannati</span>
          </h1>

          <p className="text-gray-600 mb-6">
            Junior Frontend Developer | Programming Hero Learner |
            I build modern responsive websites using Next.js & Tailwind CSS
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              About Me
            </Link>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gray-100 text-center">

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold text-blue-600">8+</h2>
            <p className="text-gray-600">Projects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">2+</h2>
            <p className="text-gray-600">Years Learning</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">5+</h2>
            <p className="text-gray-600">Technologies</p>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="py-20 mt-10 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white shadow-2xl p-6 rounded-lg">
            <h3 className="font-bold mb-2">Frontend</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, React, Next.js</p>
          </div>

          <div className="bg-white shadow-2xl p-6 rounded-lg">
            <h3 className="font-bold mb-2">Styling</h3>
            <p className="text-gray-600">Tailwind CSS, Responsive Design</p>
          </div>

          <div className="bg-white shadow-2xl p-6 rounded-lg">
            <h3 className="font-bold mb-2">Tools</h3>
            <p className="text-gray-600">Git, GitHub, VS Code</p>
          </div>

        </div>

      </section>


<section className="py-20 px-6 bg-gray-100 text-center">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      About Me
    </h2>

    <p className="text-gray-600 leading-relaxed text-lg">
      I am a passionate Junior Frontend Developer from Bangladesh.
      I started my programming journey with Programming Hero course.
      I love building modern, responsive and user-friendly websites
      using Next.js, React and Tailwind CSS.
    </p>

    <p className="text-gray-600 mt-4 leading-relaxed">
      My goal is to become a professional Full Stack Developer and
      work on real-world projects. I enjoy learning new technologies,
      solving problems and turning ideas into real web applications.
    </p>

  </div>

</section>









      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 mt-10 bg-gray-100 text-center">

        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="font-bold mb-2">E-commerce Website</h3>
            <p className="text-gray-600 text-sm">Modern online shop UI</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 text-sm">Personal branding site</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="font-bold mb-2">Dashboard UI</h3>
            <p className="text-gray-600 text-sm">Admin panel design</p>
          </div>

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>

        <p className="text-gray-600 mb-6">
          Have a project idea? Let’s build it 
        </p>

        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Contact Me
        </Link>

      </section>

    </main>
  );
}