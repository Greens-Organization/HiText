import { createContext, useEffect, useState } from "react";
import { IChildrenProps, ITextTransformContextProps } from "../@types";

export const TextTransformContext = createContext(
  {} as ITextTransformContextProps
);

export function TextTransformProvider({ children }: IChildrenProps) {
  const [text, setText] = useState("");
  const [textCopy, setTextCopy] = useState("");

  useEffect(() => {
    saveOriginalText()
  
    console.log(text)
  }, [text])
  

  function saveOriginalText() {
    if (textCopy === "") {
      setTextCopy(text);
    }
  }

  function normal() {
    saveOriginalText();
    setText(textCopy);
  }

  function updateText(value: string) {
    setText(value);
  }

  function uppercase() {
    saveOriginalText();
    setText(text.toUpperCase());
  }

  function lowercase() {
    saveOriginalText();
    setText(text.toLowerCase());
  }

  function clearTextBox() {
    setText("");
  }

  function toCapitalize(str: string) {
    //Transform text to first capital letters
    //split the above string into an array of strings
    //whenever a blank space is encountered
    const arr = str.split(" ");

    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    return arr.join(" ");
  }

  function capitalize() {
    //Transform text to first capital letters
    saveOriginalText();
    let textTransform = toCapitalize(text)
    setText(textTransform);
  }

  return (
    <TextTransformContext.Provider
      value={{
        text,
        updateText,
        normal,
        uppercase,
        lowercase,
        capitalize,
        clearTextBox
      }}
    >
      {children}
    </TextTransformContext.Provider>
  );
}
