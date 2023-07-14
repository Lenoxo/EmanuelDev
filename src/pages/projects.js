import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data";

export default function Projects() {
  const projects = projectsData    
  return (
    <div className="h-auto flex flex-col pt-16 items-center">
      <h2 className="text-2xl font-bold mb-8 mt-2">My Projects</h2>
      <section>
        {projects?.map((project, index) => (
          <ProjectCard key={index} projectData={project} />
        ))}
      </section>
    </div>
  );
}
