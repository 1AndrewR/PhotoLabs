import React, { useState } from "react";
import "../styles/LightDarkButton.scss";

const LightDarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    ); // Apply the theme globally
  };

  return (
    <button className="light-dark-button" onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default LightDarkButton;
