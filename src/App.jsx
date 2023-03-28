import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

import About from "./pages/About/About";
import Create from "./pages/Create/Create";
import FinalImage from "./pages/Finalimage/FinalImage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [result, setResult] = useState("");
  return (
    <BrowserRouter>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="finalimage" element={<FinalImage result={result} />} />
          <Route
            path="create"
            element={<Create result={result} setResult={setResult} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
