import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Technologies from "@/components/Technologies";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <h1>Hello world</h1>
      <p>This is just an example</p>
      <h2>Sections</h2>
      <Technologies />
      <TopProjects />
    </>
  );
}
