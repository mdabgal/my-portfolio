import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export default async function ProjectDetails({ params }) {
  const { id } =await params;

const project = projects.find((p) => String(p.id) === id);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen pt-28 px-6 pb-20">

      <div className="max-w-4xl mx-auto">

        {/* IMAGE */}
        <div className="flex justify-center mb-10">

          <div className="p-3 bg-[#111] border border-white/10 rounded-3xl">

            <Image
              src={project.img}
              alt={project.title}
              width={900}
              height={500}
              className="w-[500px] h-80 object-cover rounded-2xl"
            />

          </div>

        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-4">
          {project.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-center leading-relaxed max-w-2xl mx-auto">
          {project.details}
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-8">

          <a
            href={project.live}
            target="_blank"
            className="px-5 py-2 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-600 transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2 border border-white/10 rounded-xl text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-10">

          <Link
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Projects
          </Link>

        </div>

      </div>

    </main>
  );
}