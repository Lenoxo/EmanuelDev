import { useEffect, useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";

export default function DarkModeButton() {
  const [DarkMode, setDarkMode] = useState(null);
  useEffect(() => {
    const isDarkModeActive = Boolean(localStorage.getItem("isDarkModeActive"));
    setDarkMode(isDarkModeActive);
  }, []); // This effect is used here to prevent this error: https://developer.school/snippets/react/localstorage-is-not-defined-nextjs

  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!DarkMode); // For toggling it
    localStorage.setItem("isDarkModeActive", DarkMode.toString());
  };

  return (
    <button onClick={handleDarkModeToggle}>
      <RiMoonClearLine className="w-10 sm:w-6 h-auto text-inherit hover:text-green-300 dark:hover:text-sky-300" />
    </button>
  );
}
