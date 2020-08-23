import { css } from "@emotion/core";
import { MarginProps } from "../types";

const margins = ({
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
}: MarginProps) => css`
  margin-left: ${marginLeft && marginLeft};
  margin-top: ${marginTop && marginTop};
  margin-right: ${marginRight && marginRight};
  margin-bottom: ${marginBottom && marginBottom};
`;

export default margins;
