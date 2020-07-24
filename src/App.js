import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Spinners from "./Components/Spinner";

function App() {
  return (
    <div className="App">
      <Button variant="primary"> Probando bootstrap </Button>
      <Spinners />
    </div>
  );
}

export default App;
