import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App/App";
import { Dad, Off, Versatile, Multi } from "./App/index";
import { Articles, Contact, Sellers } from "./App/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={<App />} />
        {/* Each bike */}
        <Route path="/multi" element={<Multi />} />
        <Route path="/dad" element={<Dad />} />
        <Route path="/off" element={<Off />} />
        <Route path="/versatile" element={<Versatile />} />
        {/* Pages in menu */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/revendeurs" element={<Sellers />} />
        {/* Redirect */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
