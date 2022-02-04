import { createContext } from "react";

export interface IThemeContext {
  theme: string;
  changeTheme?: () => void;
}

export const themes = {
  dark: "",
  light: "white-content"
};

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  changeTheme: () => {}
});
