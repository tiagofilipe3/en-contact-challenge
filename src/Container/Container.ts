import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
  margins,
  marginsDefaultProps,
  marginsPropTypes,
  paddings,
  paddingsDefaultProps,
  paddingsPropTypes,
} from "./margins";
import {
  dimensions,
  dimensionsDefaultProps,
  dimensionsPropTypes,
} from "./dimensions";

type ContainerProps = {
  column?: boolean;
  alignItems?: string;
  justifyContent?: string;
  background?: string;
  flex?: string;
  flexGrow?: number;
  flexShrink?: number;
};

const Container = styled.div`   
  ${margins}
  ${paddings}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }: ContainerProps) =>
    column ? "column" : "row"};
  align-items: ${({ alignItems }: ContainerProps) => alignItems && alignItems};
  justify-content: ${({ justifyContent }: ContainerProps) =>
    justifyContent && justifyContent};
  background: ${({ background }: ContainerProps) => background && background};
  flex: ${({ flex }: ContainerProps) => flex && flex};
  flex-grow: ${({ flexGrow }: ContainerProps) => flexGrow && flexGrow};
  flex-shrink: ${({ flexShrink }: ContainerProps) => flexShrink && flexShrink};
`;

Container.propTypes = {
  ...marginsPropTypes,
  ...paddingsPropTypes,
  ...dimensionsPropTypes,
  column: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
  flex: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
};

Container.defaultProps = {
  ...marginsDefaultProps,
  ...paddingsDefaultProps,
  ...dimensionsDefaultProps,
  column: false,
  alignItems: undefined,
  justifyContent: undefined,
  background: undefined,
  flex: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
};

export default Container;
