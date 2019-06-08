import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Flag from "./components/Flag";

function App() {
  return (
    <div>
      <Menu />
      <div className="main">
        <Flag />
      </div>
    </div>
  );
}

export default App;
