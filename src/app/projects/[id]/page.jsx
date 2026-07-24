

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

import {
  FaCode,
  FaTools,
  FaGithub,
  FaServer,
  FaExternalLinkAlt,
  FaFlagCheckered,
  FaRocket,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-b from-black via-slate-950 to-black text-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Project Image */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#111] border border-cyan-500/20 rounded-3xl p-3 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition duration-500">
            <Image
              src={project.img}
              alt={project.title}
              width={900}
              height={500}
              className="rounded-2xl w-full md:w-[720px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {project.title}
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            {project.desc}
          </p>
        </div>

        {/* Overview */}
       <section
  className="
    mt-14
    bg-[#111]
    border border-white/10
    rounded-3xl
    p-8
    hover:border-cyan-400
    hover:-translate-y-2
    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
    transition-all
    duration-500
    ease-in-out
  "
>
  <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-5">
    <FaCode className="text-cyan-400" />
    Project Overview
  </h2>

  <p className="text-gray-300 leading-8 text-justify">
    {project.details}
  </p>
</section>
                {/* Tech Stack */}
        <section className="mt-14">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-6">
            <FaTools />
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Links */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Project Links
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-5">

            {/* Live Demo */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

            {/* Client Code */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition duration-300"
            >
              <FaGithub />
              Client Code
            </a>

            {/* Server Code */}
            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-green-400 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-xl transition duration-300"
              >
                <FaServer />
                Server Code
              </a>
            )}

          </div>
        </section>

                {/* Challenges */}
        {project.challenges && (
          <section className="mt-14">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-6">
              <FaFlagCheckered />
              Challenges Faced
            </h2>

            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300"
                >
                  <div className="flex items-start gap-3">
  <FaCheckCircle className="text-green-400 mt-1 shrink-0" size={18} />
  <p className="text-gray-300 leading-7">
    {challenge}
  </p>
</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Future Plans */}
        {project.futurePlans && (
          <section className="mt-14">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-6">
              <FaRocket />
              Future Improvements
            </h2>

            <div className="space-y-4">
              {project.futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300"
                >
                <div className="flex items-start gap-3">
  <FaRocket className="text-cyan-400 mt-1 shrink-0" size={18} />
  <p className="text-gray-300 leading-7">
    {plan}
  </p>
</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>

      </div>
    </main>
  );
}