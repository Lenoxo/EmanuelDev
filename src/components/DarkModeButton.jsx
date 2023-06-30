import { RiMoonClearLine } from "react-icons/ri";

export default function DarkModeButton() {
  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={handleDarkModeToggle}>
      <RiMoonClearLine className="w-10 h-auto text-inherit" />
    </button>
  );
}