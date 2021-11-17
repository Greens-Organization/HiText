import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './styles/app.module.scss';

function App() {
  const [text, setText] = useState('');


  function normal(){ //Transform text to normal
    setText(toCapitalize(text)) 
  }
  function up(){ //Transform text to uppercase
    setText(text.toUpperCase())
  }
  function low(){ //Transform text to lowercase
    setText(text.toLowerCase())
  }
  function capitalize(){ //Transform text to first capital letters
    setText(toCapitalize(text)) 
  }
  function clearTextBox(){ //Clean text box
    setText('')
  }

  function copyText(){ //Copy text for transfer
    if(text !== ''){
      navigator.clipboard.writeText(text);
      toast('Copied text!',
        {
          icon: '📝',
          style: {
            borderRadius: '.5rem',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }else{
      toast.error("There is no copying.",{
        style: {
          borderRadius: '.5rem',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }

  function toCapitalize(str: string){ //Transform text to first capital letters
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

  return (<>
  <div className={styles.app}>
    <Toaster 
      position="top-right"
      reverseOrder={false}
    />
    
    <div className={styles.content}>     
      <textarea 
        placeholder="Type or paste the text you want to convert here."
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button onClick={copyText} name='Copy'>
        <img src="copy-icon.svg" alt="Copy"/>
      </button>
    </div>

    <div className={styles.buttons}>
      <button onClick={normal}>Normal</button>
      <button onClick={up}>UPPERCASE</button>
      <button onClick={low}>lowercase</button>
      <button onClick={capitalize}>Capitalize</button>
      <button onClick={clearTextBox}>Clear Text Box</button>
    </div>
  </div>
  </>);
}

export default App;
