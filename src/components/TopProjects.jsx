import React from "react";
import ProjectCard from "./ProjectCard";

export default function TopProjects() {
  // For now, I'll have this array for experimenting with the cards.
  const projectsData = [
    {
      title: "Reactify",
      image:
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "This is an ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
      deployLink: "hello",
      repository: "hi",
    },
    {
      title: "Ecommerce Dashboard",
      image:
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "This is an ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
      deployLink: "hello",
      repository: "hi",
    },
  ];
  return (
    <>
      <section className="w-full h-screen bg-white flex flex-col p-4">
        <h2 className="text-center font-bold text-2xl">Top Recent Projects</h2>
        <div className="w-auto h-full mt-8 flex flex-col items-center space-y-4 overflow-y-auto">
          {/* Later, abstract this div to a component */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
      </section>
    </>
  );
}
