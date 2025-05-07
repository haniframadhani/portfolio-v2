import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full my-10">
      <div className="container w-full h-full mx-auto">
        <h2 className="text-slate-200 text-center capitalize text-3xl font-semibold">
          let&#39;s connect!
        </h2>
        <p className="text-slate-300 text-center">Connect with me on:</p>
        <div className="flex flex-wrap md:flex-nowrap gap-5 mt-5 justify-center">
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
          <Button className="bg-pink-600 hover:bg-pink-600/80" asChild>
            <Link
              href="https://www.instagram.com/haniframadhani_design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              instagram
            </Link>
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-500/80" asChild>
            <Link
              href="mailto:mhaniframadhani985@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
              email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
