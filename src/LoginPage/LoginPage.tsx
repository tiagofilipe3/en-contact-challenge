import React, { useContext } from "react";
import Container from "../Container";
import FormattedText from "../FormattedText";
import CustomTextField from "../TextField";
import CustomButton from "../Button";
import { ThemeContext } from "../theme";

const loginBoxStyles = {
  backgroundColor: "#005450",
  borderRadius: "12px",
  boxShadow:
    "0 16px 22px -10px rgba(0, 0, 0, 0.1)," +
    " 0 34px 55px 4px rgba(0, 0, 0, 0.05)," +
    " 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
  color: "#fff",
};

const LoginPage = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
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
          color="secondary"
          fontFamily="Lato-Regular"
        />
      </Container>
      <Container marginTop="20px">
        <CustomTextField id="standard-basic" label="Username" />
      </Container>
      <Container marginTop="20px">
        <CustomTextField id="standard-basic" label="Password" type="password" />
      </Container>
      <Container marginTop="50px">
        <CustomButton onClick={toggleTheme}>
          <FormattedText
            color="primary"
            fontFamily="Lato-Regular"
            size="xs"
            fontWeight="bold"
            textId="login"
          />
        </CustomButton>
      </Container>
    </Container>
  );
};

export default LoginPage;
