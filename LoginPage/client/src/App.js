import React, { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./components/Theme";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme(getDesignTokens(mode));

  document.querySelector("body").style.backgroundColor =
    theme.palette.background.default;

  const toggleLightMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    document.querySelector("body").style.backgroundColor =
      theme.palette.background.default;
    // console.log(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginPage toggleLightMode={toggleLightMode} />
    </ThemeProvider>
  );
}

export default App;
