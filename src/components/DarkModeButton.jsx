import { RiMoonClearLine } from "react-icons/ri";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function DarkModeButton() {
  const { updateDarkModeStatus } = useLocalStorage();

  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
    updateDarkModeStatus();
  };

  return (
    <button onClick={handleDarkModeToggle}>
      <RiMoonClearLine className="w-10 sm:w-6 h-auto text-inherit hover:text-green-300 dark:hover:text-sky-300" />
    </button>
  );
}
