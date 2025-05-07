import Image from "next/image";
import gambar from "../../assets/image/hanif.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen">
      <div className="container w-full h-full mx-auto flex flex-col items-center justify-center">
        <div className="rounded-full size-50 overflow-hidden aspect-square">
          <Image src={gambar} alt="hanif" className="object-cover" />
        </div>
        <h1 className="font-black capitalize text-4xl md:text-5xl mt-8 mb-2 text-slate-200 text-center">
          muhammad hanif ramadhani
        </h1>
        <span className="capitalize text-xl md:text-2xl font-medium text-center text-slate-300">
          fullstack developer
        </span>
        <div className="flex gap-5 mt-5">
          <Button className="bg-blue-800 hover:bg-blue-800/80" asChild>
            <Link
              href="https://www.linkedin.com/in/muhammad-hanif-ramadhani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              linkedin
            </Link>
          </Button>
          <Button className="bg-gray-600 hover:bg-gray-600/80" asChild>
            <Link
              href="https://github.com/haniframadhani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              github
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
