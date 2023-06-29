export default function ProjectCard() {
  return (
    <div className="w-80 h-80 bg-zinc-300 flex-shrink-0 rounded-md">
      <div className="h-3/5 rounded-md bg-zinc-800">Image</div>
      <span className="h-2/5 text-md">
        This is just an example <strong>description</strong> for your service
        jeje. <br />
        <a>See it in Action! </a>
        <a>Repository</a>
      </span>
    </div>
  );
}
