import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNpm,
  IoLogoSass,
} from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { BsGit } from "react-icons/bs";
export default function Technologies() {
  const iconStyles =
    "w-12 h-auto text-inherit hover:w-20 transition-all ease-in-out duration-300";
  return (
    <>
      <section className="h-screen bg-sky-300 flex flex-col items-center justify-around">
        <h2 className="text-2xl font-bold">Technologies</h2>
        <div>
          <h3 className="text-xl text-center font-semibold">Fundamentals</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <IoLogoHtml5 className={iconStyles} />
            <IoLogoCss3 className={iconStyles} />
            <IoLogoJavascript className={iconStyles} />
            <IoLogoNpm className={iconStyles} />
            <IoLogoNodejs className={iconStyles} />
            <BsGit className={iconStyles} />
          </div>
        </div>

        {/* Here will be technologies icons like HTML, CSS, and JS, with NPM NodeJS and Git */}
        <div>
          <h3 className="text-xl text-center font-semibold">
            JS Libraries and Frameworks
          </h3>
          <div className="flex space-x-4 mt-4 justify-center">
            <IoLogoReact className={iconStyles} />
            <SiNextdotjs className={iconStyles} />
            <SiVite className={iconStyles} />
          </div>
        </div>
        {/* Here will be technologies icons like React, Vitejs, and Next.js */}
        <div>
          <h3 className="text-xl text-center font-semibold">CSS</h3>
          <div className="flex space-x-4 mt-4">
            <BiLogoTailwindCss className={iconStyles} />
            <IoLogoSass className={iconStyles} />
          </div>
        </div>
        {/* Here will be technologies icons like Tailwind, and SASS */}
      </section>
    </>
  );
}
