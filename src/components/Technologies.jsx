import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNpm,
  IoLogoDocker
} from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoPostgresql
} from "react-icons/bi";
import { SiNextdotjs, SiVite, SiExpress, SiSequelize } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const TechnologyIcon = ({ Icon, name, withHoverEffect = true }) => (
  <div
    className={`flex flex-col items-center text-sm w-12 transition-all ease-in-out ${
      withHoverEffect && "hover:text-xl hover:w-20"
    } duration-200`}
  >
    <Icon className="w-full h-auto" />
    <p className="text-center font-semibold">{name}</p>
  </div>
);

function Technologies() {
  return (
    <section className="min-h-[85vh] py-12 bg-green-300 dark:bg-gray-800 flex flex-col items-center space-y-4">
      <h2 className="text-lg font-bold">Technologies</h2>

      <div>
        <h3 className="text-md text-center font-semibold">Fundamentals</h3>
        <div className="grid grid-cols-3 mt-4 space-x-4 space-x-reverse">
          <TechnologyIcon Icon={IoLogoHtml5} name="HTML 5" />
          <TechnologyIcon Icon={IoLogoCss3} name="CSS 3" />
          <TechnologyIcon Icon={IoLogoJavascript} name="JavaScript" />
          <TechnologyIcon Icon={IoLogoNpm} name="npm" />
          <TechnologyIcon Icon={BsGit} name="Git" />
          <TechnologyIcon Icon={IoLogoDocker} name="Docker" />
          <TechnologyIcon Icon={BiLogoTypescript} name="TypeScript" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="mb-2 text-md font-semibold">Frontend</h3>
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
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h3 className="mb-2 text-md font-semibold">Backend</h3>
          <div>
            <h3 className="text-md text-center font-semibold">
              Node.js ORM and Framework
            </h3>
            <div className="flex space-x-4 mt-4 justify-center">
              <TechnologyIcon Icon={IoLogoNodejs} name="Node.js" />
              <TechnologyIcon Icon={SiExpress} name="Express.js" />
              <TechnologyIcon Icon={SiSequelize} name="Sequelize" />
            </div>
          </div>

          <div>
            <h3 className="text-md text-center font-semibold">DataBase</h3>
            <div className="flex space-x-4 mt-4 justify-center">
              <TechnologyIcon Icon={BiLogoPostgresql} name="PostgreSQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TechnologyIcon, Technologies };
