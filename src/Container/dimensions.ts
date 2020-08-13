import { css } from '@emotion/core';

const dimensions = ({
  wd, ht, maxWidth, maxHeight,
}) => css`
  width: ${wd && wd};
  height: ${ht && ht};
  max-width: ${maxWidth && maxWidth};
  max-height: ${maxHeight && maxHeight};
`;

export interface DimensionsProps {
  wd: string,
  ht: string,
  maxWidth: string,
  maxHeight: string,
}

export const dimensionsDefaultProps = {
  wd: undefined,
  ht: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
};

export default dimensions;
