import DarkModeButton from "./DarkModeButton";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function MobileMenu({ setShowMobileMenu }) {
  const navHeight = {
    height: "calc(100vh - 3.75rem)",
  };

  function hideMobileMenu() {
    setShowMobileMenu(false);
  }

  return (
    <>
      <nav
        style={navHeight}
        className="fixed z-30 flex flex-col w-full top-14 mt-[0.3rem] p-8 bg-white dark:bg-zinc-900 items-start text-start justify-between font-semibold text-lg"
      >
        <LinkItem href="/" name="Home" handleClick={hideMobileMenu} />
        <LinkItem
          href="/projects"
          name="Projects"
          handleClick={hideMobileMenu}
        />
        <DarkModeButton />
        <LinkItem
          href="#contact-me"
          name="Contact Me"
          handleClick={hideMobileMenu}
        />
        <LinkItem
          href="https://drive.google.com/file/d/1Ykg2nwrn3G1ulqyATuiJ8IXzV0_eWN6T/view?usp=drive_link"
          name="Download CV"
          handleClick={hideMobileMenu}
        />
      </nav>
    </>
  );
}

function LinkItem({ href, name, handleClick }) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center w-full"
      onClick={handleClick}
    >
      <p className="w-full">{name}</p>
      <BiChevronRight className="h-auto w-12 text-inherit" />
    </Link>
  );
}
