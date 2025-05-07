import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { JSX } from "react";

interface Projects {
  src: string | StaticImport;
  title: string;
  techs: JSX.Element[];
  repo?: string | string[];
  demo?: string;
  detail: string;
}

export default Projects;
