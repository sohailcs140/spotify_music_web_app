import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./styles/variables.css";
import "./index.css";
import "./styles/style.css";

import App from "./App.jsx";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
