import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

//Style
import styles from "../styles/components/textarea.module.scss";

//Component textarea
export function TextArea() {
  const [text, setText] = useState("");
  const [textCopy, setTextCopy] = useState("");

  //Functions texts
  function normal() {
    //Transform text to normal
    setText(textCopy);
  }

  function uppercase() {
    //Transform text to uppercase
    setText(text.toUpperCase());
  }

  function lowercase() {
    //Transform text to lowercase
    setText(text.toLowerCase());
  }

  function capitalize() {
    //Transform text to first capital letters
    setText(toCapitalize(text));
  }

  function clearTextBox() {
    //Clean text box
    setText("");
  }

  function saveText() {
    textCopy === "" && setTextCopy(text);
  }

  function copyText() {
    //Copy text for transfer
    if (text !== "") {
      navigator.clipboard.writeText(text);
      toast("Copied text!", {
        icon: "📝",
        style: {
          borderRadius: ".5rem",
          background: "#333",
          color: "#fff"
        }
      });
    } else {
      toast.error("There is no copying.", {
        style: {
          borderRadius: ".5rem",
          background: "#333",
          color: "#fff"
        }
      });
    }
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

  return (
    <>
      <div className={styles.app}>
        <Toaster position="top-right" reverseOrder={false} />

        <div className={styles.content}>
          <div className={styles.onlyCopyBtn}>
            <textarea
              placeholder="Type something"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />
            <button onClick={copyText} title="Copy text">
              <img src="copy.svg" alt="Copy" />
            </button>
          </div>

          <div className={styles.buttons}>
            <button
              onClick={normal}
              title="Return the text to its original formatting"
              aria-label="Return the text to its original formatting"
            >
              ABc
            </button>
            <button
              onClick={uppercase}
              title="Turns text into capital letters"
              aria-label="Turns text into capital letters"
            >
              ABC
            </button>
            <button
              onClick={lowercase}
              title="Transforms text into lowercase"
              aria-label="Transforms text into lowercase"
            >
              abc
            </button>
            <button
              onClick={capitalize}
              title="Make first letters uppercase and the rest lowercase"
              aria-label="Make first letters uppercase and the rest lowercase"
            >
              Abc
            </button>
            <button
              onClick={clearTextBox}
              className={styles.dif}
              title="Clear text area"
              aria-label="Clear text area"
            >
              <img src="trash.svg" alt="Cleaner" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
