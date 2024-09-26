import { FaBars } from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";
import { BsFileEarmarkPdf } from "react-icons/bs";
export default function Header({ setShowMobileMenu, showMobileMenu }) {
  return (
    <header className="fixed z-20 min-w-full bg-white dark:bg-zinc-800 border-zinc-400 border-b-[1px] py-4 text-lg sm:text-md sm:px-4 sm:flex sm:items-center sm:justify-between dark:text-inherit">
      <p className="text-center font-bold md:text-start">Emanuel Padilla</p>
      <FaBars
        className="absolute top-4 left-4 w-7 h-auto sm:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <ul className="hidden sm:flex items-center sm:space-x-4">
        <li className="hover:text-green-300 dark:hover:text-sky-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-300 dark:hover:text-sky-300">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-green-300 dark:hover:text-sky-300">
          <Link href="#contact-me">Contact Me</Link>
        </li>
        <li className="hover:text-green-300 dark:hover:text-sky-300">
          <Link
            href="https://drive.google.com/file/d/1GP6u2b-RHba5Sc_ShnL1xuJXcdbRqTPi/view?usp=sharing"
            className="flex gap-2"
          >
            CV{" "}
            <BsFileEarmarkPdf className="w-6 h-auto text-inherit hover:text-green-300 dark:hover:text-sky-300" />
          </Link>
        </li>
        <DarkModeButton />
      </ul>
    </header>
  );
}
