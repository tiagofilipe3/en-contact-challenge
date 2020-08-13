import { DimensionsProps } from "./dimensions";

export interface ContainerProps extends DimensionsProps {
  column: boolean,
  alignItems: string,
  justifyContent: string,
  background: string,
  flex: string,
  flexGrow: string,
  flexShrink: string,
}

declare const Container: React.FC<ContainerProps & JSX.IntrinsicElements['div']>;

