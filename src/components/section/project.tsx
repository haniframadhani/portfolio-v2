import huruf from "../../assets/image/5huruf.webp";
import gahi from "../../assets/image/gahi.webp";
import icoait from "../../assets/image/icoait.png";
import giantstride from "../../assets/image/giant-stride.webp";
import ProjectsGrid from "../components/project_grid";
import Javascript from "@/assets/icon/javascript";
import React from "@/assets/icon/react";
import Bootstrap from "@/assets/icon/bootstrap";
import Typescript from "@/assets/icon/typescript";
import Nextjs from "@/assets/icon/nextjs";
import Tailwindcss from "@/assets/icon/tailwind";
import Nodejs from "@/assets/icon/nodejs";
import Mongodb from "@/assets/icon/mongodb";
import Wordpress from "@/assets/icon/wordpress";
import Projects from "@/types/projects";
import Expressjs from "@/assets/icon/express";

const projects: Projects[] = [
  {
    src: huruf,
    title: "5huruf",
    techs: [
      <Javascript key="javascript" className="w-10 h-10" />,
      <React key="react" className="w-10 h-10" />,
      <Bootstrap key="bootstrap" className="w-10 h-10" />,
    ],
    demo: "5huruf.vercel.app",
    repo: "https://github.com/haniframadhani/5huruf",
  },
  {
    src: gahi,
    title: "GAHI",
    techs: [
      <Typescript key="typescript" className="w-10 h-10" />,
      <Nextjs key="nextjs" className="w-10 h-10" />,
    ],
    demo: "gahi-apod.vercel.app",
    repo: "https://github.com/haniframadhani/gahi",
  },
  {
    src: giantstride,
    title: "Giant Stride",
    techs: [
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
      <Nextjs key="nextjs" className="w-10 h-10" />,
      <Nodejs key="nodejs" className="w-10 h-10" />,
      <Mongodb key="mongodb" className="w-10 h-10" />,
      <Expressjs key="mongodb" className="w-10 h-10" />,
    ],
    repo: [
      "https://github.com/haniframadhani/giant-stride-backend",
      "https://github.com/haniframadhani/giant-stride-frontend",
    ],
  },
  {
    src: icoait,
    title: "ICoAIT",
    techs: [
      <Wordpress key="wordpress" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
    ],
    demo: "icoait.uad.ac.id",
  },
];

const Project = () => {
  return (
    <section id="projects" className="w-full my-10">
      <div className="container w-full h-full mx-auto">
        <h2 className="text-slate-200 text-center capitalize text-3xl font-semibold">
          projects
        </h2>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};
export default Project;
