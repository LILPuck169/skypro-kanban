import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/MainPage/MainPage.jsx";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "../src/App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
