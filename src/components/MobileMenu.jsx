export default function MobileMenu() {
  return (
    <>
      {/* Right now, nav is hidden */}
      <nav className="hidden top-16 w-4/5 h-auto p-6 bg-zinc-400">
        <div className="flex flex-col space-y-8">
          <p>Home</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contact Me</p>
          <p>Download CV</p>
        </div>
      </nav>
    </>
  );
}
