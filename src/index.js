import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.jsx";
// import cors from 'cors';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// app.use(cors());
