import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pictures from "./pages/pictures";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pictures" element={<Pictures />} />
      </Routes>
    </div>
  );
}

export default App;
