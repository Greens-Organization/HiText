import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "../styles/components/textarea.module.scss";

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
    saveText();
    setText(text.toUpperCase());
  }

  function lowercase() {
    //Transform text to lowercase
    saveText();
    setText(text.toLowerCase());
  }

  function capitalize() {
    //Transform text to first capital letters
    saveText();
    setText(toCapitalize(text));
  }

  function clearTextBox() {
    //Clean text box
    saveText();
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

        <div className={styles.onlybtns}>
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
          </div>

          <div className={styles.buttons}>
            <button onClick={normal}>ABc</button>
            <button onClick={uppercase}>ABC</button>
            <button onClick={lowercase}>abc</button>
            <button onClick={capitalize}>Abc</button>
            <button onClick={clearTextBox} className={styles.dif}>
              <img src="trash.svg" alt="Cleaner" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
