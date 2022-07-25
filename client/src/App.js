import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./redux/features/Login";
import Welcome from "./redux/features/Welcome";
import RequiredAuth from "./redux/features/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequiredAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
