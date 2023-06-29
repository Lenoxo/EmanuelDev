import { RiMoonClearLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <header className="fixed min-w-full bg-white border-zinc-300 border-b-4 py-4">
      <p className="relative text-center font-bold md:text-start">
        Emanuel Padilla
      </p>
      <FaBars className="absolute top-4 left-4 w-7 h-auto text-black dark:text-inherit" />
      <ul className="hidden text-sm">
        <li>Home</li>
        <li>Projects</li>
        <li>Certifications</li>
        <button>
          <RiMoonClearLine />
        </button>
        <li>Contact Me</li>
        <li>Download CV</li>
      </ul>
    </header>
  );
}
