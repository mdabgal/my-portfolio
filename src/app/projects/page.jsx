import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50 mt-20 min-h-screen px-6 py-16">
      <div className="max-w-6xl  mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h1>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-xl shadow-2xl hover:shadow-xl transition"
            >
              <div className="p-4">

              <Image 
                src={p.img}
                alt={p.title}
                width={500}
                height={300}
                className="w-full border-2 p-4 shadow-md border-gray-200 h-52 object-cover rounded-xl"
              />
              </div>

              <div className="p-5">

                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{p.desc}</p>

                <div className="flex gap-2 flex-wrap mt-3">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4 text-sm">
                  <Link
                    href={`/projects/${p.id}`}
                    className="text-blue-600 bg-blue-50 p-2 rounded-md"
                  >
                    Details →
                  </Link>

                  <a href={p.live} target="_blank" className="text-green-600 bg-green-100 p-2 rounded-full">
                    Live
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}