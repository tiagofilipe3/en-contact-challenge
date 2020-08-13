import React from 'react';
import StyledContainer from './styled';

const Container = () => (
  <StyledContainer />
);

Container.defaultProps = {
  column: false,
  alignItems: undefined,
  justifyContent: undefined,
  background: undefined,
};

export default Container;
