import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="h-auto w-full bg-sky-300 p-4 flex flex-col items-center justify-center space-y-4">
      <h3 id="contact-me" className="text-md font-semibold">
        Contact Me
      </h3>
      <Link href="mailto:emauehl159@gmail.com" className="text-sm">
        emauehl159@gmail.com
      </Link>
      <div className="w-20 flex justify-between">
        <Link href="https://github.com/Lenoxo">
          <BsGithub className="w-6 h-auto" />
        </Link>
        <Link href="https://www.linkedin.com/in/angel-emanuel-aa25041a8/">
          <BsLinkedin className="w-6 h-auto" />
        </Link>
      </div>
    </footer>
  );
}
