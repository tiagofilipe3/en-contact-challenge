import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import margins from "../dimensions/margins";
import dimensions from "../dimensions/dimensions";
import sizes from "./sizes";
import themes from "../theme";
import { TextProps } from "../types";

const StyledText = styled.div<TextProps>`
  ${margins}
  ${dimensions}
  font-size: ${({ size }) => (() => sizes[size] || sizes.s)()};
  color: ${({ color }) =>
    themes.lightTheme.colors[color] || themes.lightTheme.colors.primaryText};
  font-family: ${({ fontFamily }) => fontFamily || "Lato-Regular"};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  text-transform: ${({ textTransform }) => textTransform && textTransform};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
`;

const Text: FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Text;
