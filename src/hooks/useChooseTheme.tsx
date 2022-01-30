import { useContext } from "react";

import { ChooseThemeContext } from "../contexts/ChooseThemeContext";

export const useTheme = () => {
  return useContext(ChooseThemeContext);
};

/**
 * Hackzinho para não ter de importar todas as vezes o contexto.
 */
