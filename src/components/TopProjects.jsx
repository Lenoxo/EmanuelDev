import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";
import { BiLinkExternal } from "react-icons/bi";
import StyledLink from "./StyledLink";

export default function TopProjects() {
  return (
    <>
      <section className="h-screen bg-white flex flex-col p-4 lg:h-auto items-center">
        <h2 className="text-center font-bold text-lg">Top Recent Projects</h2>
        <div className="w-auto h-auto mt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center overflow-y-auto">
          {projectsData.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
        <StyledLink
          to="/projects"
          addStyle="font-semibold mt-8 sm:mt-0 p-2 w-auto"
        >
          <p>See All Projects</p>
          <BiLinkExternal className="w-6 ml-2 h-auto" />
        </StyledLink>
      </section>
    </>
  );
}
