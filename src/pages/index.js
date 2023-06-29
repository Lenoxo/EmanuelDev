import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Technologies from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <h1 className="h-screen flex flex-col justify-end">
        <p className="text-xl px-4 pb-8">
          Hello, I'm Emanuel Padilla, Frontend Developer based in Soacha,
          Cundinamarca
        </p>
      </h1>
      <Technologies />
      <TopProjects />
    </>
  );
}
