import React from "react";
import ProjectCard from "./ProjectCard";

export default function TopProjects() {
  return (
    <>
      <section className="w-full h-screen bg-white flex flex-col p-4">
        <h2 className="text-center font-bold text-2xl">Top Recent Projects</h2>
        <div className="w-auto h-full mt-8 flex flex-col items-center space-y-4 overflow-y-auto">
          {/* Later, abstract this div to a component */}
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
