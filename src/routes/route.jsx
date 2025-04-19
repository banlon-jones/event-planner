import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import {AuthPage} from "../pages/auth/auth.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/get-started" element={<AuthPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
)
