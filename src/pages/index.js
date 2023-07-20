import Technologies from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <>
      <h1 className="h-screen flex flex-col justify-end">
        {/* Later on, change this for a short paragraph explaining what you do. */}
        <p className="text-md px-4 pb-8">
          Hello, I'm Emanuel Padilla, Frontend Developer based in Soacha,
          Cundinamarca
        </p>
      </h1>
      <Technologies />
      <TopProjects />
    </>
  );
}
