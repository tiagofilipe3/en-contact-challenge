import styled from '@emotion/styled';
import margins from '../margins';
import paddings from '../paddings';
import dimensions from '../dimensions';

const StyledContainer = styled('div')`
  ${margins}
  ${paddings}
  ${dimensions}
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  background: ${({ background }) => background && background};
  flex: ${({ flex }) => flex && flex};
  flex-grow: ${({ flexGrow }) => flexGrow && flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink && flexShrink};
`;

export default StyledContainer;
