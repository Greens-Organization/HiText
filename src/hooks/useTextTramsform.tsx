import { useContext } from "react";

import { TextTransformContext } from "../contexts/TextTransformContext";

export const UseText = () => {
  return useContext(TextTransformContext);
};

/**
 * Hackzinho para não ter de importar todas as vezes o contexto.
 */
