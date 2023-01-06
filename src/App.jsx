import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import LayoutAlums from "./components/layout/LayoutAlums";
import LayoutIndex from "./components/layout/LayoutIndex";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutIndex />} />
        <Route path="/default/*" element={<LayoutAlums />} />
      </Routes>
    </div>
  );
}

export default App;
