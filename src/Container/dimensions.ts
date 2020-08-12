import { css } from '@emotion/core';

interface DimensionsProps {
  wd: string,
  ht: string,
  maxWidth: string,
  maxHeight: string,
}

export const dimensions = ({
  wd, ht, maxWidth, maxHeight,
}: DimensionsProps) => css`
  width: ${wd && wd};
  height: ${ht && ht};
  max-width: ${maxWidth && maxWidth};
  max-height: ${maxHeight && maxHeight};
`;

export const dimensionsDefaultProps = {
  wd: undefined,
  ht: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
};
