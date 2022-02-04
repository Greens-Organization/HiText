import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import { IChildrenProps, IThemeContextProps } from "../@types";

export const ChooseThemeContext = createContext({} as IThemeContextProps);

export const ChooseThemeProvider = ({ children }: IChildrenProps) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ChooseThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {children}
    </ChooseThemeContext.Provider>
  );
};
