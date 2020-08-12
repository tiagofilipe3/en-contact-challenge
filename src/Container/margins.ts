import { css } from '@emotion/core';

interface MarginProps {
  marginLeft: string,
  marginTop: string,
  marginRight: string,
  marginBottom: string,
}

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

export const marginsDefaultProps = {
  marginLeft: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
};

export default margins;
