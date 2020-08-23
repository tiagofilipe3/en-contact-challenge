import React, { useState } from "react";
import { css } from "@emotion/core";
import { createBrowserHistory } from "history";
import "./App.css";
import { Switch, Router, Route } from "react-router-dom";
import LoginBG from "../assets/images/bg-sign-up.jpg";
import Container from "../Container";
import themes from "../theme";
import LoginPage from "../LoginPage";
import MailPage from "../MailPage";
import ThemeContext from "../themeContext";

const containerStyles = css({
  background: `url(${LoginBG}) no-repeat 50% 50%/cover`,
  height: "100%",
});

const App = () => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  const customHistory = createBrowserHistory();

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      <Container
        justifyContent="center"
        alignItems="center"
        css={containerStyles}
      >
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="mail">
              <MailPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
