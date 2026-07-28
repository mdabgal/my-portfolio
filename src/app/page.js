"use client";

import Link from "next/link";
import Image from "next/image";
import profilePic from "../images/Calm and composed in purple.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { projects } from "@/data/projects";


export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];


  
const featuredProjects = projects.slice(0, 4);

  return (
    <main className="bg-black mt-10 text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 relative pt-32 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent"></div>

        <motion.div
          className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <motion.p
              className="text-cyan-400 tracking-[6px] mb-5 uppercase text-sm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
             MERN Stack Developer
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                Hi, I'm
              </h1>

              <motion.h2
                className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    borderRight: '4px solid #22d3ee',
                  }}
                >
                  Jannati
                </motion.span>
              </motion.h2>

              <motion.div
                className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-5"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 160, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
            >
              Programming Hero learner passionate about building modern,
              responsive and interactive websites using React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB.
            </motion.p>

          <motion.div className="flex flex-wrap gap-4">
  <motion.div whileHover={{ scale: 1.08 }}>
    <Link
      href="/projects"
      className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 transition px-7 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20 h-12"
    >
      🚀 View Projects
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.08 }}>
    <a
      href="https://drive.google.com/file/d/1N4H2JA0mqQ9IAKQxgCn-xHt5apu40y0z/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center border border-cyan-400 px-7 py-3 rounded-2xl hover:bg-cyan-500/10 transition font-semibold h-12"
    >
      📄 View Resume
    </a>
  </motion.div>
</motion.div>

<motion.div
  className="flex items-center gap-5 mt-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <motion.a
    whileHover={{ scale: 1.2 }}
    href="https://github.com/mdabgal"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-cyan-400"
  >
    <FaGithub />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.2 }}
    href="https://www.linkedin.com/in/jannati-jannati-0203693b4"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-cyan-400"
  >
    <FaLinkedin />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.2 }}
    href="https://www.facebook.com/share/18TdQE5oAm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-cyan-400"
  >
    <FaFacebook />
  </motion.a>
</motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

              <Image
                src={profilePic}
                width={360}
                height={360}
                alt="profile"
                className="relative rounded-[40px] border border-white/10 shadow-2xl object-cover bg-white/5 backdrop-blur-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-white/10 border-b border-white/10 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">
          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">15+</h2>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">2+</h2>
            <p className="text-gray-400">Years Learning</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-2">9+</h2>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </section>

     {/* SKILLS */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold text-center mb-16"
    >
      My <span className="text-cyan-400">Skills</span>
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {/* HTML */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">HTML</h3>
      </motion.div>

      {/* CSS */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">CSS</h3>
      </motion.div>

      {/* JavaScript */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">JavaScript</h3>
      </motion.div>

      {/* React */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-16 h-16 mx-auto mb-4 animate-spin"
        />

        <h3 className="text-lg font-semibold">React.js</h3>
      </motion.div>

      {/* Next.js */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          className="w-16 h-16 mx-auto mb-4 bg-white rounded-full p-1"
        />

        <h3 className="text-lg font-semibold">Next.js</h3>
      </motion.div>

      {/* Tailwind */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">Tailwind CSS</h3>
      </motion.div>

      {/* Node.js */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">Node.js</h3>
      </motion.div>

      {/* MongoDB */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-16 h-16 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">MongoDB</h3>
      </motion.div>

    </div>
  </div>
</section>

{/* 
projects section */}


<section className="py-24 bg-[#0b0b0b] px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        A selection of my best full-stack and frontend projects showcasing
        modern UI, responsive design, authentication, and real-world
        development experience.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {featuredProjects.map((project) => (

        <div
          key={project.id}
          className="group bg-[#111827] border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">

            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-7 line-clamp-3">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.slice(0,3).map((item,index)=>(
                <span
                  key={index}
                  className="text-xs bg-cyan-500/10 border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Button */}
            <Link
              href={`/projects/${project.id}`}
              className="mt-6 inline-flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
            >
              View Details →
            </Link>

          </div>

        </div>

      ))}

    </div>

    {/* View All Button */}

    <div className="text-center mt-16">
      <Link
        href="/projects"
        className="inline-flex items-center border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        View All Projects →
      </Link>
    </div>

  </div>
</section>

 {/* ABOUT SECTION */}
<section className="py-24 px-6 bg-[#0b0b0b]">
  <div className="max-w-5xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-8"
    >
      About <span className="text-cyan-400">Me</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto"
    >
      I am a passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> from Bangladesh with a strong interest in building modern, responsive, and scalable web applications. My journey began with HTML, CSS, and JavaScript, and I have expanded my skills to React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I enjoy solving real-world problems, creating clean user interfaces, developing secure backend APIs, and continuously learning new technologies to grow as a professional software developer.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mt-10"
    >
      <a
        href="/about"
        className="inline-flex items-center px-7 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition duration-300"
      >
        Learn More →
      </a>
    </motion.div>
  </div>
</section>

      

      {/* CONTACT CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Have a project idea or collaboration? Feel free to contact me.
          </p>

          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              href="/contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </main>

  );
}
