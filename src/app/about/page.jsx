import Image from "next/image";
import profilePic from "../../images/Calm and composed in purple.png";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mt-8 mb-12">

          <Image
            src={profilePic}
            width={120}
            height={120}
            alt="profile"
            className="mx-auto rounded-full border-4 border-blue-500 mb-4"
          />

          <h1 className="text-4xl font-bold mb-2">About Me</h1>

          <p className="text-gray-500">
            Frontend Developer | Programming Hero Learner
          </p>

        </div>

        {/* INTRO */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Who I Am
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate Junior Frontend Developer from Bangladesh.
            I enjoy building modern, responsive and user-friendly websites.
            My journey started with curiosity about how websites work,
            and now I am dedicated to becoming a professional developer.
          </p>

        </section>

        {/* JOURNEY */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            My Journey
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I started learning web development from Programming Hero,
            where I gained strong knowledge in HTML, CSS, JavaScript,
            React and Next.js.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Through continuous practice and building projects,
            I improved my skills and gained confidence in creating
            real-world applications.
          </p>

        </section>

        

        {/* EDUCATION / LEARNING */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Learning & Education
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
  I am currently learning Full Stack Web Development through Programming Hero.
  I started my journey with a strong interest in web development and a desire
  to build modern web applications.
</p>

<p className="text-gray-600 leading-relaxed">
  I continuously explore new technologies, build projects and practice daily
  to improve my skills. My goal is to become a professional Full Stack Developer
  and work on real-world applications.
</p>

        </section>

        {/* GOALS */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            My Goals
          </h2>

          <p className="text-gray-600 leading-relaxed">
            My goal is to become a professional Full Stack Developer
            and work on real-world projects. I want to build scalable,
            high-performance applications and contribute to meaningful
            projects in the tech industry.
          </p>

        </section>

        {/* PERSONAL TOUCH */}
        <section>

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Beyond Coding
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Outside of coding, I enjoy learning new things, exploring
            technology trends and improving my problem-solving skills.
            I believe consistency and dedication are the keys to success.
          </p>

        </section>

      </div>

    </main>
  );
}