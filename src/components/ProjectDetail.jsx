import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import StyledLink from "./StyledLink";

export default function ProjectDetail({ projectData }) {
  const { title, image, description, repository, deploy } = projectData;
  return (
    <aside className="w-full h-full flex flex-col justify-center space-y-4">
      <h3 className="text-md font-bold text-center">{title}</h3>
      <img src={image} className="rounded-lg" alt={title} />
      <p className="px-3 text-sm">{description}</p>
      <div className="flex flex-row-reverse justify-between px-3">
        {deploy && (
          <StyledLink
            to={deploy}
            addStyle="p-3 text-sm font-semibold w-auto items-center"
          >
            Demo <BiLinkExternal className="ml-1 w-4 h-auto" />
          </StyledLink>
        )}
        <StyledLink
          to={repository}
          addStyle="p-3 text-sm font-semibold w-auto items-center"
        >
          Repository <BsGithub className="ml-1 w-4 h-auto" />
        </StyledLink>
      </div>
    </aside>
  );
}
