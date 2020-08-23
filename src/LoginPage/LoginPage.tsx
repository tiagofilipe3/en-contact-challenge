import React, { useContext } from "react";
import { css } from "@emotion/core";
import { compose, bindActionCreators, Dispatch, AnyAction } from "redux";
import { Formik, Form } from "formik";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import * as Yup from "yup";
import { useIntl, IntlShape, MessageDescriptor } from "react-intl";

import Container from "../Container";
import FormattedText from "../FormattedText";
import CustomButton from "../Button";
import { login } from "./actions";
import FormikTextField from "../FormikTextField";
import fakeLogin from "../utils";
import { LoginProps } from "./reducer";
import ThemeContext from "../themeContext";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ login }, dispatch);

const mapStateToProps = ({ Login }: LoginProps) => ({
  logged: Login.logged,
  isLogging: Login.isLogging,
  loginFailure: Login.loginFailure,
});

const LoginPage = () => {
  const intl: IntlShape = useIntl();
  const { theme }: any = useContext(ThemeContext);

  const formattedMessage: MessageDescriptor = {
    id: "requiredField",
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required(intl.formatMessage(formattedMessage)),
    password: Yup.string().required(intl.formatMessage(formattedMessage)),
  });

  const loginBoxStyles = css({
    backgroundColor: theme.colors.primary,
    borderRadius: "12px",
    boxShadow:
      "0 16px 22px -10px rgba(0, 0, 0, 0.1)," +
      " 0 34px 55px 4px rgba(0, 0, 0, 0.05)," +
      " 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
    color: "#fff",
  });

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
      <Formik
        enableReinitialize
        initialValues={{
          username: "",
          password: "",
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            fakeLogin(values.username, values.password).then(() => {
              setSubmitting(false);
            });
          } catch (e) {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form>
              <Container marginTop="20px">
                <FormikTextField
                  id="standard-basic"
                  label="Username"
                  formikKey="username"
                />
              </Container>
              <Container marginTop="20px">
                <FormikTextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  formikKey="password"
                />
              </Container>
              <Container marginTop="50px" justifyContent="center">
                <CustomButton type="submit" disabled={isSubmitting}>
                  <FormattedText
                    color="primary"
                    fontFamily="Lato-Regular"
                    size="xs"
                    fontWeight="bold"
                    textId="login"
                  />
                  {isSubmitting && (
                    <Container css={css({ position: "relative" })}>
                      <CircularProgress
                        size={20}
                        css={css({
                          position: "absolute",
                          left: "8px",
                          top: "-9px",
                        })}
                        color={theme.colors.primary}
                      />
                    </Container>
                  )}
                </CustomButton>
              </Container>
            </Form>
          </>
        )}
      </Formik>
    </Container>
  );
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(LoginPage);
