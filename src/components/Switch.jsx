import React, { useState } from "react";

const Switch = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const setDarkTheme = () => {
    setCount((prev) => prev + 1);
    setTheme("dark");
  };

  const setLightTheme = () => {
    setCount((prev) => prev + 1);
    setTheme("light");
  };

  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed: {count}</h4>
      <button onClick={setLightTheme}>Light theme</button>
      <button onClick={setDarkTheme}>Dark theme</button>
    </div>
  );
};

export default Switch;
