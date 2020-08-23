import { css } from "@emotion/core";
import { DimensionsProps } from "../types";

const dimensions = ({ wd, ht, maxWidth, maxHeight }: DimensionsProps) => css`
  width: ${wd && wd};
  height: ${ht && ht};
  max-width: ${maxWidth && maxWidth};
  max-height: ${maxHeight && maxHeight};
`;

export default dimensions;
