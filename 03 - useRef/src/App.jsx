import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.style.height = "30px"
    inputRef.current.style.width = "300px"
    inputRef.current.style.paddingLeft = "10px"
    inputRef.current.style.outline = "none"
  }, [])


  const inputHandler = (e) => {
    const value = e.target.value;

    setInput(value);

    if (parseInt(value)) {
      inputRef.current.style.border = value % 2 === 0 ? "2px solid yellow" : "2px solid green"
      setAlertMsg("")
    } else {
      inputRef.current.style.border = "2px solid red"
      setAlertMsg("Please enter only the digits")
    }
  };

  return (
    <>
      {alertMsg && (
        <h2>{alertMsg}</h2>
      )}
      <input
        type="text"
        value={input}
        ref={inputRef}
        placeholder="Enter only the digits"
        onChange={inputHandler}
      />
    </>
  );
}

export default App;
