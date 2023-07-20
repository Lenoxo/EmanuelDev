import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function ProjectDetail({ projectData }) {
  const { title, image, description, repository, deploy } = projectData;
  return (
    <aside className="w-full h-full flex flex-col justify-center space-y-4">
      <h3 className="text-md font-bold px-3">{title}</h3>
      <img src={image} className="rounded-lg" alt={title} />
      <p className="px-3 text-sm">{description}</p>
      <div className="flex flex-row-reverse justify-between px-3">
        {deploy && (
          <a
            href={deploy}
            className="bg-green-300 rounded-lg p-3 text-sm font-semibold flex items-center"
          >
            Demo <BiLinkExternal className="ml-1 w-4 h-auto" />
          </a>
        )}
        <a
          href={repository}
          className="bg-green-300 rounded-lg p-3 text-sm font-semibold flex items-center"
        >
          Repository <BsGithub className="ml-1 w-4 h-auto" />
        </a>
      </div>
    </aside>
  );
}
