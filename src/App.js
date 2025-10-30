import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotographyLandingPage from "./PhotographyLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotographyLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
