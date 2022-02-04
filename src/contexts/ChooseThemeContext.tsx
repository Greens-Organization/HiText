import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { IChildrenProps, IThemeContextProps } from "../@types";

export const ChooseThemeContext = createContext({} as IThemeContextProps);

export const ChooseThemeProvider = ({ children }: IChildrenProps) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [darkOn, setDarkOn] = useState(true);

  const switchTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.getElementsByTagName("html")[0].dataset.theme = newTheme;
    setTheme(newTheme);
    setDarkOn((current) => !current);
  };

  useEffect(() => {
    console.log(darkOn);
  }, [darkOn]);

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
