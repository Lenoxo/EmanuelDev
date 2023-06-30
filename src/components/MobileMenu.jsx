import DarkModeButton from "./DarkModeButton";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function MobileMenu() {
  const navHeight = {
    height: 'calc(100vh - 3.75rem)'
  };

  return (
    <>
      <nav style={navHeight} className="fixed flex flex-col w-full top-14 mt-2 p-8 bg-white items-start text-start justify-between font-semibold text-lg">
        <div className="flex flex-col items-center w-full h-1/3 justify-between">
          <Link href='/' className="flex justify-between items-center w-full">
            <p className="w-full">Home</p>
            <BiChevronRight className="h-auto w-12 text-inherit"/>
          </Link>
          <Link href='/' className="flex justify-between items-center w-full">
            <p className="w-full">Projects</p>
            <BiChevronRight className="h-auto w-12 text-inherit"/>
          </Link>
          <Link href='/' className="flex justify-between items-center w-full">
            <p className="w-full">Certifications</p>
            <BiChevronRight className="h-auto w-12 text-inherit"/>
          </Link>
        </div>
        <DarkModeButton />
        <p>Contact Me</p>
        <p>Download CV</p>
      </nav>
    </>
  );
}