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
import LoginPage from "./pages/auth/LoginPage"
import CallbackPage from "./pages/auth/CallbackPage.jsx";
import ProtectedRoute from "./components /ProtectedRoute.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import LoginPage2 from "./pages/auth/LoginPage2.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
    <Router>
      <Routes>
        {/* protected routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProtectedRoute element={App}/>} />
        </Route>
        {/* public routes */}
        <Route path="/login" element={<LoginPage2/>}/>
        <Route path="/callback" element={<CallbackPage/>}/>
      </Routes>
    </Router>
    </AuthContextProvider>
  </StrictMode>
);
