import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// display a number on the front end
// number will refresh ever 1 second
// call back end every 1 second and display the number

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/backend/get-random-number").then((res) => {
      setNumber(res.data);
    });
  }, []);

  return (
    <>
      {number}
    </>
  );
}

export default App;
