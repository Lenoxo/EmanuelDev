import Technologies from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import StyledLink from "@/components/StyledLink";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-zinc-600 to-zinc-800 dark:from-gray-900 dark:to-gray-600">
        <div class="bg-gradient-to-tr pl-4 from-zinc-300 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 relative h-full w-full sm:w-3/5 lg:max-w-2xl flex flex-col justify-center">
          <h1 className="font-extrabold text-lg">Frontend Developer</h1>

          {/* Later on, change this for a short paragraph explaining what you do. */}
          <h2 className="text-md w-5/6">
            Frontend Developer with knowledge in HTML, CSS, JavaScript, and
            React, proficient in utilizing libraries and frameworks such as
            Vite.js and Next.js. I am passionate about learning better ways to
            develop great ideas with the freedom of code.
          </h2>
          <div className="w-60 flex justify-between mt-4">
            <StyledLink
              to="https://github.com/Lenoxo"
            >
              <BsGithub className="w-6 h-auto" />
            </StyledLink>
            <StyledLink
              to="https://www.linkedin.com/in/angel-emanuel-aa25041a8/"
            >
              <BsLinkedin className="w-6 h-auto" />
            </StyledLink>
          </div>
          <StyledLink
            to="mailto:emanuehl159@gmail.com"
            addStyle="text-md mt-4 w-60 h-6"
          >
            <p>emanuehl159@gmail.com</p>
          </StyledLink>
          <svg
            class="absolute inset-y-0 right-0 hidden h-full sm:w-32 lg:w-64 translate-x-1/2 scale-y-[-1.0] transform text-white dark:text-zinc-800 sm:block"
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
