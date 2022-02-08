import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import { IChildrenProps, IThemeContextProps } from "../@types";

export const ChooseThemeContext = createContext({} as IThemeContextProps);

export const ChooseThemeProvider = ({ children }: IChildrenProps) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage<"dark" | "light">(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const darkOn = (() => {
    document.getElementsByTagName("html")[0].dataset.theme = theme;
    return theme === "dark";
  })();

  return (
    <ChooseThemeContext.Provider
      value={{
        theme,
        darkOn,
        switchTheme
      }}
    >
      {children}
    </ChooseThemeContext.Provider>
  );
};
