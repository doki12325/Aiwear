import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import About from "./pages/About/About";
import Create from "./pages/Create/Create";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
