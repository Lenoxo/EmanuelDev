import { useRef, useState, useEffect } from "react";
import Modal from "@/components/Modal";
import { BsThreeDots } from "react-icons/bs";
import ProjectDetail from "./ProjectDetail";
import Image from "next/image";

export default function ProjectCard({ projectData }) {
  const [open, setOpen] = useState(false);
  const { image, title, technologiesUsed } = projectData;
  const cardRef = useRef(null);
  console.log(technologiesUsed)

  // This useEffect observes when a Card is within the viewport, and if it is, modifies tailwind classes to show it.
  useEffect(() => {
    const currentCard = cardRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Here add / remove tailwind classes to currentCard, doing the entry animation.
          currentCard.classList.add("opacity-100");
          currentCard.classList.remove("-translate-x-6");
        }
      });
    }, observerOptions);

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="w-60 h-auto border border-zinc-400 rounded-lg mb-8 shadow-lg flex-shrink-0 hover:brightness-50 transition-all opacity-0 duration-200 -translate-x-6"
    >
      <figure className="w-full h-40">
        <Image
          width={240}
          height={160}
          src={image}
          className="w-full h-full object-cover rounded-t-lg"
          alt={title}
        />
      </figure>
      <button
        className="w-full font-semibold text-sm p-3 flex items-center justify-between"
        onClick={() => setOpen(true)}
      >
        <h3>{title}</h3>
        <BsThreeDots className="w-6 h-auto border border-zinc-400 p-1 rounded-full" />
      </button>
      <div>

      {technologiesUsed?.map((technology) => {
        return <p>{technology}</p> 
      })}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <ProjectDetail projectData={projectData} />
      </Modal>
    </article>
  );
}
