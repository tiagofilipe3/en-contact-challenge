import { createContext } from "react";
import LoginBGLight from "../assets/images/bg-sign-up.jpg";

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
    loginBg: LoginBGLight,
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

const ThemeContext = createContext(undefined);

export { themes, ThemeContext };
