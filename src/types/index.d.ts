export interface ContainerProps
  extends MarginProps,
    PaddingsProps,
    DimensionsProps {
  column?: boolean;
  alignItems?: string;
  justifyContent?: string;
  background?: string;
  backgroundColor?: string;
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  children?: React.ReactNode;
}

export interface MarginProps {
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
}

export interface PaddingsProps {
  paddingLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  padding?: string;
}

export interface DimensionsProps {
  wd?: string;
  ht?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export interface TextProps extends MarginProps, DimensionsProps {
  size?: string;
  color?: string;
  fontFamily?: string;
  textAlign?: string;
  textTransform?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

export interface SizesProps {
  xxl: string;
  xl: string;
  l: string;
  s: string;
  xs: string;
  xxs: string;
}

export interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      primaryText: string;
      secondaryText: string;
    };
    loginBg?: any;
  };
}
