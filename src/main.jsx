import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/MainPage/MainPage.jsx";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "../src/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
