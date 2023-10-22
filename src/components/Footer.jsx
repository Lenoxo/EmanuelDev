import { BsGithub, BsLinkedin } from "react-icons/bs";
import StyledLink from "./StyledLink";

export default function Footer() {
  return (
    <footer className="h-auto w-full bg-gradient-to-tr from-zinc-400 via-white to-zinc-50 dark:from-gray-900 dark:to-gray-700 p-4 flex flex-col items-center justify-center space-y-4">
      <h3 id="contact-me" className="text-md font-semibold">
        Contact Me
      </h3>
      <div className="w-60 flex justify-between mt-4">
        <StyledLink to="https://github.com/Lenoxo">
          <BsGithub className="w-6 h-auto" />
        </StyledLink>
        <StyledLink to="https://www.linkedin.com/in/emanuel-padilla-aa25041a8">
          <BsLinkedin className="w-6 h-auto" />
        </StyledLink>
      </div>
      <StyledLink
        to="mailto:emanuehl159@gmail.com"
        addStyle="text-md mt-4 w-60 h-6"
      >
        <p>emanuehl159@gmail.com</p>
      </StyledLink>
    </footer>
  );
}
