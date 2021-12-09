//Importações
import { createContext, ReactNode, useEffect, useState } from "react";

//Tipos
type ThemeContextType = {
  darkOn: boolean;
  enableDarkMode: () => void;
  enableLightMode: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

//Contexto
export const ChooseThemeContext = createContext({} as ThemeContextType);

//Provider
export function ChooseThemeProvider(props: ThemeContextProviderProps) {
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
      {props.children}
    </ChooseThemeContext.Provider>
  );
}
