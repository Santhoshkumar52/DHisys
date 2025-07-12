
import { createContext, useContext } from "react";

export const ThemeContext = createContext("themeMaroon");

export const useTheme = () => useContext(ThemeContext);
