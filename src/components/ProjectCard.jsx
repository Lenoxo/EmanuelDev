import { useState } from "react";
import Modal from "@/components/Modal";
import { BsThreeDots } from "react-icons/bs";
import ProjectDetail from "./ProjectDetail";

export default function ProjectCard({ projectData }) {
  const [open, setOpen] = useState(false);
  const { image, name } = projectData;
  return (
    // Review later if this is coherent
    <article className="w-80 h-60 border border-zinc-400 rounded-lg mb-8 shadow-xl">
      <figure className="w-full h-4/5 relative">
        <img src={image} className="w-full h-full object-cover rounded-t-lg" alt={name}/>
        <button onClick={() => setOpen(true)}>
          <BsThreeDots className="w-6 h-auto bg-white p-1 rounded-full absolute top-1 right-1" />
        </button>
      </figure>
      <p className="w-full h-1/5 font-semibold text-lg p-3">{name}</p>
      <Modal open={open} setOpen={setOpen}>
        <ProjectDetail projectData={projectData} />
      </Modal>
    </article>
  );
}
