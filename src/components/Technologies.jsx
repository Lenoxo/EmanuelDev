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

const TechnologyIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center text-sm w-12 hover:w-20 transition-all ease-in-out hover:text-xl">
    <Icon className="w-full h-auto" />
    <p className="text-center font-semibold">{name}</p>
  </div>
);

export default function Technologies() {
  return (
    <section className="h-[85vh] bg-green-300 dark:bg-gray-800 flex flex-col items-center justify-around">
      <h2 className="text-lg font-bold">Technologies</h2>

      <div>
        <h3 className="text-md text-center font-semibold">Fundamentals</h3>
        <div className="grid grid-cols-3 mt-4 space-x-4 space-x-reverse">
          <TechnologyIcon Icon={IoLogoHtml5} name="HTML 5" />
          <TechnologyIcon Icon={IoLogoCss3} name="CSS 3" />
          <TechnologyIcon Icon={IoLogoJavascript} name="JavaScript" />
          <TechnologyIcon Icon={IoLogoNpm} name="npm" />
          <TechnologyIcon Icon={IoLogoNodejs} name="Node.js" />
          <TechnologyIcon Icon={BsGit} name="Git" />
        </div>
      </div>

      <div>
        <h3 className="text-md text-center font-semibold">
          JS Libraries and Frameworks
        </h3>
        <div className="flex space-x-4 mt-4 justify-center">
          <TechnologyIcon Icon={IoLogoReact} name="React" />
          <TechnologyIcon Icon={SiNextdotjs} name="Next.js" />
          <TechnologyIcon Icon={SiVite} name="Vite.js" />
        </div>
      </div>

      <div>
        <h3 className="text-md text-center font-semibold">CSS</h3>
        <div className="flex space-x-4 mt-4">
          <TechnologyIcon Icon={BiLogoTailwindCss} name="Tailwind CSS" />
          <TechnologyIcon Icon={IoLogoSass} name="Sass" />
        </div>
      </div>
    </section>
  );
}
