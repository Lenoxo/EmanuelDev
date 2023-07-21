import { useState } from "react";
import Modal from "@/components/Modal";
import { BsThreeDots } from "react-icons/bs";
import ProjectDetail from "./ProjectDetail";

export default function ProjectCard({ projectData }) {
  const [open, setOpen] = useState(false);
  const { image, title } = projectData;
  return (
    // Review later if this is coherent
    <article className="w-60 h-auto border border-zinc-400 rounded-lg mb-8 shadow-lg flex-shrink-0 hover:brightness-50 transition-all">
      <figure className="w-full h-40">
        <img
          src={image}
          className="w-full h-full object-cover rounded-t-lg"
          alt={title}
        />
      </figure>
      <button
        className="w-full font-semibold text-sm p-3 flex items-center justify-between"
        onClick={() => setOpen(true)}
      >
        <h3>
          {title}
        </h3>
        <BsThreeDots className="w-6 h-auto border border-zinc-400 p-1 rounded-full" />
      </button>
      <Modal open={open} setOpen={setOpen}>
        <ProjectDetail projectData={projectData} />
      </Modal>
    </article>
  );
}
