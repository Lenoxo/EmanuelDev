import { FaBars } from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
export default function Header({ setShowMobileMenu, showMobileMenu }) {
  return (
    <header className="fixed min-w-full bg-white border-zinc-300 border-b-4 py-4 text-lg">
      <p className="text-center font-bold md:text-start">
        Emanuel Padilla
      </p>
      <FaBars className="absolute top-4 left-4 w-7 h-auto text-black dark:text-inherit" onClick={() => setShowMobileMenu(!showMobileMenu)}/>
      <ul className="hidden text-sm">
        <li>Home</li>
        <li>Projects</li>
        <li>Certifications</li>
        <DarkModeButton />
        <li>Contact Me</li>
        <li>Download CV</li>
      </ul>
    </header>
  );
}
