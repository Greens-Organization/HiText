import { createContext, ReactNode, useState } from "react";

type TextTransformContextType = {
  text: string;
  updateText: (value: string) => void;
  normal: () => void;
  uppercase: () => void;
  lowercase: () => void;
  capitalize: () => void;
  clearTextBox: () => void;
};

type TextProviderProps = {
  children: ReactNode;
};

export const TextTransformContext = createContext(
  {} as TextTransformContextType
);

export function TextTransformProvider({ children }: TextProviderProps) {
  const [text, setText] = useState("");
  const [textCopy, setTextCopy] = useState("");

  function saveOriginalText() {
    if (textCopy === "") {
      setTextCopy(text);
    }
  }

  //Functions texts
  function normal() {
    //Transform text to normal
    saveOriginalText();
    setText(textCopy);
  }

  function updateText(value: string) {
    setText(value);
  }

  function uppercase() {
    //Transform text to uppercase
    saveOriginalText();
    setText(text.toUpperCase());
  }

  function lowercase() {
    //Transform text to lowercase
    saveOriginalText();
    setText(text.toLowerCase());
  }

  function clearTextBox() {
    //Clean text box
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
    setText(toCapitalize(text));
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
