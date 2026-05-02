export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "/projects/project1",
    },
    {
      title: "Project 2",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "/projects/project2",
    },
    {
      title: "Project 3",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/projects/project3",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-slate-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

              <a
                href={p.link}
                className="inline-block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}