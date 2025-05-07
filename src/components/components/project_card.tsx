import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageSrc: string | StaticImport;
  onClick?: () => void;
}

const ProjectCard = ({ imageSrc, title, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="bg-white/[0.05] backdrop-blur-md border-white/30 pt-0 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image src={imageSrc} alt={title} className="object-cover" />
      <CardContent>
        <h3 className="text-slate-200 text-lg md:text-xl font-medium">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
