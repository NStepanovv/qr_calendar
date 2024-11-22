import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import NotAvailable from "./pages/NotAvailable";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:weekNumber" element={<VideoPage />} />
          <Route path="/not-available" element={<NotAvailable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
