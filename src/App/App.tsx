import React, { useState } from "react";
import { css } from "@emotion/core";

import "./App.css";
import LoginPage from "../LoginPage";
import LoginBG from "../assets/images/bg-sign-up.jpg";
import Container from "../Container";
import { themes, ThemeContext } from "../theme";

const containerStyles = css({
  background: `url(${LoginBG}) no-repeat 50% 50%/cover`,
  height: "100%",
});

const App = () => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      <Container
        justifyContent="center"
        alignItems="center"
        css={containerStyles}
      >
        <LoginPage />
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
