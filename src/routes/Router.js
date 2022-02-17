import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cards from "../components/cards";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/daily" />} />
        <Route path="/:date" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
