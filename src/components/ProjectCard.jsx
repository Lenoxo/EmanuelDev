export default function ProjectCard() {
  return (
    <div className="w-80 h-96 bg-zinc-300 flex-shrink-0 rounded-md">
      <div className="h-1/2 rounded-t-md bg-zinc-800">Image</div>
      <div className="h-1/2 text-md p-4 flex flex-col justify-around">
        <p className="mb-2">
          <strong>Project Title</strong>
        </p>
        <p>
          This is just an example of description. Use it whatever way you'd
          like.
        </p>
        <div className="w-full flex justify-around">
          <a>See it in Action! </a>
          <a>Repository</a>
        </div>
      </div>
    </div>
  );
}
