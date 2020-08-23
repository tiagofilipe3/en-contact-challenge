import { css } from "@emotion/core";
import { PaddingsProps } from "../types";

const paddings = ({
  paddingLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  padding,
}: PaddingsProps) => css`
  padding: ${padding && padding};
  padding-left: ${paddingLeft && paddingLeft};
  padding-top: ${paddingTop && paddingTop};
  padding-right: ${paddingRight && paddingRight};
  padding-bottom: ${paddingBottom && paddingBottom};
`;

export default paddings;
