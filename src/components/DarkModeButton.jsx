import { RiMoonClearLine } from "react-icons/ri";

export default function DarkModeButton() {
  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={handleDarkModeToggle}>
      <RiMoonClearLine className="w-10 sm:w-6 h-auto text-inherit hover:text-green-300 dark:hover:text-sky-300" />
    </button>
  );
}