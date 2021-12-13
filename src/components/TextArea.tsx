import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useText } from "../hooks/useTextTramsform";

//Style
import styles from "../styles/components/textarea.module.scss";

//Component textarea
export function TextArea() {
  const {
    text,
    updateText,
    normal,
    uppercase,
    lowercase,
    capitalize,
    clearTextBox
  } = useText();

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

  return (
    <>
      <div className={styles.app}>
        <Toaster position="top-right" reverseOrder={false} />

        <div className={styles.content}>
          <div className={styles.onlyCopyBtn}>
            <textarea
              placeholder="Type something"
              value={text}
              onChange={(e) => updateText(e.currentTarget.value)}
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
