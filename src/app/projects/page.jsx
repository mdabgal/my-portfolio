import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    img: "/images/project1.jpg",
    live: "https://your-vercel-link.vercel.app",
    github: "https://github.com/mdabgal/portfolio",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Authentication App",
    desc: "Login & signup system with secure authentication.",
    img: "/images/project2.jpg",
    live: "https://as-b13-online-learning.vercel.app",
    github: "https://github.com/mdabgal/as-b13-online-learning",
    tech: ["Next.js", "MongoDB"],
  },
  {
    title: "Dashboard UI",
    desc: "Responsive admin dashboard with clean UI design.",
    img: "/images/project3.jpg",
    live: "https://deluxe-nasturtium-863882.netlify.app",
    github: "https://github.com/mdabgal/A6-Digitool-Project",
    tech: ["React", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            My Projects
          </h1>
          <p className="text-gray-500">
            Some of my recent work and practice projects
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <Image
                src={p.img}
                alt={p.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-xl font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {p.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-3 text-sm">

                  <a
                    href={p.live}
                    target="_blank"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="text-gray-700 font-medium hover:underline"
                  >
                    GitHub
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