import styled from '@emotion/styled';

interface ContainerProps {
  column: boolean,
  alignItems: string,
  justifyContent: string,
  background: string,
  flex: string,
  flexGrow: string,
  flexShrink: string,
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }: ContainerProps) => (column ? 'column' : 'row')};
  align-items: ${({ alignItems }: ContainerProps) => alignItems && alignItems};
  justify-content: ${({ justifyContent }: ContainerProps) => justifyContent && justifyContent};
  background: ${({ background }: ContainerProps) => background && background};
  flex: ${({ flex }: ContainerProps) => flex && flex};
  flex-grow: ${({ flexGrow }: ContainerProps) => flexGrow && flexGrow};
  flex-shrink: ${({ flexShrink }: ContainerProps) => flexShrink && flexShrink};
`;

// Container.defaultProps = {
//   ...dimensionsDefaultProps,
// };

export default Container;
