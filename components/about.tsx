"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}

      <p className="mb-3">
      I am a dedicated full stack web developer on the path to excellence, currently pursuing a {" "}
        <span className="font-medium">BCA</span> degree from {" "}
        <span className="font-medium">IGNOU</span> with an expected graduation in {" "}
        <span className="font-medium">2024</span>. With a profound passion for coding, I exhibit a keen understanding of {" "}
        <span className="font-medium">Data Structures and Algorithms</span>, a foundation that strengthens my problem-solving prowess. My affection for the C++ programming language has ignited my ambition to specialize in backend development, envisioning a future characterized by innovation and efficiency.
      </p>

      <p>
      My journey is marked by my creative flair, as I have successfully crafted multiple projects using {" "}
        <span className="font-medium">HTML, CSS, JavaScript, and Django</span>. My proficiency in these technologies showcases my ability to bring visions to life through seamless user experiences and {" "}
        <span className="font-medium">dynamic web applications</span>. Committed to staying at the forefront of technology, I am currently engrossed in mastering the {" "}
        <span className="font-medium">MERN stack</span>, a testament to my unwavering dedication to personal and professional growth. As I continue to refine my skills and expand my horizons, I am poised to make a lasting impact in the world of web development.
      </p>
    </motion.section>
  );
}
