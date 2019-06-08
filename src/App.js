import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Flag from './components/Flag';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="main">
        <Route path="/:id" render={Flag} />
      </div>
    </BrowserRouter>
  );
}

export default App;
