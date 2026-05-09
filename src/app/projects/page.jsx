import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 pt-28 pb-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-3">
            My <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="text-gray-400">
            Some of my recent work
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="p-4">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover rounded-2xl border border-white/10"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h2 className="text-xl font-bold text-white">
                  {p.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {p.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-cyan-400 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex justify-between mt-6 text-sm">

                  <Link
                    href={`/projects/${p.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Details →
                  </Link>

                  <a
                    href={p.live}
                    target="_blank"
                    className="px-4 py-1 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition"
                  >
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