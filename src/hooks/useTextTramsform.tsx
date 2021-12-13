//React
import { useContext } from "react";

//Contexto
import { TextTransformContext } from "../contexts/TextTransformContext";

//Hook
export const useText = () => {
  return useContext(TextTransformContext);
};

/**
 * Hackzinho para não ter de importar todas as vezes o contexto.
 */
