import Image from "next/image";
import MyImage from "../images/Calm and composed in purple.png"
export default function Hero() {
  return (
    <section className="bg-blue-100 mt-24 text-center py-20">
      <Image
        src={MyImage} width={100} height={500} alt=""
        className="w-32 h-32 mx-auto rounded-full border-4 border-purple-200"
      />

      <h1 className="text-4xl font-bold mt-4">Jannati Jannati</h1>
      <p className="text-gray-500">Frontend Developer</p>

      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded"
      >
        Download Resume
      </a>
    </section>
  );
}