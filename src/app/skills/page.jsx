export default function SkillsPage() {
  const skills = [
    { name: "HTML", level: 98 },
    { name: "CSS", level: 98 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 90 },
  ];

  return (
    <main className="bg-white mt-8 text-gray-800 min-h-screen px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">My Skills</h1>
          <p className="text-gray-500">
            Technologies and tools I work with
          </p>
        </div>

        {/* SKILL BARS */}
        <div className="space-y-6 mb-16">


          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded">
                <div
                  className="bg-blue-600 h-3 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}

        </div>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Frontend</h3>
            <p className="text-gray-600 text-sm">
              HTML, CSS, JavaScript, React, Next.js
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Styling</h3>
            <p className="text-gray-600 text-sm">
              Tailwind CSS, Responsive Design
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Tools</h3>
            <p className="text-gray-600 text-sm">
              Git, GitHub, VS Code
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}