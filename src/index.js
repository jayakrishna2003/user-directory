import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import { UserProvider } from "./context/UserContext";
import "./index.css";

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  </UserProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);