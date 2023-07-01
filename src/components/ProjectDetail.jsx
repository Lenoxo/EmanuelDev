export default function ProjectDetail({ projectData }) {
    const { title, image, description, repository, deployLink } = projectData
    return (
        <aside className="w-full h-full flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-bold px-3">{title}</h3>
            <img src={image} className='rounded-lg' />
            <p className="px-3">{description}</p>
            <div className="flex justify-between px-3">
                <a href={deployLink} className="bg-green-300 rounded-lg p-3 text-lg font-semibold">Demo</a>
                <a href={repository} className="bg-green-300 rounded-lg p-3 text-lg font-semibold">Repository</a>
            </div>
        </aside>
    )
}