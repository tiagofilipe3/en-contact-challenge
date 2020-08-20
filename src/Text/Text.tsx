import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import colors from "../colors";
import { MarginProps, margins } from "../dimensions/margins";
import { dimensions, DimensionsProps } from "../dimensions/dimensions";
import sizes from "./sizes";

export interface TextProps extends MarginProps, DimensionsProps {
  size?: string;
  color?: string;
  fontFamily?: string;
  textAlign?: string;
  textTransform?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

const StyledText = styled.div<TextProps>`
  ${margins}
  ${dimensions}
  font-size: ${({ size }) => (() => sizes[size] || sizes.s)()};
  color: ${({ color }) => colors[color] || colors["primary-dark-text"]};
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
