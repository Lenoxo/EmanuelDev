import Technologies from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-zinc-600 to-zinc-800">
        <div class="bg-gradient-to-tr from-zinc-300 via-zinc-50 to-white relative h-full w-3/5 lg:max-w-2xl flex flex-col justify-center">
          {/* Later on, change this for a short paragraph explaining what you do. */}
          <h1 className="font-extrabold text-lg">
            Frontend Developer
          </h1>
          <h2 className="text-md w-5/6 pl-4">
            Frontend Developer with knowledge in HTML, CSS,
            JavaScript, and React, proficient in utilizing libraries and
            frameworks such as Vite.js and Next.js. I am passionate about
            learning better ways to develop great ideas with the freedom of
            code.
          </h2>
          <svg
            class="absolute inset-y-0 right-0 hidden h-full w-64 translate-x-1/2 scale-y-[-1.0] transform text-white lg:block"
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
