import { css } from "@emotion/core";

export const paddings = ({
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

export interface PaddingsProps {
  paddingLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  padding?: string;
}
