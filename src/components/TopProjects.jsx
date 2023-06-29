import React from "react";
import ProjectCard from "./ProjectCard";

export default function TopProjects() {
  return (
    <>
      <section className="w-full h-screen bg-slate-400 flex flex-col p-4">
        <h2 className="text-center">Top Projects</h2>
        <div className="w-auto h-auto mt-8 flex space-x-4 overflow-x-auto">
          {/* Later, abstract this div to a component */}
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
