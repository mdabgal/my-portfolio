import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export default async function ProjectDetails({ params }) {
  const { id } = await params;   // 🔥 IMPORTANT FIX

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <p className="p-10 text-center text-gray-500">
        Project not found
      </p>
    );
  }

  return (
    <div className="pt-20 flex justify-center items-center">

    <main className="max-w-4xl mx-auto  px-6 py-16 mt-20 border border-gray-200 shadow-2xl ">

        <div className="flex justify-center items-center ">

      <Image
        src={project.img}
        alt={project.title}
        width={900}
        height={500}
        className="w-[500px] border-2 border-gray-200 p-4 h-80 object-cover rounded-xl"
      />
      </div>

      <h1 className="text-3xl font-bold mt-6">
        {project.title}
      </h1>

      <p className="text-gray-600 mt-3">
        {project.details}
      </p>

      <div className="flex gap-4 mt-6">

        <a href={project.live} className="text-green-600 bg-green-100 p-2 rounded-full">
          Live Demo
        </a>

        <a href={project.github} className="text-gray-700 bg-gray-100 p-2 rounded-full">
          GitHub
        </a>

      </div>

      <div className="mt-10">
        <Link href="/projects" className="text-blue-600 bg-blue-100 p-3 rounded-md">
          ← Back
        </Link>
      </div>

    </main>
    </div>
  );
}