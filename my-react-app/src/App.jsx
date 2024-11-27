import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Users from "./Component/Users";
import Login from "./Component/LogIn";
import Navigation from "./Navigation";
function App() {
  return (
    <>
      <h2>My React App</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
