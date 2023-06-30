import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="h-auto w-full bg-sky-300 p-4">
      <h3 id="contact-me" className="text-xl">Contact Me</h3>
      <div className="flex justify-between pl-2">
        <div className="flex flex-col justify-around font-semibold">
          <a href="mailto:emauehl159@gmail.com">emauehl159@gmail.com</a>
          <a href="tel:+573202081202">+57 320 2081202</a>
        </div>
        <div className="flex flex-col justify-between space-y-2">
          <BsGithub className="w-8 h-auto cursor-pointer" />
          <BsLinkedin className="w-8 h-auto cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
