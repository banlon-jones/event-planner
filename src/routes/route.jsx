import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import {AuthPage} from "../pages/auth/auth.jsx";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/get-started" element={<AuthPage />} />
  </Routes>
)
