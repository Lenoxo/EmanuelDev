import Modal from "@/components/Modal";
import ProjectDetail from "@/components/ProjectDetail";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

export default function Projects() {
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
        {projectsData.map((project, index) => {
          const [open, setOpen] = useState(false)
          return (
            // Review later if this is coherent
            <article className="w-80 h-60 border border-zinc-700 rounded-lg mb-8" key={index}>
              <figure className="w-full h-4/5 relative">
                <img
                  src={project.image}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <button onClick={() => setOpen(true)}>
                  <BsThreeDots className="w-6 h-auto bg-white p-1 rounded-full absolute top-1 right-1" />
                </button>
              </figure>
              <p className="w-full h-1/5 font-semibold text-lg p-3">
                {project.title}
              </p>
              <Modal open={open} setOpen={setOpen}>
                <ProjectDetail projectData={project}/>
              </Modal>
            </article>
          );
        })}
      </section>
    </div>
  );
}
