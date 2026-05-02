export default function Skills() {
  const skills = [
    { name: "HTML", value: 98 },
    { name: "CSS", value: 98 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "Next.js", value: 90 },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-slate-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-slate-700 p-4 rounded-xl hover:scale-[1.02] transition"
          >
            {/* name + percentage */}
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-gray-300">{s.value}%</p>
            </div>

            {/* progress bar */}
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}