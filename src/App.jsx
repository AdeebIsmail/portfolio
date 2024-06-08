import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Pictures from "./pages/pictures";

function App() {
  return (
    <Routes>
      {/* <Route path="/pictures/" element={<Pictures />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
