import React from "react";
import { css } from "@emotion/core";

import "./App.css";
import LoginPage from "../LoginPage";
import LoginBG from "../assets/images/bg-sign-up.jpg";
import Container from "../Container";

const containerStyles = css({
  background: `url(${LoginBG}) no-repeat 50% 50%/cover`,
  height: "100%",
});

const App = () => (
  <Container justifyContent="center" alignItems="center" css={containerStyles}>
    <LoginPage />
  </Container>
);

export default App;
