import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("isDarkModeActive") === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  function updateDarkModeStatus() {
    try {
      const updatedDarkModeStatus = !darkMode;
      setDarkMode(updatedDarkModeStatus);
      localStorage.setItem("isDarkModeActive", updatedDarkModeStatus);
    } catch (error) {
      console.error("Something just broke in useLocalStorage: ", error);
    }
  }

  return {
    darkMode,
    updateDarkModeStatus,
  };
}
