import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "10th and 12th Grade",
    location: "CBSE Board",
    description:
      "I studied my 12th Grade in Commerce from CBSE GBSSS Baprola. I had a IT as additional subject which made my interest in Programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 -2021",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
  
  {
    title: "Customer Service Executive",
    location: "Concentrix Daksh Services India Pvt. Ltd.",
    description:
      "I worked at concentrix as a customer service executive for more than 10 months. I was responsible for solving customer queries and providing them with the best possible solution.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - April 2023",
  },
  
  {
    title: "Bachelors of Computer Application",
    location: "Indragandhi National Open University",
    description:
      "I will Graduate in 2024 and I'm planning for MCA immidiately after graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Kitabi Duniya",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ProGrafix",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Data Structures",
  "Algorithms",
  "Git & GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Python",
  "Django",
] as const;
