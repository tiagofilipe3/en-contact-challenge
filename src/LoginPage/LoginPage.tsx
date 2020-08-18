import React from "react";
import Container from "../Container";

const loginBoxStyles = {
  backgroundColor: "#005450",
  borderRadius: "12px",
  boxShadow:
    "0 16px 22px -10px rgba(0, 0, 0, 0.1)," +
    " 0 34px 55px 4px rgba(0, 0, 0, 0.05)," +
    " 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
  color: "#fff",
};

const LoginPage = () => (
  <Container>
    <Container wd="28%" css={loginBoxStyles} column alignItems="center">
      <div>Login</div>
    </Container>
  </Container>
);

export default LoginPage;
