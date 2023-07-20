import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";
import { BiLinkExternal } from "react-icons/bi";

export default function TopProjects() {
  return (
    <>
      <section className="w-full h-screen bg-white flex flex-col p-4 lg:h-auto">
        <h2 className="text-center font-bold text-lg">Top Recent Projects</h2>
        <div className="w-auto h-auto mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center overflow-y-auto">
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="font-semibold text-center w-auto flex self-center space-x-1"
        >
          <p>See All Projects</p>
          <BiLinkExternal className="w-6 h-auto" />
        </Link>
      </section>
    </>
  );
}
