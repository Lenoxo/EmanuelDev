import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";

export default function ProjectsPage() {
  const projects = projectsData    
  return (
    <div className="min-h-screen flex flex-col pt-16 items-center">
      <h2 className="text-lg font-bold mb-8 mt-2">My Projects</h2>
      <section className="w-auto h-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center overflow-y-auto">
        {projects?.map((project, index) => (
          <ProjectCard key={index} projectData={project} />
        ))}
      </section>
    </div>
  );
}
