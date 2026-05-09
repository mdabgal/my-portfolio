export default function SkillsPage() {
  const skills = [
    { name: "HTML", level: 98 },
    { name: "CSS", level: 98 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 90 },
    { name: "Tailwind CSS", level: 98 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <main className="bg-black pt-30 text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-3">
            My <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-400">
            Technologies and tools I work with
          </p>

        </div>

        {/* SKILL BARS */}
        <div className="space-y-7 mb-16">

          {skills.map((skill, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-cyan-400 text-sm">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">

                <div
                  className="h-3 bg-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>
          ))}

        </div>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111] border border-white/10 p-6 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="font-bold text-cyan-400 mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              HTML, CSS, JavaScript, React, Next.js
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 p-6 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="font-bold text-cyan-400 mb-2">Styling</h3>
            <p className="text-gray-400 text-sm">
              Tailwind CSS, Responsive Design
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 p-6 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="font-bold text-cyan-400 mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">
              Git, GitHub, VS Code Figma  
UI Libraries: HeroUI, DaisyUI
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}