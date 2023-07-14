export default function ProjectDetail({ projectData }) {
    const { name, image, description, repository, deploy } = projectData
    return (
        <aside className="w-full h-full flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-bold px-3">{name}</h3>
            <img src={image} className='rounded-lg' alt={name} />
            <p className="px-3">{description}</p>
            <div className="flex flex-row-reverse justify-between px-3">
                {deploy && (<a href={deploy} className="bg-green-300 rounded-lg p-3 text-lg font-semibold">Demo</a>)}
                <a href={repository} className="bg-green-300 rounded-lg p-3 text-lg font-semibold">Repository</a>
            </div>
        </aside>
    )
}