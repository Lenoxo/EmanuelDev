import { FaBars } from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";
export default function Header({ setShowMobileMenu, showMobileMenu }) {
  return (
    <header className="fixed z-10 min-w-full bg-white border-zinc-400 border-b-[1px] py-4 text-lg sm:text-sm sm:px-4 sm:flex sm:items-center sm:justify-between">
      <p className="text-center font-bold md:text-start">Emanuel Padilla</p>
      <FaBars
        className="absolute top-4 left-4 w-7 h-auto text-black sm:hidden dark:text-inherit"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <ul className="hidden sm:flex items-center sm:space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/certifications">Certifications</Link>
        </li>
        <li>
          <Link href="#contact-me">Contact Me</Link>
        </li>
        <p>Download CV</p>
        <DarkModeButton />
      </ul>
    </header>
  );
}
