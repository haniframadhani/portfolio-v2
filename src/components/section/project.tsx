import huruf from "../../assets/image/5huruf.webp";
import hurufResult from "../../assets/image/5huruf-desktop-result.webp";
import gahi from "../../assets/image/gahi.webp";
import gahi2 from "../../assets/image/gahi2.webp";
import icoait from "../../assets/image/icoait.png";
import icoaitfull from "../../assets/image/icoait-full.png";
import giantstride from "../../assets/image/giant-stride.webp";
import giantstridehome from "../../assets/image/giant-stride-home.png";
import giantstrideabout from "../../assets/image/giant-stride-about.png";
import giantstridedetailblog from "../../assets/image/giant-stride-detail-blog.png";
import giantstridedashboard from "../../assets/image/giant-stride-dashboard.png";
import giantstridecreate from "../../assets/image/giant-stride-create.png";
import giantstrideedit from "../../assets/image/giant-stride-edit.png";
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
    detail: `5huruf is a web-based game assistant designed to help players master Katla, the popular Indonesian version of Wordle. Built using React for dynamic user experience and Bootstrap for a responsive and clean interface, 5huruf offers tools and tips to enhance your gameplay strategy.

Key features include:

- **Word Suggestions**: Get intelligent word recommendations based on your current guesses.
- **Pattern Matching**: Filter possible words by entering known letters and their positions.
- **Letter Exclusion**: Easily eliminate words containing letters you&#39;ve ruled out.
- **Responsive Design**: Play and strategize seamlessly across devices, from desktop to mobile.
- **Simple & Fast**: Lightweight interface focused on speed and usability.

Whether you&#39;re stuck on your last try or want to optimize your first guess, 5huruf is your companion to crack the code—five letters at a time.

![](${huruf.src})
![](${hurufResult.src})
`,
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
    detail: `Gahi is a sleek, modern web app that brings the wonders of space to your screen every day. Built with Next.js and TypeScript, Gahi fetches daily images and videos from NASA’s Astronomy Picture of the Day (APOD) API and delivers them with an Indonesian twist—translating the scientific explanations into Bahasa Indonesia for broader accessibility.

Key features:
- **Daily Space Content**: Automatically updates with the latest astronomy photo or video from NASA.
- **Bahasa Indonesia Translation**: Provides clear and accurate translations of NASA’s descriptions, making space exploration more accessible to Indonesian speakers.
- **Optimized Performance**: Powered by Next.js’s server-side rendering for fast load times and great SEO.
- **TypeScript Safety**: Strongly typed codebase ensures reliability and maintainability.
- **Responsive & Clean UI**: A simple, intuitive interface that looks great on any device.

Gahi is perfect for astronomy enthusiasts, educators, and anyone curious about the universe—making cosmic discoveries a daily habit.

![](${gahi.src})
![](${gahi2.src})
`,
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
    detail: `Giant Stride is a full-featured blog platform designed for drivers to share their journeys, stories, and experiences from the road. Built with a separate frontend-backend architecture, the project combines the power of Next.js and Tailwind CSS for a fast, responsive user interface, with a robust backend using Node.js and Express.js for seamless content management.

Key features:
- **Driver&#39;s Blog**: A dedicated space for drivers to post stories, tips, and photos from their travels.
- **Full CRUD Operations**: Create, read, update, and delete blog posts easily through an intuitive admin interface.
- **Decoupled Architecture**: Clean separation between frontend and backend for better scalability and maintainability.
- **Responsive Design**: Tailwind CSS ensures a sleek, mobile-friendly layout for reading and writing on the go.
- **RESTful API**: The Express.js backend exposes a well-structured API for smooth data handling.
- **Authentication & Security**: Protects blog management functions to ensure only authorized users can make changes.

Giant Stride empowers drivers to document their adventures and connect with a wider audience, blending storytelling with modern web technology for a smooth and engaging blogging experience.

![](${giantstridehome.src})
![](${giantstridedetailblog.src})
![](${giantstrideabout.src})
![](${giantstridedashboard.src})
![](${giantstridecreate.src})
![](${giantstrideedit.src})
    `,
  },
  {
    src: icoait,
    title: "ICoAIT",
    techs: [
      <Wordpress key="wordpress" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
    ],
    demo: "icoait.uad.ac.id",
    detail: `ICoAIT is a static, high-impact landing page created for the International Conference on Artificial Intelligence Technology hosted by Universitas Ahmad Dahlan. Built using WordPress with the Tailwind CSS framework and the TailPress boilerplate, this project delivers a sleek, modern design that effectively promotes the conference and provides key event information.

Key features:
- **Clean & Modern UI**: Tailwind CSS ensures a responsive, visually appealing layout across all devices.
- **TailPress Boilerplate**: Leverages a lightweight, utility-first approach to integrate Tailwind with WordPress efficiently.
- **Static Content**: The landing page is non-customizable and fixed, focusing on performance and simplicity.
- **Essential Info Hub**: Highlights the conference agenda, speakers, registration details, and contact information in a clear and concise format.

ICOAIT provides a professional online presence for the conference, focusing on clarity, performance, and accessibility—ensuring visitors get the information they need with ease.

![](${icoaitfull.src})
`,
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
