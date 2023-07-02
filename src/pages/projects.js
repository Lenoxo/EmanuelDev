import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
    .get("https://api.github.com/users/Lenoxo/repos")
    .then(function (response) {
      setProjects(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])
  
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
    <div className="h-screen flex flex-col pt-16 items-center">
      <h2 className="text-2xl font-bold mb-8 mt-2">My Projects</h2>
      <section>
        {projects?.map((project, index) => (
          <ProjectCard key={index} projectData={project} />
        ))}
      </section>
    </div>
  );
}
