import React from "react";
import { TextField } from "@material-ui/core";
import { css } from "@emotion/core";
import withStyles from "@material-ui/core/styles/withStyles";
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

const WhiteTextField = withStyles({
  root: {
    "& input.MuiInputBase-input": {
      color: "#fff",
    },
  },
})(TextField);

const LoginPage = () => (
  <Container
    wd="432px"
    css={loginBoxStyles}
    column
    alignItems="center"
    padding="38px 36px 38px"
  >
    <div>Login</div>
    <WhiteTextField id="standard-basic" label="Standard" />
  </Container>
);

export default LoginPage;
