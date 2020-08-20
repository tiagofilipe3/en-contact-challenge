import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { MarginProps, margins } from "../dimensions/margins";
import { DimensionsProps, dimensions } from "../dimensions/dimensions";
import { PaddingsProps, paddings } from "../dimensions/paddings";

interface ContainerProps extends MarginProps, PaddingsProps, DimensionsProps {
  column?: boolean;
  alignItems?: string;
  justifyContent?: string;
  background?: string;
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  children?: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
  ${margins}
  ${paddings}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  background: ${({ background }) => background && background};
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
