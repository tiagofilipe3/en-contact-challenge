import React from "react";
import { Button, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "../Container";
import colors from "../colors";
import FormattedText from "../FormattedText";

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
    "& .MuiFormLabel-root": {
      color: "rgba(255,255,255,0.6)",
      fontFamily: "Lato-Light",
    },
    "& .MuiInputBase-input, & .MuiInputBase-root": {
      width: "250px",
      color: "#fff",
      fontFamily: "Lato-Light",
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottom: "1px solid #fff",
      },
      "&:hover:before": {
        borderBottom: "1px solid #fff",
      },
      "&:after": {
        borderBottom: "1px solid #fff",
      },
    },
  },
})(TextField);

const ColorButton = withStyles(() => ({
  root: {
    width: "180px",
    borderRadius: "20px",
    color: colors.primary,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#E5E7DA",
    },
  },
}))(Button);

const LoginPage = () => (
  <Container
    column
    wd="432px"
    css={loginBoxStyles}
    alignItems="center"
    padding="38px 0 38px"
  >
    <Container>
      <FormattedText
        textId="enContact"
        color="primary-text"
        fontFamily="Lato-Regular"
      />
    </Container>
    <Container marginTop="20px">
      <WhiteTextField id="standard-basic" label="Username" />
    </Container>
    <Container marginTop="20px">
      <WhiteTextField id="standard-basic" label="Password" type="password" />
    </Container>
    <Container marginTop="50px">
      <ColorButton>
        <FormattedText
          color="primary"
          fontFamily="Lato-Regular"
          size="xs"
          fontWeight="bold"
          textId="login"
        />
      </ColorButton>
    </Container>
  </Container>
);

export default LoginPage;
