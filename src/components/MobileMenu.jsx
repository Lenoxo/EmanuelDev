import DarkModeButton from "./DarkModeButton";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function MobileMenu({ setShowMobileMenu }) {
  const navHeight = {
    height: "calc(100vh - 3.75rem)",
  };

  function hideMobileMenu() {
    setShowMobileMenu(false)
  }

  return (
    <>
      <nav
        style={navHeight}
        className="fixed z-30 flex flex-col w-full top-14 mt-[0.3rem] p-8 bg-white items-start text-start justify-between font-semibold text-lg"
      >
        <div className="flex flex-col items-center w-full h-1/3 justify-between">
          <LinkItem href='/' name='Home' handleClick={hideMobileMenu}/>
          <LinkItem href='/projects' name='Projects' handleClick={hideMobileMenu}/>
          <LinkItem href='/certifications' name='Certifications' handleClick={hideMobileMenu}/>
        </div>
        <DarkModeButton />
        <LinkItem href='#contact-me' name='Contact Me' handleClick={hideMobileMenu} />
        <p>Download CV</p>
      </nav>
    </>
  );
}

function LinkItem({ href, name, handleClick }) {
  return (
    <Link href={href} className="flex justify-between items-center w-full" onClick={handleClick}>
      <p className="w-full">{name}</p>
      <BiChevronRight className="h-auto w-12 text-inherit" />
    </Link>
  );
}
