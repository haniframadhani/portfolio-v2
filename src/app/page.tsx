import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import Skill from "@/components/section/skill";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}
