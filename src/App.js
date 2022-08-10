import React from "react";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Component/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookmark from "./Pages/Bookmark";
function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<Bookmark />} />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
