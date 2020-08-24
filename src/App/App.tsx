import React, { useState } from "react";
import { css } from "@emotion/core";
import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Container from "../Container";
import themes from "../theme";
import ThemeContext from "../themeContext";
import routes from "../config/routes";

const containerStyles = css({
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
        <Router>
          <Switch>{routes}</Switch>
        </Router>
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
