import { css } from "@emotion/core";

export const margins = ({
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

export interface MarginProps {
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
}
