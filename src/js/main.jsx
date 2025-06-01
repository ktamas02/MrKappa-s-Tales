import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./objects/NavBar.jsx";
import RoleSelector from "./objects/RoleSelector.jsx";
import Master from "./pages/master.jsx";
import Avventuriero from "./pages/avventuriero.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/MrKappa-s-Tales">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RoleSelector />} />
          <Route path="/master" element={<Master />} />
          <Route path="/avventuriero" element={<Avventuriero />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
