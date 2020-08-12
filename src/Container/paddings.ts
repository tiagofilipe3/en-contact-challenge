import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const paddings = ({
  paddingLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
}) => css`
  padding-left: ${paddingLeft && paddingLeft};
  padding-top: ${paddingTop && paddingTop};
  padding-right: ${paddingRight && paddingRight};
  padding-bottom: ${paddingBottom && paddingBottom};
`;

export const paddingsPropTypes = {
  paddingLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
};

export const paddingsDefaultProps = {
  paddingsLeft: undefined,
  paddingsTop: undefined,
  paddingsRight: undefined,
  paddingsBottom: undefined,
};

export default paddings;
