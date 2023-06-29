export default function ProjectCard() {
  return (
    <div className="w-64 h-64 bg-blue-700 flex-shrink-0 rounded-xl p-4 transition-all ease-in-out hover:h-72 hover:w-72">
      <div className="h-3/5 rounded-lg bg-red-300">Image</div>
      <span className="h-2/5 text-md">
        This is just an example <strong>description</strong> for your service
        jeje. <br />
        <a>See it in Action! </a>
        <a>Repository</a>
      </span>
    </div>
  );
}
