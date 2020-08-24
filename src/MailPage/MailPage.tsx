import React, { useContext } from "react";
import { css } from "@emotion/core";
import { Resizable } from "re-resizable";
import Container from "../Container";
import ThemeContext from "../themeContext";
import { ThemeProps } from "../types";

const MailPage = () => {
  const { theme }: ThemeProps = useContext(ThemeContext);

  return (
    <Container ht="100%" wd="100%">
      <Resizable
        defaultSize={{
          width: "18%",
          height: "100%",
        }}
        css={css({
          minWidth: "300px",
          resize: "horizontal",
          "-webkit-box-shadow": "3px 0px 7px 0px rgba(226,235,240,1)",
          "-moz-box-shadow": "3px 0px 7px 0px rgba(226,235,240,1)",
          boxShadow: "3px 0px 7px 0px rgba(226,235,240,1)",
        })}
      >
        <Container
          wd="100%"
          ht="100%"
          justifyContent="center"
          alignItems="center"
        >
          Folders div
        </Container>
      </Resizable>
      <Container
        wd="82%"
        backgroundColor="#F3F8FB"
        alignItems="center"
        justifyContent="center"
      >
        Email div
      </Container>
    </Container>
  );
};

export default MailPage;
