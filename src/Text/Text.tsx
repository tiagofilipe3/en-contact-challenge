import styled from "@emotion/styled";
import React, { FunctionComponent, useContext } from "react";
import PropTypes from "prop-types";
import margins from "../dimensions/margins";
import dimensions from "../dimensions/dimensions";
import sizes from "./sizes";
import ThemeContext from "../themeContext";
import { TextProps } from "../types";

const StyledText = styled.div<TextProps>`
  ${margins}
  ${dimensions}
  font-size: ${({ size }: TextProps) => (() => sizes[size] || sizes.s)()};
  color: ${({ color, theme }: any) =>
    theme.colors[color] || theme.colors.primaryText};
  font-family: ${({ fontFamily }) => fontFamily || "Lato-Regular"};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  text-transform: ${({ textTransform }) => textTransform && textTransform};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
`;

const Text: FunctionComponent<TextProps> = ({ children, ...rest }) => {
  const { theme }: any = useContext(ThemeContext);

  return (
    <StyledText theme={theme} {...rest}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Text;
