import { createContext } from "react";
import themes from "../theme";

const ThemeContext = createContext(themes.lightTheme);

export default ThemeContext;
