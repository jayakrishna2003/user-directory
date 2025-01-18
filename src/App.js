// user-directory/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import { UserProvider } from "./context/UserContext";
import "./App.css";

const App = () => (
  <UserProvider>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  </UserProvider>
);

export default App;
