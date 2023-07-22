import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = projectsData;    
  return (
    <div className="min-h-screen flex flex-col pt-16 items-center">
      <h2 className="text-lg font-bold mb-8 mt-2">My Projects</h2>
      <section className="w-auto h-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center overflow-y-auto">
        {projects?.map((project, index) => (
          <ProjectCard key={index} projectData={project} />
        ))}
      </section>
      <figure>
        <h2 className="text-center">And that&apos;s the end for now...</h2>
        <Image width={240} height={240} src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="cat.gif" className="w-60 h-60 rounded-lg object-cover mb-4"/>
      </figure>
    </div>
  );
}
