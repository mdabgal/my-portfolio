import React from "react";

const educationData = [
  {
    id: 1,
    title: "Secondary School Certificate (SSC)",
    institution: "Bolli Mohammad Mujibur Rahman Secondary School",
    details: [
      { label: "Group", value: "Science" },
      { label: "GPA", value: "4.89" },
    ],
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC)",
    institution: "Colorowya Bangabandhu Mohila College",
    details: [
      { label: "Group", value: "Arts" },
      { label: "GPA", value: "3.50" },
    ],
  },
  {
    id: 3,
    title: "Honours",
    institution: "Zawadaga College",
    details: [
      { label: "Group", value: "Arts" },
      { label: "Status", value: "Currently Studying" },
    ],
  },
];

const EducationCard = ({ item }) => {
  return (
    <div className="bg-[#111] border border-white/10 p-6 rounded-3xl hover:border-cyan-400 transition duration-300">

      <h2 className="text-xl font-bold text-white mb-1">
        {item.title}
      </h2>

      <p className="text-cyan-400 mb-4 text-sm">
        {item.institution}
      </p>

      <div className="space-y-2 text-gray-400">
        {item.details.map((d, i) => (
          <p key={i}>
            <span className="text-white font-medium">{d.label}:</span>{" "}
            {d.value}
          </p>
        ))}
      </div>

    </div>
  );
};

export default function EducationPage() {
  return (
  
<main className="bg-black text-white min-h-screen px-6 pt-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mt-10 mb-14">

          <h1 className="text-5xl font-bold mb-3">
            My <span className="text-cyan-400">Education</span>
          </h1>

          <p className="text-gray-400">
            Academic background and learning journey
          </p>

        </div>

        {/* CARDS */}
        <div className="grid gap-6">

          {educationData.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}

        </div>

      </div>

    </main>
  );
}