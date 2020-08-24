import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { ContainerProps } from "../types";
import margins from "../dimensions/margins";
import dimensions from "../dimensions/dimensions";
import paddings from "../dimensions/paddings";

const StyledContainer = styled.div<ContainerProps>`
  ${margins}
  ${paddings}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  background: ${({ background }) => background && background};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  flex: ${({ flex }) => flex && flex};
  flex-grow: ${({ flexGrow }) => flexGrow && flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink && flexShrink};
`;

const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...rest
}) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Container;
