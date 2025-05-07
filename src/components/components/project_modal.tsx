"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ArrowUpRight, XIcon } from "lucide-react";
import Projects from "@/types/projects";
import { Button } from "../ui/button";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Projects | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl h-full overflow-y-scroll mesh-gradient-bg border-0">
        <DialogClose className="absolute right-4 top-4 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white data-[state=open]:text-white">
          <XIcon className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="hidden">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 text-slate-300">
          <Image
            src={project.src}
            alt={project.title}
            className="object-cover"
          />
          <div className="w-full">
            <h3 className="text-slate-200 text-2xl font-bold">
              {project.title}
            </h3>
            <div className="flex justify-start gap-2 w-full capitalize my-2 items-center">
              tech stack :
              {project.techs.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </div>
            <div className="flex gap-2">
              {project.demo && (
                <Button
                  className="capitalize bg-blue-500 hover:bg-blue-500/80"
                  asChild
                >
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    demo
                    <ArrowUpRight />
                  </Link>
                </Button>
              )}
              {project.repo &&
                (typeof project.repo === "string" ? (
                  <Button className="capitalize" asChild>
                    {
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        repo
                        <ArrowUpRight />
                      </Link>
                    }
                  </Button>
                ) : (
                  project.repo.map((repo, index) => (
                    <Button className="capitalize" key={index} asChild>
                      <Link
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repo
                        <ArrowUpRight />
                      </Link>
                    </Button>
                  ))
                ))}
            </div>
          </div>
          <div className="prose prose-invert !max-w-none">
            <Markdown>{project.detail}</Markdown>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProjectModal;
