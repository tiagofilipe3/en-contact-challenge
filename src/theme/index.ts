import { createContext } from "react";

export interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      primaryText: string;
      secondaryText: string;
    };
  };
}

const themes = {
  lightTheme: {
    colors: {
      primary: "#005450",
      secondary: "#FFFFFF",
      primaryText: "#707070",
      secondaryText: "#000000",
    },
  },
  darkTheme: {
    colors: {
      primary: "#001413",
      secondary: "#FFFFFF",
      primaryText: "#707070",
      secondaryText: "#000000",
    },
  },
};

const ThemeContext = createContext(null);

export { themes, ThemeContext };
