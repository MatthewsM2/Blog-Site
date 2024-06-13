import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login"; // Assuming your component is named Login, conventionally start component names with uppercase letters

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        {/* Define a NotFound component or a default Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

// ReactDOM.render(<Pages />, document.getElementById("root"));
