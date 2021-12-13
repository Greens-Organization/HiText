//Importações
import { createContext, ReactNode, useState } from "react";

//Tipos
type TextTransformContextType = {
  text: string;
};

type TextProviderProps = {
  children: ReactNode;
};

//Contexto
export const TextTransformContext = createContext(
  {} as TextTransformContextType
);

//Provider
export function TextTransformProvider(props: TextProviderProps) {
  const [text, setText] = useState("");

  return (
    <TextTransformContext.Provider value={{ text }}>
      {props.children}
    </TextTransformContext.Provider>
  );
}
