import { Technologies } from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import StyledLink from "@/components/StyledLink";
import { TypingText } from "@/components/TypingText";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-zinc-600 to-zinc-800 dark:from-gray-900 dark:to-gray-600">
        <div className="bg-gradient-to-tr px-4 from-zinc-300 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 relative h-full w-full sm:w-3/5 lg:max-w-2xl flex flex-col justify-center items-center sm:items-start">
          <h1 className="font-extrabold text-2xl sm:text-4xl sm:mb-4">
            Full-Stack Developercito
          </h1>
          <TypingText />
          <h2 className="text-md w-5/6 text-center sm:text-start">
            Proficient in HTML, CSS, JavaScript, and React. I work with
            libraries like Vite.js and Next.js and have backend experience with
            Node.js, Express.js, and PostgresSQL. I am on a relentless journey
            to develop innovative ideas and embrace continuous learning in the
            world of technology.
          </h2>
          <div className="w-64 flex justify-between mt-4">
            <StyledLink to="https://github.com/Lenoxo">
              <BsGithub className="w-6 h-auto" />
            </StyledLink>
            <StyledLink to="https://www.linkedin.com/in/emanuel-padilla-aa25041a8">
              <BsLinkedin className="w-6 h-auto" />
            </StyledLink>
            <StyledLink to="https://twitter.com/Lenoxo_dev">
              <BsTwitterX className="w-6 h-auto" />
            </StyledLink>
          </div>
          <StyledLink
            to="mailto:emanuehl159@gmail.com"
            addStyle="text-md mt-4 w-64 h-6"
          >
            <p>emanuehl159@gmail.com</p>
          </StyledLink>
          <svg
            className="absolute inset-y-0 right-0 hidden h-full sm:w-32 lg:w-64 translate-x-1/2 scale-y-[-1.0] transform text-white dark:text-zinc-800 sm:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <Technologies />
      <TopProjects />
    </>
  );
}
