import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
  darkOn: boolean;
  enableDarkMode: () => void;
  enableLightMode: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ChooseThemeContext = createContext({} as ThemeContextType);

export function ChooseThemeProvider({ children }: ThemeContextProviderProps) {
  const [darkOn, setDarkOn] = useState(true);

  useEffect(() => {});

  function enableDarkMode() {
    setDarkOn(true);
  }

  function enableLightMode() {
    // setDarkOn(false);
  }

  return (
    <ChooseThemeContext.Provider
      value={{
        darkOn,
        enableDarkMode,
        enableLightMode
      }}
    >
      {children}
    </ChooseThemeContext.Provider>
  );
}
