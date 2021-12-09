//React
import { useContext } from "react";

//Contexto
import { ChooseThemeContext } from "../contexts/ChooseThemeContext";

//Hook
export const useTheme = () => {
  return useContext(ChooseThemeContext);
};

/**
 * Hackzinho para não ter de importar todas as vezes o contexto.
 */
