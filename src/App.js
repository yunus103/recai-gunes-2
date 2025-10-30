import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotographyLandingPage from "./PhotographyLandingPage";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotographyLandingPage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
