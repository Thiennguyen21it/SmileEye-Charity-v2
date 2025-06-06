import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./utils/languagePreloader"; // Preload languages early

console.log("🚀 SmileEye Charity v2 is starting!");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
