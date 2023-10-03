import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Purchase from "./Pages/Purchase";
import Sales from './Pages/Sales';
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} setLoggedIn="true"/>
        <Route path="purchase" element={<Purchase />} />
        <Route path="sales" element={<Sales/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
