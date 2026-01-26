import icoait from "../../assets/image/icoait.png";
import icoaitfull from "../../assets/image/icoait-full.png";
import soto from "../../assets/image/soto.webp";
import soto2 from "../../assets/image/sotociptoroso.png";
import pustakapranala from "../../assets/image/pustaka_pranala.webp";
import pustakapranala1 from "../../assets/image/pustaka_pranala_1.png";
import pustakapranala2 from "../../assets/image/pustaka_pranala_2.png";
import pustakapranala3 from "../../assets/image/pustaka_pranala_3.png";
import pustakapranala4 from "../../assets/image/pustaka_pranala_4.png";
import pustakapranala5 from "../../assets/image/pustaka_pranala_5.png";
import sirina from "../../assets/image/sirina.webp";
import sirina1 from "../../assets/image/sirina1.png";
import sirina2 from "../../assets/image/sirina2.png";
import sirina3 from "../../assets/image/sirina3.png";
import sirina4 from "../../assets/image/sirina4.png";
import sirina5 from "../../assets/image/sirina5.png";
import sirina6 from "../../assets/image/sirina6.png";
import ProjectsGrid from "../components/project_grid";
import React from "@/assets/icon/react";
import Typescript from "@/assets/icon/typescript";
import Nextjs from "@/assets/icon/nextjs";
import Tailwindcss from "@/assets/icon/tailwind";
import Wordpress from "@/assets/icon/wordpress";
import Projects from "@/types/projects";
import Laravel from "@/assets/icon/laravel";
import Mysql from "@/assets/icon/mysql";

const projects: Projects[] = [
  {
    src: soto,
    title: "Soto cipto roso",
    techs: [
      <Nextjs key="nextjs" className="w-10 h-10" />,
      <Typescript key="typescript" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
    ],
    demo: "https://www.sotociptoroso.com/",
    detail: `Soto Cipto Roso is a static, high-impact landing page created to support partnership and investment opportunities for a traditional Soto Semarang restaurant business. Built using Next.js, Tailwind CSS, and shadcn/ui, this project delivers a simple, clean, and modern design focused on building trust and credibility with potential investors and business partners.

Key features:
- **Clean & Modern UI**: Tailwind CSS and shadcn/ui provide a minimalist, professional interface that enhances readability and user confidence.
- **Next.js Performance**: Utilizes Next.js for fast loading times, SEO-friendly structure, and optimal performance.
- **Static Content**: The landing page presents fixed, non-customizable content to ensure clarity, consistency, and reliability.
- **Investor-Focused Information**: Clearly communicates the business concept, partnership opportunities, and investment value proposition.

Soto Cipto Roso establishes a strong digital presence for the Soto Semarang restaurant, emphasizing simplicity, trust, and professionalism—helping potential investors and partners understand the business opportunity with confidence.

![](${soto2.src})
`,
  },
  {
    src: pustakapranala,
    title: "Pustaka Pranala",
    techs: [
      <Wordpress key="wordpress" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
    ],
    demo: "https://pustakapranala.com/",
    detail: `Pustaka Pranala is a company profile website designed with a clean and modern aesthetic to represent a trusted publishing platform for writers. Built using WordPress, Tailwind CSS, and the TailPress boilerplate, this website focuses on clearly communicating the value and credibility of Pustaka Pranala as a publishing partner.

Key features:
- **Clean & Professional UI**: Tailwind CSS ensures a modern, responsive layout that reflects professionalism and reliability.
- **WordPress + TailPress Integration**: Combines WordPress flexibility with a lightweight, utility-first Tailwind workflow for efficient development.
- **Trust-Focused Content**: Highlights Pustaka Pranala’s long-standing reputation, established in 2015, and its history of collaborating with numerous writers.
- **Author Value Proposition**: Clearly presents publishing services, success stories, and benefits for writers looking to publish their books.

Pustaka Pranala provides a strong digital presence that builds trust and confidence among writers, reinforcing its reputation as a reliable and experienced publishing company with a proven track record in bringing books to publication.

![](${pustakapranala1.src})
![](${pustakapranala2.src})
![](${pustakapranala3.src})
![](${pustakapranala4.src})
![](${pustakapranala5.src})
`,
  },
  {
    src: sirina,
    title: "SIRINA - Sistem Informasi Terintegrasi Nasyiatul Aisyiyah",
    techs: [
      <Laravel key="laravel" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
      <Mysql key="mysql" className="w-10 h-10" />,
    ],
    detail: `SIRINA (Sistem Informasi Terintegrasi Nasyiatul Aisyiyah) is a cadre management web application designed to manage and organize data for members of Nasyiatul Aisyiyah efficiently. Built using Laravel, Filament for the administrative dashboard, Tailwind CSS, and MySQL, this system is engineered to handle large-scale data management with high standards of reliability and security.

Key features:
- **Robust Admin Dashboard**: Powered by Filament, providing an intuitive and efficient interface for managing cadre data.
- **Scalable Data Management**: Designed to handle thousands of records while maintaining data integrity, consistency, and completeness.
- **Advanced Search & Filtering**: Enables complex data queries to quickly locate and analyze specific cadre information.
- **Data Export Capability**: Allows search and filtered results to be exported into Excel for reporting and documentation purposes.
- **Secure & Reliable Architecture**: Implements best practices in backend development to ensure data security and controlled access.

SIRINA serves as a reliable digital backbone for Nasyiatul Aisyiyah’s cadre management process, delivering accuracy, efficiency, and scalability in managing organizational data.

![](${sirina1.src})
![](${sirina2.src})
![](${sirina3.src})
![](${sirina4.src})
![](${sirina5.src})
![](${sirina6.src})
    `,
  },
  {
    src: icoait,
    title: "ICoAIT",
    techs: [
      <Wordpress key="wordpress" className="w-10 h-10" />,
      <Tailwindcss key="tailwindcss" className="w-10 h-10" />,
    ],
    demo: "https://icoait.uad.ac.id/",
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
