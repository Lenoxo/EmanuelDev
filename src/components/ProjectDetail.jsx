import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import StyledLink from "./StyledLink";
import Image from "next/image";
import { TechnologyIcon } from "./Technologies";

export default function ProjectDetail({ projectData }) {
  const { title, image, description, repository, deploy, technologiesUsed } =
    projectData;
  const isTechnologiesLengthFour = technologiesUsed.length === 4;
  return (
    <aside className="w-full h-full flex flex-col justify-center space-y-4">
      <h3 className="text-md font-bold text-center">{title}</h3>
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <div
          className={`px-3 grid grid-cols-3 ${
            isTechnologiesLengthFour && "min-[488px]:grid-cols-4"
          } place-items-center gap-3 w-full sm:w-1/4 sm:grid-cols-1`}
        >
          {technologiesUsed?.map((technology, index) => {
            return (
              <TechnologyIcon
                key={index}
                Icon={technology.icon}
                name={technology.name}
                withHoverEffect={false}
              />
            );
          })}
        </div>
        <figure className="w-full h-60 relative">
          <Image
            src={image}
            fill={true}
            className="rounded-lg object-cover"
            alt={title}
            sizes="75vw, (min-width: 768px) 60vw, (min-width: 1200px) 50vw"
          />
        </figure>
      </div>
      <p className="px-3 text-md">{description}</p>
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
