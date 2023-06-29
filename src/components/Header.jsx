import { RiMoonClearLine } from 'react-icons/ri'
export default function Header() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Certifications</li>
        <button onClick={() => document.documentElement.classList.toggle("dark")}>
            <RiMoonClearLine />
        </button>
        <li>Contact Me</li>
        <li>Download CV</li>
      </ul>
    </header>
  );
}
