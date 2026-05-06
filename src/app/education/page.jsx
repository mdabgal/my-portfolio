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
        { label: "Status", value: "Currently Studying" }
    ],
  },
];

const EducationCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {item.title}
      </h2>
      <p className="text-gray-600 mb-3">{item.institution}</p>

      <div className="space-y-1">
        {item.details.map((d, i) => (
          <p key={i} className="text-gray-700">
            <span className="font-medium">{d.label}:</span> {d.value}
          </p>
        ))}
      </div>
    </div>
  );
};

const EducationPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Education
      </h1>

      <div className="grid gap-5">
        {educationData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EducationPage;