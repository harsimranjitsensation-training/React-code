import { useRef } from "react";
import Form from "./components/Form";

function App() {
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Enter name"></input> <br />
      <button onClick={focus}>Submit</button> <br />
      <br />

      <Form />
    </>
  )
}

export default App;